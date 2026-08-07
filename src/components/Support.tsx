import { Link } from 'react-router-dom';
import { Check, Mail } from 'lucide-react';
import { givingTiers } from '@/data';
import { useInView } from '@/hooks/useInView';

export default function Support() {
  return (
    <section id="support" className="relative py-24 sm:py-32 bg-forest-950 overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.12),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            Support Us
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50">
            Partner with the movement
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream-200">
            Your generosity fuels fellowships, training, mentorship, and the
            Center Building Project. Choose a giving tier below or reach out to
            partner in another way.
          </p>
        </div>

        {/* Tiers */}
        <div className="mt-16 grid gap-6 pt-2 lg:grid-cols-3 lg:pt-0">
          {givingTiers.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        {/* Direct contact trigger */}
        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-forest-900/60 p-8 text-center ring-1 ring-gold-400/20 backdrop-blur-sm">
          <p className="font-serif text-xl text-cream-50">
            Prefer to give a one-time gift or partner as an organization?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3 text-sm font-semibold text-forest-900 shadow-md ring-1 ring-gold-500/40 transition-all hover:bg-gold-300 hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            Contact Us to Partner
          </Link>
        </div>
      </div>
    </section>
  );
}

function TierCard({
  tier,
  index,
}: {
  tier: (typeof givingTiers)[number];
  index: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const featured = tier.featured;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col rounded-2xl p-6 sm:p-7 transition-all duration-700 ${
        featured
          ? 'bg-cream-50 ring-2 ring-gold-400 lg:-translate-y-4'
          : 'bg-forest-900/70 ring-1 ring-forest-700 backdrop-blur-sm'
      } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
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
      <Link
        to="/contact"
        className={`mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
          featured
            ? 'bg-forest-700 text-cream-50 hover:bg-forest-600'
            : 'bg-gold-400 text-forest-900 hover:bg-gold-300'
        }`}
      >
        <Check className="h-4 w-4" />
        Give Now
      </Link>
    </div>
  );
}
