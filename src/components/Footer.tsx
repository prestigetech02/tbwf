import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Share2 } from 'lucide-react';
import { navLinks } from '@/data';
import { GiveNowButton } from '@/components/GiveModal';

const socials = [
  { icon: Globe, label: 'Facebook', href: '#' },
  { icon: MessageCircle, label: 'Instagram', href: '#' },
  { icon: Share2, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative bg-white text-forest-800 ring-1 ring-forest-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="TBWF — Thriving Business Women Fellowship"
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-forest-600">
              The marketplace empowerment arm of Victorious Praying Women
              Ministry — equipping women to build thriving businesses and
              become kingdom influencers.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-50 text-forest-700 ring-1 ring-forest-100 transition-all hover:bg-gold-400 hover:text-forest-900 hover:-translate-y-0.5"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-600">
              Quick Links
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <Link
                      to={link.href}
                      className="text-sm text-forest-600 transition-colors hover:text-gold-600"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <span className="text-sm text-forest-600">{link.label}</span>
                  )}
                </li>
              ))}
              <li>
                <GiveNowButton className="text-sm text-forest-600 transition-colors hover:text-gold-600">
                  Support Us
                </GiveNowButton>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-600">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-forest-600">
              <li>38 Opebi Road, Ikeja, Lagos, Nigeria</li>
              <li>
                <a
                  href="tel:+2348023688218"
                  className="transition-colors hover:text-gold-600"
                >
                  (+234) 802 368 8218
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@tbwfelim.com"
                  className="transition-colors hover:text-gold-600"
                >
                  contact@tbwfelim.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tbwfelim.com"
                  className="transition-colors hover:text-gold-600"
                >
                  info@tbwfelim.com
                </a>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-forest-900 transition-all hover:bg-gold-300 hover:-translate-y-0.5"
            >
              Join the Fellowship
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-forest-100 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-forest-500">
            © {new Date().getFullYear()} Thriving Business Women Fellowship. All
            rights reserved.
          </p>
          <p className="text-xs text-forest-500">
            Built by{' '}
            <a
              href="https://techyx360.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-forest-700 transition-colors hover:text-gold-600"
            >
              TechyX360
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
