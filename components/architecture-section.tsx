"use client"

import { SectionHeader } from "./section-header"
import { PageRef } from "./page-ref"

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        tag="Section I"
        title="Cloud Computing Architecture"
        subtitle="NIST defines cloud computing as a model enabling convenient, ubiquitous, on-demand network access to a shared pool of configurable computing resources that can be rapidly provisioned and released."
        pages="183–185"
      />

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">N</span>
              NIST Definition
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Cloud computing is <strong className="text-foreground">authorized through virtualization technology</strong> in which the host system operates an application referred to as a hypervisor that generates one or more Virtual Machines (VM).
            </p>
            <div className="mt-3">
              <PageRef pages="184" label="Source" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Architecture Layers</h3>
            <ul className="space-y-3">
              {[
                { layer: "Virtualization Layer", desc: "Provides rapid elasticity, resource pooling, and location independence — essential for cloud implementation.", color: "bg-primary" },
                { layer: "Software Layer", desc: "Manages the execution of application workloads and operating systems across virtual machines.", color: "bg-accent" },
                { layer: "Management Layer", desc: "Implements security rules and monitoring throughout the cloud infrastructure.", color: "bg-secondary" },
              ].map(({ layer, desc, color }) => (
                <li key={layer} className="flex gap-3">
                  <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${color}`} />
                  <div>
                    <p className="text-foreground font-semibold text-sm">{layer}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <PageRef pages="184" label="Source" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Key Benefits</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Infinite computing resources",
                "Low cost operations",
                "Security controls",
                "Hypervisor protection",
                "Rapid elasticity",
                "High scalability",
                "Fault tolerant services",
                "High performance",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="text-xs text-muted-foreground bg-secondary/50 rounded-lg px-3 py-2 border border-border"
                >
                  ✦ {benefit}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <PageRef pages="183" label="Source" />
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Architecture Overview</h3>
            <div className="space-y-2 text-sm">
              {[
                ["1", "Cloud Deployment Models", "183–185"],
                ["2", "Cloud Service Models", "185–187"],
                ["3", "Cloud Basic Characteristics", "187–188"],
                ["4", "Cloud Security", "188–189"],
              ].map(([num, topic, pg]) => (
                <div key={num} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <span className="text-muted-foreground">
                    <span className="text-primary font-bold mr-2">{num}.</span>{topic}
                  </span>
                  <PageRef pages={pg} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cloud providers */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <p className="text-sm text-muted-foreground mb-4">
          Major companies that developed cloud computing systems and provide services:
        </p>
        <div className="flex flex-wrap gap-3">
          {["Microsoft", "Google", "Amazon", "IBM", "VMware", "Rackspace", "Sun Microsystems"].map((co) => (
            <span
              key={co}
              className="px-4 py-1.5 bg-secondary border border-border rounded-full text-sm text-foreground font-medium"
            >
              {co}
            </span>
          ))}
        </div>
        <div className="mt-3">
          <PageRef pages="183" label="Source" />
        </div>
      </div>
    </section>
  )
}
