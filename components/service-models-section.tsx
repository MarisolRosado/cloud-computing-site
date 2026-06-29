"use client"

import { useState } from "react"
import Image from "next/image"
import { SectionHeader } from "./section-header"
import { PageRef } from "./page-ref"
import { Server, Code2, Monitor } from "lucide-react"

const services = [
  {
    id: "iaas",
    icon: Server,
    title: "Infrastructure as a Service (IaaS)",
    short: "IaaS",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/10",
    pages: "186",
    level: "Foundation",
    summary:
      "IaaS offers the virtualized computing resources over the internet and deals with the hardware infrastructure such as servers, storage, processor, data center, network and various other infrastructure resources as a service where the user is able to run and deploy arbitrary software.",
    benefits: [
      "Can significantly minimize initial cost of companies to purchase computing hardware such as network devices, servers and processing power.",
      "Service providers host user applications and handle different jobs like resiliency planning and system maintenance backup.",
      "Customer has control over deployed applications, storage, operating system and limited control to select networking components like host firewall.",
      "The platform of IaaS provides the highly scalable resources which can be fixed on demand.",
      "Makes the platform more suited for workloads that are experimental, temporary, or change unexpectedly.",
      "Characteristics include desktop virtualization, dynamic scaling, administrative tasks automation and policy-based services.",
    ],
    includes: ["Storage", "Web services", "Server hosting", "Virtual Machines (VM)", "Backup and recovery"],
    vendors: ["VMware", "Hyper-V", "Terremark", "Amazon EC2", "Dropbox", "Sun Microsystems", "OpenStack"],
    security:
      "Security focus: VM monitor, intrusion detection, firewall and prevention (IPS/IDS). Network services provided in terms of Domain Name System (DNS) and load balancing.",
  },
  {
    id: "paas",
    icon: Code2,
    title: "Platform as a Service (PaaS)",
    short: "PaaS",
    color: "text-cyan-400",
    border: "border-cyan-400/30",
    bg: "bg-cyan-400/10",
    pages: "186–187",
    level: "Middleware",
    summary:
      "PaaS is the middleware of the service model and it provides the services in the form of programs, framework, integrated development environment, and development tools hosted on the server provider.",
    benefits: [
      "Delivers a service to developers providing software development lifecycle management: planning, design, develop an application, deployment, testing and maintenance.",
      "Customer has only access to control the deployed applications and configurations of possible hosting environment instead of controlling servers, storage, network and operating system.",
      "Customers using PaaS model transfer more costs from hardware investment to the operational expense.",
      "Vendor offers: application standards, logging, code instrumentation and reporting, redundancy and security.",
      "Supports virtual development environment, management interface and API, multi-tenancy.",
      "Provides auto-provisioning and scalability of the underlying infrastructure.",
    ],
    includes: ["Databases", "Directory services", "Business intelligence", "Testing and development tools"],
    vendors: ["Microsoft Azure", "Apprenda", "Stackato", "VMware", "Google App Engine", "NYSE Capital"],
    security:
      "VM is employed in PaaS to act as a catalyst and it is required to protect against cloud malware attacks. It is important to include valid authentication checks during data transfer across overall network channels.",
  },
  {
    id: "saas",
    icon: Monitor,
    title: "Software as a Service (SaaS)",
    short: "SaaS",
    color: "text-teal-400",
    border: "border-teal-400/30",
    bg: "bg-teal-400/10",
    pages: "187",
    level: "Application",
    summary:
      "SaaS model is the collection of remotely hosted applications that are made available by the service provider for the customers on demand on the internet. It has the dominant cloud market as underlying technology that supports service oriented architecture and web services.",
    benefits: [
      "Easier administration.",
      "Universal accessibility.",
      "Easily collaboration.",
      "Software compatibility.",
      "Auto patch and updates management.",
      "Allows enterprises to get similar benefits of internally operated commercially licensed software.",
    ],
    includes: [
      "Virtual desktop",
      "Email",
      "Office automation",
      "Business apps",
      "Document and content management",
    ],
    vendors: ["Salesforce", "Google App", "Office 365", "QuickBooks Online"],
    security:
      "Security concerns: application vulnerabilities, system availability and insider breaches that bring the loss of sensitive information or data.",
  },
]

