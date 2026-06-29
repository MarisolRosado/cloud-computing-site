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
    summary: "IaaS offers virtualized computing resources over the internet and deals with hardware infrastructure such as servers, storage, processors, data centers, networks, and various other infrastructure resources as a service.",
    benefits: [
      "Minimizes initial cost of purchasing hardware (network devices, servers, processors)",
      "Hosted by service providers who handle resiliency planning and system maintenance backup",
      "Customer controls deployed applications, storage, operating systems",
      "Highly scalable resources fixed on demand",
      "Workloads are experimental, temporary, or change unexpectedly",
      "Includes desktop virtualization, dynamic scaling, administrative task automation",
    ],
    includes: ["Storage", "Web services", "Server hosting", "Virtual Machines", "Backup & Recovery"],
    vendors: ["VMware", "Hyper-V", "Terremark", "Amazon EC2", "Dropbox", "OpenStack"],
    security: "Security focus: VM monitor, intrusion detection, firewall, and prevention (IPS/IDS).",
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
    summary: "PaaS is the middleware of the service model and provides services in the form of programs, frameworks, integrated development environments, and development tools hosted on the server provider.",
    benefits: [
      "Delivers complete software development lifecycle management (planning, design, develop, deploy, test, maintenance)",
      "Customer only controls deployed applications and configurations",
      "Transfers more costs from hardware investment to operational expense",
      "Provides standards for applications based on developer requirements",
      "Includes logging, code instrumentation, and reporting",
      "Supports auto-provisioning and scalability of underlying infrastructure",
    ],
    includes: ["Databases", "Directory services", "Business intelligence", "Testing & Dev tools"],
    vendors: ["Microsoft Azure", "Apprenda", "Stackato", "VMware", "Google App Engine", "NYSE Capital"],
    security: "VM employed as catalyst. Must authenticate data transfers and maintain application integrity.",
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
    summary: "SaaS is the collection of remotely hosted applications made available by the service provider for customers on demand over the internet. It has the dominant cloud market as underlying technology.",
    benefits: [
      "Easier administration for enterprise users",
      "Universal accessibility from any device",
      "Easy collaboration across teams",
      "Software compatibility maintained by provider",
      "Auto patch and updates management",
      "Offers similar benefits as internally operated software at very low cost",
    ],
    includes: ["Virtual desktop", "Email", "Office automation", "Business apps", "Document & content management"],
    vendors: ["Salesforce", "Google Apps", "Office 365", "QuickBooks Online"],
    security: "Security concerns: application vulnerabilities, system availability, and insider breaches causing data loss.",
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
        subtitle="Cloud computing architecture has a set of services used to access configurable computing resources on demand, dynamically scalable, virtualized, and multi-tenant. Three key service models exist, each offering different levels of control and abstraction."
        pages="185–187"
      />

      {/* Pyramid visual */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Image
            src="/images/service-models.png"
            alt="Cloud Service Models IaaS PaaS SaaS Pyramid"
            width={600}
            height={380}
            className="rounded-2xl border border-border w-full object-cover mb-6"
          />

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
              {current.benefits.slice(0, 4).map((b) => (
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
                <span key={inc} className={`text-xs px-2.5 py-1 rounded-full border ${current.border} ${current.bg} ${current.color}`}>
                  {inc}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Known Vendors</p>
            <div className="flex flex-wrap gap-2">
              {current.vendors.map((v) => (
                <span key={v} className="text-xs px-2.5 py-1 rounded-full bg-secondary border border-border text-muted-foreground">
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

      {/* Comparison note */}
      <div className="mt-10 bg-card border border-border rounded-2xl p-6">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Comparison:</strong> IaaS provides greater customer control over security than PaaS and SaaS.
          PaaS provides better extensibility and customer control. SaaS depends on integrated functionality with minimum customer control and extensibility.
          The security pressure of the SaaS model varies on the cloud provider due to the degree of abstraction.{" "}
          <PageRef pages="187" />
        </p>
      </div>
    </section>
  )
}
