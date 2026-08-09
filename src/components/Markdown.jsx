/**
 * Tiny renderer for the subset of Markdown used by the legal documents in
 * docs/legal/ (headings, paragraphs, bullet and numbered lists, bold, links).
 * The docs stay the single source of truth — they are imported raw and
 * rendered here.
 */

const LINKS = /(https?:\/\/[^\s<>()]+[^\s<>().,]|[\w.+-]+@[\w-]+\.[\w.-]+)/g;

/** Split a line into <strong> / link / text nodes. */
function inline(text, keyPrefix) {
  const nodes = [];
  let key = 0;

  // **bold** first, then autolink whatever is left
  text.split(/(\*\*[^*]+\*\*)/g).forEach((part) => {
    if (!part) return;
    if (part.startsWith('**') && part.endsWith('**')) {
      nodes.push(<strong key={`${keyPrefix}-b${key++}`}>{part.slice(2, -2)}</strong>);
      return;
    }
    part.split(LINKS).forEach((chunk) => {
      if (!chunk) return;
      if (/^https?:\/\//.test(chunk)) {
        nodes.push(
          <a key={`${keyPrefix}-l${key++}`} href={chunk} target="_blank" rel="noreferrer">
            {chunk}
          </a>,
        );
      } else if (/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(chunk)) {
        nodes.push(
          <a key={`${keyPrefix}-m${key++}`} href={`mailto:${chunk}`}>
            {chunk}
          </a>,
        );
      } else {
        nodes.push(<span key={`${keyPrefix}-t${key++}`}>{chunk}</span>);
      }
    });
  });

  return nodes;
}

/** Group raw markdown into block descriptors. */
function parse(md) {
  const blocks = [];
  let paragraph = [];
  let list = null;

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: 'p', text: paragraph.join(' ') });
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list) {
      blocks.push({ type: list.type, items: list.items });
      list = null;
    }
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
      flushParagraph();
      flushList();
      continue;
    }
    if (line.startsWith('> ') || line === '>') continue; // editorial notes

    const heading = /^(#{1,6})\s+(.*)$/.exec(line);
    if (heading) {
      flushParagraph();
      flushList();
      blocks.push({ type: 'h', level: heading[1].length, text: heading[2] });
      continue;
    }

    const bullet = /^[-*]\s+(.*)$/.exec(line);
    if (bullet) {
      pushItem('ul', bullet[1]);
      continue;
    }

    // "1. " / "1) " numbered steps. The trailing \s+ keeps version-like text
    // ("1.0.0 released") from being mistaken for a list marker.
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

  flushParagraph();
  flushList();
  return blocks;
}

export default function Markdown({ source }) {
  const blocks = parse(source);

  return (
    <div className="md">
      {blocks.map((block, i) => {
        if (block.type === 'h') {
          const Tag = block.level === 1 ? 'h1' : 'h2';
          return <Tag key={i}>{block.text}</Tag>;
        }
        if (block.type === 'ul' || block.type === 'ol') {
          const Tag = block.type;
          return (
            <Tag key={i} className={block.type === 'ol' ? 'md-steps' : undefined}>
              {block.items.map((item, j) => (
                <li key={j}>{inline(item, `${i}-${j}`)}</li>
              ))}
            </Tag>
          );
        }
        // "**Effective 1 August 2026**" gets the emerald treatment
        const effective = /^\*\*Effective .*\*\*$/.test(block.text);
        return (
          <p key={i} className={effective ? 'md-effective' : undefined}>
            {effective ? block.text.slice(2, -2) : inline(block.text, `${i}`)}
          </p>
        );
      })}
    </div>
  );
}
