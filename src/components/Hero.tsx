import { ArrowRight, HandHeart } from 'lucide-react';

const heroImg = '/images/hero.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="TBWF leaders and partners at a celebration gathering"
          className="h-full w-full object-cover object-[center_top]"
        />
        {/* Mobile: stronger even overlay for text contrast */}
        <div className="absolute inset-0 bg-forest-950/72 md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/55 via-transparent to-forest-950/30 md:hidden" />
        {/* Desktop+: darker on the left, clearer photo on the right */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-forest-950/88 via-forest-900/55 to-forest-900/15" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-forest-950/50 via-transparent to-forest-950/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(212,175,55,0.1),transparent_55%)]" />
      </div>

      {/* Decorative blobs — desktop only to avoid noise on small screens */}
      <div className="pointer-events-none absolute right-0 top-24 hidden h-96 w-96 rounded-full bg-gold-400/8 blur-3xl animate-float-slow sm:block" />
      <div className="pointer-events-none absolute left-0 bottom-0 hidden h-64 w-64 rounded-full bg-forest-400/10 blur-3xl sm:block" />

      {/* Content — full height, padded below header */}
      <div className="relative flex min-h-[100svh] items-center pt-24 pb-16 sm:pt-28">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-16">
          <div className="max-w-2xl">

            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-gold-200 ring-1 ring-gold-400/30 animate-fade-up"
            >
              A ministry of VPWM
            </span>

            {/* Headline */}
            <h1
              className="mt-6 sm:mt-7 font-serif text-[2rem] leading-[1.12] sm:text-5xl lg:text-[3.6rem] font-bold sm:leading-[1.07] text-cream-50 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              Building Kingdom-Minded Entrepreneurs
            </h1>

            {/* Subheadline */}
            <p
              className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-cream-200 animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              Equipping women to build thriving businesses, discover
              God-given potential, and become kingdom influencers through
              faith, enterprise, and purpose.
            </p>

            {/* CTAs */}
            <div
              className="mt-8 sm:mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <a
                href="#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-forest-900 shadow-lg ring-1 ring-gold-500/40 transition-all hover:bg-gold-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#support"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-cream-50 ring-1 ring-white/25 backdrop-blur-sm transition-all hover:bg-white/18 hover:ring-white/50"
              >
                <HandHeart className="h-4 w-4" />
                Get Involved
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
