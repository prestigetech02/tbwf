import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Gift,
  Heart,
  CalendarHeart,
  HandHeart,
  Users,
  Package,
  MapPin,
} from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { GiveNowButton } from '@/components/GiveModal';

const hfic = {
  hero: '/images/hfic/_DSC7284.JPG',
  overview: '/images/hfic/_DSC3840.jpg',
  foodSupport: '/images/hfic/_DSC7289.JPG',
  dignity: '/images/hfic/IMG-20251222-WA0054.jpg',
  legacy: '/images/hfic/IMG_0040.jpg',
  partners: '/images/hfic/_DSC7292.JPG',
  gallery1: '/images/hfic/IMG_0043.jpg',
  gallery2: '/images/hfic/_DSC3844.jpg',
  gallery3: '/images/hfic/IMG-20251222-WA0058.jpg',
  elim: '/images/hfic/IMG_0043.jpg',
};

const pillars = [
  {
    icon: Gift,
    title: 'Practical Love & Food Support',
    image: hfic.foodSupport,
    imageAlt:
      'HFIC food hampers and gift packages prepared for ministry families',
    description:
      'Providing carefully curated food hampers, household essentials, and holiday packages to deserving ministry families.',
  },
  {
    icon: Heart,
    title: 'Dignity & Gratitude',
    image: hfic.dignity,
    imageAlt:
      'HFIC outreach gathering honoring pastors and church workers with food support',
    description:
      "Honoring servants of God—many of whom work in overlooked or underserved communities—reminding them that their labor in God's vineyard is deeply appreciated.",
  },
  {
    icon: CalendarHeart,
    title: '17+ Years of Impact',
    image: hfic.legacy,
    imageAlt:
      'HFIC volunteer with branded Christmas packages and household essentials ready for distribution',
    description:
      'A sustained legacy of bringing hope, encouragement, and renewed strength to thousands of faith leaders and their households across multiple communities.',
  },
  {
    icon: HandHeart,
    title: 'Partner-Driven Generosity',
    image: hfic.partners,
    imageAlt:
      'HFIC volunteers and partners coordinating Christmas outreach distribution',
    description:
      'Funded entirely through the voluntary giving of partners, members, and donors who share a heart for kingdom encouragement.',
  },
];

const highlights = [
  {
    icon: Users,
    dimension: 'Target Beneficiaries',
    focus:
      'Pastors, missionaries, evangelists, and church workers across underserved regions.',
  },
  {
    icon: Package,
    dimension: 'Seasonal Packages',
    focus:
      'High-quality food staples, festive supplies, and family gifts distributed every December.',
  },
  {
    icon: MapPin,
    dimension: 'Community Reach',
    focus:
      'Touching hundreds of ministry homes annually with testimonies of comfort and renewed hope.',
  },
];

const gallery = [
  {
    src: hfic.gallery1,
    alt: 'Rows of HFIC food hampers and seasonal packages prepared for distribution',
  },
  {
    src: hfic.gallery2,
    alt: 'HFIC volunteers celebrating beside Leap for Joy Christmas packages',
  },
  {
    src: hfic.gallery3,
    alt: 'Ministry families gathered under a canopy during an HFIC outreach celebration',
  },
];

export default function HficPage() {
  return (
    <>
      <PageHero />
      <EventOverview />
      <KeyPillars />
      <OutreachHighlights />
      <ElimConnection />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative min-h-[52vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hfic.hero}
          alt="Household of Faith in Celebration 2023 festive backdrop"
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
            Household of Faith in Celebration (HFIC)
          </h1>
          <p
            className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-cream-200 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Bringing Christmas Joy, Dignity, and Gratitude to Those Who Serve.
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
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
              Event Overview
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
              Celebrating those who spend their lives serving others
            </h2>
            <div className="mt-8 space-y-5 text-forest-700 leading-relaxed">
              <p>
                Household of Faith in Celebration (HFIC) is the flagship annual
                outreach of Vessel of Mercy (VOM), the benevolent and
                compassionate arm of Victorious Praying Women Ministry (VPWM).
                For over 17 years, HFIC has been dedicated to demonstrating
                Christ&apos;s love in a practical, tangible way by celebrating
                pastors, ministers, evangelists, missionaries, and church
                workers during the Christmas season.
              </p>
              <p>
                While these faithful servants spend their lives caring for the
                spiritual needs of others, many struggle to provide a festive
                celebration for their own households. HFIC exists to honor their
                selfless service, ensure they are seen and valued, and bring
                warmth and joy to their homes.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl ring-1 ring-forest-100">
              <img
                src={hfic.overview}
                alt="HFIC volunteers celebrating Leap for Joy with Christmas food packages"
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
            Key Pillars &amp; Outreach Model
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
            Love expressed through practical care
          </h2>
        </div>

        <div
          ref={ref}
          className={`mt-12 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ${
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

function OutreachHighlights() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative bg-forest-900 py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(58,118,81,0.18),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            Outreach Highlights &amp; Impact
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-cream-50 leading-tight">
            How HFIC brings Christmas joy to ministry homes
          </h2>
        </div>

        <div
          ref={ref}
          className={`mt-10 grid gap-3 sm:grid-cols-3 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {gallery.map((img) => (
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
              Dimension
            </div>
            <div className="bg-forest-800/80 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              Focus &amp; Impact
            </div>
          </div>

          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.dimension}
                className="grid gap-3 border-t border-forest-700/50 bg-forest-800/40 px-5 py-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] sm:gap-px sm:border-0 sm:bg-transparent sm:p-0"
              >
                <div className="flex items-start gap-3 sm:bg-forest-800/60 sm:px-6 sm:py-6">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-400/15 text-gold-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="sm:hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">
                      Dimension
                    </div>
                    <h3 className="font-serif text-lg font-bold text-cream-50 leading-snug">
                      {item.dimension}
                    </h3>
                  </div>
                </div>
                <div className="sm:bg-forest-800/40 sm:px-6 sm:py-6">
                  <div className="sm:hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">
                    Focus &amp; Impact
                  </div>
                  <p className="text-sm leading-relaxed text-cream-200">
                    {item.focus}
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
              src={hfic.elim}
              alt="Large-scale HFIC distribution logistics with food hampers ready for ministry families"
              className="aspect-[4/3] w-full object-cover object-center"
            />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
              Direct Connection to Elim Empowerment Centre
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
              Expanding Vessel of Mercy&apos;s Year-Round Operational Hub
            </h2>
            <div className="mt-6 space-y-5 text-forest-700 leading-relaxed">
              <p>
                For over 17 years, HFIC has operated through temporary storage
                and assembly locations. The establishment of the Elim
                Empowerment Centre will provide a permanent home for the Vessel
                of Mercy outreach operations.
              </p>
              <p>
                Elim will house permanent storage facilities, distribution
                logistics hubs, and community welfare centers—allowing us to
                scale HFIC and run year-round food drives, skills support, and
                benevolent programs for families in need.
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
                Partner With Vessel of Mercy / Sponsor HFIC
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
