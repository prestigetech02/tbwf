import { Link } from 'react-router-dom';
import {
  Heart,
  Shield,
  HandHeart,
  Gift,
  Users,
  Target,
  Eye,
  Building2,
  ArrowRight,
} from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { GiveNowButton } from '@/components/GiveModal';

const heroImg = '/images/about.png';

const identityImg = '/images/pic2.jpg';

const coreValues = [
  {
    icon: Gift,
    title: 'Giving',
    description:
      "Reflecting God's heart through generous time, talent, resources, and service.",
    verse: 'It is more blessed to give than to receive — Acts 20:35',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'Upholding total honesty, transparency, faithfulness, and accountability in life and ministry.',
  },
  {
    icon: Users,
    title: 'Respect',
    description:
      'Honoring every individual with dignity, kindness, and grace, recognizing their divine potential.',
  },
  {
    icon: Heart,
    title: 'Love',
    description:
      "Demonstrating Christ's unconditional love through compassion, service, and genuine care.",
  },
  {
    icon: HandHeart,
    title: 'Submission',
    description:
      "Willing alignment with God's Word and biblical principles to cultivate humility and leadership.",
  },
];

export default function WhoWeArePage() {
  return (
    <>
      <PageHero />
      <CoreIdentity />
      <MissionVision />
      <CoreValues />
      <ElimSpotlight />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative min-h-[52vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Victorious Praying Women Ministry gathering"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-forest-800/55" />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/92 via-forest-900/78 to-forest-700/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(212,175,55,0.14),transparent_55%)]" />
      </div>

      <div className="relative flex min-h-[52vh] items-end pb-16 pt-32 sm:pb-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-200 ring-1 ring-gold-400/30 animate-fade-up">
            About VPWM
          </span>
          <h1
            className="mt-6 max-w-2xl font-serif text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] text-cream-50 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Who We Are
          </h1>
          <p
            className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-cream-200 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Restoring God&apos;s Original Intent Through Prayer, Enterprise, and
            Holistic Empowerment.
          </p>
        </div>
      </div>
    </section>
  );
}

function CoreIdentity() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="relative py-20 sm:py-28 bg-cream-100 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(58,118,81,0.06),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-forest-100">
              <img
                src={identityImg}
                alt="Women of TBWF and VPWM gathered in fellowship"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-3 sm:-right-5 flex items-center gap-3 rounded-2xl bg-cream-50 px-5 py-4 shadow-xl ring-1 ring-forest-100">
              <span className="font-serif text-3xl font-bold text-forest-800">
                VPWM
              </span>
              <span className="text-xs leading-tight font-medium text-forest-600">
                Victorious Praying
                <br />
                Women Ministry
              </span>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
              Our Core Identity
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
              Raising women who fulfill God&apos;s purpose
            </h2>
            <div className="mt-6 space-y-5 text-forest-700 leading-relaxed">
              <p>
                Victorious Praying Women Ministry (VPWM) is a global Christian
                ministry dedicated to raising women who fulfill God&apos;s purpose
                through prayer, godly character, and practical, real-world
                impact.
              </p>
              <p>
                Founded on the belief in the transformative power of prayer,
                VPWM serves as a beacon of hope, restoration, and spiritual
                growth. We provide a nurturing environment where women are
                strengthened in their walk with God, equipped to overcome
                life&apos;s challenges, and empowered to become leaders in their
                homes, businesses, and communities.
              </p>
              <p>
                At VPWM, prayer is not merely an activity—it is our lifestyle.
                When women are rooted in God&apos;s Word, aligned in prayer, and
                equipped with practical skills, they become powerful catalysts
                for economic and spiritual transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="relative py-20 sm:py-28 bg-forest-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(58,118,81,0.18),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            Direction
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-cream-50">
            Mission &amp; Vision
          </h2>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid gap-6 lg:grid-cols-2 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="rounded-3xl bg-forest-800/60 p-8 sm:p-10 ring-1 ring-gold-400/15 backdrop-blur-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/15 text-gold-300 ring-1 ring-gold-400/25">
              <Target className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-serif text-2xl font-bold text-cream-50">
              Our Mission
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-cream-200">
              To restore God&apos;s original intent through prayer, lifestyle, and
              empowerment.
            </p>
          </div>

          <div className="rounded-3xl bg-forest-800/60 p-8 sm:p-10 ring-1 ring-gold-400/15 backdrop-blur-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/15 text-gold-300 ring-1 ring-gold-400/25">
              <Eye className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-serif text-2xl font-bold text-cream-50">
              Our Vision
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-cream-200">
              To empower women globally to live out God&apos;s original intent
              through prayer, a godly lifestyle, and holistic empowerment—
              impacting families, marketplace hubs, and nations with
              Christ&apos;s restorative love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative py-20 sm:py-28 bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            What Guides Us
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-forest-900">
            Core Values
          </h2>
          <p className="mt-4 text-forest-600 leading-relaxed">
            These convictions shape how we pray, lead, give, and serve—every
            day, in every place God sends us.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {coreValues.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={`rounded-2xl bg-white p-7 shadow-sm ring-1 ring-forest-100/60 ${
                  i === 3 ? 'lg:col-start-1' : ''
                } ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
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
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-600">
                  {value.description}
                </p>
                {value.verse && (
                  <p className="mt-4 text-xs italic font-medium text-gold-700">
                    &ldquo;{value.verse}&rdquo;
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ElimSpotlight() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="relative py-20 sm:py-28 bg-forest-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.14),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(58,118,81,0.2),transparent_45%)]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-5 sm:px-8 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-200 ring-1 ring-gold-400/30">
              The Elim Empowerment Centre
            </span>
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight">
              Help Us Build a Lasting Legacy
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream-200">
              Elim Empowerment Centre is God&apos;s answer to thousands seeking
              mentorship, skills, and business incubation. We are building a
              physical hub designed for entrepreneurship, digital innovation,
              vocational training, and community restoration.
            </p>
            <div className="mt-8 flex items-start gap-4 rounded-2xl bg-forest-900/70 p-5 ring-1 ring-gold-400/20">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/15 text-gold-300">
                <Building2 className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gold-300">
                  Target Goal
                </div>
                <p className="mt-1 text-cream-100 leading-relaxed">
                  Dedicated facility for business incubation, digital tech labs,
                  and community leadership.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 rounded-3xl bg-cream-50 p-8 sm:p-10 shadow-2xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900 leading-tight">
              Faith meets action at Elim
            </h3>
            <p className="text-forest-600 leading-relaxed">
              Your partnership helps create a permanent sanctuary where women
              gain financial independence, youth receive digital skills, and
              leaders are raised to influence society with integrity.
            </p>
            <GiveNowButton className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-forest-900 shadow-md ring-1 ring-gold-500/40 transition-all hover:bg-gold-300 hover:shadow-lg hover:-translate-y-0.5">
              Donate Towards The Elim Project
              <ArrowRight className="h-4 w-4" />
            </GiveNowButton>
            <Link
              to="/contact"
              className="text-sm font-semibold text-forest-700 underline-offset-4 hover:text-gold-600 hover:underline transition-colors"
            >
              Or contact us to partner another way
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
