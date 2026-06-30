"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cloud, Menu, X, Sparkles } from "lucide-react"

const navLinks = [
  { href: "#architecture", label: "Architecture" },
  { href: "#deployment", label: "Deployment" },
  { href: "#services", label: "Services" },
  { href: "#components", label: "Components" },
  { href: "#security", label: "Security" },
  { href: "#challenges", label: "Challenges" },
  { href: "#ttp", label: "TTP" },
  { href: "#references", label: "References" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold text-lg text-foreground group">
          <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-all">
            <Cloud className="w-5 h-5 text-primary" />
          </div>
          <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text">Cloud Security</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  active === href.slice(1)
                    ? "text-primary bg-primary/15 font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="ml-2 pl-2 border-l border-border/50">
            <Link
              href="/references"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/40 text-primary hover:text-accent font-bold text-xs tracking-wide hover:shadow-md hover:shadow-primary/20 hover:scale-105 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-accent" />
              All Sources Fine (75+)
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-xl border-b border-border p-4 shadow-xl">
          <ul className="flex flex-col gap-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2 mt-1 border-t border-border">
              <Link
                href="/references"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-background font-bold text-sm shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                Explore Citations Divine!
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
