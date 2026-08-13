import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Lightbulb,
  Mic2,
  Network,
  HeartHandshake,
  CalendarCheck,
  Building2,
  TrendingUp,
} from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const heroImg = '/images/summit-hero.png';

const pillars = [
  {
    icon: Lightbulb,
    title: 'Marketplace Innovation',
    description:
      'Interactive workshops covering scaling strategies, financial literacy, digital transformation, and sustainable growth.',
  },
  {
    icon: Mic2,
    title: 'Keynote & Panel Sessions',
    description:
      'Insights from seasoned business executives, faith leaders, and successful female entrepreneurs sharing practical roadmaps to marketplace leadership.',
  },
  {
    icon: Network,
    title: 'Exhibition & Networking',
    description:
      'Dedicated exhibition hubs showcasing women-led businesses, fostering strategic partnerships, B2B connections, and client acquisition.',
  },
  {
    icon: HeartHandshake,
    title: 'Prayer & Strategic Alignment',
    description:
      'Blending practical enterprise tools with spiritual empowering to align business vision with God\u2019s purpose.',
  },
];

const highlights = [
  {
    icon: CalendarCheck,
    title: 'Concluded June Edition',
    description:
      'Highlights from our recent landmark June summit featuring transformative breakout sessions, trade exhibitions, and enterprise mentorship tracks.',
  },
  {
    icon: Building2,
    title: '200+ Businesses Impacted',
    description:
      'Connecting delegates to funding opportunities, strategic partnerships, and ongoing incubator programs at the Thriving Enterprise Development Center (TEDC).',
  },
  {
    icon: TrendingUp,
    title: 'Community & Growth',
    description:
      'Creating an ecosystem where women transition from idea stage to profitability and sustainable legacy.',
  },
];

export default function AnnualBusinessSummitPage() {
  return (
    <>
      <PageHero />
      <EventOverview />
      <SummitPillars />
      <SummitHighlights />
      <PartnerCta />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative min-h-[52vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Delegates gathered at the TBWF Annual Business Summit"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-forest-800/55" />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/92 via-forest-900/78 to-forest-700/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(212,175,55,0.14),transparent_55%)]" />
      </div>

      <div className="relative flex min-h-[52vh] items-end pb-16 pt-32 sm:pb-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-200 ring-1 ring-gold-400/30 animate-fade-up">
            Our Projects / Initiatives
          </span>
          <h1
            className="mt-6 max-w-3xl font-serif text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] text-cream-50 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Annual Business Summit
          </h1>
          <p
            className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-cream-200 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Inspiring, Training, and Empowering Women for Marketplace Excellence
            &amp; Kingdom Impact.
          </p>
        </div>
      </div>
    </section>
  );
}

function EventOverview() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section className="relative bg-cream-100 py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            Event Overview
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
            A premier gathering for marketplace transformation
          </h2>
          <div className="mt-8 space-y-5 text-forest-700 leading-relaxed">
            <p>
              The TBWF Annual Business Summit is a premier gathering organized
              by the Thriving Business Women Fellowship (TBWF). Designed as a
              high-impact platform for marketplace transformation, the summit
              brings together female entrepreneurs, corporate professionals,
              trade leaders, and emerging business owners for a powerful
              encounter of faith, strategy, and enterprise development.
            </p>
            <p>
              Every year, women gather to gain cutting-edge business insights,
              network with industry leaders, access mentorship, and learn how to
              scale sustainable enterprises grounded in biblical principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SummitPillars() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative bg-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            What Defines the Summit
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
            Key Summit Pillars
          </h2>
        </div>

        <div
          ref={ref}
          className={`mt-12 grid gap-5 sm:grid-cols-2 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl bg-white p-7 ring-1 ring-forest-100"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-700 text-gold-300">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold text-forest-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-600">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SummitHighlights() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative bg-forest-900 py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(58,118,81,0.18),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            Summit Highlights &amp; Past Impact
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-cream-50 leading-tight">
            Proof of lives and enterprises transformed
          </h2>
        </div>

        <div
          ref={ref}
          className={`mt-12 grid gap-5 lg:grid-cols-3 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-forest-800/60 p-7 ring-1 ring-gold-400/15"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/15 text-gold-300 ring-1 ring-gold-400/25">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold text-cream-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-200">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PartnerCta() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section className="relative bg-cream-100 py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
              Partner &amp; Support the Vision
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
              Empowering the Next Generation of Marketplace Leaders
            </h2>
            <p className="mt-6 text-forest-700 leading-relaxed">
              Proceeds and partnerships from our annual summits directly feed
              into our long-term vision—the establishment of the Elim
              Empowerment Centre. By supporting our business summit initiatives,
              you help provide business incubation, vocational training, and
              technical hubs for thousands of women and youth.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 rounded-2xl bg-white p-8 ring-1 ring-forest-100">
            <Link
              to="/#support"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-forest-900 transition-all hover:bg-gold-300 hover:-translate-y-0.5"
            >
              Donate Towards The Elim Empowerment Centre
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-forest-800 ring-1 ring-forest-200 transition-colors hover:bg-forest-50 hover:ring-forest-300"
            >
              Partner With Us / Register Interest for Next Summit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
