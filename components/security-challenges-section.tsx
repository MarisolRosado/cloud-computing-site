"use client"

import { useState } from "react"
import Image from "next/image"
import { SectionHeader } from "./section-header"
import { PageRef } from "./page-ref"
import { FileCheck2, EyeOff, Zap, ChevronDown } from "lucide-react"

type ChallengeId = "integrity" | "confidentiality" | "availability"

const challenges: Record<ChallengeId, {
  icon: typeof FileCheck2
  title: string
  pages: string
  color: string
  bg: string
  border: string
  definition: string
  details: string[]
  attacks?: string[]
  subTopics?: { title: string; desc: string }[]
}> = {
  integrity: {
    icon: FileCheck2,
    title: "Integrity",
    pages: "189–191",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
    definition:
      "Data integrity in cloud computing is the preservation of data stored in cloud servers to verify the data is not modified or lost by employing the services of a third party.",
    details: [
      "Organizations achieve greater confidence to prevent system and data integrity from unauthorized access.",
      "Authorization mechanisms determine what level of access a specifically authorized customer has to protected resources.",
      "Data integrity involves three entities: (1) cloud storage provider, (2) data owner, and (3) auditor.",
      "The data integrity scheme is defined in two phases: preprocessing phase and verification phase.",
      "The preprocessing phase generates metadata from original data. The verification phase confirms possession proof.",
    ],
    attacks: [
      "Tag forgery attack: Cloud storage provider hides data damage and avoids auditing challenge.",
      "Data deletion attack: Provider generates a legal proof of possession while original data is entirely deleted.",
      "Replace attack: Provider replaces deleted/corrupted data blocks and tags using another valid pair.",
      "Pollution attack: Dishonest server uses correct data in response but offers corrupted blocks in repair phase.",
      "Data leak attack: Attacker extracts stored data during the proofing protocol with wiretapping techniques.",
    ],
  },
  confidentiality: {
    icon: EyeOff,
    title: "Confidentiality",
    pages: "191",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
    definition:
      "Confidentiality refers to keeping the customer's data secret in the cloud computing system — only authorized customers or systems can access the data.",
    details: [
      "Cloud computing services are basically in public clouds and have more threads compared to those hosted in private data centers.",
      "Two basic approaches to achieve confidentiality: cryptography and physical isolation.",
      "Virtual LAN and middle boxes (packet filters, firewall) should be deployed to accomplish virtual physical isolation.",
      "VPN Cubed by CohesiveFT offers a security boundary for IT infrastructure inside single, multiple, or hybrid cloud data centers.",
      "Confidentiality enhanced by encrypting data before transfer into cloud storage — TC3 is successfully employed.",
    ],
    subTopics: [
      {
        title: "Multi-Tenancy",
        desc: "Cloud resources are shared including data, memory, networks, and programs. This presents a number of confidentiality and privacy threats at application, host, and network levels.",
      },
      {
        title: "Data Remanence",
        desc: "Data represented in residual that can be unintentionally removed or erased due to the lack of hardware separation among customers, potentially disclosing private data.",
      },
      {
        title: "Application Security & Privacy",
        desc: "Data confidentiality is associated with user authentication. Weak authentication can lead to unauthorized cloud access, creating issues of data privacy and confidentiality.",
      },
    ],
  },
  availability: {
    icon: Zap,
    title: "Availability",
    pages: "191–192",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/30",
    definition:
      "Availability in cloud computing ensures that authorized customers can access system properties at all times on demand — including applications and all infrastructure.",
    details: [
      "Cloud computing models (IaaS, PaaS, SaaS) allow customers to access services and applications from anyplace at any time.",
      "Amazon web services offer S3 and EC2 based on VM — called Skytap. Xen provides virtual lab management depending on hypervisors (Xen, VMware, Microsoft Hyper-V).",
      "Xen VMs offer separated storage virtualization, memory virtualization, and machine/CPU virtualization.",
      "Vendors provide ability to filter and block traffic based on port and IP address — but not equivalent to network security controls in most enterprises.",
      "Most cloud vendors (Google, Amazon) provide geographic redundancy allowing high availability on a single provider.",
      "The cloud system is capable of carrying operations even in the presence of security breaches or authority misbehaviors.",
    ],
    subTopics: [
      {
        title: "Distributed System Security Objectives",
        desc: "Ensure data confidentiality, maintain security level when adding/removing resources, prevent data leakage between applications at virtual level, maintain integrity provided by services.",
      },
      {
        title: "Non-Repudiation",
        desc: "Authenticate different communicating customer identities and ensure data delivery and origin for banking purposes to ensure non-repudiation.",
      },
      {
        title: "Geographic Redundancy",
        desc: "Most cloud vendors provide geographic redundancy in their cloud, hopefully allowing high availability on a single provider under security breach possibilities.",
      },
    ],
  },
}

