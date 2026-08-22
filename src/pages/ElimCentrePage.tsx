import { Link } from 'react-router-dom';
import { Building2, Check } from 'lucide-react';
import { givingTiers } from '@/data';
import { useGiveModal } from '@/components/GiveModal';
import { useInView } from '@/hooks/useInView';

const elimImg = '/images/elim-centre.png';

const purposes = [
  'Business incubation and marketplace training',
  'Digital tech labs and vocational skills spaces',
  'Leadership development and community restoration',
];

export default function ElimCentrePage() {
  return (
    <>
      <PageHero />
      <ProposedView />
      <GiveSection />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative overflow-hidden bg-cream-100 pt-32 pb-12 sm:pt-36 sm:pb-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700 ring-1 ring-gold-400/30">
            The Building Project
          </span>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl font-bold leading-tight text-forest-900">
            Elim Empowerment Centre
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-forest-700">
            A permanent home where faith meets action - raising women, youth, and
            leaders through enterprise, skills, and community restoration.
          </p>
        </div>

        <div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-forest-100">
            <img
              src={elimImg}
              alt="Proposed view of the Elim Empowerment Centre"
              className="aspect-[4/3] w-full object-cover object-center"
            />
          </div>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-forest-500 sm:text-right">
            Proposed view of the Elim Empowerment Centre
          </p>
        </div>
      </div>
    </section>
  );
}

function ProposedView() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section className="relative bg-gold-50 py-16 sm:py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl px-5 sm:px-8 text-center transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="text-forest-700 leading-relaxed">
          Elim Empowerment Centre is the physical hub of Victorious Praying
          Women Ministry and TBWF. We are building a dedicated facility for
          mentorship, business incubation, digital innovation, vocational
          training, and year-round outreach, so impact is no longer limited to
          temporary venues.
        </p>
        <ul className="mt-8 space-y-4">
          {purposes.map((item) => (
            <li
              key={item}
              className="flex items-start justify-center gap-3 text-forest-700"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forest-700 text-gold-300">
                <Building2 className="h-4 w-4" />
              </span>
              <span className="pt-1.5 max-w-md text-left leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function GiveSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section className="relative bg-forest-950 py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            Partner With Us
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-cream-50">
            Help us build Elim
          </h2>
          <p className="mt-5 text-cream-200 leading-relaxed">
            Your gift fuels the Centre Building Project; classrooms, tech labs,
            incubation suites, and a lasting sanctuary for generations.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid gap-6 pt-2 lg:grid-cols-3 lg:pt-0 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {givingTiers.map((tier, i) => (
            <GiveCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-cream-300">
          Prefer another way to partner?{' '}
          <Link
            to="/contact"
            className="font-semibold text-gold-300 transition-colors hover:text-gold-200"
          >
            Contact us
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function GiveCard({
  tier,
  index,
}: {
  tier: (typeof givingTiers)[number];
  index: number;
}) {
  const { openGiveModal } = useGiveModal();
  const featured = tier.featured;

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-6 sm:p-7 ${
        featured
          ? 'bg-cream-50 ring-2 ring-gold-400 lg:-translate-y-4'
          : 'bg-forest-900/70 ring-1 ring-forest-700'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-forest-900">
          Most Impactful
        </span>
      )}
      <h3
        className={`font-serif text-xl font-bold ${
          featured ? 'text-forest-900' : 'text-cream-50'
        }`}
      >
        {tier.name}
      </h3>
      <div
        className={`mt-2 font-serif text-3xl font-bold ${
          featured ? 'text-forest-800' : 'text-gold-300'
        }`}
      >
        {tier.amount}
      </div>
      <p
        className={`mt-4 text-sm leading-relaxed ${
          featured ? 'text-forest-600' : 'text-cream-200'
        }`}
      >
        {tier.description}
      </p>
      <button
        type="button"
        onClick={openGiveModal}
        className={`mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
          featured
            ? 'bg-forest-700 text-cream-50 hover:bg-forest-600'
            : 'bg-gold-400 text-forest-900 hover:bg-gold-300'
        }`}
      >
        <Check className="h-4 w-4" />
        Give Now
      </button>
    </div>
  );
}
