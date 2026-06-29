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
      "The popularity and adoption of cloud storage is rising that produce many security challenges for the cloud providers as well as for the customers. Customers store their data in the cloud and have no longer own the data because it will transfer through the third party — meaning the privacy setting of data is beyond the control of service provider or enterprises.",
  },
  {
    icon: Server,
    title: "Cloud Infrastructure Security",
    pages: "188–189",
    issues: ["Privacy vulnerabilities", "Security and reliability concerns", "Administration gaps", "Compliance barriers"],
    summary:
      "Cloud computing enables the distributed workforce and provides many benefits for the customers but it is essential to learn how to operate the cloud infrastructure that ensures and verifies the secure deployment of services, storage of data, communication and safe operation through administration. With the rapid adoption of cloud services, the concerns (privacy, security and reliability) have emerged as potential barriers.",
  },
  {
    icon: Code,
    title: "Software Security",
    pages: "189",
    issues: ["Bugs and design flaws", "Buffer overflow", "Error handling", "Internal and external threats"],
    summary:
      "The cloud provider is required to protect their applications or software from internal and external threat throughout from design to production in their entire life cycle. It is important to define the security process and policies about the software that enables the business instead of introducing other risk — and it poses challenges for both customers and the cloud provider.",
  },
  {
    icon: Network,
    title: "Cloud Network Security",
    pages: "189",
    issues: [
      "Leakage of confidential data",
      "Unauthorized modification",
      "Denial of service / availability",
      "Physical and virtual network attacks",
    ],
    summary:
      "A cloud service provider has the responsibility to allow only valid network traffic and block all malicious traffic. Cloud providers are not sharing the internal network infrastructure like access routers and switches used to connect cloud VMs to the provider network. Network security has concerns from both internal and external attacks because the attacker may legally authorize from another part of the network.",
  },
]

export function CloudSecuritySection() {
  return (
    <section id="security" className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        tag="Section II-D"
        title="Cloud Security"
        subtitle="Cloud security is the set of control-based policies, compliance and technologies designed to deploy the protection of applications, data and infrastructure associated with the cloud. Cloud computing security is the major concern when shared resources, access control, privacy and identity management needs arise."
        pages="188–189"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
        <div>
          <Image
            src="/images/cloud-security.png"
            alt="Cloud Security Visualization"
            width={600}
            height={380}
            className="rounded-2xl border border-border w-full object-cover"
          />
        </div>

        <div className="space-y-5">
          {/* Key security concerns — direct from paper p.188 */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-destructive" />
              Key Security Concerns
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              Some of the concerns are discussed as follows:
            </p>
            <ul className="space-y-3">
              {[
                {
                  text: "The data store in the cloud can be deliberately disclosed by the cloud providers, employees and its contractors.",
                  ref: "188",
                },
                {
                  text: "Cloud-based data may be incorrectly modified and vulnerable to delete (lost accidentally) by the service provider.",
                  ref: "188",
                },
                {
                  text: "In the public network, the data may be possibly accessible through the insecure APIs and protocols.",
                  ref: "188",
                },
                {
                  text: "The resources in the cloud are typically shared with different tenants that may be attacked.",
                  ref: "188",
                },
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

          {/* Trust and cloud security */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Security Requires Trust</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cloud computing is associated with trust on computing and services employed by the infrastructure owner.
              The cloud infrastructure in{" "}
              <strong className="text-foreground">private cloud</strong> is managed and operated within the premises of
              the private organization in which no additional security challenges are introduced, so the trust remains
              within the organization. In public cloud deployment, the control allows the owner of the infrastructure
              to strictly apply adequate security policy which ensures the appropriate security activities performed
              that reduces the threats and risks.
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
          <div
            key={title}
            className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
          >
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
                  <span
                    key={issue}
                    className="text-xs px-2.5 py-1 rounded-full bg-destructive/10 border border-destructive/20 text-destructive/90"
                  >
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
