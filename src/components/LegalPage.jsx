import Markdown from './Markdown.jsx';

const LOGO = `${import.meta.env.BASE_URL}assets/lendtrack_icon.svg`;

/**
 * Standalone page shell for the legal documents. These used to be modals on
 * the landing page, but Google Play requires the privacy policy and the
 * account-deletion instructions to live at their own crawlable URLs that open
 * without any JavaScript interaction from the visitor — so each doc is now a
 * real page under /legal/, built as its own Vite entry point.
 */
export default function LegalPage({ title, source, contact, links }) {
  return (
    <div className="page">
      <header className="nav">
        <div className="shell nav__inner">
          <a className="brand" href="/">
            <img src={LOGO} alt="" width="38" height="38" />
            <span>LendTrack</span>
          </a>
          <nav className="nav__links" aria-label="Primary">
            <a href="/">Home</a>
          </nav>
        </div>
      </header>

      <main className="shell legal">
        <article className="legal__panel">
          <div className="eyebrow">LendTrack</div>
          <h1 className="legal__title">{title}</h1>

          <Markdown source={source} />

          <div className="legal__contact">
            {contact} Email <a href="mailto:support@lend-track.com">support@lend-track.com</a>
          </div>
        </article>

        <nav className="legal__more" aria-label="Other documents">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </main>

      <footer className="legal__footer">
        <div className="shell">
          <span>© 2026 LendTrack. Made for people who lend.</span>
        </div>
      </footer>
    </div>
  );
}
