import { Features, Footer, Hero, Nav, Pricing, Screens, TrustStrip } from './components/sections.jsx';
import LaunchStatus from './components/LaunchStatus.jsx';

export default function App() {
  return (
    <div className="page" id="top">
      <a className="skip-link" href="#features">
        Skip to content
      </a>

      <Nav />

      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <Screens />
        <Pricing />
        <LaunchStatus />
      </main>

      <Footer />
    </div>
  );
}
