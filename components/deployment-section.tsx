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
    summary:
      "A public cloud represents the cloud hosting and owned by the service provider whereby the client and resource provider have service level agreement.",
    details: [
      "Microsoft, Google, Amazon, VMware, IBM, Sun and Rackspace are some examples of cloud service providers.",
      "The platform is designed in the form of generalized computing that holds the generic type of customer demand.",
      "The resources are made available to the public and easily accessible.",
      "Multiple entities are involved in operating public cloud and resources are public for customers which makes them difficult to protect from malicious attacks.",
      "It contains some concerns over privacy, data access and security for customers because it is outside the firewall.",
      "It is less secure than the other deployment models and suited for small and medium business that may not have to configure servers and purchase capital resources.",
    ],
    examples: ["Microsoft Azure", "Amazon EC2", "Google Cloud", "Rackspace", "VMware", "IBM", "Sun"],
  },
  {
    id: "private",
    icon: Lock,
    title: "Private Cloud",
    color: "text-emerald-400",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/10",
    pages: "185",
    summary:
      "The cloud infrastructure is managed and maintained by the single organization that compromises multiple customers.",
    details: [
      "If any organization sets up their own private cloud, they create their own servers having physical hardware servers with a virtualization layer on top of them.",
      "Resources are only available internally — the organization does not need to use Microsoft or Amazon servers.",
      "It can ensure the physical security and is more secure compared to public cloud because of its specific internal exposure.",
      "Private cloud is the only access to operate by the designated stakeholder and organization.",
      "The cost is significantly higher because expertise and training are needed for server administrator, virtualization specialist, and network specialist.",
      "It employs the capabilities of cloud management software to ensure reliable delivery service and integrity of the external resources.",
      "In private cloud, it is easier to address the relationship between the service provider and customer because the infrastructure is operated and owned by the same organization.",
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
    summary:
      "Hybrid cloud is referred as the combination of two or more cloud deployment models that can be either public, private or community clouds which remains the unique entities but are bound together.",
    details: [
      "The importance of hybrid cloud is that it usually offers extra resources when there is high demand from the customer.",
      "It is enabled to migrate some computation jobs from private to public cloud.",
      "It is well organized and allows different entities to access data over the internet because it offers more secure control of applications and data.",
      "It provides a benefit over different deployment models and can be internally and externally hosted.",
      "Hybrid cloud became a dominant model because it has the ability to take advantage of cost-saving, scalability in elasticity that public cloud may provide, and allows control flexibility when needed.",
    ],
    examples: ["Rackspace Hybrid", "Cloud Foundry", "Custom Hybrid"],
  },
  {
    id: "community",
    icon: Users,
    title: "Community Cloud",
    color: "text-rose-400",
    border: "border-rose-400/30",
    bg: "bg-rose-400/10",
    pages: "185",
    summary:
      "Community cloud is referred as the organizations sharing its cloud infrastructure among the customers having similar interest or concerns like policy, security requirements, mission and compliance consideration.",
    details: [
      "Several organizations or a third party are operated, controlled, shared and handled the resources of community cloud.",
      "In case of a third party — for example, Siemens have IT services and solutions that set up a media cloud for the media industry.",
      "It tends to be more rare and specialized.",
      "The cloud infrastructure of community cloud is shared and owned by different organizations such as research groups, together with work of companies and government organizations.",
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
          subtitle="The cloud computing model has four deployment models that can be particularly used to represent the cloud service models and explain the nature and purpose of the cloud. The deployment models represent the way that the computing infrastructure delivers the cloud services."
          pages="185"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: image + model selector */}
          <div className="space-y-4">
            <Image
              src="/images/deployment-models.png"
              alt="Cloud Deployment Models Diagram — Fig. 2 (p.185)"
              width={600}
              height={340}
              className="rounded-2xl border border-border w-full object-cover mb-6"
            />
            <p className="text-xs text-muted-foreground text-center -mt-2 mb-4">
              Cloud deployment models — Fig. 2 <PageRef pages="185" />
            </p>
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
