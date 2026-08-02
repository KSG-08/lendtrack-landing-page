/**
 * Faithful HTML/CSS recreations of the real LendTrack app screens.
 * If real device captures land later, they drop into these same frames.
 */
import {
  BackIcon,
  BatteryIcon,
  BoxIcon,
  CalendarIcon,
  ChatIcon,
  CheckIcon,
  ClockIcon,
  HistoryIcon,
  HomeIcon,
  LadderIcon,
  ListIcon,
  MoneyIcon,
  PersonIcon,
  PhoneIcon,
  PlusIcon,
  SearchIcon,
  SignalIcon,
  SortIcon,
  ToolIcon,
} from './icons.jsx';

const StatusBar = ({ variant = 'hero' }) => (
  <div className={`statusbar statusbar--${variant}`}>
    <time>9:41</time>
    <div className="statusbar__notch" />
    <div className="statusbar__icons">
      {variant === 'hero' && <SignalIcon />}
      <BatteryIcon width={variant === 'hero' ? 22 : variant === 'lg' ? 19 : 18} />
    </div>
  </div>
);

/* Every category tile uses the same emerald treatment — only the status chip
   colour varies. See DESIGN.md §3.1. */
const LendCard = ({ icon, item, meta, chip, chipTone }) => (
  <div className="lend-card">
    <div className="lend-card__icon">{icon}</div>
    <div className="lend-card__text">
      <b>{item}</b>
      <span>{meta}</span>
    </div>
    <div className={`status-chip status-chip--${chipTone}`}>{chip}</div>
  </div>
);

export const ActiveLendingsPhone = () => (
  <div className="phone phone--hero">
    <div className="phone__screen">
      <StatusBar variant="hero" />
      <div className="screen-body">
        <div className="screen-title">Active Lendings</div>

        <div className="mock-search">
          <SearchIcon />
          <span>Search lendings</span>
        </div>

        <div className="sort-chips">
          <div className="chip-sort chip-sort--on">
            <SortIcon />
            Recently Added
          </div>
          <div className="chip-sort">Date Lent</div>
        </div>

        <LendCard
          icon={<ToolIcon />}
          item="Cordless Drill"
          meta="Marcus · Due in 2 days"
          chip="Due soon"
          chipTone="due"
        />
        <LendCard
          icon={<MoneyIcon />}
          item="$40 cash"
          meta="Priya · Due Aug 12"
          chip="Active"
          chipTone="active"
        />
        <LendCard
          icon={<LadderIcon />}
          item="Aluminium Ladder"
          meta="Dad · Overdue by 3 days"
          chip="Overdue"
          chipTone="overdue"
        />
      </div>

      <div className="tabbar">
        <HomeIcon />
        <ListIcon />
        <div className="tabbar__fab">
          <PlusIcon />
        </div>
        <HistoryIcon />
        <PersonIcon />
      </div>
    </div>
  </div>
);

export const NewLendingPhone = () => (
  <div className="phone phone--sm">
    <div className="phone__screen">
      <StatusBar variant="sm" />
      <div className="mock-body mock-body--sm">
        <div className="mock-topbar">
          <span>Cancel</span>
          <b>New Lending</b>
          <i />
        </div>

        <div className="glass-card">
          <div className="glass-card__label">DETAILS</div>
          <div className="field-label">Item Name</div>
          <div className="field">Cordless Drill</div>
          <div className="field-label">Borrower Name</div>
          <div className="field">
            <PersonIcon size={15} color="#93A19B" width={2} />
            <span>Marcus</span>
          </div>
          <div className="field-label">Borrower Phone</div>
          <div className="field">
            <PhoneIcon size={15} color="#93A19B" />
            <span>+230 5999 0000</span>
          </div>
        </div>

        <div className="glass-card">
          <div className="glass-card__label">WHEN</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1 }}>
              <div className="field-label">Date Lent</div>
              <div className="field field--split">
                <span>Aug 3</span>
                <CalendarIcon />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div className="field-label">
                Due Date <i>· optional</i>
              </div>
              <div className="field field--split">
                <span>Aug 10</span>
                <CalendarIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="field-label">Category</div>
        <div className="cat-chips">
          <div className="cat-chip cat-chip--on">
            <ToolIcon size={13} color="#fff" />
            Tool
          </div>
          <div className="cat-chip">
            <MoneyIcon size={13} color="#5C6D67" />
            Money
          </div>
          <div className="cat-chip">
            <BoxIcon size={13} color="#5C6D67" />
            Others
          </div>
        </div>
      </div>

      <div className="mock-footer">
        <div className="mock-btn-ghost">Cancel</div>
        <div className="mock-btn-primary">
          <CheckIcon />
          Save Lending
        </div>
      </div>
    </div>
  </div>
);

export const LendingDetailsPhone = () => (
  <div className="phone phone--lg">
    <div className="phone__screen">
      <StatusBar variant="lg" />
      <div className="mock-body mock-body--lg">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <BackIcon />
          <b style={{ fontSize: 15, fontWeight: 800, letterSpacing: '-.3px' }}>Lending Details</b>
        </div>

        <div className="detail-hero">
          <ToolIcon size={46} width={1.8} opacity={0.5} />
        </div>

        <div className="detail-title">
          <b>Cordless Drill</b>
          <span className="status-chip status-chip--due">Due Soon</span>
        </div>

        <div className="cat-chip" style={{ alignSelf: 'flex-start', marginBottom: 13 }}>
          <ToolIcon size={13} color="#5C6D67" />
          Tool
        </div>

        <div className="info-rows">
          <div className="info-row">
            <PersonIcon size={18} color="#0F9D6E" width={2} />
            <div>
              <small>Borrower</small>
              <b>Marcus</b>
            </div>
          </div>
          <div className="info-row">
            <PhoneIcon />
            <div>
              <small>Phone</small>
              <b>+230 5999 0000</b>
            </div>
            <ChatIcon />
          </div>
          <div className="info-row">
            <CalendarIcon size={18} />
            <div>
              <small>Date Lent</small>
              <b>Aug 3, 2026</b>
            </div>
          </div>
          <div className="info-row">
            <ClockIcon />
            <div>
              <small>Due Date</small>
              <b>Aug 10, 2026</b>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'auto' }} />
      </div>

      <div className="mock-footer" style={{ padding: '11px 16px' }}>
        <div className="mock-btn-primary" style={{ flex: 1, padding: 13, fontSize: 13 }}>
          <CheckIcon size={16} />
          Mark Returned
        </div>
      </div>
    </div>
  </div>
);

const returned = [
  { icon: <MoneyIcon size={19} />, item: '$40 cash', meta: 'Priya · Returned Jul 28' },
  { icon: <BoxIcon size={19} />, item: 'Camping Tent', meta: 'Sara · Returned Jul 21' },
  { icon: <ToolIcon size={19} />, item: 'Hedge Trimmer', meta: 'Marcus · Returned Jul 15' },
  { icon: <BoxIcon size={19} />, item: 'Board Games (x3)', meta: 'Dad · Returned Jul 9' },
];

export const HistoryPhone = () => (
  <div className="phone phone--sm">
    <div className="phone__screen">
      <StatusBar variant="sm" />
      <div className="mock-body mock-body--history">
        <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-.5px', marginBottom: 4 }}>
          History
        </div>
        <div
          style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 15 }}
        >
          Everything you've gotten back
        </div>

        {returned.map((r) => (
          <div className="history-card" key={r.item}>
            <div className="lend-card__icon">{r.icon}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <b>{r.item}</b>
              <span>{r.meta}</span>
            </div>
            <div className="status-chip status-chip--returned">Returned</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
