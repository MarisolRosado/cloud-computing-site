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

      <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
        <div className="space-y-6">

          {/* NIST Definition */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">N</span>
              <h3 className="text-xl font-bold text-foreground">NIST Definition</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Cloud computing is{" "}
              <em>&quot;a model to enable convenient, ubiquitous and on-demand network access that is the configurable computing resources to shared resources which can be delivered and provisioned rapidly with minimum managerial interaction.&quot;</em>
            </p>
            <div className="mt-3"><PageRef pages="183" label="Source" /></div>
          </div>

          {/* SLA */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Service Level Agreements (SLA)</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              The cloud is the collection of virtualized and inter-connected computers that consists of parallel and distributed systems which can be dynamically presented and provisioned the computing resources based on some{" "}
              <strong className="text-foreground">Service Level Agreements (SLA)</strong> that is established by the settlement between the customers and service provider.
            </p>
            <div className="mt-3"><PageRef pages="183" label="Source" /></div>
          </div>

          {/* Virtualization & Hypervisor */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Virtualization Technology</h3>
            <p className="text-muted-foreground leading-relaxed text-sm mb-3">
              Cloud computing is authorized through the virtualization technology in which the host system operates an application referred as a <strong className="text-foreground">hypervisor</strong> that generates one or more Virtual Machines (VM) and it faithfully simulates the physical computers. These simulations can be able to operate any software from operating system to the end-user application.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              The number of physical devices lies in hardware level that includes hard drives, processors and network devices which are placed in the data centers. It is independent of the geographical location that is responsible for processing and storage as needed.
            </p>
            <div className="mt-3"><PageRef pages="183–184" label="Source" /></div>
          </div>
        </div>

        <div className="space-y-6">

          {/* Architecture Layers */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Three Architecture Layers</h3>
            <p className="text-sm text-muted-foreground mb-4">
              The effective management of the servers is performed by the combination of the three layers:
            </p>
            <ul className="space-y-4">
              {[
                {
                  layer: "Virtualization Layer",
                  desc: "Utilized to provide the necessary cloud components of rapid elasticity, resource pooling, and location independent. It is an essential element of cloud implementation.",
                },
                {
                  layer: "Software Layer",
                  desc: "Manages the execution of application workloads and operating systems across the cloud infrastructure.",
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
            <div className="mt-4"><PageRef pages="184" label="Source" /></div>
          </div>

          {/* Architecture 4-point overview */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-2">Architecture Overview (4 Points)</h3>
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
            <div className="mt-3"><PageRef pages="184" label="Source" /></div>
          </div>

          {/* Advantages */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Advantages of Cloud Computing</h3>
            <p className="text-xs text-muted-foreground mb-3">The advantages of using cloud computing are:</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Infinite computing resources",
                "Low cost",
                "Security controls",
                "Hypervisor protection",
                "Rapid elasticity",
                "High scalability",
                "Fault tolerant services",
                "High performance",
              ].map((b) => (
                <div key={b} className="text-xs text-muted-foreground bg-secondary/50 rounded-lg px-3 py-2 border border-border">
                  {b}
                </div>
              ))}
            </div>
            <div className="mt-4"><PageRef pages="183" label="Source" /></div>
          </div>
        </div>
      </div>

      {/* Security & Trust block */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-6">
        <h3 className="text-lg font-bold text-foreground mb-3">Security Concerns in Cloud Adoption</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          There are significant barriers to adopting cloud computing like security issues regarding privacy, compliance and legal matters because it is a relatively new computing model having a great deal of uncertainty regarding the security of all levels such as host, network, data levels, and application. The management of data and services is an important concern when the databases and application software are moved to the cloud to large data centers. It may arise many security challenges regarding the use of cloud computing including:
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {["Privacy and control", "Virtualization and accessibility vulnerabilities", "Credential and identity management", "Confidentiality", "Authentication", "Integrity"].map(c => (
            <span key={c} className="text-xs px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 text-destructive/80">{c}</span>
          ))}
        </div>
        <div className="mt-2"><PageRef pages="183" label="Source" /></div>
      </div>

      {/* Cloud providers + Trust */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <p className="text-sm text-muted-foreground mb-4">
          Many companies developed cloud computing systems and provide services to a large number of customers by enhancing their services:
        </p>
        <div className="flex flex-wrap gap-3 mb-4">
          {["Microsoft", "Google", "Amazon", "IBM", "VMware", "Rackspace", "Sun"].map((co) => (
            <span key={co} className="px-4 py-1.5 bg-secondary border border-border rounded-full text-sm text-foreground font-medium">
              {co}
            </span>
          ))}
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          The increment in the adoption of cloud computing and the market maturity is growing steadily because the service providers ensure the complex security level, compliance and regulatory. In part this growth, the cloud services will deliver the increased flexibility and cost savings.
        </p>
        <div className="mt-3"><PageRef pages="183" label="Source" /></div>
      </div>
    </section>
  )
}
