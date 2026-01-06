export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6 sm:pt-32 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl sm:leading-tight lg:text-6xl">
            Your personal AI coach for follow-through.
          </h1>
          <p className="mt-6 text-xl leading-8 text-[#4b5563] sm:text-2xl">
            Turn clarity into consistent action — in under 5 minutes a day.
          </p>
          <p className="mt-4 text-lg leading-7 text-[#6b7280]">
            Reflect • Decide • Act — with a coach that remembers what matters to you
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-[#4a90e2] px-8 py-4 text-base font-medium text-white transition-colors hover:bg-[#3a7bc8] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:ring-offset-2"
            >
              Join the Early Access Waitlist
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-[#d1d5db] bg-white px-8 py-4 text-base font-medium text-[#1a1a1a] transition-colors hover:bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:ring-offset-2"
            >
              See how it works
            </a>
          </div>
        </div>
        
        {/* Visual Preview - Chat-style mockup */}
        <div className="mt-16 mx-auto max-w-2xl">
          <div className="rounded-2xl bg-white p-6 shadow-lg border border-[#e5e7eb]">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4a90e2] text-sm font-medium text-white">
                  AI
                </div>
                <div className="flex-1 rounded-2xl bg-[#f3f4f6] px-4 py-3">
                  <p className="text-[#1a1a1a]">Good morning. What matters most to you today?</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="flex-1 rounded-2xl bg-[#4a90e2] px-4 py-3 text-right">
                  <p className="text-white">I want to focus on writing my book chapter.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4a90e2] text-sm font-medium text-white">
                  AI
                </div>
                <div className="flex-1 rounded-2xl bg-[#f3f4f6] px-4 py-3">
                  <p className="text-[#1a1a1a]">You said focus matters today. Do you want a reminder at 2pm?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Insight Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1a1a1a]">The pain</h2>
              <ul className="space-y-3 text-lg text-[#4b5563]">
                <li>Too many goals</li>
                <li>Not enough follow-through</li>
                <li>Tools that add friction</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#1a1a1a]">The insight</h2>
              <p className="text-lg leading-relaxed text-[#4b5563]">
                The problem isn't motivation.<br />
                It's clarity, consistency, and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold text-[#1a1a1a] sm:text-4xl">
            A simple daily coaching loop
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Step 1: Check-in */}
            <div className="group rounded-2xl bg-white p-6 shadow-sm border border-[#e5e7eb] transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4a90e2]/10 text-2xl">
                1
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#1a1a1a]">Check-in</h3>
              <p className="mt-2 text-[#6b7280]">"What matters today?"</p>
            </div>

            {/* Step 2: Reflect */}
            <div className="group rounded-2xl bg-white p-6 shadow-sm border border-[#e5e7eb] transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4a90e2]/10 text-2xl">
                2
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#1a1a1a]">Reflect</h3>
              <p className="mt-2 text-[#6b7280]">"What worked? What didn't?"</p>
            </div>

            {/* Step 3: Nudge */}
            <div className="group rounded-2xl bg-white p-6 shadow-sm border border-[#e5e7eb] transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4a90e2]/10 text-2xl">
                3
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#1a1a1a]">Nudge</h3>
              <p className="mt-2 text-[#6b7280]">Gentle reminders tied to your intent</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Different Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold text-[#1a1a1a] sm:text-4xl">
            Not another AI. A coach.
          </h2>
          <div className="mt-12 rounded-2xl bg-white p-8 shadow-sm border border-[#e5e7eb]">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-3">This Coach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4a90e2] mt-1">✓</span>
                      <span className="text-[#4b5563]">Remembers context</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4a90e2] mt-1">✓</span>
                      <span className="text-[#4b5563]">Asks before acting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4a90e2] mt-1">✓</span>
                      <span className="text-[#4b5563]">Focuses on follow-through</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4a90e2] mt-1">✓</span>
                      <span className="text-[#4b5563]">Calm, human tone</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-3">Typical AI Tools</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#9ca3af] mt-1">•</span>
                      <span className="text-[#6b7280]">Stateless chats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9ca3af] mt-1">•</span>
                      <span className="text-[#6b7280]">Automates blindly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9ca3af] mt-1">•</span>
                      <span className="text-[#6b7280]">Focuses on answers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9ca3af] mt-1">•</span>
                      <span className="text-[#6b7280]">Oververbose</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold text-[#1a1a1a] sm:text-4xl">
            What it feels like
          </h2>
          <div className="mt-12 space-y-6">
            {/* Morning clarity */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5e7eb]">
              <p className="mb-4 text-sm font-medium text-[#6b7280] uppercase tracking-wide">Morning clarity</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4a90e2] text-sm font-medium text-white">
                    AI
                  </div>
                  <div className="flex-1 rounded-2xl bg-[#f3f4f6] px-4 py-3">
                    <p className="text-[#1a1a1a]">What's one thing you want to move forward today?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="flex-1 rounded-2xl bg-[#4a90e2] px-4 py-3 text-right">
                    <p className="text-white">Finish the proposal draft</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Midday nudge */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5e7eb]">
              <p className="mb-4 text-sm font-medium text-[#6b7280] uppercase tracking-wide">Midday nudge</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4a90e2] text-sm font-medium text-white">
                    AI
                  </div>
                  <div className="flex-1 rounded-2xl bg-[#f3f4f6] px-4 py-3">
                    <p className="text-[#1a1a1a]">You said the proposal matters today. Want a quick check-in at 3pm?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly reflection */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5e7eb]">
              <p className="mb-4 text-sm font-medium text-[#6b7280] uppercase tracking-wide">Weekly reflection</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4a90e2] text-sm font-medium text-white">
                    AI
                  </div>
                  <div className="flex-1 rounded-2xl bg-[#f3f4f6] px-4 py-3">
                    <p className="text-[#1a1a1a]">This week you focused on the proposal 4 out of 5 days. What made those days work?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="flex-1 rounded-2xl bg-[#4a90e2] px-4 py-3 text-right">
                    <p className="text-white">I blocked time in the morning before meetings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-[#6b7280]">Built with early users</p>
          <p className="mt-4 text-sm text-[#9ca3af]">Invite-only beta</p>
          <div className="mt-8 space-y-4">
            <blockquote className="text-lg italic text-[#4b5563]">
              "Helped me finally stick to one goal."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Pricing Tease Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg text-[#4b5563]">
            Free to start.<br />
            Paid plans unlock deeper coaching & memory.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="waitlist" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl bg-[#f3f4f6] px-8 py-16 text-center">
          <h2 className="text-3xl font-semibold text-[#1a1a1a] sm:text-4xl">
            Ready for a calmer way to move forward?
          </h2>
          <div className="mt-8">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-[#4a90e2] px-8 py-4 text-base font-medium text-white transition-colors hover:bg-[#3a7bc8] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:ring-offset-2"
            >
              Join the Waitlist
            </a>
          </div>
          <p className="mt-4 text-sm text-[#6b7280]">
            No spam. Leave anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl border-t border-[#e5e7eb] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-[#6b7280]">Built with care</p>
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#6b7280]">
              <a href="#privacy" className="hover:text-[#1a1a1a] transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-[#1a1a1a] transition-colors">Terms</a>
              <a href="#contact" className="hover:text-[#1a1a1a] transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
