import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  HandHeart,
  Users,
  MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: 'VPWM Center, Faith District' },
  { icon: Phone, label: 'Phone', value: '+1 (000) 000-0000' },
  { icon: Mail, label: 'Email', value: 'hello@tbwf.org' },
  { icon: Clock, label: 'Office Hours', value: 'Mon – Fri, 9am – 5pm' },
];

const waysToConnect = [
  {
    icon: Users,
    title: 'Join the Fellowship',
    description:
      'Ask about weekly fellowships, training cohorts, and how to get plugged into community.',
  },
  {
    icon: HandHeart,
    title: 'Partner & Give',
    description:
      'Explore giving tiers, one-time gifts, or organizational partnerships that fuel the mission.',
  },
  {
    icon: MessageCircle,
    title: 'General Inquiry',
    description:
      'Project details, mentorship, speaking requests, or anything else on your heart — reach out.',
  },
];

const heroImg =
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';

export default function ContactPage() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      {/* Page hero */}
      <section className="relative min-h-[52vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Women collaborating in a warm professional setting"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-forest-800/55" />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-950/92 via-forest-900/78 to-forest-700/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(212,175,55,0.14),transparent_55%)]" />
        </div>

        <div className="relative flex min-h-[52vh] items-end pb-16 pt-32 sm:pb-20">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-200 ring-1 ring-gold-400/30 animate-fade-up">
              Get in touch
            </span>
            <h1
              className="mt-6 max-w-2xl font-serif text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] text-cream-50 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              Let&apos;s build the Kingdom together
            </h1>
            <p
              className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-cream-200 animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              Have a question, want to join the fellowship, or ready to partner?
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to connect */}
      <section className="relative bg-cream-100 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-3">
            {waysToConnect.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest-100/60 animate-fade-up"
                  style={{ animationDelay: `${0.05 * i}s` }}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-700 text-gold-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-serif text-xl font-bold text-forest-900">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-forest-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + details */}
      <section className="relative bg-cream-100 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div
            ref={ref}
            className={`grid gap-8 lg:grid-cols-5 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Info */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                  Contact details
                </span>
                <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-forest-900">
                  We&apos;re here for you
                </h2>
              </div>
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-forest-100/60"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-700 text-gold-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                        {item.label}
                      </div>
                      <div className="mt-0.5 text-forest-800 font-medium">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="mt-2 rounded-2xl bg-forest-900 p-6 text-cream-100">
                <p className="font-serif text-lg font-semibold text-cream-50">
                  Prefer to partner first?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-cream-300">
                  Explore giving tiers and ways to fuel fellowships, training,
                  and the Center Building Project.
                </p>
                <Link
                  to="/#support"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-forest-900 transition-all hover:bg-gold-300 hover:-translate-y-0.5"
                >
                  <HandHeart className="h-4 w-4" />
                  View Support Options
                </Link>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 rounded-2xl bg-white p-7 sm:p-9 shadow-[0_8px_36px_rgba(16,42,28,0.08)] ring-1 ring-forest-100/60"
            >
              <h2 className="font-serif text-2xl font-bold text-forest-900">
                Send a message
              </h2>
              <p className="mt-2 text-sm text-forest-600">
                Fill out the form below and our team will get back to you soon.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="contact-input"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="contact-input"
                  />
                </Field>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field label="Phone (optional)" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (000) 000-0000"
                    className="contact-input"
                  />
                </Field>
                <Field label="I am interested in" htmlFor="interest">
                  <select
                    id="interest"
                    name="interest"
                    required
                    defaultValue=""
                    className="contact-input"
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option value="fellowship">Joining the Fellowship</option>
                    <option value="partnership">Partnership &amp; Giving</option>
                    <option value="projects">Project Details</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="other">Other</option>
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Subject" htmlFor="subject">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="I'd like to join the fellowship"
                    className="contact-input"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us how you'd like to get involved…"
                    className="contact-input resize-none"
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-700 px-6 py-3.5 text-sm font-semibold text-cream-50 shadow-md transition-all hover:bg-forest-600 hover:-translate-y-0.5"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent — Thank You!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-forest-600">
        {label}
      </span>
      {children}
    </label>
  );
}
