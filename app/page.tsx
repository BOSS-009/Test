import InfiniteGallery from "@/components/InfiniteGallery"

export default function Home() {
  const sampleImages = [
    { src: "/blends/app-screenshot-1.png", alt: "Blends event discovery feed on tablet" },
    { src: "/blends/app-screenshot-2.png", alt: "Blends search and filter for college events" },
    { src: "/blends/app-screenshot-3.png", alt: "Blends event details and ticket booking flow" },
    { src: "/blends/app-screenshot-4.png", alt: "Your tickets organised" },
    { src: "/blends/app-screenshot-5.png", alt: "Blends profile and saved events list" },
  ]

  return (
    <main className="min-h-screen bg-white relative">
      <a
        href="/blends"
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
        aria-label="Go to Blends"
      >
        <img
          src="/blends/blends-logo.png"
          alt="Blends logo"
          className="h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition"
          loading="eager"
          decoding="async"
        />
      </a>
      
      {/* Gallery layer */}
      <div className="relative z-0">
        <InfiniteGallery
          images={sampleImages}
          speed={1.2}
          zSpacing={1.5}
          visibleCount={4}
          falloff={{ near: 0.8, far: 14 }}
          className="h-screen w-full rounded-lg overflow-hidden"
        />
      </div>

      {/* Text overlay with blend mode */}
      <div className="h-screen inset-0 pointer-events-none fixed flex items-center justify-center text-center px-3 z-10 mix-blend-difference">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight text-balance text-white">
          Never Miss An Opportunity Again
        </h1>
      </div>

      <div className="text-center fixed bottom-6 sm:bottom-8 md:bottom-10 left-0 right-0 font-mono uppercase text-[10px] sm:text-[11px] font-semibold px-4 text-black z-20">
        <p className="hidden sm:block">Use mouse wheel, arrow keys, or touch to navigate</p>
        <p className="opacity-60 text-[9px] sm:text-[11px]">Auto-play resumes after 3 seconds of inactivity</p>
        <a
          href="/blends"
          className="mt-4 sm:mt-6 inline-flex items-center gap-2 rounded-2xl border border-foreground/30 bg-foreground text-background px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold tracking-wider pointer-events-auto hover:opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-foreground/60 transition"
          aria-label="Open the Blends landing page"
        >
          EXPLORE BLENDS
          <span aria-hidden>→</span>
        </a>
      </div>
    </main>
  )
}
