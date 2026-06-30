"use client"

import { SectionHeader } from "./section-header"
import { PageRef } from "./page-ref"

function Cite({ refs }: { refs: string }) {
  return (
    <sup className="text-primary font-bold ml-0.5 text-xs">[{refs}]</sup>
  )
}

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        tag="Section II — pp. 183–185"
        title="Cloud Computing Architecture"
        subtitle="NIST is responsible for providing security in the cloud computing environment and developing standards and guidelines which shows a valuable contribution that offers a better understanding of cloud services and computing technologies."
        pages="183–185"
      />

      {/* Introduction block */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-8">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Cloud computing extends the information technology capabilities by increasing the capacity and adds abilities dynamically without investing on large and expensive infrastructure, licensing software, or training new personals.<Cite refs="1, 2, 3" /> Among the several benefits, cloud computing provides a more flexible way to access the storage and computation resources on demand. In the last few years, different business companies are increasingly understanding that by tapping the cloud resources and gaining fast access, they are able to reduce their initial business cost by paying only the resources they used rather than the need of potentially large investment (owning and maintenance) on infrastructure. <strong className="text-foreground">Rapid deployment, cost reduction, and minimal investment</strong> are the major factors to employ cloud services that drive many companies.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          There are significant barriers to adopting cloud computing like security issues regarding the privacy, compliance and legal matters because it is relatively new computing model having a great deal of the uncertainty regarding the security of all levels such as <strong className="text-foreground">host, network, data levels, and application</strong> can be accomplished.<Cite refs="7" /> The management of data and services is an important concern when the databases and application software are moves the cloud to the large data centers.
        </p>
        <div className="mt-4"><PageRef pages="183" label="p." /></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
        <div className="space-y-6">

          {/* NIST Definition */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">N</span>
              <h3 className="text-xl font-bold text-foreground">NIST Definition</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Cloud computing is explained by the <strong className="text-foreground">National Institute of Standard and Technology (NIST)</strong>. It is a model to enable convenient, ubiquitous and on-demand network access that is the configurable computing resources to shared resources which can be delivered and provisioned rapidly with minimum managerial interaction.<Cite refs="4" />
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground text-xs leading-relaxed">
              &quot;A model to enable convenient, ubiquitous and on-demand network access that is the configurable computing resources to shared resources which can be delivered and provisioned rapidly with minimum managerial interaction.&quot;
            </blockquote>
            <div className="mt-3 flex items-center gap-2">
              <PageRef pages="183" label="p." />
              <span className="text-xs text-muted-foreground">— Mell & Grance, NIST SP 800-145, 2011</span>
            </div>
          </div>

          {/* SLA */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Service Level Agreements (SLA)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The cloud is the collection of virtualized and inter-connected computers that consists of parallel and distributed systems which can be dynamically presented and provisioned the computing resources based on some <strong className="text-foreground">Service Level Agreements (SLA)</strong> that is established by the settlement between the customers and service provider.<Cite refs="5" /> The advantages of using cloud computing are offering <em>infinite computing resources, low cost, security controls, hypervisor protection, rapid elasticity, high scalability</em> and fault tolerant services with high performance.<Cite refs="6" />
            </p>
            <div className="mt-3"><PageRef pages="183" label="p." /></div>
          </div>

          {/* Virtualization */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Virtualization Technology</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Cloud computing is authorized through the virtualization technology in which the host system operates an application referred as a <strong className="text-foreground">hypervisor</strong> that generates one or more Virtual Machines (VM) and it faithfully simulates the physical computers.<Cite refs="11" /> These simulations can be able to operate any software from operating system to the end-user application.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The number of physical devices lies in hardware level that includes hard drives, processors and network devices which are placed in the data centers. It is independent of the geographical location that is responsible for processing and storage as needed.
            </p>
            <div className="mt-3"><PageRef pages="183–184" label="pp." /></div>
          </div>
        </div>

        <div className="space-y-6">

          {/* Three Layers */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-2">Three Management Layers</h3>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              The effective management of the servers is performed by the combination of three layers:
            </p>
            <div className="space-y-4">
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
                <div key={layer} className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 bg-primary" />
                  <div>
                    <p className="text-foreground font-semibold text-sm">{layer}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4"><PageRef pages="184" label="p." /></div>
          </div>

          {/* 4-point overview */}
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
            <div className="mt-3"><PageRef pages="184" label="p." /></div>
          </div>

          {/* Security Challenges List */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-2">Security Challenges in Cloud Adoption</h3>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
              It may arise many security challenges regarding the use of cloud computing:<Cite refs="8, 9" />
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {["Privacy and control", "Virtualization vulnerabilities", "Accessibility vulnerabilities", "Credential management", "Identity management", "Confidentiality", "Authentication", "Integrity"].map(c => (
                <span key={c} className="text-xs px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 text-destructive/80">{c}</span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The increment in the adoption of cloud computing and the market maturity is growing steadily because the service providers ensure the complex security level, compliance and regulatory.<Cite refs="10" />
            </p>
            <div className="mt-3"><PageRef pages="183" label="p." /></div>
          </div>
        </div>
      </div>

      {/* Cloud providers */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="text-lg font-bold text-foreground mb-3">Major Cloud Service Providers</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          Many companies like Microsoft, Google, Amazon, IBM, etc. developed the cloud computing systems and provide a large amount of customers by enhancing their services.<Cite refs="6" /> Moreover, there are significant barriers to adopting cloud computing like security issues regarding the privacy, compliance and legal matters because it is relatively new computing model having a great deal of the uncertainty regarding the security of all levels.<Cite refs="7" />
        </p>
        <div className="flex flex-wrap gap-3">
          {["Microsoft", "Google", "Amazon", "IBM", "VMware", "Rackspace", "Sun", "OpenStack"].map((co) => (
            <span key={co} className="px-4 py-1.5 bg-secondary border border-border rounded-full text-sm text-foreground font-medium">
              {co}
            </span>
          ))}
        </div>
        <div className="mt-4"><PageRef pages="183" label="p." /></div>
      </div>
    </section>
  )
}
