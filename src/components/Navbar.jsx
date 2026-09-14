import { useState } from 'react'
import logoMark from '../assets/logo-mark.png'

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Mobile: hamburger (left) */}
        <button
          className="rounded-md p-2 text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Brand logo + name */}
        <a href="#home" className="flex items-center gap-2">
          <img src={logoMark} alt="Dev Stack logo" className="h-8 w-8 object-contain" />
          <span className="text-lg font-extrabold tracking-tight text-ink">
            Dev<span className="text-gradient">Stack</span>
          </span>
        </a>

        {/* Desktop center links */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="transition hover:text-ink">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: auth buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden text-sm font-semibold text-ink transition hover:opacity-70 sm:inline-block">
            Sign In
          </button>
          <button className="rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:opacity-90">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown links */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <button className="mt-1 block w-full rounded-md px-2 py-2 text-left text-sm font-semibold text-ink hover:bg-gray-50">
              Sign In
            </button>
          </li>
        </ul>
      )}
    </header>
  )
}
