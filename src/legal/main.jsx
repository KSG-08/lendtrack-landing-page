import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LegalPage from '../components/LegalPage.jsx';
import '../styles.css';

// Canonical legal copy — rendered straight from docs/legal/, the source of truth.
import privacyMd from '../../docs/legal/PRIVACY_POLICY.md?raw';
import termsMd from '../../docs/legal/TERMS_OF_SERVICE.md?raw';
import deleteAccountMd from '../../docs/legal/DELETE_ACCOUNT.md?raw';

const PAGES = {
  privacy: {
    title: 'Privacy Policy',
    source: privacyMd,
    contact: 'Questions about this policy?',
  },
  terms: {
    title: 'Terms of Service',
    source: termsMd,
    contact: 'Questions about these terms?',
  },
  'delete-account': {
    title: 'Delete Your Account',
    source: deleteAccountMd,
    contact: 'Need help deleting your account?',
  },
};

const ALL_LINKS = [
  { key: 'privacy', href: '/legal/privacy/', label: 'Privacy Policy' },
  { key: 'terms', href: '/legal/terms/', label: 'Terms of Service' },
  { key: 'delete-account', href: '/legal/delete-account/', label: 'Delete Your Account' },
];

// Every /legal/ page shares this entry; the host document says which doc it is.
const root = document.getElementById('root');
const key = root.dataset.doc;
const page = PAGES[key];

if (!page) {
  throw new Error(
    `Unknown legal doc "${key}" — expected one of ${Object.keys(PAGES).join(', ')}`,
  );
}

document.title = `LendTrack — ${page.title}`;

createRoot(root).render(
  <StrictMode>
    <LegalPage {...page} links={ALL_LINKS.filter((link) => link.key !== key)} />
  </StrictMode>,
);
