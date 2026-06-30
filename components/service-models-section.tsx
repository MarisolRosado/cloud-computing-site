"use client"

import { useState } from "react"
import Image from "next/image"
import { SectionHeader } from "./section-header"
import { PageRef } from "./page-ref"
import { Server, Code2, Monitor } from "lucide-react"

function Cite({ refs }: { refs: string }) {
  return <sup className="text-primary font-bold ml-0.5 text-xs">[{refs}]</sup>
}

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
    citeRefs: "17, 18, 19",
    level: "Foundation",
    summary:
      "IaaS offers the virtualized computing resources over the internet and deals with the hardware infrastructure such as servers, storage, processor, data center, network and various other infrastructure resources as a service where the user able to run and deploy arbitrary software.",
    benefits: [
      "Can significantly minimize initial cost of companies to purchase computing hardware such as network devices, servers and processing power, which allows companies to major focus on core competencies instead of worrying regarding management and provisioning of infrastructure or own data centers.",
      "Service providers for IaaS have hosted user applications and handle different jobs like resiliency planning and system maintenance backup.",
      "Major focus to improve security in areas like VM monitor, intrusion detection, firewall and prevention (IPS/IDS).",
      "Provides the highly scalable resources which can be fixed on demand — makes the platform more suited for workloads that are experimental, temporary or change unexpectedly.",
      "Characteristics include desktop virtualization, dynamic scaling, administrative tasks automation and policy-based services.",
      "Customer has control over deployed applications, storage, operating system and limited control to select networking components like host firewall rather than controlling the cloud infrastructure.",
    ],
    includes: ["Storage", "Web services", "Server hosting", "Virtual Machines (VM)", "Backup and recovery"],
    vendors: ["VMware", "Hyper-V", "Terremark", "Amazon EC2", "Dropbox", "Sun Microsystems", "OpenStack"],
    security:
      "The network services provided by public cloud in terms of Domain Name System (DNS) and load balancing. The DNS employs domain name with IP addressing for network identification, and load balancing uses specific techniques to distribute network traffic between multiple servers.",
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
    citeRefs: "20, 21, 22",
    level: "Middleware",
    summary:
      "PaaS is the middleware of the service model and it provides the services in the form of programs, framework, integrated development environment, and development tools hosted on the server provider. It delivers a service to the developers that provides the software development lifecycle management.",
    benefits: [
      "Software development lifecycle management (Planning, design, develop an application, deployment, testing and maintenance).",
      "Customer has only access to control the deployed applications and configurations of the possible hosting environment — not the servers, storage, network or operating system.",
      "Customers using PaaS model transfer more costs from hardware investment to the operational expense.",
      "Vendors offer: application standards based on developer requirements, logging, code instrumentation and reporting, redundancy and security.",
      "Virtual development environment, configuration of toolkits for virtual development, management interface and API.",
      "Multi-tenancy, auto-provisioning and scalability of the underlying infrastructure, built-in channel distribution for public application developers.",
    ],
    includes: ["Databases", "Directory services", "Business intelligence", "Testing and development tools"],
    vendors: ["Microsoft Azure", "Apprenda", "Stackato", "VMware", "Google App Engine", "NYSE Capital"],
    security:
      "VM is employed in PaaS to act as a catalyst and it is required to protect against cloud malware attacks. It is important to include valid authentication checks during data transfer and need to maintain the integrity of the applications. Security can be compromised during deployment or runtime of application with challenges from underlying infrastructure security, lifecycle development and third-party relationship.",
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
    citeRefs: "4, 23",
    level: "Application",
    summary:
      "SaaS model is the collection of remotely hosted applications that are made available by the service provider for the customers on demand on the internet. It has dominant cloud market as underlying technology that supports service oriented architecture and web services and still the market is growing rapidly.",
    benefits: [
      "Easier administration.",
      "Universal accessibility.",
      "Easier collaboration.",
      "Software compatibility.",
      "Auto patch and updates management.",
      "Allows the enterprises to get similar benefits of the internally operated commercially licensed software.",
    ],
    includes: ["Virtual desktop", "Email", "Office automation", "Business apps", "Document and content management"],
    vendors: ["Salesforce", "Google App", "Office 365", "QuickBooks Online"],
    security:
      "Most enterprise users are not comfortable due to the deficiency in visibility regarding their stored data in the cloud being secure or not. Security concerns about application vulnerabilities, system availability and insider breaches that bring the loss of sensitive information or data.",
  },
]

