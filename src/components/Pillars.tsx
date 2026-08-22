import { pillars } from '@/data';
import { useInView } from '@/hooks/useInView';

export default function Pillars() {
  return (
    <section id="pillars" className="relative pt-12 pb-24 sm:pt-14 sm:pb-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            What We Do
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900">
            Four Pillars of Empowerment
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-forest-700">
            We raise marketplace disciples through a holistic model that joins
            faith, skill, relationship, and resource.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const Icon = pillar.icon;

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col rounded-2xl bg-white p-7 shadow-[0_4px_24px_rgba(16,42,28,0.06)] ring-1 ring-forest-100/60 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_18px_44px_rgba(16,42,28,0.12)] ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest-700 text-gold-300 shadow-md transition-colors group-hover:bg-forest-600">
        <Icon className="h-7 w-7" strokeWidth={2} />
      </div>
      <h3 className="mt-6 font-serif text-xl font-bold text-forest-900">
        {pillar.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-forest-600">
        {pillar.description}
      </p>
      <div className="mt-5 h-1 w-12 rounded-full bg-gold-400 transition-all duration-300 group-hover:w-20" />
    </div>
  );
}
