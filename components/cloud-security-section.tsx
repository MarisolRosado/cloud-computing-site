"use client"

import Image from "next/image"
import { SectionHeader } from "./section-header"
import { PageRef } from "./page-ref"
import { ShieldAlert, Database, Server, Code, Network } from "lucide-react"

const concerns = [
  {
    icon: Database,
    title: "Cloud Storage Security",
    pages: "188",
    issues: ["Data leakage", "BYOD (Bring Your Own Data)", "Snooping", "Cloud credentials and key management"],
    summary:
      "Customers storing data in the cloud no longer own the data exclusively because it transfers through a third party, meaning privacy settings are beyond the control of the service provider or enterprises.",
  },
  {
    icon: Server,
    title: "Cloud Infrastructure Security",
    pages: "188–189",
    issues: ["Privacy vulnerabilities", "Security reliability", "Administration gaps", "Compliance concerns"],
    summary:
      "With rapid adoption of cloud services, concerns about privacy, security, and reliability have emerged as potential barriers. Security professionals define guidelines at the application, host, and network levels.",
  },
  {
    icon: Code,
    title: "Software Security",
    pages: "189",
    issues: ["Bugs & design flaws", "Buffer overflow", "Error handling", "Production lifecycle threats"],
    summary:
      "Cloud providers must protect applications from internal and external threats throughout the entire lifecycle from design to production, implementing policies that enable business without introducing extra risk.",
  },
  {
    icon: Network,
    title: "Cloud Network Security",
    pages: "189",
    issues: ["Leakage of confidential data", "Unauthorized modification", "Denial of Service (DoS)", "Internal & external attacks"],
    summary:
      "A cloud service provider is responsible for allowing only valid network traffic and blocking all malicious traffic. Attackers may legally authorize from another part of the network, attacking physical or virtual networks.",
  },
]

export function CloudSecuritySection() {
  return (
    <section id="security" className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        tag="Section II-D"
        title="Cloud Security"
        subtitle="Cloud security is the set of control-based policies, compliance, and technologies designed to deploy protection of applications, data, and infrastructure associated with the cloud."
        pages="188–189"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
        <div>
          <Image
            src="/images/cloud-security.png"
            alt="Cloud Security Shield"
            width={600}
            height={380}
            className="rounded-2xl border border-border w-full object-cover"
          />
        </div>

        <div className="space-y-5">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-destructive" />
              Key Security Concerns
            </h3>
            <ul className="space-y-3">
              {[
                { text: "Data stored in the cloud can be deliberately disclosed by cloud providers, employees, and contractors.", ref: "188" },
                { text: "Cloud-based data may be incorrectly modified and vulnerable to accidental deletion by the service provider.", ref: "188" },
                { text: "In public networks, data may be accessible through insecure APIs and protocols.", ref: "188" },
                { text: "Resources in the cloud are typically shared with different tenants who may be attacked.", ref: "188" },
              ].map(({ text, ref }) => (
                <li key={text} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                  <span>
                    {text} <PageRef pages={ref} />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Security Requires Trust</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cloud computing is associated with trust. The cloud infrastructure in a{" "}
              <strong className="text-foreground">private cloud</strong> is managed within the premises of the private
              organization — no additional security challenges, trust remains within the organization. Public cloud deployments
              require strict adequate security policies to reduce threats and risks.
            </p>
            <div className="mt-3">
              <PageRef pages="189" />
            </div>
          </div>
        </div>
      </div>

      {/* Four security areas grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {concerns.map(({ icon: Icon, title, pages, issues, summary }) => (
          <div key={title} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{title}</h3>
                <PageRef pages={pages} />
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{summary}</p>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Issues Include</p>
              <div className="flex flex-wrap gap-2">
                {issues.map((issue) => (
                  <span key={issue} className="text-xs px-2.5 py-1 rounded-full bg-destructive/10 border border-destructive/20 text-destructive/90">
                    {issue}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
