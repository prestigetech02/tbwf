import { Link } from 'react-router-dom';
import { Building2, ArrowRight, HandHeart } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const projectImg =
  'https://images.pexels.com/photos/1816030/pexels-photo-1816030.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200';

export default function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            Our Projects
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900">
            The Center Building &amp; Restoration Project
          </h2>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid items-stretch gap-0 overflow-hidden rounded-3xl bg-white shadow-[0_10px_44px_rgba(16,42,28,0.10)] ring-1 ring-forest-100 transition-all duration-700 lg:grid-cols-2 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Image */}
          <div className="relative min-h-[280px] lg:min-h-full">
            <img
              src={projectImg}
              alt="Modern building architecture representing the future center"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-forest-900/30 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-xl bg-forest-950/70 px-4 py-3 backdrop-blur-sm ring-1 ring-gold-400/30">
              <Building2 className="h-6 w-6 text-gold-300" />
              <span className="text-sm font-semibold text-cream-50">
                A home for kingdom enterprise
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
              Building a space where businesses are birthed and lives are
              transformed
            </h3>
            <p className="mt-5 leading-relaxed text-forest-700">
              The Center Building &amp; Restoration Project is our bold,
              ongoing initiative to establish a physical home for TBWF — a
              place where women gather for fellowship, receive training, access
              mentorship, and launch enterprises that change their futures.
            </p>
            <p className="mt-4 leading-relaxed text-forest-700">
              We are asking for your prayers, your support, and your
              partnership. Together we can build more than walls — we can build
              a legacy of empowered women and transformed communities.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#support"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-cream-50 shadow-md transition-all hover:bg-forest-600 hover:-translate-y-0.5"
              >
                <HandHeart className="h-4 w-4" />
                Partner With Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-forest-800 ring-1 ring-forest-300 transition-all hover:bg-forest-50"
              >
                Request Project Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
