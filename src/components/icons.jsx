/**
 * Shared line icons. Every icon inherits stroke colour from the `color` prop so
 * that category tiles stay a uniform emerald (see DESIGN.md §3.1).
 */
const base = (size, color, width = 2) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: color,
  strokeWidth: width,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
});

export const ToolIcon = ({ size = 21, color = '#0F9D6E', width, opacity }) => (
  <svg {...base(size, color, width)} opacity={opacity}>
    <path d="M14.7 6.3a4 4 0 0 0-5 5l-6 6 3 3 6-6a4 4 0 0 0 5-5l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6Z" />
  </svg>
);

export const MoneyIcon = ({ size = 21, color = '#0F9D6E', width }) => (
  <svg {...base(size, color, width)}>
    <rect x="2" y="6" width="20" height="12" rx="2.5" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M6 10v4M18 10v4" />
  </svg>
);

export const LadderIcon = ({ size = 21, color = '#0F9D6E', width }) => (
  <svg {...base(size, color, width)}>
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="M3 9h18M8 4v16M13 8h4M13 12h4" />
  </svg>
);

export const BoxIcon = ({ size = 21, color = '#0F9D6E', width }) => (
  <svg {...base(size, color, width)}>
    <path d="M3 9l9-6 9 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    <path d="M3 9h18" />
  </svg>
);

export const CategoryIcon = ({ size = 26, color = '#0F9D6E', width }) => (
  <svg {...base(size, color, width)}>
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <path d="M3 9h18M8 4v16" />
  </svg>
);

export const PersonCheckIcon = ({ size = 26, color = '#0F9D6E', width }) => (
  <svg {...base(size, color, width)}>
    <circle cx="9" cy="8" r="4" />
    <path d="M2 21a7 7 0 0 1 14 0" />
    <path d="M17 11l2 2 4-4" />
  </svg>
);

export const BellIcon = ({ size = 26, color = '#0F9D6E', width }) => (
  <svg {...base(size, color, width)}>
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M10.5 21a1.7 1.7 0 0 0 3 0" />
  </svg>
);

export const CameraIcon = ({ size = 26, color = '#0F9D6E', width }) => (
  <svg {...base(size, color, width)}>
    <rect x="3" y="6" width="18" height="14" rx="3" />
    <circle cx="12" cy="13" r="3.5" />
    <path d="M8 6l1.5-2h5L16 6" />
  </svg>
);

