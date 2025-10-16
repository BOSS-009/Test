"use client"

export function CTA() {
  return (
    <div className="rounded-2xl border border-[color:var(--blend-muted)]/30 bg-white/5 p-6 sm:p-8">
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-balance">Ready to Upgrade Your College Life?</h2>
      <p className="mt-2 text-xs sm:text-sm md:text-base text-[color:var(--blend-muted)]">
        Join thousands of students discovering campus events, connecting with clubs, and making memories with Blends.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
        <a
          href="https://ysrephzg.formester.com/f/k6YG0qQ6E"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-[color:var(--blend-primary)] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium hover:bg-[color:var(--blend-accent)] transition-colors"
          aria-label="Apply for Blends beta launch"
        >
          Apply for Beta Launch
        </a>
      </div>

      <div className="mt-6 text-xs text-[color:var(--blend-muted)]">
        By downloading, you agree to our Terms and Privacy Policy.
      </div>
    </div>
  )
}
