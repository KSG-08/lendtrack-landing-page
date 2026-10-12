/**
 * Tiny renderer for the subset of Markdown used by the legal documents in
 * docs/legal/: headings (h1–h3), paragraphs, bullet and numbered lists, tables,
 * horizontal rules, **bold**, *italic*, and links ([text](url), <url>, bare
 * URLs and emails). The docs stay the single source of truth — they are
 * imported raw and rendered here.
 */

// Links between the docs are written as repo-relative .md files; point them at
// the pages that actually serve each doc.
const DOC_PAGES = {
  'PRIVACY_POLICY.md': '/legal/privacy/',
  'TERMS_OF_SERVICE.md': '/legal/terms/',
  'DELETE_ACCOUNT.md': '/legal/delete-account/',
};

// One pass over a line, in priority order: [text](url), <url>, **bold**,
// *italic*, bare URL, bare email.
const TOKEN =
  /\[([^\]]+)\]\(([^)\s]+)\)|<(https?:\/\/[^\s>]+)>|\*\*([^*]+)\*\*|\*([^*]+)\*|(https?:\/\/[^\s<>()]+[^\s<>().,])|([\w.+-]+@[\w-]+\.[\w.-]+)/g;

function link(href, children, key) {
  const page = DOC_PAGES[href];
  if (page) return <a key={key} href={page}>{children}</a>;
  if (/^https?:\/\//.test(href)) {
    return (
      <a key={key} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return <a key={key} href={href}>{children}</a>;
}

/** Turn one line of markdown into <strong> / <em> / link / text nodes. */
function inline(text, keyPrefix) {
  const nodes = [];
  let last = 0;
  let n = 0;
  const k = () => `${keyPrefix}-${n++}`;

  for (const m of text.matchAll(TOKEN)) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const [, label, href, angle, bold, italic, url, email] = m;

    if (label) nodes.push(link(href, inline(label, k()), k()));
    else if (angle) nodes.push(link(angle, angle, k()));
    else if (bold) nodes.push(<strong key={k()}>{inline(bold, k())}</strong>);
    else if (italic) nodes.push(<em key={k()}>{italic}</em>);
    else if (url) nodes.push(link(url, url, k()));
    else nodes.push(link(`mailto:${email}`, email, k()));

    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

const splitRow = (line) =>
  line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());

const isTableRow = (line) => line.trimStart().startsWith('|');
const isTableRule = (line) => /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?\s*$/.test(line);

/** Group raw markdown into block descriptors. */
function parse(md) {
  const blocks = [];
  let paragraph = [];
  let list = null;
  let table = null;

  const flushParagraph = () => {
    if (paragraph.length) {
      // A paragraph that opens with bold is a label block ("**Service:** …" /
      // "**LendTrack**\nEmail: …"): keep its lines. Anything else is
      // hard-wrapped prose, so lines are joined.
      blocks.push({ type: 'p', lines: paragraph, keepBreaks: paragraph[0].startsWith('**') });
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list) {
      blocks.push({ type: list.type, items: list.items });
      list = null;
    }
  };
  const flushTable = () => {
    if (table) {
      blocks.push({ type: 'table', head: table.head, rows: table.rows });
      table = null;
    }
  };
  const flushAll = () => {
    flushParagraph();
    flushList();
    flushTable();
  };

  /** Start (or continue) a list of the given type, closing any other kind. */
  const pushItem = (type, text) => {
    flushParagraph();
    flushTable();
    if (list && list.type !== type) flushList();
    list = list || { type, items: [] };
    list.items.push(text);
  };

  /** Start (or continue) a list of the given type, closing any other kind. */
  const pushItem = (type, text) => {
    flushParagraph();
    if (list && list.type !== type) flushList();
    list = list || { type, items: [] };
    list.items.push(text);
  };

  for (const raw of md.split('\n')) {
    const line = raw.trimEnd();

    if (!line.trim()) {
      flushAll();
      continue;
    }
    if (line.startsWith('> ') || line === '>') continue; // editorial notes

    // table: header row, then the |---|---| rule, then body rows
    if (isTableRow(line)) {
      if (table) {
        if (!isTableRule(line)) table.rows.push(splitRow(line));
      } else {
        flushParagraph();
        flushList();
        table = { head: splitRow(line), rows: [] };
      }
      continue;
    }
    flushTable();

    if (/^(-{3,}|\*{3,}|_{3,})$/.test(line.trim())) {
      flushAll();
      blocks.push({ type: 'hr' });
      continue;
    }

    const heading = /^(#{1,6})\s+(.*)$/.exec(line);
    if (heading) {
      flushAll();
      blocks.push({ type: 'h', level: heading[1].length, text: heading[2] });
      continue;
    }

    const bullet = /^[-*]\s+(.*)$/.exec(line);
    if (bullet) {
      pushItem('ul', bullet[1]);
      continue;
    }

    // "1. " / "1) " numbered steps. The trailing \s+ keeps version-like text
    // ("1.0.0 released") and section numbers ("2.1 Registration") from being
    // mistaken for a list marker.
    const numbered = /^\d{1,2}[.)]\s+(.*)$/.exec(line);
    if (numbered) {
      pushItem('ol', numbered[1]);
      continue;
    }

    // continuation of the previous list item (hard-wrapped source)
    if (list && /^\s{2,}\S/.test(raw)) {
      list.items[list.items.length - 1] += ` ${line.trim()}`;
      continue;
    }

    flushList();
    paragraph.push(line.trim());
  }

  flushAll();
  return blocks;
}

export default function Markdown({ source }) {
  const blocks = parse(source);

  return (
    <div className="md">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'hr':
            return <hr key={i} />;

          case 'h': {
            const Tag = block.level === 1 ? 'h1' : block.level === 2 ? 'h2' : 'h3';
            return <Tag key={i}>{inline(block.text, `${i}`)}</Tag>;
          }

          case 'ul':
          case 'ol': {
            const Tag = block.type;
            return (
              <Tag key={i} className={block.type === 'ol' ? 'md-steps' : undefined}>
                {block.items.map((item, j) => (
                  <li key={j}>{inline(item, `${i}-${j}`)}</li>
                ))}
              </Tag>
            );
          }

          case 'table':
            return (
              <div className="md-table" key={i}>
                <table>
                  <thead>
                    <tr>
                      {block.head.map((cell, c) => (
                        <th key={c}>{inline(cell, `${i}-h${c}`)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c}>{inline(cell, `${i}-${r}-${c}`)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default: {
            const text = block.lines.join(' ');
            // "**Effective 1 August 2026**" gets the emerald treatment
            if (/^\*\*Effective .*\*\*$/.test(text)) {
              return (
                <p key={i} className="md-effective">
                  {text.slice(2, -2)}
                </p>
              );
            }
            return (
              <p key={i} className={block.keepBreaks ? 'md-lines' : undefined}>
                {block.keepBreaks
                  ? block.lines.map((l, j) => (
                      <span key={j}>{inline(l, `${i}-${j}`)}</span>
                    ))
                  : inline(text, `${i}`)}
              </p>
            );
          }
        }
      })}
    </div>
  );
}
