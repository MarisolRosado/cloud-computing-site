"use client"

import { useState } from "react"
import Image from "next/image"
import { SectionHeader } from "./section-header"
import { PageRef } from "./page-ref"
import { Globe, Lock, Layers, Users } from "lucide-react"

const models = [
  {
    id: "public",
    icon: Globe,
    title: "Public Cloud",
    color: "text-sky-400",
    border: "border-sky-400/30",
    bg: "bg-sky-400/10",
    pages: "185",
    summary: "Hosted and owned by the service provider. Resources are available to the public.",
    details: [
      "Providers include Microsoft, Google, Amazon, VMware, IBM, Sun, and Rackspace.",
      "The platform is designed for generic customer demand — multiple entities share resources.",
      "Less secure than other models due to multi-entity exposure outside the firewall.",
      "Suited for small and medium businesses that don't need to configure servers or purchase capital resources.",
      "Has concerns over privacy, data access, and security for customers.",
    ],
    examples: ["Amazon EC2", "Microsoft Azure", "Google Cloud"],
  },
  {
    id: "private",
    icon: Lock,
    title: "Private Cloud",
    color: "text-emerald-400",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/10",
    pages: "185",
    summary: "Managed and maintained by a single organization for exclusive internal use.",
    details: [
      "The organization sets up its own servers with a virtualization layer on top.",
      "Resources are only available internally — no need to use Microsoft or Amazon servers.",
      "More secure than public cloud due to specific internal exposure only.",
      "Cost is significantly higher — expertise and training needed for server, virtualization, and network specialists.",
      "Easier to address service provider–customer relationships since infrastructure is owned and operated by the same organization.",
    ],
    examples: ["OpenStack", "Hyper-V", "VMware", "CloudStack"],
  },
  {
    id: "hybrid",
    icon: Layers,
    title: "Hybrid Cloud",
    color: "text-orange-400",
    border: "border-orange-400/30",
    bg: "bg-orange-400/10",
    pages: "185",
    summary: "Combination of two or more cloud deployment models that remain unique entities but are bound together.",
    details: [
      "Can combine public, private, or community clouds — each remains unique but is bound together.",
      "Offers extra resources when high customer demand arises.",
      "Enables migration of computation jobs from private to public cloud.",
      "Provides better data and application control across platforms.",
      "Became a dominant model due to cost-saving and scalability advantages from public cloud combined with private cloud control.",
    ],
    examples: ["Rackspace Hybrid", "Custom Cloud Foundry"],
  },
  {
    id: "community",
    icon: Users,
    title: "Community Cloud",
    color: "text-rose-400",
    border: "border-rose-400/30",
    bg: "bg-rose-400/10",
    pages: "185",
    summary: "Shared cloud infrastructure among organizations with similar interests or concerns.",
    details: [
      "Organizations sharing similar policies, security requirements, mission, and compliance considerations.",
      "A third party or several organizations operate, control, and handle the resources.",
      "Example: Siemens set up a media cloud for the media industry.",
      "Tends to be more rare and specialized.",
      "Infrastructure is shared and owned by different organizations such as research groups, companies, and government organizations.",
    ],
    examples: ["NYSE Capital", "Siemens Media Cloud"],
  },
]

export function DeploymentSection() {
  const [active, setActive] = useState("public")
  const current = models.find((m) => m.id === active)!
  const Icon = current.icon

  return (
    <section id="deployment" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Section II-A"
          title="Cloud Deployment Models"
          subtitle="The cloud computing model has four deployment models that represent the way the computing infrastructure delivers cloud services. Each model varies in ownership, security, cost, and access."
          pages="185"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: model selector */}
          <div className="space-y-4">
            <Image
              src="/images/deployment-models.png"
              alt="Cloud Deployment Models Diagram"
              width={600}
              height={340}
              className="rounded-2xl border border-border w-full object-cover mb-6"
            />
            <div className="grid grid-cols-2 gap-3">
              {models.map((m) => {
                const MI = m.icon
                return (
                  <button
                    key={m.id}
                    onClick={() => setActive(m.id)}
                    className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${
                      active === m.id
                        ? `${m.border} ${m.bg} ${m.color}`
                        : "border-border bg-card text-muted-foreground hover:border-border/60 hover:text-foreground"
                    }`}
                  >
                    <MI className="w-5 h-5 flex-shrink-0" />
                    <span className="font-semibold text-sm">{m.title}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: detail card */}
          <div className={`bg-card border ${current.border} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl ${current.bg} flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${current.color}`} />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${current.color}`}>{current.title}</h3>
                <PageRef pages={current.pages} />
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6 border-b border-border pb-6">
              {current.summary}
            </p>

            <ul className="space-y-3 mb-6">
              {current.details.map((d) => (
                <li key={d} className="flex gap-2 text-sm text-muted-foreground">
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${current.bg} border ${current.border}`} />
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Example Vendors
              </p>
              <div className="flex flex-wrap gap-2">
                {current.examples.map((e) => (
                  <span
                    key={e}
                    className={`text-xs px-3 py-1 rounded-full border ${current.border} ${current.bg} ${current.color} font-medium`}
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
