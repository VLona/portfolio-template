// Reusable card component for each service.
// Defined once, used 3 times below with different props.
function ServiceCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="font-serif text-2xl text-amber-700 mb-6">{number}</p>
      <h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-stone-600 leading-relaxed mb-6">{description}</p>
      <a
        href="#quote"
        className="text-sm font-medium text-stone-900 border-b border-stone-400 hover:border-stone-900 pb-1 transition-colors"
      >
        Learn more →
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* Top bar — logo on left, phone on right */}
      <header className="border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-sm bg-stone-900 flex items-center justify-center text-stone-50 text-sm font-semibold">
              N
            </div>
            <span className="text-base font-semibold tracking-tight">
              Northwind
            </span>
          </div>
          <a
            href="tel:6125550199"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            <span className="hidden sm:inline">Call </span>(612) 555-0199
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium mb-6">
              Family-owned since 1987
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-stone-900 mb-6">
              Windows that
              <br />
              last a lifetime.
              <br />
              <span className="italic text-amber-700">Installed in days.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-md mb-10">
              Premium replacement windows and doors, hand-installed by
              Minnesota&apos;s most trusted local team.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-6 py-4 rounded-md text-base font-medium hover:bg-stone-800 transition-colors"
              >
                Get a Free Quote
                <span aria-hidden>→</span>
              </a>
              <a
                href="#services"
                className="text-base font-medium text-stone-700 hover:text-stone-900 transition-colors px-2 py-4"
              >
                See Our Services
              </a>
            </div>
            <p className="text-sm text-stone-500 mt-8">
              Licensed &amp; insured · Lifetime warranty · 4,200+ MN homes
              upgraded
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-stone-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80&auto=format&fit=crop"
              alt="Modern home with large windows"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="border-t border-stone-200/70 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          {/* Section heading */}
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium mb-4">
              What we do
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-stone-900">
              Three things.{" "}
              <span className="italic text-amber-700">Done right.</span>
            </h2>
          </div>

          {/* The 3 cards — using our ServiceCard component 3 times */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <ServiceCard
              number="01"
              title="Replacement Windows"
              description="Triple-pane, energy-efficient windows installed in 1–2 days. From single units to whole-home replacements."
            />
            <ServiceCard
              number="02"
              title="Entry & Patio Doors"
              description="Solid-wood entry doors, fiberglass insulated doors, and sliding patio doors. Custom-fitted to your frame."
            />
            <ServiceCard
              number="03"
              title="Energy Upgrades"
              description="Cut your heating bill by 30%+ with Energy Star certified installations. Eligible for state rebates."
            />
          </div>
        </div>
      </section>

      {/* Contact / Quote form */}
      <section
        id="quote"
        className="border-t border-stone-200/70 bg-stone-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Left: pitch (takes 2/5 of width on desktop) */}
            <div className="lg:col-span-2">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium mb-4">
                Get a free quote
              </p>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-stone-900 mb-6">
                Same-day response.{" "}
                <span className="italic text-amber-700">No pressure.</span>
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                Tell us about your project. We&apos;ll send a real quote (not
                a salesy follow-up) within 24 hours.
              </p>
              <ul className="space-y-3 text-stone-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 mt-1" aria-hidden>
                    ✓
                  </span>
                  Free in-home consultation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 mt-1" aria-hidden>
                    ✓
                  </span>
                  No-obligation estimate
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 mt-1" aria-hidden>
                    ✓
                  </span>
                  Lifetime warranty on all installations
                </li>
              </ul>
            </div>

            {/* Right: form (takes 3/5 of width on desktop) */}
            <div className="lg:col-span-3">
              <form className="bg-white border border-stone-200 rounded-md p-8 md:p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-stone-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:border-stone-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-stone-700 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(612) 555-0199"
                      className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:border-stone-900 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-stone-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:border-stone-900 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-stone-700 mb-2"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="I'm looking to replace 6 windows on the second floor..."
                    className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:border-stone-900 transition-colors resize-none"
                  />
                </div>
                {/* TODO Phase 5: wire up real submission (Supabase or Formspree).
                    For now button is type="button" so the form doesn't try to submit. */}
                <button
                  type="button"
                  className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-6 py-4 rounded-md text-base font-medium hover:bg-stone-800 transition-colors"
                >
                  Send Quote Request
                  <span aria-hidden>→</span>
                </button>
                <p className="text-xs text-stone-500 pt-2">
                  We respond within 24 hours. Your info stays private — no
                  spam, no sharing.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