export function ServiceModelsSection() {
  const [active, setActive] = useState("iaas")
  const current = services.find((s) => s.id === active)!
  const Icon = current.icon

  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        tag="Section II-B — pp. 185–187"
        title="Cloud Service Models"
        subtitle="Cloud computing architecture has a set of services which are used to access the configurable computing resources on demand, dynamically scalable, virtualized and multi-tenant that offers a self-service over the internet."
        pages="185–187"
      />

      {/* Intro with citations */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-10">
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          There are three cloud service models or delivery models available for the customer: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).<Cite refs="4" /> There are different levels of security required for these service models in the cloud environment. The classification of cloud service models is important to figure out the particular service model that fulfills and accomplishes its roles.<Cite refs="24" />
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          There are many service providers (Microsoft, Google, Amazon, Rackspace, etc.) that offer services to any of these models. The optimized outcome is achieved by the enterprises through the deployment of an application with suitable cloud models.<Cite refs="24" />
        </p>
        <div className="mt-3"><PageRef pages="185–186" label="pp." /></div>
      </div>

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
            Fig. 3. Cloud service models — <PageRef pages="186" />
          </p>

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
                <PageRef pages={current.pages} label="p." />
                <Cite refs={current.citeRefs} />
              </div>
              <h3 className="text-xl font-bold text-foreground leading-tight">{current.title}</h3>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed border-b border-border pb-5">
            {current.summary}
          </p>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Key Points from Paper</p>
            <ul className="space-y-2">
              {current.benefits.map((b, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
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
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Well-Known Vendors</p>
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
            <p className={`text-sm ${current.color} leading-relaxed`}>{current.security}</p>
          </div>
        </div>
      </div>

      {/* Table I from paper */}
      <div className="mt-12 bg-card border border-border rounded-2xl p-6 overflow-x-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-foreground">
            Table I — Vendor Used Cloud Deployment and Service Models
          </h3>
          <PageRef pages="187" label="p." />
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
              { model: "Public Cloud",    iaas: "Rackspace, Amazon EC2", paas: "VMware, Microsoft Azure, CloudFoundry.com, Google App Engine", saas: "Office 365, QuickBooks online, Salesforce.com" },
              { model: "Private Cloud",   iaas: "OpenStack, Hyper-V, VMware, CloudStack", paas: "Stackato, Apprenda", saas: "Cisco WebEx" },
              { model: "Hybrid Cloud",    iaas: "Rackspace, Custom", paas: "Cloud Foundry, Custom", saas: "Rackspace" },
              { model: "Community Cloud", iaas: "NYSE Capital", paas: "NYSE Capital", saas: "Salesforce" },
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

      {/* Comparison note with citation */}
      <div className="mt-6 bg-card border border-border rounded-2xl p-6">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Comparison:</strong> IaaS provides greater customer or tenant control over the security than PaaS and SaaS. While the PaaS infrastructure provides better extensibility and customer control, the SaaS model is depending on integrated functionality with minimum customer control and extensibility. The security pressure of SaaS model varies on the cloud provider due to the degree of abstraction. Mostly large enterprise will like to create hybrid cloud environment with several private and public clouds having a possibility to mix community cloud into it. Some clouds will offer different enhancement in terms of security, performance, optimized pricing.<Cite refs="24" /> <PageRef pages="187" label="p." />
        </p>
      </div>
    </section>
  )
}
