"use client"

import { useState } from "react"
import Image from "next/image"
import { SectionHeader } from "./section-header"
import { PageRef } from "./page-ref"
import { FileCheck2, EyeOff, Zap, ChevronDown } from "lucide-react"

type ChallengeId = "integrity" | "confidentiality" | "availability"

function AccordionItem({ title, content, page }: { title: string; content: string; page?: string }) {
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
        <div className="pb-4">
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">{content}</p>
          {page && <PageRef pages={page} />}
        </div>
      )}
    </div>
  )
}

export function SecurityChallengesSection() {
  const [active, setActive] = useState<ChallengeId>("integrity")

  return (
    <section id="challenges" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Section III"
          title="Security Challenges in Cloud Computing"
          subtitle={`"Cloud computing infrastructure needs the assessment of risk in areas such as integrity, confidentiality, privacy, auditing, reliability and availability. Essentially, the security has major aspects of integrity, confidentiality and availability that are utilized in designing the adequate security system."`}
          pages="189"
        />

        {/* Trust intro block */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-bold text-foreground mb-3">Trust and Security in Cloud</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            The concept of trust in the organization can be referred as the customers assure the capabilities of the organization that it provides the required services reliably and accurately. Trust in cloud computing environment is based on the selected cloud deployment models in which the applications are delegated and outsourced to the control of the owner. Trust has required an efficient and effective security policy in the traditional architecture that addressed the functional constraints and flows between them.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            In cloud deployment models, the community or public clouds assigned control to the organization that owned the cloud infrastructure. When the public cloud is deployed, the control allows the owner of the infrastructure to strictly apply adequate security policy which ensures the appropriate security activities performed — reducing threats and risks. The cloud infrastructure in private cloud is managed and operated within the premises of a private organization in which no additional security challenges are introduced, so the trust remained within the organization.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            It is believed that transfer of data or any association of organization or systems to an outside organization opens a way to gain unauthorized access to the information resources.
          </p>
          <div className="mt-3"><PageRef pages="189" label="Source" /></div>
        </div>

        {/* TTP intro */}
        <div className="bg-card border border-primary/20 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-bold text-foreground mb-3">Trusted Third Party (TTP)</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            This study discusses the <strong className="text-foreground">Trusted Third Party (TTP)</strong> in the cloud computing environment through enabling trust and cryptography that ensure the integrity, authenticity and confidentiality of data by addressing specific security vulnerabilities. Third parties or cloud providers exhibit the trust of customers with specific quality, operational and ethical characteristics, and it comprises the minimal risk factor acknowledgment.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            TTP in the IS which is offering scalable end-to-end security services that depend on the standards and suitable in separate administrative domains, specialization sectors, and geographical areas. TTP in distributed cloud environment appears as the ideal security facilitator — the customers or systems belong to different domains without the knowledge or information of each other is needed to establish secure interactions.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The security solution using cryptography is specifically as the <strong className="text-foreground">Public Key Infrastructure (PKI)</strong> that operates with <strong className="text-foreground">Single-Sign-On (SSO)</strong> and <strong className="text-foreground">Lightweight Directory Access Protocol (LDAP)</strong> which ensure the integrity, confidentiality, availability, and authenticity involved in communications and data.
          </p>
          <div className="mt-3"><PageRef pages="189" label="Source" /></div>
        </div>

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
          {(["integrity", "confidentiality", "availability"] as ChallengeId[]).map((id) => {
            const map = {
              integrity: { icon: FileCheck2, label: "A. Integrity", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/30" },
              confidentiality: { icon: EyeOff, label: "B. Confidentiality", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30" },
              availability: { icon: Zap, label: "C. Availability", color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/30" },
            }
            const { icon: Icon, label, color, bg, border } = map[id]
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  active === id ? `${bg} ${color} border ${border}` : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            )
          })}
        </div>

        {/* INTEGRITY */}
        {active === "integrity" && (
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 bg-card border border-blue-400/30 rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-400/10 flex items-center justify-center">
                  <FileCheck2 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">A. Integrity</h3>
                  <PageRef pages="189–191" />
                </div>
              </div>
              <div className="bg-blue-400/10 border border-blue-400/30 rounded-xl p-4">
                <p className="text-sm text-foreground leading-relaxed font-medium">
                  &quot;Data integrity in cloud computing is the preservation of data that is stored in cloud server to verify the data is not modified or lost by employing the services of the third party.&quot;
                </p>
                <div className="mt-2"><PageRef pages="189" /></div>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Organizations can achieve more confidence to prevent system and data integrity from unauthorized access. They provide such mechanisms having greater visibility to determine what or who may modify the system information or data that potentially affects their integrity.</p>
                <p>Authorization mechanism is utilized to determine the system what or which level of access to a specifically authorized customer should have to protected resources controlled through the system. Authorization is essential to ensure only the valid customers can access or interact with the data due to increasing the number of access points and customers in cloud computing environment.</p>
                <p>The data integrity involves three main entities: 1) a cloud storage provider to whom outsourced the data; 2) owner of data who outsources his data; and 3) auditor who ensures the data integrity. The auditor may be the owner of data or he can assign responsibility to a third party.</p>
                <p>The process of data integrity scheme is defined in two phases: <strong className="text-foreground">Preprocessing phase</strong> — the data is preprocessed and some additional metadata is generated, then it is outsourced to the cloud storage provider. <strong className="text-foreground">Verification phase</strong> — the auditor sends a challenge request to the cloud storage provider that generates possession proof with the data and metadata, and offers it to the auditor. The auditor verifies the proof that ensures the data integrity is intact.</p>
              </div>
              <div><PageRef pages="189–190" label="Source" /></div>

              {/* Integrity Design Challenges */}
              <div className="border-t border-border pt-6">
                <p className="text-sm font-bold text-foreground mb-4">Data Integrity Scheme Design Challenges <PageRef pages="190–191" /></p>
                <div className="space-y-1">
                  <AccordionItem
                    title="1. Computation Efficiency"
                    content="In data integrity scheme, the data can be preprocessed before outsourcing into the cloud storage server. The generation of metadata from original data similar to the cloud storage server creates overhead while performing — this may affect the computation efficiency. The preprocessing phase for a small dataset does not matter the computation efficiency but it has a significant effect by using large datasets. In the server end, the computation cost of the proof of possession limits how regularly the customer can verify the outsourced data integrity. Data integrity scheme used primitives as metadata that also affects on the computation time."
                    page="190"
                  />
                  <AccordionItem
                    title="2. Communication Efficiency"
                    content="The communication efficiency can be described in three major aspects: 1) data owner having a challenge request for the proof of possession; 2) the challenge response from the cloud storage server for the verification of possession; and 3) overhead occurring during the initial transfer of data along the metadata. The communication overhead in dynamic data comprises the updates verification. Algebraic signatures offer the communication efficiency by using low network bandwidth during response time and challenge request. The size of response and challenge is usually small by using the Hill cipher and offering the efficient communication."
                    page="190"
                  />
                  <AccordionItem
                    title="3. Reduced Disk I/O"
                    content="The overhead in metadata access and block access for the generation of proof on the cloud storage server has derived the efficiency of disk I/O in the data integrity scheme. For the purpose of generating proof to access all blocks impacts on the efficiency of the data integrity scheme and scheme becomes impractical for employing large datasets. The size of the disk employs either variable length block size or fixed. If the block size is small, then the larger the blocks in the file will influence the preprocessing time in metadata tags generation for all blocks. Due to the variable length of data/metadata that cannot be accessed directly by a particular block index, it impacts on the disk I/O and increases the process of verification."
                    page="190"
                  />
                  <AccordionItem
                    title="4. Security (Attack Vulnerabilities)"
                    content="Concerns while designing data integrity schemes are that they are vulnerable to different attacks. The data integrity schemes may find it difficult or fail to identify data corruption timely — this causes unrecoverable damage. The cloud provider must ensure to maintain data accuracy and integrity. Software integrity protects the software from unauthorized modification by intentionally or unintentionally. Cloud services security is based on the interface's security because the unauthorized customer may gain control of them and change or delete the customer data."
                    page="190–191"
                  />
                </div>
              </div>

              {/* Software, Network, Hardware integrity */}
              <div className="border-t border-border pt-6 space-y-3 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Software Integrity:</strong> Protects the software from unauthorized modification intentionally or unintentionally. Cloud service providers implement a set of APIs or software interfaces used to help the customers to interact and manage the cloud services. The cloud services security is based on the interface&apos;s security. Administrator or software owner is responsible to protect the software integrity.</p>
                <p><strong className="text-foreground">Network and Hardware Integrity:</strong> Required to address the cloud provider and protect the underlying hardware from fabrication, modification and theft. Cloud service models (IaaS, PaaS and SaaS) are the fundamental task to keep the data integrity and usually offer massive data processing ability.</p>
                <p><strong className="text-foreground">Storage Growth Challenge:</strong> The challenges associated with the data storage in the cloud — when the solid-state disks (tapes or hard disk drives) capacity are increased and unable to keep pace with the growth of data, vendors need to scale up the storage. This may result in high possibility of data corruption, data loss, disk failure or node failure.</p>
                <div><PageRef pages="191" label="Source" /></div>
              </div>
            </div>

            {/* Attacks panel */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card border border-destructive/20 rounded-2xl p-6">
                <p className="text-sm font-bold text-destructive uppercase tracking-wider mb-1">5 Attack Vectors Against Integrity Schemes</p>
                <div className="mb-4"><PageRef pages="190–191" /></div>
                <div className="space-y-1">
                  {[
                    { title: "Tag Forgery Attack", desc: "The tag forgery attack is possible through a malicious cloud storage provider that tries to hide the data damage of customers and avoid the auditing challenge." },
                    { title: "Data Deletion Attack", desc: "The cloud storage provider may proceed the challenge through generating a legal proof of possession with the tags in which the original data may have been entirely deleted." },
                    { title: "Replace Attack", desc: "The cloud storage provider may replace the data blocks of deleted or corrupted pair and respectively tags using another valid pair as the response of challenge, which deceives the verifier." },
                    { title: "Pollution Attack", desc: "The correct data is employed by the dishonest server in the generation of response against a challenge but it offers corrupted or useless blocks in the repair phase." },
                    { title: "Data Leak Attack", desc: "The extraction of stored data by the attacker during the proofing protocol with wiretapping technique." },
                  ].map((atk) => (
                    <AccordionItem key={atk.title} title={atk.title} content={atk.desc} page="190–191" />
                  ))}
                </div>
              </div>
              <div className="bg-blue-400/5 border border-blue-400/20 rounded-2xl p-5">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Cloud Models and Integrity</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Cloud service models (IaaS, PaaS and SaaS) are the fundamental task to keep the data integrity and usually offer massive data processing ability. The cloud computing models explain numerous threats containing the sophisticated insider attack on the data attributes.
                </p>
                <div className="mt-2"><PageRef pages="191" /></div>
              </div>
            </div>
          </div>
        )}

        {/* CONFIDENTIALITY */}
        {active === "confidentiality" && (
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 bg-card border border-emerald-400/30 rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center">
                  <EyeOff className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-emerald-400">B. Confidentiality</h3>
                  <PageRef pages="191" />
                </div>
              </div>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-xl p-4">
                <p className="text-sm text-foreground leading-relaxed font-medium">
                  &quot;Confidentiality refers to keeping the customer&apos;s data secret in the cloud computing system and only the authorized customers or systems can able to access the data.&quot;
                </p>
                <div className="mt-2"><PageRef pages="191" /></div>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Cloud computing (e.g. applications and its infrastructures) are basically in public clouds and have more threats on the systems or applications as compared to those hosted in private data centers. Therefore, it is the fundamental requirement to keep the customer data secret — considering the increasing number of applications, customers and devices involved.</p>
                <p>Vendors of cloud computing have extensively adopted the two basic approaches such as <strong className="text-foreground">cryptography</strong> and <strong className="text-foreground">physical isolation</strong> to achieve the confidentiality. The cloud computing provides services and data that are transmitted through the public network and it cannot achieve physical isolation. Virtual LAN and middle boxes such as packet filters and firewall should be deployed to accomplish virtual physical isolation.</p>
                <p><strong className="text-foreground">VPN Cubed</strong> released by CohesiveFT offers a security boundary for the IT infrastructure although it is inside the single, multiple or hybrid cloud data center ecosystems. Vertica offers VPN and firewall to secure its database and deploys on the Amazon EC2. When the Amazon EC2 has provisioned the Vertica database, it offers customers full root access — helping customers secure the systems. They create a VPN connection among the enterprise customers and Vertica to the cloud instance and firewall is set for the outside world.</p>
                <p>Confidentiality is also enhanced by encrypting the data before transfer into cloud storage and <strong className="text-foreground">TC3</strong> is successfully employed in this approach. Numerous concerns arise regarding the issues of application security and privacy, multi-tenancy, and data remanence.</p>
              </div>
              <div><PageRef pages="191" label="Source" /></div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {[
                {
                  title: "1. Multi-Tenancy",
                  pages: "191",
                  desc: "Multi-tenancy refers to the characteristics of cloud resources that are shared including the data, memory, networks and programs. Cloud computing is like the business model where the multiple customers can access same shared resources at the application level, host level, and network level. Multi-tenancy is similar to multi-tasking that shares some common processing resources like CPU — and it presents a number of confidentiality and privacy threats.",
                },
                {
                  title: "2. Data Remanence",
                  pages: "191",
                  desc: "The data is represented in residual that can be unintentionally removed or erased due to the lack of hardware separation among different customers and virtual separation of the logical drives on a single cloud infrastructure. It may lead to the unintentional disclosure of private data.",
                },
                {
                  title: "3. Application Security and Privacy",
                  pages: "191",
                  desc: "Data confidentiality is associated with the user authentication. To protect the customer's account from hackers is a large problem of controlling the access of objects including software, devices and memory. The electronic authentication establishes the confidence of customer identities. If the customer used weak authentication to access an account, it can lead to unauthorized access to the cloud. In the cloud computing environment, the customer needs to trust the applications offered by the organization that is handled and maintained the customer data in a secure manner. The possibilities of unauthorized access by the use of vulnerable applications or weak identification create the issue of data privacy and confidentiality.",
                },
              ].map(({ title, pages, desc }) => (
                <div key={title} className="bg-card border border-emerald-400/20 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-bold text-emerald-400">{title}</p>
                    <PageRef pages={pages} />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AVAILABILITY */}
        {active === "availability" && (
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 bg-card border border-orange-400/30 rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-400/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-400">C. Availability</h3>
                  <PageRef pages="191–192" />
                </div>
              </div>
              <div className="bg-orange-400/10 border border-orange-400/30 rounded-xl p-4">
                <p className="text-sm text-foreground leading-relaxed font-medium">
                  &quot;Availability in cloud computing including applications and its infrastructure is to ensure that the authorized customers can access the property of system at all time on demand.&quot;
                </p>
                <div className="mt-2"><PageRef pages="191" /></div>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Cloud computing models (IaaS, PaaS and SaaS) allows its customers to access the services and applications from anyplace at any time. Vendors of cloud computing offer the cloud platform and infrastructure that is based on VM. The <strong className="text-foreground">Amazon web services</strong> offer S3, EC2 that is based on VM called Skytap — and Xen provides virtual lab management application that depends on the hypervisor (Xen, VMware and Microsoft Hyper-V).</p>
                <p>For example, <strong className="text-foreground">Xen virtual machine</strong> offered by Amazon is able to provide separated storage virtualization, memory virtualization, machine/CPU virtualization etc. where a large number of commodity PCs are hosted. Service providers can split resources (memory, capacity, storage, CPU cycle) on demand from Amazon based on usage expense in the form of each unit.</p>
                <p>Currently, the vendors of the cloud are offering platforms and infrastructures depending on the VM (Skytap, Amazon) provide the ability to filter and block the traffic based on port and IP address to secure systems — but these services are not equal to the network security controls in mostly cloud enterprises.</p>
                <p>Most cloud vendors (Google, Amazon) provide <strong className="text-foreground">geographic redundancy</strong> in their cloud and hopefully allow high availability on a single provider. The cloud system is capable of carrying operations even in the security breaches possibilities or authorities misbehave. Cloud service shows a heavy reliance on the network and infrastructure resources available at any time.</p>
              </div>
              <div><PageRef pages="191–192" label="Source" /></div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {/* Table II */}
              <div className="bg-card border border-border rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-bold text-foreground">Table II — Distributed System Security Requirements and Threats</p>
                  <PageRef pages="192" />
                </div>
                <div className="space-y-3">
                  {[
                    {
                      level: "Physical Level",
                      service: "Physical datacenter",
                      users: "Owner owns the cloud infrastructure",
                      reqs: ["Protection of network resources", "Network protection", "Legal use of cloud infrastructure", "Security and reliability of hardware"],
                      threats: ["Misuse of cloud infrastructure", "Hardware modification/interruption/stealing", "Network attacks", "DDOS", "Natural disasters"],
                    },
                    {
                      level: "Virtual Level",
                      service: "IaaS, PaaS",
                      users: "Developers deploy software on the cloud infrastructure",
                      reqs: ["Virtual cloud protection", "Cloud control management security", "Access control", "Communication and application security", "Security of data (transit/rest/remanence)"],
                      threats: ["Connection flooding", "Network exposure", "Session hijacking", "Software interruption or modification", "Programming flaws", "Impersonation", "DDOS"],
                    },
                    {
                      level: "Application Level",
                      service: "SaaS",
                      users: "End user subscribes services provided by cloud provider",
                      reqs: ["Software security", "Protection of data from exposure", "Privacy in multi-tenant environment", "Service availability", "Communication protection", "Access control"],
                      threats: ["Traffic flow analysis", "Privacy breach", "Network exposure", "Interception", "Data interruption", "Session hijacking", "Data modification at transit or rest", "Impersonation"],
                    },
                  ].map(({ level, service, users, reqs, threats }) => (
                    <AccordionItem
                      key={level}
                      title={`${level} — ${service}`}
                      content={`Users: ${users}. Security Requirements: ${reqs.join("; ")}. Security Threats: ${threats.join("; ")}.`}
                      page="192"
                    />
                  ))}
                </div>
              </div>

              {/* 8 Distributed Security Objectives */}
              <div className="bg-orange-400/5 border border-orange-400/20 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold text-orange-400 uppercase tracking-wider">8 Distributed System Security Objectives</p>
                  <PageRef pages="192" />
                </div>
                <ol className="space-y-2">
                  {[
                    "Ensure the data confidentiality among the participating systems.",
                    "When add or remove resources on a physical level then maintain the exactly same security level.",
                    "Make sure that there is no data leakage among different applications during the separation of processes and data in the cloud at the virtual level.",
                    "To maintain or manage the integrity provided by the services such as correct operations and confidentiality.",
                    "To provide the appropriate secure networks among the non-open systems world.",
                    "To authenticate the different communicating customers' identities — and if necessary, the data delivery and origin for the purposes of banking to ensure non-repudiation.",
                    "To ensure the availability of data or systems communicated among the participating systems.",
                    "The integrity of data or systems is maintained by preventing any modification or loss from unauthorized access between the participating systems communicated.",
                  ].map((obj, i) => (
                    <li key={i} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                      <span className="w-4 h-4 rounded-full bg-orange-400/20 text-orange-400 flex items-center justify-center font-bold flex-shrink-0 text-[10px] mt-0.5">{i + 1}</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
