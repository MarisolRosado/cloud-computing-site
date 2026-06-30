"use client"

import Image from "next/image"
import Link from "next/link"
import { BookOpen, ExternalLink, Shield, Cloud, Sparkles } from "lucide-react"

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
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
      </div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(oklch(0.55 0.15 185) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.15 185) 1px, transparent 1px)`,
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

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10 text-balance italic">
          &ldquo;From clouds that soar across the sky, to data guards that keep it dry! <br />
          A deep review where concepts shine, and cloud security models align.&rdquo;
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: Cloud, label: "4 Deployment Ways to Run", sub: "Public, Private, Hybrid fun!" },
            { icon: Shield, label: "3 Service Models Bright", sub: "IaaS, PaaS, and SaaS taking flight!" },
            { icon: Shield, label: "5 Cloud Parts Combined", sub: "Hypervisor, VM, and storage designed!" },
            { icon: Shield, label: "3 Security Pillars True", sub: "Integrity, CIA guiding you!" },
          ].map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-4 text-left hover:border-primary/50 hover:bg-card/90 transition-all duration-300"
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
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary to-primary/80 text-background font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            Explore the Design!
          </a>
          <Link
            href="/references"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/50 text-foreground font-bold rounded-xl hover:bg-accent/30 hover:shadow-lg hover:shadow-accent/20 hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            See Citations Divine (75+)
          </Link>
          <a
            href="https://thesai.org/Publications/ViewPaper?Volume=8&Issue=10&Code=IJACSA&SerialNo=25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-border bg-card/60 text-foreground font-semibold rounded-xl hover:bg-secondary hover:border-foreground/30 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            Original Paper Line
          </a>
        </div>

        {/* Visual Showcase Gallery */}
        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="group relative rounded-2xl overflow-hidden border-2 border-primary/30 bg-card shadow-lg hover:shadow-xl hover:border-primary transition-all duration-300">
            <div className="relative h-56 w-full">
              <Image
                src="/images/pastel_cloud_network.png"
                alt="Pastel Cloud Network"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-left bg-card/95 backdrop-blur-sm border-t border-border/50">
              <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
                <Cloud className="w-4 h-4 text-primary" /> Cloud Network Design So Fine
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                Connecting nodes with pastel light, keeping workloads quick and bright!
              </p>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden border-2 border-accent/30 bg-card shadow-lg hover:shadow-xl hover:border-accent transition-all duration-300">
            <div className="relative h-56 w-full">
              <Image
                src="/images/pastel_security_shield.png"
                alt="Pastel Security Shield"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-left bg-card/95 backdrop-blur-sm border-t border-border/50">
              <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" /> Cyber Shield to Guard the Line
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                Locking data safe and sound, greatest security to be found!
              </p>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-12 animate-bounce">
          <div className="w-0.5 h-8 bg-primary/40 mx-auto" />
        </div>
      </div>
    </section>
  )
}
