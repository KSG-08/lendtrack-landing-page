import { useState } from 'react';
import { Features, Footer, Hero, Nav, Pricing, Screens, TrustStrip } from './components/sections.jsx';
import LaunchStatus from './components/LaunchStatus.jsx';
import LegalModal from './components/LegalModal.jsx';

export default function App() {
  const [legalDoc, setLegalDoc] = useState(null);

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

      <Footer onOpenLegal={setLegalDoc} />

      <LegalModal doc={legalDoc} onClose={() => setLegalDoc(null)} />
    </div>
  );
}
