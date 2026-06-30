"use client"

import { useState } from "react"
import Image from "next/image"
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
      "The Hypervisor is referred to as Virtual Machine Monitor (VMM) or manager — computer hardware or firmware, software that allows to run and creates multiple virtual machines on single hardware host.",
    details: [
      "It is an important module of virtualization that monitors and manages the variety of Operating Systems (OS) which can share virtualized resources of hardware — e.g. Windows, Linux and Mac OS that can run on a single physical system.",
      "The hypervisor can be classified into type 1 hypervisor and type 2 hypervisor.",
      "Type 1 hypervisor can directly operate in host system hardware such as Oracle VM server for x86, Microsoft Hyper-V and Xen.",
      "Type 2 hypervisor operates the guest operating system from the host OS which offers virtualization service like memory management and I/O device support — such as Virtual Box, VMware Player, and VMware Workstation.",
      "To determine the right selection of hypervisor that meets the need using performance metrics such as guest memory, maximum host, virtual processor supported and the CPU overhead.",
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
      "Virtualization allows to share the physical instance resources by multiple customers or organizations. It helps to make one physical resource that is same as the multiple virtual resources.",
    details: [
      "Virtualization splits the services and resources from the underlying physical delivery environment.",
      "Virtualization is used to consolidate the resources (network resources, storage, processor and operating system) into a virtual environment.",
      "Benefits: IT responsiveness and flexibility, reduce hardware cost by consolidation and workload optimization.",
      "It creates new challenges from attacker to secure the extra layer of VM due to more interconnection complexity and entry point increases using virtualization.",
      "It is important for the physical machine security because any problem may affect the other.",
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
      "Customers use cloud storage over the network in which the data is backed up, managed and maintained remotely. The service provider major focus is to improve the customer concerns regarding security capabilities such as authentication and encryption into their services.",
    details: [
      "The vendors need to ensure that the data is secure, available and safe.",
      "Storage in cloud depends on the virtualized infrastructure with scalability, instant elasticity, metered resources, and accessible interfaces.",
      "The public cloud storage offers a multi-tenant environment of storage that is appropriate for the unstructured data.",
      "The private cloud service offers dedicated storage environment that is protected behind customers or organization's firewall.",
      "The hybrid cloud service provides more data deployment options and business flexibility because it mixes private and public cloud services.",
      "The benefits of using cloud storage are: information management, time deployment, and total cost of ownership.",
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
      "Multi-tenancy environment contains a single instance of application software that can serve the multiple users or customers. The customers can only share applications or resources rather than to observe or share each other data in the execution environment.",
    details: [
      "Each customer is referred to as the tenant and it may give the ability for customizing the application to some extent such as user interface color, but they are not authorized to customize the code of applications.",
      "SaaS service providers can run one part of the application with the corresponding database and offer web access or service to multiple tenants.",
      "The data of multiple tenants or customers is stored in the same database which affects the data leakage risk between customers — this risk is high.",
      "The provider needs to ensure the security policies in which the data is kept separate between the multiple tenants.",
      "The outcome of multi-tenancy is the optimal utilization of data storage and hardware mechanism.",
      "Multi-tenancy in cloud computing has broadened because it gets advantages of remote access and virtualization for new service models.",
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
      "Cloud networking is used to describe the access of network resources from the centralized service provider using the internet. In this cloud, network and computing resources can be shared among the customers.",
    details: [
      "The secure networking infrastructure is required for efficiently managing and building cloud storage.",
      "Cloud network needs an internet connection which is the same as the virtual private network that allows the customer to securely access files, applications, printers, etc.",
      "The cloud network technology in the form of Software-Defined Networking (SDN) has a number of networking access devices and switches that can be deployed over the shared wide area.",
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
          subtitle="The cloud computing is deployed on the basic components and these components consist of wide range of services which can be used in the overall internet. In this study, five important components are considered."
          pages="187–188"
        />

        <div className="mb-8">
          <Image
            src="/images/pastel_cloud_components.png"
            alt="Basic Cloud Components Visualization"
            width={1200}
            height={400}
            className="rounded-2xl border border-border w-full object-cover shadow-md"
          />
        </div>

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
                  <div
                    className={`w-9 h-9 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}
                  >
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
              <div
                className={`w-12 h-12 rounded-xl ${current.bg} border ${current.border} flex items-center justify-center`}
              >
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
                  <span
                    className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${current.bg} ${current.color}`}
                  >
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