export function ServiceModelsSection() {
  const [active, setActive] = useState("iaas")
  const current = services.find((s) => s.id === active)!
  const Icon = current.icon

  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        tag="Section II-B"
        title="Cloud Service Models"
        subtitle="Cloud computing architecture has a set of services which are used to access the configurable computing resources (applications, storage, servers, networks and services) on demand, dynamically scalable, virtualized and multi-tenant that offers a self-service over the internet."
        pages="185–187"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Image
            src="/images/service-models.png"
            alt="Cloud Service Models IaaS PaaS SaaS — Fig. 3 (p.186)"
            width={600}
            height={380}
            className="rounded-2xl border border-border w-full object-cover mb-2"
          />
          <p className="text-xs text-muted-foreground text-center mb-6">
            Cloud service models — Fig. 3 <PageRef pages="186" />
          </p>

          {/* Tab selector */}
          <div className="flex gap-2">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${
                  active === s.id
                    ? `${s.bg} ${s.color} border ${s.border}`
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.short}
              </button>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        <div className={`bg-card border ${current.border} rounded-2xl p-8 space-y-6`}>
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl ${current.bg} flex items-center justify-center flex-shrink-0`}>
              <Icon className={`w-6 h-6 ${current.color}`} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-bold uppercase tracking-widest ${current.color}`}>
                  {current.level}
                </span>
                <PageRef pages={current.pages} />
              </div>
              <h3 className="text-xl font-bold text-foreground leading-tight">{current.title}</h3>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed border-b border-border pb-6">
            {current.summary}
          </p>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Key Benefits</p>
            <ul className="space-y-2">
              {current.benefits.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${current.color}`} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Includes</p>
            <div className="flex flex-wrap gap-2">
              {current.includes.map((inc) => (
                <span
                  key={inc}
                  className={`text-xs px-2.5 py-1 rounded-full border ${current.border} ${current.bg} ${current.color}`}
                >
                  {inc}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Known Vendors</p>
            <div className="flex flex-wrap gap-2">
              {current.vendors.map((v) => (
                <span
                  key={v}
                  className="text-xs px-2.5 py-1 rounded-full bg-secondary border border-border text-muted-foreground"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          <div className={`${current.bg} border ${current.border} rounded-xl p-4`}>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Security Note</p>
            <p className={`text-sm ${current.color}`}>{current.security}</p>
          </div>
        </div>
      </div>

      {/* Comparison table from paper — Table I */}
      <div className="mt-12 bg-card border border-border rounded-2xl p-6 overflow-x-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-foreground">
            Table I: Vendor Used Cloud Deployment and Service Models
          </h3>
          <PageRef pages="187" label="Source" />
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-muted-foreground font-semibold py-2 pr-4">Service / Deployment</th>
              <th className="text-left text-blue-400 font-semibold py-2 pr-4">IaaS</th>
              <th className="text-left text-cyan-400 font-semibold py-2 pr-4">PaaS</th>
              <th className="text-left text-teal-400 font-semibold py-2">SaaS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              {
                model: "Public Cloud",
                iaas: "Rackspace, Amazon EC2",
                paas: "VMware, Microsoft Azure, CloudFoundry.com, Google App Engine",
                saas: "Office 365, QuickBooks online, Salesforce.com",
              },
              {
                model: "Private Cloud",
                iaas: "OpenStack, Hyper-V, VMware, CloudStack",
                paas: "Stackato, Apprenda",
                saas: "Cisco WebEx",
              },
              {
                model: "Hybrid Cloud",
                iaas: "Rackspace, Custom",
                paas: "Cloud Foundry, Custom",
                saas: "Rackspace",
              },
              {
                model: "Community Cloud",
                iaas: "NYSE Capital",
                paas: "NYSE Capital",
                saas: "Salesforce",
              },
            ].map((row) => (
              <tr key={row.model}>
                <td className="py-3 pr-4 text-foreground font-medium">{row.model}</td>
                <td className="py-3 pr-4 text-muted-foreground">{row.iaas}</td>
                <td className="py-3 pr-4 text-muted-foreground">{row.paas}</td>
                <td className="py-3 text-muted-foreground">{row.saas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Comparison note */}
      <div className="mt-6 bg-card border border-border rounded-2xl p-6">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Comparison:</strong> IaaS provides greater customer or tenant control
          over security than PaaS and SaaS. While the PaaS infrastructure provides better extensibility and customer
          control, the SaaS model is depending on integrated functionality with minimum customer control and
          extensibility. The security pressure of SaaS model varies on the cloud provider due to the degree of
          abstraction.{" "}
          <PageRef pages="187" />
        </p>
      </div>
    </section>
  )
}
