import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Crown,
  Shield,
  BookOpen,
  Users,
  HeartHandshake,
} from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { GiveNowButton } from '@/components/GiveModal';

const moi = {
  hero: '/images/moi/IMG-20211123-WA0038.jpg',
  overview: '/images/moi/IMG-20211123-WA0042.jpg',
  esther: '/images/moi/IMG-20211123-WA0077.jpg',
  leadership: '/images/moi/IMG-20211123-WA0066.jpg',
  impact1: '/images/moi/IMG-20211123-WA0050.jpg',
  impact2: '/images/moi/IMG-20211123-WA0074.jpg',
  impact3: '/images/moi/IMG-20211226-WA0026.jpg',
  elim: '/images/moi/IMG-20211123-WA0060.jpg',
};

const pillars = [
  {
    icon: Crown,
    title: 'Esther Tribe',
    image: moi.esther,
    imageAlt: 'Young woman engaged in an MOI discipleship and leadership gathering',
    description:
      'A vibrant discipleship, mentorship, and leadership arm specifically designed for young women. Esther Tribe focuses on building character, spiritual depth, self-worth, and leadership capacity, raising a generation of confident, purpose-driven women of influence.',
  },
  {
    icon: Shield,
    title: 'Leadership & Character Discipleship',
    image: moi.leadership,
    imageAlt: 'MOI leader speaking and equipping women at a discipleship event',
    description:
      'Structured programs and mentorship cohorts that cultivate integrity, emotional resilience, and Kingdom-minded leadership.',
  },
];

const impactFocus = [
  {
    icon: BookOpen,
    area: 'Spiritual Discipleship',
    objective:
      'Grounding young leaders in sound biblical foundation, prayer, and character building.',
  },
  {
    icon: Users,
    area: 'Youth & Young Women Mentorship',
    objective:
      'Providing safe spaces, peer accountability, and guidance through the Esther Tribe.',
  },
  {
    icon: HeartHandshake,
    area: 'Community & Social Outreach',
    objective:
      'Extending compassionate support, leadership workshops, and family restoration initiatives.',
  },
];

const impactGallery = [
  {
    src: moi.impact1,
    alt: 'MOI team at a Crush Fibroids intervention outreach',
  },
  {
    src: moi.impact2,
    alt: 'Worship and fellowship during an MOI gathering',
  },
  {
    src: moi.impact3,
    alt: 'MOI volunteers preparing community gift bags for outreach',
  },
];

export default function MayokunOreofePage() {
  return (
    <>
      <PageHero />
      <Overview />
      <KeyPillars />
      <CoreImpact />
      <ElimConnection />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative min-h-[52vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={moi.hero}
          alt="Mayokun Oreofe Initiative leader speaking at a branded MOI event"
          className="h-full w-full object-cover object-center"
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
            className="mt-6 max-w-3xl font-serif text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] text-cream-50 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Mayokun Oreofe Initiative (MOI)
          </h1>
          <p
            className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-cream-200 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Restoring Hope, Discipling Generations, and Building Legacy Through
            Purpose-Driven Outreach.
          </p>
        </div>
      </div>
    </section>
  );
}

function Overview() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section className="relative bg-cream-100 py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
              Overview
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
              Transforming lives from the inside out
            </h2>
            <div className="mt-8 space-y-5 text-forest-700 leading-relaxed">
              <p>
                The Mayokun Oreofe Initiative (MOI) is a core empowerment,
                discipleship, and social impact arm under Victorious Praying
                Women Ministry (VPWM). Born out of a deep burden to transform
                lives from the inside out, MOI exists to nurture individuals,
                strengthen families, and equip young leaders to walk in their
                God-given identity and purpose.
              </p>
              <p>
                Through targeted discipleship networks, leadership tracks, and
                compassionate outreach, MOI acts as a bridge between potential
                and fulfillment—providing spiritual grounding, personal
                development, and practical opportunities for growth.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl ring-1 ring-forest-100">
              <img
                src={moi.overview}
                alt="Women of the Mayokun Oreofe Initiative standing together in branded MOI shirts"
                className="aspect-[4/3] w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KeyPillars() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative bg-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            Key Pillars &amp; Sub-Initiatives
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
            Arms of discipleship, outreach, and leadership
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
                className="overflow-hidden rounded-2xl bg-white ring-1 ring-forest-100"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                }}
              >
                <img
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  className="aspect-[16/10] w-full object-cover object-center"
                />
                <div className="p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-700 text-gold-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-bold text-forest-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-600">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CoreImpact() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative bg-forest-900 py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(58,118,81,0.18),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            Core Impact Focus
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-cream-50 leading-tight">
            Where hope, discipleship, and outreach meet
          </h2>
        </div>

        <div
          ref={ref}
          className={`mt-10 grid gap-3 sm:grid-cols-3 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {impactGallery.map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-2xl ring-1 ring-gold-400/15"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-[4/3] w-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        <div
          className={`mt-10 overflow-hidden rounded-2xl ring-1 ring-gold-400/15 transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="hidden sm:grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-px bg-forest-700/50">
            <div className="bg-forest-800/80 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              Focus Area
            </div>
            <div className="bg-forest-800/80 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              Objective
            </div>
          </div>

          {impactFocus.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.area}
                className="grid gap-3 border-t border-forest-700/50 bg-forest-800/40 px-5 py-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] sm:gap-px sm:border-0 sm:bg-transparent sm:p-0"
              >
                <div className="flex items-start gap-3 sm:bg-forest-800/60 sm:px-6 sm:py-6">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-400/15 text-gold-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="sm:hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">
                      Focus Area
                    </div>
                    <h3 className="font-serif text-lg font-bold text-cream-50 leading-snug">
                      {item.area}
                    </h3>
                  </div>
                </div>
                <div className="sm:bg-forest-800/40 sm:px-6 sm:py-6">
                  <div className="sm:hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">
                    Objective
                  </div>
                  <p className="text-sm leading-relaxed text-cream-200">
                    {item.objective}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ElimConnection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section className="relative bg-cream-100 py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="overflow-hidden rounded-2xl ring-1 ring-forest-100">
            <img
              src={moi.elim}
              alt="MOI outreach team standing together for community intervention"
              className="aspect-[4/3] w-full object-cover object-center"
            />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
              Connection to Elim Empowerment Centre
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
              Providing a Permanent Home for Generations to Flourish
            </h2>
            <div className="mt-6 space-y-5 text-forest-700 leading-relaxed">
              <p>
                As the scope of the Mayokun Oreofe Initiative continues to grow,
                there is an urgent need for dedicated facilities to host
                discipleship cohorts, youth leadership academies, counseling
                suites, and community outreach operations.
              </p>
              <p>
                The Elim Empowerment Centre is designed to serve as the physical
                base for MOI&apos;s programs—housing the mentorship hubs,
                vocational skills spaces, and youth innovation labs needed to
                raise leaders of integrity for generations to come.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <GiveNowButton className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-forest-900 transition-all hover:bg-gold-300 hover:-translate-y-0.5">
                Donate Towards The Elim Empowerment Centre
                <ArrowRight className="h-4 w-4" />
              </GiveNowButton>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-forest-800 ring-1 ring-forest-200 transition-colors hover:bg-forest-50 hover:ring-forest-300"
              >
                Learn More / Join Esther Tribe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
