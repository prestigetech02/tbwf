import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  GraduationCap,
  Landmark,
  BookOpen,
  Mic2,
  LineChart,
  Users,
  Compass,
} from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const heroImg =
  'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';

const objectives = [
  {
    icon: Sparkles,
    title: 'From Capacity to Influence',
    description:
      'Helping female entrepreneurs turn innate talent into operational capacity, economic power, and lasting influence.',
  },
  {
    icon: GraduationCap,
    title: 'Leadership Development',
    description:
      'Equipping women with strategic thinking, practical business tools, and leadership exposure required to build sustainable organizations.',
  },
  {
    icon: Landmark,
    title: 'Access to Ecosystems',
    description:
      'Connecting women-led MSMEs with verified financial resources, institutional partners, funding opportunities, and peer-driven accountability networks.',
  },
  {
    icon: BookOpen,
    title: 'The InfluenceHER Institute',
    description:
      'A dedicated ongoing training and mentoring hub that provides continuous learning paths, structured guidance, and peer mentorship long after the annual conference ends.',
  },
];

const experiences = [
  {
    icon: Mic2,
    pillar: 'Keynote & Strategy Sessions',
    focus:
      'Insights from globally respected leadership coaches, industry pioneers, and enterprise experts.',
  },
  {
    icon: LineChart,
    pillar: 'Growth Pipelines',
    focus:
      'Direct engagement with financial institutions and ecosystem partners providing MSME growth tools.',
  },
  {
    icon: Users,
    pillar: 'Mentorship & Networking',
    focus:
      'High-level networking opportunities connecting emerging female leaders with seasoned marketplace guides.',
  },
  {
    icon: Compass,
    pillar: 'Influence & Kingdom Purpose',
    focus:
      'Aligning business expansion with character, integrity, and social impact.',
  },
];

export default function InfluenceHerPage() {
  return (
    <>
      <PageHero />
      <Overview />
      <Objectives />
      <AttendeeExperience />
      <ElimConnection />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative min-h-[52vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Women leaders collaborating at a conference"
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
            InfluenceHER Conference &amp; Institute
          </h1>
          <p
            className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-cream-200 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Raising Women of Influence, Purpose, and Market Capacity to
            Transform Society.
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
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            Overview
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
            From managing to leading—from surviving to scaling
          </h2>
          <div className="mt-8 space-y-5 text-forest-700 leading-relaxed">
            <p>
              The InfluenceHER Conference is a transformational leadership
              platform and growth pipeline under Victorious Praying Women
              Ministry (VPWM) and the Thriving Business Women Fellowship (TBWF).
              It is specifically designed for women in micro, small, and medium
              enterprises (MSMEs), corporate leaders, and change-makers who are
              ready to transition from managing to leading, and from surviving
              to scaling sustainably.
            </p>
            <p>
              More than an annual gathering, InfluenceHER serves as a catalyst
              to help women uncover their unique leadership potential, build
              enterprise capacity, and step boldly into spheres of societal,
              economic, and kingdom influence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Objectives() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative bg-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            Key Objectives &amp; Impact
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
            Building capacity that becomes lasting influence
          </h2>
        </div>

        <div
          ref={ref}
          className={`mt-12 grid gap-5 sm:grid-cols-2 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {objectives.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
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
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-600">
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

function AttendeeExperience() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative bg-forest-900 py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(58,118,81,0.18),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            What Attendees Experience
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-cream-50 leading-tight">
            Pillars of growth, purpose, and connection
          </h2>
        </div>

        <div
          ref={ref}
          className={`mt-12 overflow-hidden rounded-2xl ring-1 ring-gold-400/15 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="hidden sm:grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-px bg-forest-700/50">
            <div className="bg-forest-800/80 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              Pillar
            </div>
            <div className="bg-forest-800/80 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              Focus &amp; Value
            </div>
          </div>

          {experiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.pillar}
                className="grid gap-3 border-t border-forest-700/50 bg-forest-800/40 px-5 py-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] sm:gap-px sm:border-0 sm:bg-transparent sm:p-0"
              >
                <div className="flex items-start gap-3 sm:bg-forest-800/60 sm:px-6 sm:py-6">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-400/15 text-gold-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="sm:hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">
                      Pillar
                    </div>
                    <h3 className="font-serif text-lg font-bold text-cream-50 leading-snug">
                      {item.pillar}
                    </h3>
                  </div>
                </div>
                <div className="sm:bg-forest-800/40 sm:px-6 sm:py-6">
                  <div className="sm:hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">
                    Focus &amp; Value
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
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
              Direct Connection to Elim Empowerment Centre
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
              Expanding Our Capacity to Raise Women of Influence
            </h2>
            <div className="mt-6 space-y-5 text-forest-700 leading-relaxed">
              <p>
                The ultimate vision of the InfluenceHER movement is to have a
                permanent home where thousands of women can receive year-round
                leadership development, mentorship, and enterprise support.
              </p>
              <p>
                This is why the Elim Empowerment Centre is being built. Elim
                will house the physical classrooms, digital training labs, and
                incubation suites for the InfluenceHER Institute, allowing us to
                scale our capacity and equip generations of female leaders.
              </p>
            </div>
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
              Learn More / Connect with InfluenceHER Institute
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
