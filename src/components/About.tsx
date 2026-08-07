import { Quote } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const aboutImg = '/images/about.png';

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-forest-900 overflow-hidden">
      {/* texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(58,118,81,0.18),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}
          <div
            ref={ref}
            className={`relative transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl ring-1 ring-gold-400/20">
              <img
                src={aboutImg}
                alt="Victorious Praying Women Ministry speaker on stage"
                className="aspect-[4/3] w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 to-transparent" />
            </div>
            {/* floating badge — inset on mobile to avoid clipping */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-auto sm:-bottom-6 sm:left-auto sm:-right-4 lg:-right-6 flex items-center gap-3 rounded-2xl bg-cream-50 px-4 py-3 sm:px-5 sm:py-4 ring-1 ring-forest-100">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-forest-800">VPWM</span>
              <span className="text-xs leading-tight font-medium text-forest-600">
                Victorious Praying
                <br />
                Women Ministry
              </span>
            </div>
          </div>

          {/* Narrative */}
          <div
            className={`transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
              Our Vision &amp; Impact
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight">
              Transformation through faith, growth, and enterprise
            </h2>

            <div className="mt-7 space-y-5 text-cream-200 leading-relaxed">
              <p>
                We believe that true transformation occurs when spiritual
                growth, personal development, and economic empowerment come
                together. TBWF exists to see women rise as wholehearted
                disciples and confident marketplace leaders — building
                businesses that bless their families, communities, and the
                Kingdom.
              </p>
            </div>

            {/* Callout quote */}
            <div className="mt-8 rounded-2xl border-l-2 border-gold-400 bg-forest-800/60 p-6 backdrop-blur-sm">
              <Quote className="h-7 w-7 text-gold-300" />
              <p className="mt-3 font-serif text-lg italic text-cream-100 leading-relaxed">
                “True transformation occurs when spiritual growth, personal
                development, and economic empowerment come together.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
