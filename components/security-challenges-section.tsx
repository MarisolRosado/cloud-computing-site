"use client"

import { useState } from "react"
import Image from "next/image"
import { SectionHeader } from "./section-header"
import { PageRef } from "./page-ref"
import { FileCheck2, EyeOff, Zap, ChevronDown } from "lucide-react"

type ChallengeId = "integrity" | "confidentiality" | "availability"

const challenges: Record<
  ChallengeId,
  {
    icon: typeof FileCheck2
    title: string
    pages: string
    color: string
    bg: string
    border: string
    definition: string
    details: string[]
    attacks?: { title: string; desc: string }[]
    subTopics?: { title: string; desc: string; pages: string }[]
  }
> = {
  integrity: {
    icon: FileCheck2,
    title: "Integrity",
    pages: "189–191",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
    definition:
      "Data integrity in cloud computing is the preservation of data that is stored in cloud server to verify the data is not modified or lost by employing the services of the third party.",
    details: [
      "Organizations can achieve more confidence to prevent system and data integrity from unauthorized access. They provide such mechanisms having greater visibility to determine what or who may modify the system information or data that potentially affects their integrity.",
      "Authorization mechanism is utilized to determine the system what or which level of access to a specifically authorized customer should have to protected resources controlled through the system.",
      "Authorization is essential to ensure only the valid customers can access or interact with the data due to increasing the number of access points and customers in cloud computing environment.",
      "The data integrity involves three main entities: (1) a cloud storage provider to whom outsourced the data; (2) owner of data who outsources his data; and (3) auditor who ensures the data integrity.",
      "The preprocessing phase includes the preprocessed data and generates some additional metadata. After that, it outsources the data and metadata to the cloud storage provider.",
      "The verification phase includes the auditor sending a challenge request to the cloud storage provider that generates possession proof with the data and metadata, and offers it to the auditor.",
    ],
    attacks: [
      {
        title: "Tag Forgery Attack",
        desc: "A malicious cloud storage provider tries to hide the data damage of customers and avoid the auditing challenge.",
      },
      {
        title: "Data Deletion Attack",
        desc: "The cloud storage provider may proceed the challenge through generating a legal proof of possession with the tags in which the original data may have been entirely deleted.",
      },
      {
        title: "Replace Attack",
        desc: "The cloud storage provider may replace the data blocks of deleted or corrupted pair and respectively tags using another valid pair as the response of challenge, which deceives the verifier.",
      },
      {
        title: "Pollution Attack",
        desc: "The correct data is employed by the dishonest server in the generation of response against a challenge but it offers corrupted or useless blocks in the repair phase.",
      },
      {
        title: "Data Leak Attack",
        desc: "The extraction of stored data by the attacker during the proofing protocol with wiretapping technique.",
      },
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
      "Confidentiality refers to keeping the customer's data secret in the cloud computing system and only the authorized customers or systems can able to access the data.",
    details: [
      "Cloud computing provides (e.g. applications and its infrastructures) that are basically in public clouds — they have more threats on systems or applications as compared to those hosted in private data centers.",
      "It is the fundamental requirement to keep the customer data secret ever considering the increasing number of applications, customers and devices involved.",
      "Vendors of cloud computing are extensively adopted two basic approaches: cryptography and physical isolation to achieve the confidentiality.",
      "The cloud computing provides services and data that are transmitted through the public network and it cannot achieve physical isolation. Virtual LAN and middle boxes such as packet filters and firewall should be deployed to accomplish virtual physical isolation.",
      "VPN Cubed released by CohesiveFT offers a security boundary for the IT infrastructure although it is inside single, multiple or hybrid cloud data center ecosystems.",
      "Confidentiality is also enhanced by encrypting the data before transfer into cloud storage — TC3 is successfully employed in this approach.",
    ],
    subTopics: [
      {
        title: "Multi-Tenancy",
        desc: "Multi-tenancy refers to the characteristics of cloud resources that are shared including the data, memory, networks and programs. Cloud computing is like a business model where multiple customers can access same shared resources at the application level, host level, and network level. Multi-tenancy presents a number of confidentiality and privacy threats.",
        pages: "191",
      },
      {
        title: "Data Remanence",
        desc: "The data is represented in residual that can be unintentionally removed or erased due to the lack of hardware separation among different customers and virtual separation of the logical drives on a single cloud infrastructure — it may lead to the unintentional disclosure of private data.",
        pages: "191",
      },
      {
        title: "Application Security and Privacy",
        desc: "Data confidentiality is associated with the user authentication. To protect the customer's account from hackers is a large problem of controlling the access of objects including software, devices and memory. If the customer used weak authentication, access to the account can lead to unauthorized access to the cloud.",
        pages: "191",
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
      "Availability in cloud computing including applications and its infrastructure is to ensure that the authorized customers can access the property of system at all time on demand.",
    details: [
      "Cloud computing models (IaaS, PaaS and SaaS) allow customers to access the services and applications from anyplace at any time.",
      "Vendors of cloud computing offer the cloud platform and infrastructure that is based on VM. The Amazon web services offer S3, EC2 that is based on VM called Skytap — and Xen provides virtual lab management application depends on the hypervisor (Xen, VMware and Microsoft Hyper-V).",
      "Xen virtual machine offered by Amazon is able to provide separated storage virtualization, memory virtualization, machine/CPU virtualization etc. where a large number of commodity PCs are hosted.",
      "Cloud service providers can split resources (memory, capacity, storage, CPU cycle) on demand from Amazon based on usage expense in the form of each unit.",
      "Vendors provide the ability to filter and block the traffic based on port and IP address to secure systems — but these services are not equal to the network security controls in most cloud enterprises.",
      "Most cloud vendors (Google, Amazon) provide geographic redundancy in their cloud and hopefully allow high availability on a single provider.",
      "The cloud system is capable of carrying operations even in the security breaches possibilities or authorities misbehave.",
    ],
    subTopics: [
      {
        title: "Distributed System Security Objectives",
        desc: "Ensure the data confidentiality among the participating systems. When adding or removing resources at a physical level, maintain the exactly same security level. Make sure there is no data leakage among different applications during the separation of processes and data in the cloud at the virtual level.",
        pages: "192",
      },
      {
        title: "Non-Repudiation",
        desc: "Authenticate the different communicating customer identities and if necessary the data delivery and origin for the purposes of banking to ensure non-repudiation.",
        pages: "192",
      },
      {
        title: "Data Availability Assurance",
        desc: "Ensure the availability of data or systems communicated among the participating systems. The integrity of data or systems is maintained by preventing any modification or loss from unauthorized access between the participating systems communicated.",
        pages: "192",
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
      {open && <p className="text-sm text-muted-foreground leading-relaxed pb-4">{content}</p>}
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
          subtitle="Cloud computing infrastructure needs the assessment of risk in areas such as integrity, confidentiality, privacy, auditing, reliability and availability. Essentially, the security has major aspects of integrity, confidentiality and availability that are utilized in designing the adequate security system."
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

          {/* Attacks / sub-topics */}
          <div className="lg:col-span-2 space-y-6">
            {current.attacks && (
              <div className="bg-card border border-destructive/20 rounded-2xl p-6">
                <p className="text-sm font-bold text-destructive uppercase tracking-wider mb-4">
                  Attack Vectors <PageRef pages="190–191" />
                </p>
                <div className="space-y-1">
                  {current.attacks.map((atk) => (
                    <AccordionItem key={atk.title} title={atk.title} content={atk.desc} />
                  ))}
                </div>
              </div>
            )}
            {current.subTopics && (
              <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                <p className={`text-sm font-bold uppercase tracking-wider ${current.color}`}>Sub-Topics</p>
                {current.subTopics.map(({ title, desc, pages }) => (
                  <div key={title} className={`${current.bg} border ${current.border} rounded-xl p-4`}>
                    <div className="flex items-center justify-between mb-1">
                      <p className={`text-sm font-bold ${current.color}`}>{title}</p>
                      <PageRef pages={pages} />
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Table II summary */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-bold text-foreground">Distributed System Security</p>
                <PageRef pages="192" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                The multiple customer distributed environment suggests security challenges based on which level of user
                operates — physical, virtual, or application (Table II).
              </p>
              <div className="space-y-2">
                {[
                  { level: "Physical Level", service: "Physical datacenter" },
                  { level: "Virtual Level", service: "IaaS, PaaS" },
                  { level: "Application Level", service: "SaaS" },
                ].map(({ level, service }) => (
                  <div
                    key={level}
                    className="flex items-center justify-between text-xs py-1.5 border-b border-border/50 last:border-0"
                  >
                    <span className="text-muted-foreground font-medium">{level}</span>
                    <span className="text-primary">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
