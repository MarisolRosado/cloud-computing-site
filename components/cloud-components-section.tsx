"use client"

import { useState } from "react"
import { SectionHeader } from "./section-header"
import { PageRef } from "./page-ref"
import { Cpu, Share2, HardDrive, Building2, Network } from "lucide-react"

const components = [
  {
    id: "hypervisor",
    icon: Cpu,
    title: "Hypervisor",
    pages: "187",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
    description:
      "The Hypervisor is referred to as Virtual Machine Monitor (VMM) — hardware, firmware, or software that allows running and creating multiple virtual machines on a single hardware host.",
    details: [
      "Important module of virtualization that monitors and manages various Operating Systems (Windows, Linux, Mac OS) sharing virtualized hardware.",
      "Type 1 Hypervisor: Operates directly on host system hardware. Examples: Oracle VM Server for x86, Microsoft Hyper-V, Xen.",
      "Type 2 Hypervisor: Operates the guest OS from host OS, offering virtualization services like memory management. Examples: Virtual Box, VMware Player, VMware Workstation.",
      "Selection based on performance metrics such as guest memory, maximum host, virtual processor supported, and CPU overhead.",
    ],
  },
  {
    id: "virtualization",
    icon: Share2,
    title: "Virtualization",
    pages: "187–188",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/30",
    description:
      "Virtualization allows sharing physical instance resources among multiple customers or organizations, making one physical resource appear as multiple virtual resources.",
    details: [
      "Splits services and resources from the underlying physical delivery environment.",
      "Consolidates resources (network, storage, processor, OS) into a virtual environment.",
      "Benefits: IT responsiveness and flexibility, reduced hardware cost through consolidation, workload optimization.",
      "Creates new challenges for attackers securing the extra VM layer due to more interconnection complexity and increased entry points.",
    ],
  },
  {
    id: "storage",
    icon: HardDrive,
    title: "Storage",
    pages: "188",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/30",
    description:
      "Customers use cloud storage over the network in which data is backed up, managed, and maintained remotely by service providers.",
    details: [
      "Service providers focus on security capabilities such as authentication and encryption.",
      "Cloud storage depends on virtualized infrastructure with scalability, instant elasticity, metered resources, and accessible interfaces.",
      "Public cloud storage: multi-tenant environment appropriate for unstructured data.",
      "Private cloud: dedicated storage environment protected behind the organization's firewall.",
      "Benefits: information management, time deployment, and reduced total cost of ownership.",
    ],
  },
  {
    id: "multitenancy",
    icon: Building2,
    title: "Multi-Tenancy",
    pages: "188",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/30",
    description:
      "Multi-tenancy environment contains a single instance of application software that can serve multiple users or customers simultaneously.",
    details: [
      "Customers share applications or resources but cannot access each other's data.",
      "Each customer is referred to as a tenant and may customize the application (e.g., UI color) but not the code.",
      "SaaS providers run one application instance with corresponding database offering web access to multiple tenants.",
      "Data of multiple tenants stored in the same database — high risk of data leakage between customers.",
      "Provider must ensure security policies keeping data separate between tenants.",
    ],
  },
  {
    id: "network",
    icon: Network,
    title: "Cloud Network",
    pages: "188",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/30",
    description:
      "Cloud networking describes the access of network resources from a centralized service provider using the internet, where network and computing resources are shared among customers.",
    details: [
      "Secure networking infrastructure required to efficiently manage and build cloud storage.",
      "Cloud network needs an internet connection similar to a Virtual Private Network (VPN) that allows secure access to files, applications, printers, etc.",
      "Cloud network technology in the form of Software-Defined Networking (SDN) with networking access devices and switches deployable over a shared wide area.",
    ],
  },
]

export function CloudComponentsSection() {
  const [active, setActive] = useState("hypervisor")
  const current = components.find((c) => c.id === active)!
  const Icon = current.icon

  return (
    <section id="components" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Section II-C"
          title="Basic Cloud Components"
          subtitle="Cloud computing is deployed on basic components that consist of a wide range of services usable across the internet. These five components form the foundation of any cloud infrastructure."
          pages="187–188"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: component list */}
          <div className="space-y-2">
            {components.map((c) => {
              const CI = c.icon
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${
                    active === c.id
                      ? `${c.border} ${c.bg}`
                      : "border-border bg-card hover:border-border/70"
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                    <CI className={`w-4 h-4 ${c.color}`} />
                  </div>
                  <div>
                    <p className={`font-semibold text-sm ${active === c.id ? c.color : "text-foreground"}`}>
                      {c.title}
                    </p>
                    <p className="text-xs text-muted-foreground">p.{c.pages}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: detail */}
          <div className={`lg:col-span-2 bg-card border ${current.border} rounded-2xl p-8`}>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-xl ${current.bg} border ${current.border} flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${current.color}`} />
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${current.color}`}>{current.title}</h3>
                <PageRef pages={current.pages} />
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 border-b border-border pb-6">
              {current.description}
            </p>

            <ul className="space-y-4">
              {current.details.map((d, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${current.bg} ${current.color}`}>
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
