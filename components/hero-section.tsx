"use client"

import Image from "next/image"
import { BookOpen, ExternalLink, Shield, Cloud } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cloud-hero.png"
          alt="Cloud Computing Network"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(oklch(0.65 0.18 200) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.18 200) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Journal tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
          <BookOpen className="w-4 h-4" />
          IJACSA Vol. 8, No. 10, 2017 · Pg. 183–195
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance mb-6">
          Cloud Computing
          <br />
          <span className="text-primary">Environment</span> and Security
          <br />
          <span className="text-accent">Challenges</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10 text-balance">
          A comprehensive review by Mushtaq, Akram, Khan et al. — exploring cloud architecture, deployment models,
          service models, components, security, and the CIA triad challenges.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: Cloud, label: "4 Deployment Models", sub: "Public · Private · Hybrid · Community" },
            { icon: Shield, label: "3 Service Models", sub: "IaaS · PaaS · SaaS" },
            { icon: Shield, label: "5 Cloud Components", sub: "Hypervisor · VM · Storage · Multi-tenancy · Network" },
            { icon: Shield, label: "3 Security Pillars", sub: "Integrity · Confidentiality · Availability" },
          ].map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-4 text-left"
            >
              <Icon className="w-5 h-5 text-primary mb-2" />
              <p className="text-foreground font-semibold text-sm leading-tight">{label}</p>
              <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{sub}</p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Explore Study
          </a>
          <a
            href="https://thesai.org/Publications/ViewPaper?Volume=8&Issue=10&Code=IJACSA&SerialNo=25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-secondary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Original Paper
          </a>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-0.5 h-8 bg-primary/40 mx-auto" />
        </div>
      </div>
    </section>
  )
}
