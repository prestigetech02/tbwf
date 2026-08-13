import { Link } from 'react-router-dom';
import {
  ArrowRight,
  HeartPulse,
  Briefcase,
  GraduationCap,
  Users,
} from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { GiveNowButton } from '@/components/GiveModal';

const founderImg = '/images/founder.png';

const heroImg = '/images/about.png';

const elimPillars = [
  {
    icon: Briefcase,
    title: 'Financial Independence',
    text: 'Women empowered to build sustainable enterprises and lasting provision.',
  },
  {
    icon: GraduationCap,
    title: 'Skills for the Next Generation',
    text: 'Young people equipped with relevant, practical skills for the future.',
  },
  {
    icon: Users,
    title: 'Mentorship & Leadership',
    text: 'Entrepreneurs mentored and leaders raised to influence with integrity.',
  },
  {
    icon: HeartPulse,
    title: 'Health & Wholeness',
    text: 'Informed decisions, prevention, and support for healthier, purposeful lives.',
  },
];

export default function OurVisionaryPage() {
  return (
    <>
      <PageHero />
      <IntroPortrait />
      <ElimVision />
      <Invitation />
      <TheQuestion />
      <Closing />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative min-h-[48vh] overflow-hidden">
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

      <div className="relative flex min-h-[48vh] items-end pb-14 pt-32 sm:pb-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-200 ring-1 ring-gold-400/30 animate-fade-up">
            Founder&apos;s Message
          </span>
          <h1
            className="mt-6 max-w-3xl font-serif text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] text-cream-50 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Our Visionary
          </h1>
          <p
            className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-cream-200 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            A vision to build lives, not just a building.
          </p>
        </div>
      </div>
    </section>
  );
}

function IntroPortrait() {
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
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl ring-1 ring-forest-100">
                <img
                  src={founderImg}
                  alt="Pastor Mayokun Oreofe, Chief Servant of Victorious Praying Women Ministry"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
                <div className="rounded-xl bg-cream-50 px-5 py-4 ring-1 ring-forest-100">
                  <p className="font-serif text-lg sm:text-xl font-bold text-forest-900 leading-snug">
                    Pastor Mayokun Oreofe
                  </p>
                  <p className="mt-1 text-sm text-forest-600">
                    Chief Servant
                  </p>
                  <p className="text-sm text-forest-600">
                    Victorious Praying Women Ministry
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
              The Journey So Far
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
              Transformation through Thriving Business Women Fellowship
            </h2>
            <p className="mt-6 text-forest-700 leading-relaxed">
              Dear Friend,
            </p>
            <p className="mt-4 text-lg text-forest-800 leading-relaxed">
              Welcome to Elim Empowerment Centre.
            </p>
            <div className="mt-5 space-y-5 text-forest-700 leading-relaxed">
              <p>
                For many years, God has given us the privilege of serving women,
                families, entrepreneurs, and communities through Victorious
                Praying Women Ministry. We have witnessed firsthand the
                extraordinary transformation that takes place when people
                encounter God, discover their purpose, and receive the right
                support to pursue their dreams.
              </p>
              <p>
                Through our marketplace platform, Thriving Business Women
                Fellowship, thousands of women have been equipped with biblical
                principles, practical business knowledge, leadership skills, and
                the confidence to build thriving enterprises.
              </p>
              <p>
                We have celebrated remarkable testimonies of businesses launched,
                families restored, careers transformed, and destinies fulfilled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TheQuestion() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="relative bg-forest-900 py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      <div
        ref={ref}
        className={`relative mx-auto max-w-3xl px-5 sm:px-8 text-center transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
          The Turning Point
        </span>
        <p className="mt-6 text-cream-200 leading-relaxed">
          Yet, as the work continued to grow, one question remained in my heart:
        </p>
        <blockquote className="mt-8 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-cream-50">
          How can we expand this impact and create a lasting legacy that will
          continue to transform lives for generations?
        </blockquote>
        <p className="mt-10 text-lg text-gold-200 leading-relaxed">
          That question gave birth to the vision of Elim Empowerment Centre.
        </p>
      </div>
    </section>
  );
}

function ElimVision() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative bg-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="max-w-3xl font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
            Where every life can blossom
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="space-y-5 text-forest-700 leading-relaxed">
              <p>
                At Elim, we believe that every life can blossom when given the
                right environment, godly guidance, practical skills, and access
                to relevant health information. It is a place where women and
                individuals are empowered to make informed decisions about their
                health, equipped with knowledge that can help prevent and
                address health challenges, and supported as they pursue
                healthier, more purposeful, and fulfilling lives—with
                opportunities to thrive.
              </p>
              <p>
                It is where women will be empowered to become financially
                independent, young people will be equipped with relevant skills,
                entrepreneurs will receive mentorship and business development
                support, and leaders will be raised to influence society with
                integrity and excellence.
              </p>
            </div>
            <div className="space-y-5 text-forest-700 leading-relaxed">
              <p>
                Our desire is to create an environment where faith and
                enterprise work together—where prayer is matched with practical
                action, and where lives are transformed spiritually,
                economically, emotionally, and socially.
              </p>
              <p>
                We believe that every individual carries God-given potential.
                Sometimes all that is needed is an opportunity, a mentor, a
                skill, or a community that believes in them. Elim will provide
                that opportunity.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {elimPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl bg-white p-6 ring-1 ring-forest-100"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-700 text-gold-300">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-forest-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-600">
                  {pillar.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Invitation() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section className="relative bg-cream-100 py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-5 sm:px-8 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
          An Invitation
        </span>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
          This vision belongs to everyone who believes
        </h2>
        <div className="mt-8 space-y-5 text-forest-700 leading-relaxed">
          <p>
            This vision is bigger than one person or one ministry. It is a
            vision that belongs to everyone who believes in empowering people,
            restoring dignity, and building stronger communities.
          </p>
          <p>
            Today, we invite you to become a part of this divine assignment.
            Through your financial support, partnership, or advocacy, you are
            helping to build more than a centre—you are investing in transformed
            lives, stronger families, thriving businesses, and future
            generations.
          </p>
          <p>
            Together, we can create a legacy of hope, empowerment, and kingdom
            impact that will outlive us all.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <GiveNowButton className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-forest-900 transition-all hover:bg-gold-300 hover:-translate-y-0.5">
            Partner With Us
            <ArrowRight className="h-4 w-4" />
          </GiveNowButton>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full px-6 py-3.5 text-sm font-semibold text-forest-800 ring-1 ring-forest-200 transition-colors hover:bg-forest-50 hover:ring-forest-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="relative bg-forest-950 py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.1),transparent_50%)]" />
      <div
        ref={ref}
        className={`relative mx-auto max-w-3xl px-5 sm:px-8 text-center transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="text-lg leading-relaxed text-cream-200">
          Thank you for believing in this vision and for partnering with us to
          make Elim Empowerment Centre a reality.
        </p>
        <p className="mt-4 font-serif text-xl text-gold-300">
          May God richly bless you.
        </p>
        <div className="mx-auto mt-10 h-px w-16 bg-gold-400/40" />
        <p className="mt-10 font-serif text-2xl font-bold text-cream-50">
          Welcome to Elim Empowerment Centre.
        </p>
        <div className="mt-10">
          <p className="font-serif text-lg font-semibold text-cream-50">
            Pastor Mayokun Oreofe
          </p>
          <p className="mt-1 text-sm text-cream-300">
            Chief Servant
          </p>
          <p className="text-sm text-cream-400">
            Victorious Praying Women Ministry
          </p>
        </div>
      </div>
    </section>
  );
}
