import { ArrowRight, HandHeart } from 'lucide-react';
import { stats } from '@/data';
import { useInView } from '@/hooks/useInView';

const heroImg =
  'https://images.pexels.com/photos/10375930/pexels-photo-10375930.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.3 });
  return (
    <span ref={ref} className="inline-flex items-baseline">
      <span className={`tabular-nums transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        {inView ? value : 0}
      </span>
      <span>{suffix}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Professional woman in business meeting"
          className="h-full w-full object-cover object-center"
        />
        {/* Forest green tint — restores the original green overlay feel */}
        <div className="absolute inset-0 bg-forest-800/55" />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/90 via-forest-900/75 to-forest-700/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(212,175,55,0.14),transparent_55%)]" />
      </div>

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-gold-400/8 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-64 w-64 rounded-full bg-forest-400/10 blur-3xl" />

      {/* Content — full height, padded below header */}
      <div className="relative flex min-h-screen items-center pt-24 pb-16">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl">

            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-200 ring-1 ring-gold-400/30 animate-fade-up"
            >
              A ministry of VPWM
            </span>

            {/* Headline */}
            <h1
              className="mt-7 font-serif text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.07] text-cream-50 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              Building Kingdom-Minded Entrepreneurs
            </h1>

            {/* Subheadline */}
            <p
              className="mt-6 text-base sm:text-lg leading-relaxed text-cream-200 animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              Equipping women to build thriving businesses, discover
              God-given potential, and become kingdom influencers through
              faith, enterprise, and purpose.
            </p>

            {/* CTAs */}
            <div
              className="mt-9 flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-forest-900 shadow-lg ring-1 ring-gold-500/40 transition-all hover:bg-gold-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#support"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-cream-50 ring-1 ring-white/25 backdrop-blur-sm transition-all hover:bg-white/18 hover:ring-white/50"
              >
                <HandHeart className="h-4 w-4" />
                Get Involved
              </a>
            </div>

            {/* Stats */}
            <div
              className="mt-14 flex gap-10 sm:gap-16 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              {stats.map((s) => (
                <div key={s.label} className="border-l-[3px] border-gold-400/60 pl-5">
                  <div className="font-serif text-4xl sm:text-5xl font-bold text-gold-300">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-cream-300">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
