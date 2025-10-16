"use client"

import type React from "react"

import { Hero } from "@/components/blends/hero"
import { Features } from "@/components/blends/features"
import { BenefitsStudents } from "@/components/blends/benefits-students"
import { BenefitsClubs } from "@/components/blends/benefits-clubs"
import { SocialProof } from "@/components/blends/social-proof"
import { CTA } from "@/components/blends/cta"

export default function BlendsPage() {
  // Local design tokens (4-color palette + muted)
  // Primary: blue; Accent: pink; FG: near-white; BG: near-black; Muted: slate tone
  const themeVars: React.CSSProperties = {
    // tokens for this page only
    ["--blend-bg" as any]: "#0b0b0f",
    ["--blend-fg" as any]: "#f8fafc",
    ["--blend-primary" as any]: "#2563eb",
    ["--blend-accent" as any]: "#ec4899",
    ["--blend-muted" as any]: "#94a3b8",
  }

  return (
    <main style={themeVars} className="min-h-dvh bg-[color:var(--blend-bg)] text-[color:var(--blend-fg)]">
      <header className="w-full border-b border-[color:var(--blend-muted)]/20 sticky top-0 z-40 bg-[color:var(--blend-bg)]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Back to landing">
            <img src="/blends/blends-logo.png" alt="Blends logo" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs sm:text-sm">
            <a className="opacity-80 hover:opacity-100 transition" href="#features">
              Features
            </a>
            <a className="opacity-80 hover:opacity-100 transition" href="#students">
              For Students
            </a>
            <a className="opacity-80 hover:opacity-100 transition" href="#clubs">
              For Clubs
            </a>
            <a className="opacity-80 hover:opacity-100 transition" href="#download">
              Download
            </a>
          </nav>
          <a
            href="https://ysrephzg.formester.com/f/k6YG0qQ6E"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[color:var(--blend-primary)] px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium hover:bg-[color:var(--blend-accent)] transition-colors flex-shrink-0"
          >
            Apply for Beta Launch
          </a>
        </div>
      </header>

      <Hero />

      <section id="features" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-24">
        <Features />
      </section>

      <section id="students" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-24">
        <BenefitsStudents />
      </section>

      <section id="clubs" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-24">
        <BenefitsClubs />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-24">
        <SocialProof />
      </section>

      <footer id="download" className="border-t border-[color:var(--blend-muted)]/20">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-24">
          <CTA />
          <p className="mt-6 sm:mt-8 text-xs text-[color:var(--blend-muted)]">
            © {new Date().getFullYear()} Blends. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
