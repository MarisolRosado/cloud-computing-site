"use client"

import { SectionHeader } from "./section-header"
import { PageRef } from "./page-ref"

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        tag="Section II"
        title="Cloud Computing Architecture"
        subtitle="NIST is responsible for providing security in the cloud computing environment and developing standards and guidelines which shows a valuable contribution that offers a better understanding of cloud services and computing technologies."
        pages="183–185"
      />

      <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
        <div className="space-y-6">
          {/* NIST Definition */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">N</span>
              <h3 className="text-xl font-bold text-foreground">NIST Definition</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Cloud computing is a model to enable convenient, ubiquitous and on-demand network access that is the{" "}
              <strong className="text-foreground">configurable computing resources to shared resources</strong> which can
              be delivered and provisioned rapidly with minimum managerial interaction.
            </p>
            <div className="mt-3">
              <PageRef pages="183" label="Source" />
            </div>
          </div>

          {/* SLA Definition */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Service Level Agreements (SLA)</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              The cloud is the collection of virtualized and inter-connected computers that consists of parallel and
              distributed systems which can be dynamically presented and provisioned the computing resources based on
              some{" "}
              <strong className="text-foreground">Service Level Agreements (SLA)</strong> that is established by the
              settlement between the customers and service provider.
            </p>
            <div className="mt-3">
              <PageRef pages="183" label="Source" />
            </div>
          </div>

          {/* Architecture Layers */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Architecture Layers</h3>
            <p className="text-sm text-muted-foreground mb-4">
              The effective management of the servers is performed by the combination of three layers:
            </p>
            <ul className="space-y-3">
              {[
                {
                  layer: "Virtualization Layer",
                  desc: "Provides the necessary cloud components of rapid elasticity, resource pooling, and location independent. Also, it is an essential element of cloud implementation.",
                },
                {
                  layer: "Software Layer",
                  desc: "Manages the execution of application workloads and operating systems across virtual machines in the cloud infrastructure.",
                },
                {
                  layer: "Management Layer",
                  desc: "The ability to implement security rules and monitoring throughout the cloud is done by the management layer.",
                },
              ].map(({ layer, desc }) => (
                <li key={layer} className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 bg-primary" />
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
          {/* Advantages */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Advantages of Cloud Computing</h3>
            <p className="text-xs text-muted-foreground mb-3">
              The advantages of using cloud computing are:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Infinite computing resources",
                "Low cost",
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
                  {benefit}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <PageRef pages="183" label="Source" />
            </div>
          </div>

          {/* Architecture overview 4 items */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Architecture Overview</h3>
            <p className="text-xs text-muted-foreground mb-4">
              This research explains the overview of cloud computing architecture as:
            </p>
            <div className="space-y-2 text-sm">
              {[
                ["1", "Cloud Deployment Models", "185"],
                ["2", "Cloud Service Models", "185–187"],
                ["3", "Cloud Basic Characteristics", "187–188"],
                ["4", "Cloud Security", "188–189"],
              ].map(([num, topic, pg]) => (
                <div key={num} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <span className="text-muted-foreground">
                    <span className="text-primary font-bold mr-2">{num}.</span>
                    {topic}
                  </span>
                  <PageRef pages={pg} />
                </div>
              ))}
            </div>
            <div className="mt-3">
              <PageRef pages="184" label="Source" />
            </div>
          </div>

          {/* Cloud providers */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Many companies developed cloud computing systems and provide services to a large number of customers by
              enhancing their services:
            </p>
            <div className="flex flex-wrap gap-3">
              {["Microsoft", "Google", "Amazon", "IBM", "VMware", "Rackspace", "Sun"].map((co) => (
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
        </div>
      </div>
    </section>
  )
}
