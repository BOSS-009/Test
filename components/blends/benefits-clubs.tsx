"use client"

export function BenefitsClubs() {
  const bullets = [
    "Sell tickets instantly — no manual tracking 🎟️",
    "Instant settlements & payment processing 💸",
    "Boost event reach across 20+ colleges in Bangalore 🌎",
    "Marketing & content support — we make your event shine ✨",
    "Sponsorship help & brand collaborations with 50+ top brands 🏷️",
    "ML-powered dashboards & analytics to track attendance & engagement 📊",
    "Network with other clubs, organizers & communities 🤝",
    "Seamless event check-ins & attendee management ✅",
    "Custom campaigns & hype-building features to sell out your events 🎉",
  ]

  return (
    <div>
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-balance">
        Take Your Campus Event to the Next Level 🚀
      </h2>
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--blend-accent)] text-[color:var(--blend-bg)] text-xs flex-shrink-0"
                >
                  ✓
                </span>
                <span className="text-pretty text-sm sm:text-base">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="order-1 md:order-2 rounded-xl border border-[color:var(--blend-muted)]/30 bg-white/5 p-4 overflow-hidden max-w-md mx-auto md:mx-0 w-full"
          aria-label="Organizer dashboard preview"
        >
          <img
            src="/blends/clubs-dashboard.png"
            alt="Clubs dashboard with instant settlements, ML-powered analytics, marketing support, and network hub features"
            className="w-full h-auto rounded-lg object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  )
}
