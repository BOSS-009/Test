"use client"

export function SocialProof() {
  return (
    <div>
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-balance">
        Trusted by Students, Loved by Clubs 💜
      </h2>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="rounded-lg border border-[color:var(--blend-muted)]/20 bg-white/5 p-4 sm:p-6">
          <div className="text-2xl sm:text-3xl font-bold text-[color:var(--blend-primary)]">100+</div>
          <p className="mt-2 text-xs sm:text-sm text-[color:var(--blend-muted)]">
            clubs trust us to make their events legendary
          </p>
        </div>
        <div className="rounded-lg border border-[color:var(--blend-muted)]/20 bg-white/5 p-4 sm:p-6">
          <div className="text-2xl sm:text-3xl font-bold text-[color:var(--blend-accent)]">7000+</div>
          <p className="mt-2 text-xs sm:text-sm text-[color:var(--blend-muted)]">
            students already discovering campus life with Blends
          </p>
        </div>
        <div className="rounded-lg border border-[color:var(--blend-muted)]/20 bg-white/5 p-4 sm:p-6">
          <div className="text-2xl sm:text-3xl font-bold text-[color:var(--blend-primary)]">50+</div>
          <p className="mt-2 text-xs sm:text-sm text-[color:var(--blend-muted)]">
            brands collaborated for sponsorships & campaigns
          </p>
        </div>
      </div>
    </div>
  )
}
