import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const projects = [
  {
    title: 'TEDC',
    subtitle: 'Thriving Enterprise Development Center',
    description:
      'Business incubation, mentoring, and enterprise support for women building sustainable marketplace ventures.',
    image:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=700&w=1000',
    href: 'https://tedc.com.ng',
    external: true,
  },
  {
    title: 'Annual Business Summit',
    subtitle: 'Marketplace Excellence & Kingdom Impact',
    description:
      'A premier gathering of entrepreneurs, professionals, and emerging leaders for faith, strategy, and growth.',
    image:
      'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&h=700&w=1000',
    href: '/annual-business-summit',
  },
  {
    title: 'InfluenceHER Conference',
    subtitle: 'Conference & Institute',
    description:
      'Raising women of influence, purpose, and market capacity to transform society through leadership and enterprise.',
    image:
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&h=700&w=1000',
    href: '/influenceher',
  },
  {
    title: 'Mayokun Oreofe Initiative',
    subtitle: 'MOI — Discipleship & Outreach',
    description:
      'Restoring hope, discipling generations, and building legacy through purpose-driven outreach and mentorship.',
    image: '/images/moi/IMG-20211123-WA0042.jpg',
    href: '/mayokun-oreofe',
  },
  {
    title: 'Household of Faith in Celebration',
    subtitle: 'HFIC — Vessel of Mercy',
    description:
      'Bringing Christmas joy, dignity, and gratitude to pastors, missionaries, and church workers who serve.',
    image: '/images/hfic/_DSC3840.jpg',
    href: '/hfic',
  },
];

export default function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            Our Projects
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900">
            Initiatives transforming lives and communities
          </h2>
          <p className="mt-5 text-forest-600 leading-relaxed">
            From enterprise development to discipleship and seasonal outreach—
            explore the programs shaping marketplace leaders and kingdom impact.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-forest-100 ${
                i === 3 ? 'lg:col-start-1' : ''
              } ${i >= 3 ? 'lg:col-span-1' : ''}`}
              style={{
                transitionDelay: `${i * 80}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-600">
                  {project.subtitle}
                </span>
                <h3 className="mt-2 font-serif text-xl font-bold text-forest-900 leading-snug">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-forest-600">
                  {project.description}
                </p>

                {project.external ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-forest-800 transition-colors hover:text-gold-600"
                  >
                    Read more
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    to={project.href}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-forest-800 transition-colors hover:text-gold-600"
                  >
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
