import {
  ActiveLendingsPhone,
  HistoryPhone,
  LendingDetailsPhone,
  NewLendingPhone,
} from './phones.jsx';
import {
  AppleGlyph,
  BellIcon,
  CameraIcon,
  CategoryIcon,
  CheckBadge,
  CheckCircleIcon,
  DollarIcon,
  LockIcon,
  PersonCheckIcon,
  PlayGlyph,
  SyncIcon,
  TrendIcon,
} from './icons.jsx';

const LOGO = `${import.meta.env.BASE_URL}assets/lendtrack_icon.svg`;

/* ------------------------------------------------------------------ nav -- */

export function Nav() {
  return (
    <header className="nav">
      <div className="shell nav__inner">
        <a className="brand" href="#top">
          <img src={LOGO} alt="" width="38" height="38" />
          <span>LendTrack</span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#screens">Screens</a>
          <a href="#pricing">Pricing</a>
        </nav>
      </div>
    </header>
  );
}

/* ----------------------------------------------------------------- hero -- */

export function Hero() {
  return (
    <section className="shell hero" id="get">
      <div className="hero__copy">
        <div className="pill">
          <span className="pill__dot" />
          <span>Coming soon to iOS &amp; Android</span>
        </div>

        <h1>
          Lent it out?
          <br />
          <span className="accent">Never forget</span> who has it.
        </h1>

        <p className="hero__sub">
          LendTrack is the friendly little app for everyday people who lend things to friends and
          family. Log the item, the borrower, and the due date — get a gentle nudge before it's
          late.
        </p>

        {/* Not links yet — the app isn't listed, so these are deliberately
            non-interactive. Swap each <div> for an <a href="…"> pointing at the
            real listing once the stores go live. */}
        <div className="hero__ctas">
          <div className="store-badge store-badge--soon">
            <AppleGlyph />
            <span className="store-badge__label">
              <small>Coming soon on the</small>
              <strong>App Store</strong>
            </span>
          </div>
          <div className="store-badge store-badge--soon">
            <PlayGlyph />
            <span className="store-badge__label">
              <small>Coming soon on</small>
              <strong>Google Play</strong>
            </span>
          </div>
        </div>

        <p className="hero__micro">$1 one-time · Works offline · No ads, ever</p>
      </div>

      <div className="hero__art">
        <div className="hero__glow" aria-hidden />
        <ActiveLendingsPhone />
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- trust strip -- */

const TRUST = [
  { icon: <LockIcon />, title: 'Private by design', caption: 'Locked to your account' },
  { icon: <TrendIcon />, title: 'Works offline', caption: 'Add lendings anywhere' },
  { icon: <BellIcon size={22} />, title: 'Gentle reminders', caption: "Before it's overdue" },
  { icon: <DollarIcon />, title: 'Free to start', caption: 'No ads, no catch' },
];

export function TrustStrip() {
  return (
    <section className="shell" aria-label="Why people trust LendTrack">
      <div className="trust">
        {TRUST.map((t) => (
          <div className="trust__tile" key={t.title}>
            <div className="icon-tile">{t.icon}</div>
            <div>
              <b>{t.title}</b>
              <span>{t.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- features -- */

const FEATURES = [
  {
    icon: <CategoryIcon />,
    title: 'Track anything you lend',
    body: 'Tools, cash, books, camping gear — sort every loan by category so your list stays tidy.',
  },
  {
    icon: <PersonCheckIcon />,
    title: 'Know who has what',
    body: "Save the borrower's name and number — tap to call or text a friendly reminder right from the card.",
  },
  {
    icon: <BellIcon />,
    title: 'Due-date reminders',
    body: "Local notifications nudge you before something's due and again if it slips overdue.",
  },
  {
    icon: <CameraIcon />,
    title: 'Snap a photo',
    body: "Attach a picture of the item so there's never a question about which drill you mean.",
  },
  {
    icon: <CheckCircleIcon />,
    title: 'Mark it returned',
    body: 'One tap closes the loop — add who returned it and any notes, and it moves to history.',
  },
  {
    icon: <SyncIcon />,
    title: 'Offline, then synced',
    body: "Add loans with no signal — LendTrack quietly syncs to the cloud the moment you're back online.",
  },
];

export function Features() {
  return (
    <section className="shell features" id="features" aria-labelledby="features-heading">
      <div className="section-head">
        <span className="eyebrow">Why LendTrack</span>
        <h2 id="features-heading">Everything you lend, in one calm place</h2>
        <p>No spreadsheets, no sticky notes, no awkward "hey, did I ever get that back?" texts.</p>
      </div>

      <div className="features__grid">
        {FEATURES.map((f) => (
          <article className="feature" key={f.title}>
            <div className="feature__icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- screens -- */

export function Screens() {
  return (
    <section className="screens" id="screens" aria-labelledby="screens-heading">
      <div className="screens__glow" aria-hidden />
      <div className="shell screens__inner">
        <div className="section-head section-head--dark">
          <span className="eyebrow eyebrow--dark">Take a look</span>
          <h2 id="screens-heading">Designed to feel effortless</h2>
          <p>A warm, glassy interface that stays out of your way. Here's what it looks like.</p>
        </div>

        <div className="screens__row">
          <NewLendingPhone />
          <LendingDetailsPhone />
          <HistoryPhone />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- pricing -- */

const PERKS = [
  'Unlimited active lendings',
  'Categories, photos & notes',
  'Due-date reminders',
  'Works offline & cloud sync',
  'No ads, no subscriptions',
];

export function Pricing() {
  return (
    <section className="shell shell--narrow pricing" id="pricing" aria-labelledby="pricing-heading">
      <div className="section-head">
        <span className="eyebrow">Pricing</span>
        <h2 id="pricing-heading">One price. Everything unlocked.</h2>
        <p>
          LendTrack is a single one-time purchase — pay once and it's yours for good. No
          subscriptions, no tiers, no ads.
        </p>
      </div>

      <div className="price-card">
        <div className="price-card__badge">ONE-TIME</div>
        <div className="price-card__kicker">Full app</div>
        <div className="price-card__figure">
          <b>$1</b>
          <span>once · forever</span>
        </div>
        <p className="price-card__note">
          A single in-app purchase unlocks everything. Pay once, no renewals.
        </p>
        <ul className="price-card__list">
          {PERKS.map((perk) => (
            <li key={perk}>
              <CheckBadge />
              <span>{perk}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- footer -- */

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__cols">
          <div>
            <div className="footer__brand">
              <img src={LOGO} alt="" width="36" height="36" />
              <span>LendTrack</span>
            </div>
            <p className="footer__blurb">
              The friendly personal lending tracker. Lend with a clear head — remember what's out,
              who has it, and when it's due.
            </p>
          </div>

          <div>
            <h2>Product</h2>
            <div className="footer__list">
              <a href="#features">Features</a>
              <a href="#screens">Screens</a>
              <a href="#pricing">Pricing</a>
            </div>
          </div>

          <div>
            <h2>Legal</h2>
            <div className="footer__list">
              <a href="/legal/privacy/">Privacy Policy</a>
              <a href="/legal/terms/">Terms of Service</a>
              <a href="/legal/delete-account/">Delete Your Account</a>
            </div>
          </div>

          <div>
            <h2>Contact</h2>
            <div className="footer__list">
              <a href="mailto:support@lend-track.com">support@lend-track.com</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 LendTrack. Made for people who lend.</span>
          <span>Not yet published · Coming soon</span>
        </div>
      </div>
    </footer>
  );
}
