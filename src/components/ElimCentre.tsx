import {
  Briefcase,
  Cpu,
  Users,
  HeartHandshake,
  type LucideIcon,
} from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const elimFocusAreas: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Briefcase,
    title: 'Business Incubation',
    description:
      'Marketplace training, mentoring, and enterprise support for women building sustainable ventures.',
  },
  {
    icon: Cpu,
    title: 'Digital Tech Labs',
    description:
      'Vocational skills spaces and innovation labs where youth and entrepreneurs gain practical, future-ready abilities.',
  },
  {
    icon: Users,
    title: 'Leadership & Mentorship',
    description:
      'Structured mentorship that raises leaders and entrepreneurs to influence society with integrity and purpose.',
  },
  {
    icon: HeartHandshake,
    title: 'Community Restoration',
    description:
      'Year-round outreach, discipleship, and programs that restore dignity and hope across generations.',
  },
];

export default function ElimCentre() {
  return (
    <section id="elim-centre" className="relative pt-24 pb-12 sm:pt-32 sm:pb-14 bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            The Elim Empowerment Centre
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900">
            What the Elim Centre will do
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-forest-700">
            A permanent home where faith meets action, designed to equip women,
            youth, and leaders through enterprise, skills, mentorship, and
            community impact.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {elimFocusAreas.map((area, i) => (
            <ElimCard key={area.title} area={area} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ElimCard({
  area,
  index,
}: {
  area: (typeof elimFocusAreas)[number];
  index: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const Icon = area.icon;

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
        {area.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-forest-600">
        {area.description}
      </p>
      <div className="mt-5 h-1 w-12 rounded-full bg-gold-400 transition-all duration-300 group-hover:w-20" />
    </div>
  );
}
