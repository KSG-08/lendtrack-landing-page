import { useEffect, useRef } from 'react';
import Markdown from './Markdown.jsx';
import { CloseIcon } from './icons.jsx';

// Canonical legal copy — rendered straight from docs/legal/, the source of truth.
import privacyMd from '../../docs/legal/PRIVACY_POLICY.md?raw';
import termsMd from '../../docs/legal/TERMS_OF_SERVICE.md?raw';

const DOCS = {
  privacy: { title: 'Privacy Policy', source: privacyMd, contact: 'Questions about this policy?' },
  terms: { title: 'Terms of Service', source: termsMd, contact: 'Questions about these terms?' },
};

export default function LegalModal({ doc, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!doc) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    // lock the page behind the overlay and move focus into it
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [doc, onClose]);

  if (!doc) return null;
  const { title, source, contact } = DOCS[doc];

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal__panel" ref={panelRef}>
        <div className="modal__head">
          <div>
            <div className="eyebrow">LendTrack</div>
            <h2>{title}</h2>
          </div>
          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="Close"
            ref={closeRef}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="modal__body">
          <Markdown source={source} />
          <div className="modal__contact">
            {contact} Email <a href="mailto:support@lend-track.com">support@lend-track.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