function AccordionItem({ title, content }: { title: string; content: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-left text-sm font-semibold text-foreground hover:text-primary transition-colors"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform flex-shrink-0 ml-2 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <p className="text-sm text-muted-foreground leading-relaxed pb-4">{content}</p>
      )}
    </div>
  )
}

export function SecurityChallengesSection() {
  const [active, setActive] = useState<ChallengeId>("integrity")
  const current = challenges[active]
  const Icon = current.icon

  return (
    <section id="challenges" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Section III"
          title="Security Challenges in Cloud Computing"
          subtitle="Cloud computing infrastructure needs assessment of risk in areas such as integrity, confidentiality, privacy, auditing, reliability, and availability. These major security aspects are required to secure data, hardware, and software resources."
          pages="189–192"
        />

        <div className="mb-10">
          <Image
            src="/images/security-challenges.png"
            alt="Security Challenges: Integrity, Confidentiality, Availability"
            width={1200}
            height={400}
            className="rounded-2xl border border-border w-full object-cover"
          />
        </div>

        {/* CIA Triad tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {(Object.keys(challenges) as ChallengeId[]).map((id) => {
            const c = challenges[id]
            const CI = c.icon
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  active === id
                    ? `${c.bg} ${c.color} border ${c.border}`
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <CI className="w-4 h-4" />
                {c.title}
              </button>
            )
          })}
        </div>

        {/* Detail card */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main info */}
          <div className={`lg:col-span-3 bg-card border ${current.border} rounded-2xl p-8 space-y-6`}>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl ${current.bg} flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${current.color}`} />
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${current.color}`}>{current.title}</h3>
                <PageRef pages={current.pages} />
              </div>
            </div>

            <div className={`${current.bg} border ${current.border} rounded-xl p-4`}>
              <p className="text-sm text-foreground leading-relaxed font-medium">{current.definition}</p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Key Details</p>
              <ul className="space-y-3">
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

          {/* Attacks / sub-topics */}
          <div className="lg:col-span-2 space-y-6">
            {current.attacks && (
              <div className="bg-card border border-destructive/20 rounded-2xl p-6">
                <p className="text-sm font-bold text-destructive uppercase tracking-wider mb-4">Attack Vectors</p>
                <div className="space-y-1">
                  {current.attacks.map((atk) => (
                    <AccordionItem
                      key={atk}
                      title={atk.split(":")[0]}
                      content={atk.split(":").slice(1).join(":").trim()}
                    />
                  ))}
                </div>
                <div className="mt-3">
                  <PageRef pages="190–191" label="Source" />
                </div>
              </div>
            )}
            {current.subTopics && (
              <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                <p className={`text-sm font-bold uppercase tracking-wider ${current.color}`}>Sub-Topics</p>
                {current.subTopics.map(({ title, desc }) => (
                  <div key={title} className={`${current.bg} border ${current.border} rounded-xl p-4`}>
                    <p className={`text-sm font-bold ${current.color} mb-1`}>{title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
                <PageRef pages={current.pages} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
