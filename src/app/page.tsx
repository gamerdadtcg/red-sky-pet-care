import Image from "next/image";
import Link from "next/link";
import {
  Bird,
  Cat,
  Clock3,
  Footprints,
  HeartHandshake,
  Home,
  MoonStar,
  PawPrint,
  ShieldCheck,
} from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Book" },
];

const services = [
  {
    icon: Footprints,
    title: "Neighborhood dog walks",
    copy: "Sniff-rich loops sized to your dog’s energy — from gentle potty breaks to longer adventure strolls.",
  },
  {
    icon: Home,
    title: "Drop-in visits",
    copy: "Feeding, fresh water, litter tidy-ups, playtime, and a quick home check while you’re at work or away.",
  },
  {
    icon: MoonStar,
    title: "Overnight sitting",
    copy: "Your pets stay in their own beds. Evening and morning routines covered so mornings still feel normal.",
  },
  {
    icon: Cat,
    title: "Cat & small-pet care",
    copy: "Quiet company for cats, rabbits, and feathered friends — meds, enrichment, and a calm presence.",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Insured & background-checked",
    copy: "Peace of mind for keys, homes, and the animals who live there.",
  },
  {
    icon: HeartHandshake,
    title: "Photo updates every visit",
    copy: "A short note and a snapshot so you know nap time went well.",
  },
  {
    icon: Clock3,
    title: "Reliable local windows",
    copy: "Consistent visit times across Santa Clarita — not a revolving door of sitters.",
  },
];

export default function HomePage() {
  return (
    <div className="atmosphere relative flex min-h-full flex-col overflow-x-hidden grain">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="#top" className="text-white drop-shadow-sm">
            <BrandLockup size="nav" />
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild variant="secondary" className="h-10 bg-white/95 px-4 text-cedar-deep hover:bg-white">
            <a href="#contact">Request a visit</a>
          </Button>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero — full-bleed brand composition */}
        <section className="relative min-h-[100svh] w-full overflow-hidden">
          <Image
            src="/hero-scv-overlook.jpg"
            alt="A dog on a Santa Clarita Valley mountain ridge looking out over the city at sunset — Red Sky Pet Care"
            fill
            priority
            className="animate-soft-zoom object-cover object-[22%_60%] sm:object-[28%_55%]"
            sizes="100vw"
          />
          {/* Readability scrims tuned for red-sky overlook photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_oklch(0.22_0.03_40_/0.55)_0%,_transparent_55%)]" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:justify-center lg:pb-24">
            <p className="animate-fade-up text-white drop-shadow-sm">
              <BrandLockup size="hero" />
            </p>
            <span
              className="animate-draw-line mt-4 mb-6 block h-1 w-24 rounded-full bg-leaf"
              aria-hidden
            />
            <h1 className="animate-fade-up delay-1 max-w-xl font-display text-2xl font-semibold leading-snug tracking-tight text-white drop-shadow-sm sm:text-3xl md:text-4xl">
              Pet sitting that feels like home.
            </h1>
            <p className="animate-fade-up delay-2 mt-4 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
              Neighborhood walks, drop-ins, and overnight care for Santa Clarita
              pets — so travel days stay low-stress for everyone.
            </p>
            <div className="animate-fade-up delay-3 mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 px-6 text-base">
                <a href="#contact">Book a meet &amp; greet</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-white/50 bg-black/25 px-6 text-base text-white backdrop-blur-sm hover:bg-black/40 hover:text-white"
              >
                <a href="#services">See services</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services — one job, no card grid clutter */}
        <section id="services" className="relative scroll-mt-8 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-leaf">
              Services
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-cedar-deep sm:text-4xl md:text-5xl">
              Care that fits real schedules
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Choose the rhythm your pets already know. Every visit includes
              feeding, hydration, bathroom breaks, and a little extra affection.
            </p>

            <ul className="mt-14 divide-y divide-border/80 border-y border-border/80">
              {services.map((service) => (
                <li
                  key={service.title}
                  className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-8 sm:py-10"
                >
                  <service.icon
                    className="mt-1 size-8 text-cedar"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-cedar-deep sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">
                      {service.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* About / trust */}
        <section id="about" className="relative scroll-mt-8 py-20 sm:py-28">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-[5/6]">
              <Image
                src="/about-pet.jpg"
                alt="Dog and cat resting together — Red Sky Pet Care"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cedar-deep/40 to-transparent" />
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-leaf">
                About
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cedar-deep sm:text-4xl md:text-5xl">
                A familiar face for the animals who already own the couch
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Red Sky Pet Care is based in Santa Clarita, CA (91387) and built
                around routines that matter: the same walking route, the same
                treat jar, the same calm goodbye. Travis treats every visit like
                borrowing a friend’s keys — carefully, clearly, and with plenty
                of belly rubs.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We serve 91387 and surrounding Santa Clarita neighborhoods, with
                a meet-and-greet before any booking so pets (and people) know
                what to expect.
              </p>

              <ul className="mt-10 space-y-6">
                {trustPoints.map((point) => (
                  <li key={point.title} className="flex gap-4">
                    <point.icon
                      className="mt-0.5 size-6 shrink-0 text-cedar"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <div>
                      <h3 className="font-display text-lg font-semibold text-cedar-deep">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-muted-foreground">{point.copy}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative scroll-mt-8 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-leaf">
                Book
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cedar-deep sm:text-4xl md:text-5xl">
                Tell us about your pets
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Share dates, routines, and quirks. If you’re in 91387 or nearby
                Santa Clarita, we’ll reply with availability and suggest a free
                meet &amp; greet.
              </p>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
              <ContactForm />
              <aside className="space-y-6 text-muted-foreground">
                <div className="flex gap-3">
                  <Bird className="mt-1 size-5 shrink-0 text-cedar" aria-hidden />
                  <p>
                    Prefer email? Reach out at{" "}
                    <a
                      className="font-medium text-cedar-deep underline-offset-4 hover:underline"
                      href="mailto:hello@redskypetcare.example"
                    >
                      hello@redskypetcare.example
                    </a>
                    .
                  </p>
                </div>
                <div className="flex gap-3">
                  <PawPrint className="mt-1 size-5 shrink-0 text-cedar" aria-hidden />
                  <p>
                    First-time clients start with a short meet &amp; greet so
                    keys, meds, and personalities are sorted before travel day.
                  </p>
                </div>
                <div className="rounded-2xl border border-dashed border-border bg-skywash/40 p-5 text-sm leading-relaxed">
                  <p className="font-medium text-cedar-deep">
                    Santa Clarita, CA 91387
                  </p>
                  <p className="mt-2">
                    Red Sky Pet Care serves this ZIP and surrounding areas.
                    Rates and phone are still open for Travis to finalize — this
                    form is client-side only for now.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 bg-cedar-deep text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <BrandLockup size="footer" />
            <p className="mt-2 max-w-sm text-white/70">
              Pet sitting in Santa Clarita, CA 91387 and nearby — walks,
              drop-ins, and overnight care with a familiar face.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-white/80">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
