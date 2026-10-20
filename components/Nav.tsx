'use client';

import { useEffect, useState } from 'react';
import { getToken, clearToken, isSessionActiveLocally } from '@/lib/session';

const PRIMARY_LINKS = [
  { href: '/explore', label: 'Explore' },
  { href: '/feed', label: 'Feed' },
  { href: '/rankings', label: 'Rankings' },
  { href: '/city-rankings', label: 'City lanes' },
  { href: '/giveaways', label: 'Giveaways' },
  { href: '/rivalries', label: 'Rivalries' },
  { href: '/live', label: 'Live' },
];

const MORE_LINKS = [
  { href: '/store', label: 'Store' },
  { href: '/merch', label: 'Merch' },
  { href: '/predictions', label: 'Predictions' },
  { href: '/subscriptions', label: 'Fan Clubs' },
  { href: '/fangifts', label: 'Fan Gifts' },
  { href: '/collections', label: 'Collections' },
  { href: '/wallet', label: 'Wallet' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/junior', label: 'Junior Favorites' },
  { href: '/sponsors', label: 'Brands' },
  { href: '/upgrade', label: 'Become a Favorite' },
  { href: '/security', label: 'Security' },
  { href: '/settings', label: 'Settings' },
];

export function Nav() {
  const [authed, setAuthed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setAuthed(!!getToken() && isSessionActiveLocally());
  }, []);

  return (
    <header className="header">
      <div className="row" style={{ gap: '0.5rem', alignItems: 'center' }}>
        <a href="/" className="logo">Rally</a>
        <button
          className="btn btn-ghost"
          type="button"
          aria-expanded={open}
          aria-label="More sections"
          onClick={() => setOpen(!open)}
          style={{ minHeight: 36, padding: '0.25rem 0.85rem', fontSize: '0.8rem', width: 'auto' }}
        >
          {open ? '× Close' : '☰ More'}
        </button>
      </div>
      <nav className="nav" aria-label="Main">
        {PRIMARY_LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        {open && MORE_LINKS.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        {authed ? (
          <a href="/login" onClick={() => clearToken()} className="nav-auth">Log out</a>
        ) : (
          <a href="/login" className="nav-auth">Log in</a>
        )}
      </nav>
      <style jsx>{`
        .nav-auth {
          background: var(--grad);
          color: #04101f !important;
          font-weight: 700;
        }
        .nav-auth:hover { background: var(--grad) !important; filter: brightness(1.1); }
      `}</style>
    </header>
  );
}
