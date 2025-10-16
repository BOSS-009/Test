"use client"

export function BenefitsStudents() {
  const bullets = [
    "Discover events near & across 20+ colleges in Bangalore 🌎",
    "Instant tickets, hassle-free check-ins 🎟️",
    "Join communities, make connections, expand your network 🤝",
    "Stay updated with trending clubs & events 🔥",
    "Smart recommendations powered by ML for events you'll love 🤖",
    "Get access to exclusive brand collabs & offers 💥",
  ]

  return (
    <div>
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-balance">Never Miss a Campus Moment ✨</h2>
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
        <ul className="space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--blend-primary)] text-[color:var(--blend-bg)] text-xs flex-shrink-0"
              >
                ✓
              </span>
              <span className="text-pretty text-sm sm:text-base">{b}</span>
            </li>
          ))}
        </ul>

        <div
          className="overflow-hidden rounded-xl border border-[color:var(--blend-muted)]/30 bg-white/5 animate-in fade-in slide-in-from-right-4 duration-630"
          aria-label="Anti-spam to Blends graphic"
        >
          <img
            src="/blends/anti-spam-to-blends.png"
            alt="Stop spam. Blends centralizes event updates so you never miss a campus moment."
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
