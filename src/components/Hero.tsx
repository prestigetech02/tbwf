import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GiveNowButton } from '@/components/GiveModal';

const heroImg = '/images/elim-centre.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-forest-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(212,175,55,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute right-0 top-24 hidden h-96 w-96 rounded-full bg-gold-400/8 blur-3xl animate-float-slow lg:block" />

      <div className="relative flex min-h-[100svh] items-center pt-24 pb-16 sm:pt-28">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-10 lg:grid-cols-[13fr_7fr] lg:gap-12 lg:px-16">
          {/* Text — 65% */}
          <div className="max-w-2xl lg:max-w-none">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-gold-200 ring-1 ring-gold-400/30 animate-fade-up">
              The Building Project
            </span>

            <h1
              className="mt-6 sm:mt-7 font-serif text-[2rem] leading-[1.12] sm:text-5xl lg:text-[3.25rem] font-bold sm:leading-[1.07] text-cream-50 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              A permanent home where faith meets action
            </h1>

            <p
              className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-cream-200 animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              Join us to build the Elim Empowerment Centre, a dedicated hub
              for mentorship, business incubation, skills training, and
              community restoration across generations.
            </p>

            <div
              className="mt-8 sm:mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <GiveNowButton className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-forest-900 shadow-lg ring-1 ring-gold-500/40 transition-all hover:bg-gold-300 hover:shadow-xl hover:-translate-y-0.5">
                Donate Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </GiveNowButton>
              <Link
                to="/elim-centre"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-cream-50 ring-1 ring-white/25 backdrop-blur-sm transition-all hover:bg-white/18 hover:ring-white/50"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image — 35% */}
          <div
            className="animate-fade-up w-full lg:max-w-none"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-2xl shadow-forest-950/50">
              <img
                src={heroImg}
                alt="Proposed view of the Elim Empowerment Centre"
                className="aspect-[4/3] w-full object-cover object-center lg:aspect-auto lg:min-h-[22rem] lg:max-h-[28rem]"
              />
            </div>
            <p className="mt-3 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-cream-300/70 sm:text-xs lg:text-right">
              Proposed view of the Elim Empowerment Centre
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
