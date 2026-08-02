/**
 * "Where LendTrack is right now" — the page's closing beat.
 *
 * Replaces the old waitlist form: the site captures nothing and depends on no
 * external service, so this section sets expectations instead of collecting
 * emails. Reuses the `.cta__panel` shell so the page keeps its green ending.
 *
 * To advance the roadmap, move `state` down the list — 'done' → 'current' →
 * 'upcoming'. Exactly one step should be 'current'.
 */

const STEPS = [
  {
    state: 'done',
    label: 'App built',
    caption: 'Every core feature is in and working.',
  },
  {
    state: 'current',
    label: 'Beta testing',
    caption: "Polishing the last details on real devices.",
  },
  {
    state: 'upcoming',
    label: 'Store review',
    caption: 'Apple and Google give it the once-over.',
  },
  {
    state: 'upcoming',
    label: 'Launch day',
    caption: 'Live on iOS and Android — $1, one time.',
  },
];

const STATE_TEXT = {
  done: 'Completed:',
  current: 'In progress:',
  upcoming: 'Up next:',
};

export default function LaunchStatus() {
  return (
    <section className="cta shell shell--narrow" id="launch" aria-labelledby="launch-heading">
      <div className="cta__panel">
        <div className="cta__blob-a" aria-hidden />
        <div className="cta__blob-b" aria-hidden />
        <div className="cta__inner">
          <h2 id="launch-heading">Almost ready to lend smarter</h2>
          <p>
            LendTrack isn't out just yet. Here's exactly where it stands on the way to the App Store
            and Google Play.
          </p>

          <ol className="roadmap">
            {STEPS.map((step) => (
              <li className={`roadmap__step roadmap__step--${step.state}`} key={step.label}>
                <span className="roadmap__dot" aria-hidden />
                <span className="roadmap__state">{STATE_TEXT[step.state]}</span>
                <b className="roadmap__label">{step.label}</b>
                <span className="roadmap__caption">{step.caption}</span>
              </li>
            ))}
          </ol>

          <p className="roadmap__foot">
            Questions before launch? Email us at{' '}
            <a href="mailto:support@lend-track.com">support@lend-track.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
