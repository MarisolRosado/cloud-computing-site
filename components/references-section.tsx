import { ExternalLink, BookOpen } from "lucide-react"
import { SectionHeader } from "./section-header"

const links = [
  {
    label: "Original Paper – IJACSA",
    url: "https://thesai.org/Publications/ViewPaper?Volume=8&Issue=10&Code=IJACSA&SerialNo=25",
    desc: "Cloud Computing Environment and Security Challenges: A Review — Mushtaq et al. (2017), Vol. 8, No. 10, pp. 183–195",
  },
  {
    label: "NIST Cloud Computing Definition",
    url: "https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf",
    desc: "NIST SP 800-145 — The NIST Definition of Cloud Computing (Mell & Grance, 2011)",
  },
  {
    label: "Cloud Security Alliance (CSA)",
    url: "https://cloudsecurityalliance.org",
    desc: "Industry organization promoting the use of best practices for providing security assurance within Cloud Computing",
  },
  {
    label: "AWS Cloud Computing Concepts",
    url: "https://aws.amazon.com/what-is-cloud-computing/",
    desc: "Amazon Web Services — overview of cloud computing benefits, deployment models, and service types",
  },
  {
    label: "Google Cloud Architecture",
    url: "https://cloud.google.com/architecture",
    desc: "Google Cloud Architecture Framework — guidance on designing and operating cloud environments",
  },
  {
    label: "Microsoft Azure Cloud Models",
    url: "https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing/",
    desc: "Microsoft Azure — IaaS, PaaS, and SaaS explanation with real-world examples",
  },
  {
    label: "PKI & Certificate Infrastructure",
    url: "https://www.ietf.org/rfc/rfc5280.txt",
    desc: "RFC 5280 — Internet X.509 Public Key Infrastructure Certificate and CRL Profile (LDAP, SSO, PKI explained in TTP context)",
  },
]

const citedRefs = [
  { num: "1–3", desc: "Rapid deployment, cost reduction, and minimal investment as major factors for cloud adoption. (p. 183)" },
  { num: "4", desc: "NIST definition of cloud computing — ubiquitous, on-demand network access to configurable resources. (p. 183)" },
  { num: "5", desc: "Cloud as a collection of virtualized and interconnected computers in parallel and distributed systems based on SLA. (p. 183)" },
  { num: "6", desc: "Microsoft, Google, Amazon, IBM etc. developed cloud computing systems. (p. 183)" },
  { num: "7", desc: "Significant barriers to adopting cloud computing: security, privacy, compliance, and legal matters. (p. 183)" },
  { num: "8–9", desc: "Security challenges: privacy, control, virtualization, accessibility, credential management, confidentiality, authentication, integrity. (p. 183)" },
  { num: "12", desc: "NIST standards and guidelines — valuable contribution for understanding cloud services. (p. 184)" },
  { num: "13", desc: "Public cloud service level agreement between client and resource provider. (p. 185)" },
  { num: "14", desc: "Private cloud: infrastructure operated and owned by same organization. (p. 185)" },
  { num: "15", desc: "Hybrid cloud: combination of two or more cloud deployment models. (p. 185)" },
  { num: "16", desc: "Community cloud: several organizations or third party operate shared resources. (p. 185)" },
  { num: "17–19", desc: "IaaS minimizes initial cost of purchasing computing hardware. (p. 186)" },
  { num: "20–21", desc: "PaaS delivers software development lifecycle management. (p. 186)" },
  { num: "38", desc: "Trusted Third Party (TTP) enabling trust and cryptography. (p. 189)" },
  { num: "39–40", desc: "Data integrity — preservation of data stored in cloud server to verify not modified or lost. (p. 189)" },
  { num: "49–50", desc: "Confidentiality — only authorized customers can access data; cryptography and physical isolation. (p. 191)" },
  { num: "52–54", desc: "Cloud system capable of carrying operations even in security breach possibilities. (p. 191–192)" },
]

export function ReferencesSection() {
  return (
    <section id="references" className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        tag="References"
        title="Sources & Useful Links"
        subtitle="All content on this page is sourced directly from the academic paper by Mushtaq et al. (2017). The following external resources provide additional context and learning."
        pages="183–195"
      />

      {/* Useful links */}
      <div className="mb-16">
        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <ExternalLink className="w-5 h-5 text-primary" />
          Useful Links & Resources
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {links.map(({ label, url, desc }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 p-5 bg-card border border-border rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ExternalLink className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm mb-1">
                  {label}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* In-text citations */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          In-Paper Citations (Selected)
        </h3>
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          {citedRefs.map(({ num, desc }, i) => (
            <div
              key={num}
              className={`flex gap-4 px-6 py-4 text-sm ${i !== citedRefs.length - 1 ? "border-b border-border" : ""}`}
            >
              <span className="text-primary font-bold w-16 flex-shrink-0">[{num}]</span>
              <span className="text-muted-foreground leading-relaxed">{desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer citation */}
      <div className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-2xl">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Full Citation:</strong>{" "}
          Mushtaq, M. F., Akram, U., Khan, I., Khan, S. N., Shahzad, A., & Ullah, A. (2017).{" "}
          <em>Cloud Computing Environment and Security Challenges: A Review.</em>{" "}
          International Journal of Advanced Computer Science and Applications (IJACSA), 8(10), 183–195.{" "}
          <a
            href="https://thesai.org/Publications/ViewPaper?Volume=8&Issue=10&Code=IJACSA&SerialNo=25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            View Paper <ExternalLink className="w-3 h-3" />
          </a>
        </p>
      </div>
    </section>
  )
}