export const CheckCircleIcon = ({ size = 26, color = '#0F9D6E', width = 2.2 }) => (
  <svg {...base(size, color, width)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l2.5 2.5L16 9" />
  </svg>
);

export const SyncIcon = ({ size = 26, color = '#0F9D6E', width }) => (
  <svg {...base(size, color, width)}>
    <path d="M4 8a8 8 0 0 1 13-3l3 3M20 16a8 8 0 0 1-13 3l-3-3" />
    <path d="M20 4v4h-4M4 20v-4h4" />
  </svg>
);

export const LockIcon = ({ size = 22, color = '#0F9D6E', width }) => (
  <svg {...base(size, color, width)}>
    <rect x="4" y="10" width="16" height="11" rx="2.5" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);

export const TrendIcon = ({ size = 22, color = '#0F9D6E', width }) => (
  <svg {...base(size, color, width)}>
    <path d="M5 12.5 9 8l4 4 6-6" />
    <path d="M14 6h5v5" />
    <path d="M3 20h18" />
  </svg>
);

export const DollarIcon = ({ size = 22, color = '#0F9D6E', width }) => (
  <svg {...base(size, color, width)}>
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export const SearchIcon = ({ size = 17, color = '#93A19B', width = 2.2 }) => (
  <svg {...base(size, color, width)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const SortIcon = ({ size = 13, color = '#0F9D6E', width = 2.4 }) => (
  <svg {...base(size, color, width)}>
    <path d="M7 4v16M7 20l-3-3M17 20V4M17 4l3 3" />
  </svg>
);

export const HomeIcon = ({ size = 24, color = '#93A19B', width }) => (
  <svg {...base(size, color, width)}>
    <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9Z" />
  </svg>
);

export const ListIcon = ({ size = 24, color = '#0F9D6E', width = 2.4 }) => (
  <svg {...base(size, color, width)}>
    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
  </svg>
);

export const HistoryIcon = ({ size = 24, color = '#93A19B', width }) => (
  <svg {...base(size, color, width)}>
    <path d="M3 12a9 9 0 1 0 3-6.7L3 8m0-4v4h4" />
    <path d="M12 8v4l3 2" />
  </svg>
);

export const PersonIcon = ({ size = 24, color = '#93A19B', width }) => (
  <svg {...base(size, color, width)}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

export const PlusIcon = ({ size = 26, color = '#fff', width = 2.6 }) => (
  <svg {...base(size, color, width)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const PhoneIcon = ({ size = 18, color = '#0F9D6E', width }) => (
  <svg {...base(size, color, width)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);

export const ChatIcon = ({ size = 18, color = '#0F9D6E', width }) => (
  <svg {...base(size, color, width)}>
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-.9L3 21l1.9-5a8.4 8.4 0 0 1-.9-4 8.4 8.4 0 0 1 8.4-8.4A8.4 8.4 0 0 1 21 11.5Z" />
  </svg>
);

export const CalendarIcon = ({ size = 14, color = '#0F9D6E', width }) => (
  <svg {...base(size, color, width)}>
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M3 9h18M8 3v4M16 3v4" />
  </svg>
);

export const ClockIcon = ({ size = 18, color = '#0F9D6E', width }) => (
  <svg {...base(size, color, width)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const CheckIcon = ({ size = 15, color = '#fff', width = 2.4 }) => (
  <svg {...base(size, color, width)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const BackIcon = ({ size = 20, color = '#132A22', width = 2.2 }) => (
  <svg {...base(size, color, width)}>
    <path d="M15 5l-7 7 7 7" />
  </svg>
);

export const CloseIcon = ({ size = 20, width = 2.2 }) => (
  <svg {...base(size, 'currentColor', width)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const CheckBadge = ({ size = 19 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
    <circle cx="12" cy="12" r="10" fill="rgba(52,199,149,.2)" />
    <path
      d="M8 12l2.5 2.5L16 9"
      stroke="#34C795"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SignalIcon = () => (
  <svg width="16" height="11" viewBox="0 0 18 12" fill="#132A22" aria-hidden focusable="false">
    <rect x="0" y="7" width="3" height="5" rx="1" />
    <rect x="5" y="4" width="3" height="8" rx="1" />
    <rect x="10" y="1.5" width="3" height="10.5" rx="1" />
  </svg>
);

export const BatteryIcon = ({ width = 22 }) => (
  <svg
    width={width}
    height="11"
    viewBox="0 0 24 12"
    fill="none"
    aria-hidden
    focusable="false"
  >
    <rect x="1" y="1" width="19" height="10" rx="2.5" stroke="#132A22" strokeWidth="1.2" />
    <rect x="2.5" y="2.5" width="14" height="7" rx="1" fill="#132A22" />
    <rect x="21" y="4" width="1.6" height="4" rx="1" fill="#132A22" />
  </svg>
);

export const AppleGlyph = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden focusable="false">
    <path d="M17.05 12.6c-.03-2.7 2.2-4 2.3-4.06-1.25-1.83-3.2-2.08-3.9-2.11-1.66-.17-3.24.98-4.08.98-.84 0-2.14-.96-3.52-.93-1.81.03-3.48 1.05-4.4 2.67-1.88 3.26-.48 8.09 1.35 10.74.9 1.3 1.96 2.75 3.36 2.7 1.35-.05 1.86-.87 3.49-.87 1.63 0 2.09.87 3.52.84 1.45-.03 2.37-1.32 3.26-2.62 1.03-1.5 1.45-2.96 1.47-3.03-.03-.02-2.82-1.08-2.85-4.29Zm-2.67-7.88c.74-.9 1.24-2.15 1.1-3.4-1.07.05-2.36.71-3.13 1.6-.69.79-1.29 2.06-1.13 3.27 1.19.1 2.42-.6 3.16-1.47Z" />
  </svg>
);

export const PlayGlyph = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" aria-hidden focusable="false">
    <path
      d="M3.6 2.2c-.3.3-.5.8-.5 1.4v16.8c0 .6.2 1.1.5 1.4l.1.1 9.4-9.4v-.2L3.7 2.1l-.1.1Z"
      fill="#34C795"
    />
    <path
      d="M16.3 15.3 13.2 12.2v-.2l3.1-3.1.1.1 3.7 2.1c1.1.6 1.1 1.6 0 2.2l-3.7 2.1-.1-.1Z"
      fill="#F59E0B"
    />
    <path d="m16.4 15.2-3.2-3.2-9.5 9.5c.4.4 1 .4 1.7.1l11-6.4Z" fill="#EF4444" />
    <path d="M16.4 8.8 5.4 2.5c-.7-.4-1.3-.4-1.7.1l9.5 9.4 3.2-3.2Z" fill="#16A34A" />
  </svg>
);
