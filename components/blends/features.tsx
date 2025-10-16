"use client"

const items = [
  {
    title: "Discover",
    tagline: "Events near & across 20+ colleges",
    img: "/blends/app-screenshot-1.png",
    alt: "Discover campus events in Blends",
  },
  {
    title: "Join",
    tagline: "Communities and make connections",
    img: "/blends/app-screenshot-4.png",
    alt: "Profile and saved events in Blends",
  },
  {
    title: "Book",
    tagline: "Instant tickets, hassle-free check-ins",
    img: "/blends/app-screenshot-3.png",
    alt: "Ticket booking and event details in Blends",
  },
  {
    title: "Track",
    tagline: "Trending clubs & exclusive offers",
    img: "/blends/app-screenshot-2.png",
    alt: "Search and filters for events in Blends",
  },
]

export function Features() {
  return (
    <div>
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-balance">Discover. Join. Book. Track. Grow.</h2>
      <p className="mt-2 text-xs sm:text-sm md:text-base text-[color:var(--blend-muted)]">
        Everything you need to discover and manage campus events in one place.
      </p>

      <div className="mt-8 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-[color:var(--blend-muted)]/30 bg-white/5 backdrop-blur-sm p-3 sm:p-4 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
          >
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-black/50">
              <img src={item.img || "/placeholder.svg"} alt={item.alt} className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-3 sm:mt-4 font-medium text-sm sm:text-base">{item.title}</h3>
            <p className="mt-1 text-xs sm:text-sm text-[color:var(--blend-muted)]">{item.tagline}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
