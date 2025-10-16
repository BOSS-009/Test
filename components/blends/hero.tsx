"use client"

import { useState, useEffect } from "react"

export function Hero() {
  const slides = [
    "/blends/app-screenshot-1.png",
    "/blends/app-screenshot-2.png",
    "/blends/app-screenshot-3.png",
    "/blends/app-screenshot-4.png",
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3150)
    return () => clearInterval(id)
  }, [slides.length])

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="grid items-center gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2">
          <div>
            <h1 className="font-serif text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Never Miss An Oppurtunity Again
            </h1>
            <p className="mt-3 sm:mt-4 text-pretty text-sm sm:text-base md:text-lg opacity-90">
              See what's happening at your college — and discover events at campuses around you. We also help clubs with
              content creation and sponsorships to make every event unforgettable.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
              <a
                href="https://ysrephzg.formester.com/f/k6YG0qQ6E"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[color:var(--blend-primary)] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium hover:bg-[color:var(--blend-accent)] transition-colors"
                aria-label="Apply for Blends beta launch"
              >
                Apply for Beta Launch
              </a>
              <a
                href="https://www.instagram.com/blends.app?igsh=MWsxZTQ5ZzVxaXEwdw=="
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border-2 border-[#8134AF] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-[#8134AF] hover:bg-[#8134AF]/10 transition-colors"
                aria-label="Check out our Instagram Page"
              >
                Check out our Instagram Page
              </a>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div
              className="mx-auto aspect-[9/19] w-48 sm:w-56 md:w-64 lg:w-80 rounded-[2.5rem] border border-[color:var(--blend-muted)]/30 bg-black/60 p-2 sm:p-3 shadow-[0_20px_80px_rgba(37,99,235,0.25)] animate-in fade-in slide-in-from-bottom-4 duration-630"
              aria-hidden="true"
            >
              <div
                className="relative h-full w-full overflow-hidden rounded-[2rem] bg-black"
                role="region"
                aria-roledescription="carousel"
                aria-label="Blends app preview"
              >
                {slides.map((src, i) => (
                  <img
                    key={src}
                    src={src || "/placeholder.svg"}
                    alt={`Blends app screenshot ${i + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-450 ${i === index ? "opacity-100" : "opacity-0"}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                ))}
                <span className="sr-only">
                  Slide {index + 1} of {slides.length}
                </span>
              </div>
            </div>

            <div className="pointer-events-none absolute -top-10 -right-20 h-32 sm:h-40 md:h-48 w-32 sm:w-40 md:w-48 rounded-full blur-3xl bg-[color:var(--blend-primary)]/20" />
            <div className="pointer-events-none absolute -bottom-10 -left-20 h-32 sm:h-40 md:h-48 w-32 sm:w-40 md:w-48 rounded-full blur-3xl bg-[color:var(--blend-accent)]/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
