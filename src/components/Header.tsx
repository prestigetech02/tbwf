import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navLinks, type NavChild, type NavLink } from '@/data';
import { GiveNowButton } from '@/components/GiveModal';

function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

function NavItemLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  if (isExternal(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setOpen(false);
        setMobileExpanded(null);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMobile = () => {
    setOpen(false);
    setMobileExpanded(null);
  };

  const linkColor = scrolled
    ? 'text-forest-700 hover:text-gold-600'
    : 'text-cream-50 hover:text-gold-300';

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top)] ${
        scrolled
          ? 'bg-cream-50/97 backdrop-blur-md shadow-[0_2px_24px_rgba(16,42,28,0.10)]'
          : 'bg-forest-950/30 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-3">

          {/* Brand */}
          <Link to="/" className="flex min-w-0 items-center group" onClick={closeMobile}>
            <img
              src="/images/logo.png"
              alt="TBWF — Thriving Business Women Fellowship"
              className="h-8 w-auto max-w-[9.5rem] object-contain object-left sm:h-11 sm:max-w-none transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <DesktopDropdown
                  key={link.label}
                  link={link}
                  linkColor={linkColor}
                  scrolled={scrolled}
                />
              ) : (
                <li key={link.label}>
                  <NavItemLink
                    href={link.href!}
                    className={`text-sm font-semibold transition-colors ${linkColor}`}
                  >
                    {link.label}
                  </NavItemLink>
                </li>
              )
            )}
          </ul>

          {/* Desktop CTA */}
          <GiveNowButton className="hidden lg:inline-flex items-center rounded-full bg-gold-400 px-6 py-2.5 text-sm font-semibold text-forest-900 shadow-md ring-1 ring-gold-500/40 transition-all hover:bg-gold-300 hover:shadow-lg hover:-translate-y-0.5">
            Partner With Us
          </GiveNowButton>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors ${
              scrolled
                ? 'text-forest-800 hover:bg-forest-100'
                : 'text-cream-50 hover:bg-white/15'
            }`}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? 'max-h-[min(85dvh,42rem)] pb-5' : 'max-h-0'
          }`}
        >
          <ul className="flex max-h-[min(78dvh,38rem)] flex-col gap-1 overflow-y-auto overscroll-contain rounded-2xl bg-forest-950/95 p-3 sm:p-4 shadow-2xl ring-1 ring-gold-400/20 backdrop-blur-md">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpanded((prev) =>
                        prev === link.label ? null : link.label
                      )
                    }
                    className="flex min-h-12 w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold text-cream-50 hover:bg-forest-800/70 hover:text-gold-300 transition-colors"
                    aria-expanded={mobileExpanded === link.label}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform ${
                        mobileExpanded === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <ul
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileExpanded === link.label
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <NavItemLink
                          href={child.href}
                          onClick={closeMobile}
                          className="block rounded-xl py-3 pl-8 pr-4 text-sm font-medium leading-snug text-cream-300 hover:bg-forest-800/70 hover:text-gold-300 transition-colors"
                        >
                          {child.label}
                        </NavItemLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.label}>
                  <NavItemLink
                    href={link.href!}
                    onClick={closeMobile}
                    className="flex min-h-12 items-center rounded-xl px-4 py-3 text-base font-semibold text-cream-50 hover:bg-forest-800/70 hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </NavItemLink>
                </li>
              )
            )}
            <li className="mt-2">
              <GiveNowButton
                onClick={closeMobile}
                className="flex min-h-12 w-full items-center justify-center rounded-xl bg-gold-400 px-4 py-3 text-center text-base font-semibold text-forest-900 transition-colors hover:bg-gold-300"
              >
                Partner With Us
              </GiveNowButton>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function DesktopDropdown({
  link,
  linkColor,
  scrolled,
}: {
  link: NavLink;
  linkColor: string;
  scrolled: boolean;
}) {
  const triggerClass = `inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${linkColor}`;

  return (
    <li className="relative group">
      {link.href ? (
        <Link to={link.href} className={triggerClass} aria-haspopup="true">
          {link.label}
          <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
        </Link>
      ) : (
        <button type="button" className={triggerClass} aria-haspopup="true">
          {link.label}
          <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
        </button>
      )}
      <div className="invisible absolute left-1/2 top-full z-50 pt-3 opacity-0 translate-y-1 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 -translate-x-1/2">
        <ul
          className={`min-w-[15.5rem] rounded-2xl py-2 shadow-xl ring-1 ${
            scrolled
              ? 'bg-cream-50 ring-forest-100 shadow-[0_12px_40px_rgba(16,42,28,0.12)]'
              : 'bg-forest-950/95 backdrop-blur-md ring-gold-400/20'
          }`}
        >
          {link.children!.map((child: NavChild) => (
            <li key={child.href}>
              <NavItemLink
                href={child.href}
                className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-forest-700 hover:bg-forest-50 hover:text-gold-600'
                    : 'text-cream-100 hover:bg-forest-800/80 hover:text-gold-300'
                }`}
              >
                {child.label}
              </NavItemLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
