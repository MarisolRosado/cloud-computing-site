"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Search, ExternalLink, BookOpen, Shield, Cloud, Sparkles } from "lucide-react"


const modernExternalRefs = [
  {
    id: "ext-1",
    category: "Modern Standards & Frameworks",
    title: "NIST SP 800-207: Zero Trust Architecture",
    authors: "S. Rose, O. Borchert, S. Mitchell, S. Connelly",
    year: "2020",
    url: "https://csrc.nist.gov/publications/detail/sp/800-207/final",
    organization: "National Institute of Standards and Technology (NIST)",
    description: "Establishing strict identity checks and micro-segmentation models for cloud native architectures to replace legacy perimeter security.",
  },
  {
    id: "ext-2",
    category: "Cloud Security Best Practices",
    title: "Cloud Security Alliance Cloud Controls Matrix (CCM v4.0)",
    authors: "Cloud Security Alliance Working Group",
    year: "2023",
    url: "https://cloudsecurityalliance.org/research/cloud-controls-matrix",
    organization: "Cloud Security Alliance (CSA)",
    description: "Cybersecurity control framework specifically designed for cloud computing, mapping compliance standards across IaaS, PaaS, and SaaS environments.",
  },
  {
    id: "ext-3",
    category: "Cloud Native Architecture",
    title: "AWS Well-Architected Framework: Security Pillar",
    authors: "Amazon Web Services Engineering",
    year: "2024",
    url: "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html",
    organization: "Amazon Web Services (AWS)",
    description: "Best practices and architectural guidelines for data protection, privilege management, infrastructure protection, and incident response in cloud environments.",
  },
  {
    id: "ext-4",
    category: "Cloud Native Architecture",
    title: "Microsoft Azure Security Benchmark v3",
    authors: "Microsoft Azure Security Architecture Team",
    year: "2024",
    url: "https://learn.microsoft.com/en-us/security/benchmark/azure/overview",
    organization: "Microsoft Cloud",
    description: "Comprehensive security recommendations and controls for hybrid cloud workloads running across multicloud infrastructure.",
  },
  {
    id: "ext-5",
    category: "Modern Standards & Frameworks",
    title: "Kubernetes Hardening Guide (NSA & CISA)",
    authors: "National Security Agency & Cybersecurity and Infrastructure Security Agency",
    year: "2022",
    url: "https://www.nsa.gov/Press-Room/News-Highlights/Article/Article/2716980/nsa-cisa-release-kubernetes-hardening-guidance/",
    organization: "NSA & CISA",
    description: "Securing container orchestration, multi-tenancy pod isolation, network policies, and role-based access control in cloud environments.",
  },
  {
    id: "ext-6",
    category: "Cloud Security Best Practices",
    title: "OWASP Cloud-Native Application Security Top 10",
    authors: "OWASP Foundation Cloud Security Project",
    year: "2023",
    url: "https://owasp.org/www-project-cloud-native-application-security-top-10/",
    organization: "OWASP",
    description: "Identifies top critical security risks in cloud native applications including serverless misconfigurations, broken authentication, and insecure APIs.",
  },
  {
    id: "ext-7",
    category: "Modern Standards & Frameworks",
    title: "ENISA Cloud Computing Security & Procurement Guide",
    authors: "European Union Agency for Cybersecurity",
    year: "2023",
    url: "https://www.enisa.europa.eu/topics/cloud-and-big-data/cloud-security",
    organization: "ENISA",
    description: "European standards and threat landscapes addressing cloud service provider risk management, data sovereignty, and encryption protocols.",
  },
  {
    id: "ext-8",
    category: "Cloud Native Architecture",
    title: "Google Cloud Security Foundations Blueprint",
    authors: "Google Cloud Security Team",
    year: "2024",
    url: "https://cloud.google.com/architecture/security-foundations",
    organization: "Google Cloud Platform",
    description: "Defines end-to-end security architectures for data confidentiality at rest and in transit, hardware root of trust, and IAM federation.",
  },
]

const original59Refs = [
  { num: 1, text: 'M. Armbrust, I. Stoica, M. Zaharia et al., "A review of cloud computing," Commun. ACM, vol. 53, no. 4, 2010.', page: "183" },
  { num: 2, text: 'V. Chang, "A proposed framework for cloud computing adoption," Int. J. Organ. Collect. Intell., vol. 6, no. 3, pp. 1–17, 2016.', page: "183" },
  { num: 3, text: 'R. B. Bohn, J. Messina, F. Liu, J. Tong, and J. Mao, "NIST cloud computing reference architecture," Proc. IEEE World Congr. Serv., pp. 594–596, 2011.', page: "183" },
  { num: 4, text: 'P. Mell and T. Grance, "The NIST definition of cloud computing," NIST Spec. Publ. 800-145, vol. 145, p. 7, 2011.', page: "183" },
  { num: 5, text: 'R. Buyya, C. S. Yeo, and S. Venugopal, "Market-oriented cloud computing: Vision, hype, and reality for delivering IT services as computing utilities," Proc. 10th IEEE Int. Conf. High Perform. Comput. Commun., pp. 5–13, 2008.', page: "183" },
  { num: 6, text: 'M. Zhou, R. Zhang, W. Xie, W. Qian, and A. Zhou, "Security and privacy in cloud computing: A survey," Proc. 6th Int. Conf. Semant. Knowl. Grid, pp. 105–112, 2010.', page: "183" },
  { num: 7, text: 'D. G. Rosado, R. Gomez, D. Mellado, and E. Fernández-Medina, "Security analysis in the migration to cloud environments," Futur. Internet, vol. 4, pp. 469–487, 2012.', page: "183" },
  { num: 8, text: 'C. Wang, Q. Wang, K. Ren, and W. J. Lou, "Ensuring data storage security in cloud computing," 17th Int. Work. Qual. Serv., pp. 37–45, 2009.', page: "183" },
  { num: 9, text: 'L. Wei, H. Zhu, Z. Cao, X. Dong, W. Jia, Y. Chen, and A. V. Vasilakos, "Security and privacy for storage and computation in cloud computing," Inf. Sci., vol. 258, pp. 371–386, 2014.', page: "183" },
  { num: 10, text: 'P. Wilson, "Positive perspectives on cloud security," Inf. Secur. Tech. Rep., vol. 16, no. 3–4, pp. 97–101, 2011.', page: "183" },
  { num: 11, text: 'L. Savu, "Cloud computing deployment models, delivery models, risks and research challenges," Proceeding IEEE Int. conf. comput. manag., 2011.', page: "184" },
  { num: 12, text: 'F. Liu, J. Tong, J. Mao, R. Bohn, J. Messina, L. Badger, and D. Leaf, "NIST cloud computing reference architecture," NIST Spec. Publ. 500-292, pp. 1–28, 2011.', page: "184" },
  { num: 13, text: 'C. Modi, D. Patel, B. Borisaniya, A. Patel, and M. Rajarajan, "A survey on security issues and solutions at different layers of Cloud computing," J. Supercomput., vol. 63, no. 2, pp. 561–592, 2013.', page: "185" },
  { num: 14, text: 'A. platform computing white Paper, Enterprise Cloud Computing: Transforming IT. 2009.', page: "185" },
  { num: 15, text: 'S. Kaisler, W. H. Money, and S. J. Cohen, "A decision framework for cloud computing," Proc. IEEE 45th Hawaii Int. Conf. Syst. Sci., pp. 1553–1562, 2012.', page: "185" },
  { num: 16, text: 'M. Ali, S. U. Khan, and A. V. Vasilakos, "Security in cloud computing: opportunities and challenges," Inf. Sci. (Ny)., vol. 305, pp. 357–383, 2015.', page: "185" },
  { num: 17, text: 'J. Brodkin, "Seven cloud-computing security risks," InfoWorld from IDG, 2008.', page: "186" },
  { num: 18, text: 'A. Macdermott, Q. Shi, M. Merabti, and K. Kifayat, "Detecting intrusions in the cloud environment," Proc. 14th Annu. Post-Grad. Symp. Converg. Telecommun. Netw. Broadcast., 2013.', page: "186" },
  { num: 19, text: 'F. Lombardi and R. Di Pietro, "Secure virtualization for cloud computing," J. Netw. Comput. Appl., vol. 34, pp. 1113–1122, 2011.', page: "186" },
  { num: 20, text: 'S. Subashini and V. Kavitha, "A survey on security issues in service delivery models of cloud computing," J. Netw. Comput. Appl., vol. 34, no. 1, pp. 1–11, 2011.', page: "186" },
  { num: 21, text: 'D. Sun, G. Chang, L. Sun, and X. Wang, "Surveying and analyzing security, privacy and trust issues in cloud computing environments," Procedia Eng., vol. 15, pp. 2852–2856, 2011.', page: "186" },
  { num: 22, text: 'Q. Zhang, L. Cheng, and R. Boutaba, "Cloud computing: state-of-the-art and research challenges," J. Internet Serv. Appl., vol. 1, no. 1, pp. 7–18, 2010.', page: "186" },
  { num: 23, text: 'H. Fan, F. Khadeer, M. Younas, and O. Khadeer, "An integrated personalization framework for SaaS-based cloud services," Futur. Gener. Comput. Syst., vol. 53, pp. 157–173, 2015.', page: "187" },
  { num: 24, text: 'L. F. B. Soares, D. A. B. Fernandes, J. V. Gomes, M. M. Freire, and P. R. M. Inacio, "Cloud security: state of the art," Secur., Priv. Trust Cloud Syst., pp. 3–44, 2013.', page: "187" },
  { num: 25, text: 'K. Hashizume, D. Rosado, E. Fernández-Medina, and E. Fernandez, "An analysis of security issues for cloud computing," J. Internet Serv. Appl., vol. 4, no. 5, pp. 1–13, 2013.', page: "187" },
  { num: 26, text: 'K. Hashizume, N. Yoshioka, and E. B. Fernandez, "Three misuse patterns for cloud computing," Secur. Eng. Cloud Comput. Approaches Tools, pp. 36–53, 2013.', page: "187" },
  { num: 27, text: 'T. Garfinkel and M. Rosenblum, "When virtual is harder than real: security challenges in virtual machine based computing environments," Proc. 10th Conf. Hot Top. Oper. Syst., pp. 20–25, 2005.', page: "187" },
  { num: 28, text: 'D. Owens, "Securing elasticity in the cloud," Commun. ACM, vol. 53, no. 6, p. 46, 2010.', page: "187" },
  { num: 29, text: 'M. Al Morsy, J. Grundy, and I. Müller, "An analysis of the cloud computing security problem," Proc. APSEC Cloud Work. Sydney, Aust., pp. 1–6, 2010.', page: "187" },
  { num: 30, text: 'A. Jasti, P. Shah, R. Nagaraj, and R. Pendse, "Security in multi-tenancy cloud," Proc. Int. Carnahan Conf. Secur. Technol., pp. 35–41, 2010.', page: "187" },
  { num: 31, text: 'H. Aljahdali, A. Albatli, P. Garraghan, P. Townend, L. Lau, and J. Xu, "Multi-Tenancy in cloud computing," IEEE 8th Int. Symp. Serv. Oriented Syst. Eng., pp. 344–351, 2014.', page: "188" },
  { num: 32, text: 'Z. Gou, S. Yamaguchi, and B. B. Gupta, "Analysis of various security issues and challenges in cloud computing environment: A survey," Handb. Res. Mod. Cryptogr. Solut. Comput. Cyber Secur. IGI Glob., pp. 393–419, 2016.', page: "188" },
  { num: 33, text: 'T. C. Nguyen, W. Shen, Z. Luo, Z. Lei, and W. Xu, "Novel data integrity verification schemes in cloud storage," Comput. Inf. Sci., pp. 115–125, 2014.', page: "188" },
  { num: 34, text: 'C. Eric, D. Chris, E. Mike, and G. Jonathan, "Security for cloud computing 10 Steps to ensure success," Cloud Stand. Cust. Counc., pp. 1–35, 2015.', page: "188" },
  { num: 35, text: 'S. Paquette, P. T. Jaeger, and S. C. Wilson, "Identifying the security risks associated with governmental use of cloud computing," Gov. Inf. Q., vol. 27, no. 3, pp. 245–253, 2010.', page: "189" },
  { num: 36, text: 'K. Karaoglanoglou and H. Karatza, "Resource discovery in a Grid system: Directing requests to trustworthy virtual organizations based on global trust values," J. Syst. Softw., vol. 84, no. 3, pp. 465–478, 2011.', page: "189" },
  { num: 37, text: 'N. Iltaf, M. Hussain, and F. Kamran, "A mathematical approach towards trust based security in pervasive computing environment," Proceeding Int. Conf. Inf. Secur. Assur., pp. 702–711, 2009.', page: "189" },
  { num: 38, text: 'S. Rizvi, K. Cover, and C. Gates, "A trusted third-party (TTP) based encryption scheme for ensuring data confidentiality in cloud environment," Procedia Comput. Sci., vol. 36, pp. 381–386, 2014.', page: "189" },
  { num: 39, text: 'S. Aldossary and W. Allen, "Data security, privacy, availability and integrity in cloud computing: issues and current solutions," Int. J. Adv. Comput. Sci. Appl., vol. 7, no. 4, pp. 485–498, 2016.', page: "189" },
  { num: 40, text: 'F. Zafar, A. Khan, S. U. R. Malik et al., "A survey of cloud computing data integrity schemes: Design challenges, taxonomy and future trends," Comput. Secur., vol. 65, pp. 29–49, 2017.', page: "189" },
  { num: 41, text: 'L. Chen, "Using algebraic signatures to check data possession in cloud storage," Futur. Gener. Comput. Syst., vol. 29, no. 7, pp. 1709–1715, 2013.', page: "190" },
  { num: 42, text: 'E. Esiner, A. Kachkeev, S. Braunfeld, A. Kupcu, and O. Ozkasap, "FlexDPDP: Flexlist-based optimized dynamic provable data possession," Cryptol. ePrint Arch. Rep. 2013/645, pp. 1–40, 2013.', page: "190" },
  { num: 43, text: 'G. Ateniese, R. Burns, and J. Herring, "Provable data possession at untrusted stores," Proc. 14th ACM Conf. Comput. Commun. Secur., pp. 598–610, 2007.', page: "190" },
  { num: 44, text: 'Y. Yu, J. Ni, M. H. Au, H. Liu, H. Wang, and C. Xu, "Improved security of a dynamic remote data possession checking protocol for cloud storage," Expert Syst. Appl., vol. 41, no. 17, pp. 7789–7796, 2014.', page: "191" },
  { num: 45, text: 'K. Yang and X. Jia, "Data storage auditing service in cloud computing: Challenges, methods and opportunities," World Wide Web, vol. 15, no. 4, pp. 409–428, 2012.', page: "191" },
  { num: 46, text: 'Y. Zhu, H. Hu, G.-J. Ahn, Y. Han, and S. Chen, "Collaborative integrity verification in hybrid clouds," Proc. 7th Int. Conf. Collab. Comput. Networking, Appl. Work., pp. 191–200, 2011.', page: "191" },
  { num: 47, text: 'S. K. P and R. Subramanian, "An efficient and secure protocol for ensuring data storage security in cloud computing," J. Comput. Sci., vol. 8, no. 6, pp. 261–275, 2011.', page: "191" },
  { num: 48, text: 'Q. Wang, C. Wang, K. Ren, W. Lou, and J. Li, "Enabling public auditability and data dynamics for storage security in cloud computing," Parallel Distrib. Syst., vol. 22, no. 5, pp. 847–859, 2011.', page: "191" },
  { num: 49, text: 'M. Armbrust, A. Fox, R. Griffith, A. Joseph, and RH, "Above the clouds: A Berkeley view of cloud computing," Univ. California, Berkeley, Tech. Rep. UCB, pp. 7–13, 2009.', page: "191" },
  { num: 50, text: 'M. F. Mushtaq, S. Jamel, and M. M. Deris, "Triangular coordinate extraction (TCE) for hybrid cubes," J. Eng. Appl. Sci., vol. 12, no. 8, pp. 2164–2169, 2017.', page: "191" },
  { num: 51, text: 'Cloud Security Alliance, "Top threats to cloud computing," Cloud Secur. Alliance, pp. 1–14, 2010.', page: "191" },
  { num: 52, text: 'F. S. Al-Anzi, A. A. Salman, N. K. Jacob, and J. Soni, "Towards robust, scalable and secure network storage in cloud computing," Proc. 4th Int. Conf. Digit. Inf. Commun. Technol., pp. 51–55, 2014.', page: "192" },
  { num: 53, text: 'K. D. Bowers, A. Juels, and A. Oprea, "HAIL: A high-availability and integrity layer for cloud storage," Proc. 16th ACM Conf. Comput. Commun. Secur., vol. 489, p. 187, 2009.', page: "192" },
  { num: 54, text: 'A. Bessani, M. Correia, B. Quaresma, F. André, and P. Sousa, "DEPSKY: Dependable and secure storage in a cloud-of-clouds," ACM Trans. Storage, vol. 9, no. 4, pp. 1–36, 2013.', page: "192" },
  { num: 55, text: 'S. Boeyen and T. Moses, "Trust management in the public-key infrastructure," Entrust securing Digit. identities Inf., pp. 1–36, 2003.', page: "192" },
  { num: 56, text: 'A. Levi and M. U. Caglayan, "The problem of trusted third party in authentication and digital signature protocols," Proc. 12th Int. Symp. Comput. Inf. Sci., 1997.', page: "192" },
  { num: 57, text: 'M. S. E. H. Tebaa, "Secure Cloud Computing Through Homomorphic Encryption," Int. J. Adv. Comput. Technol., vol. 5, no. 16, pp. 29–38, 2013.', page: "193" },
  { num: 58, text: 'M. F. Mushtaq, S. Jamel, K. M. Mohamad, S. Kamal, and A. Khalid, "Key generation technique based on triangular coordinate extraction for hybrid cubes," J. Telecommun. Electron. Comput. Eng., 2017.', page: "193" },
  { num: 59, text: 'A. Bhardwaj, G. V. B. Subrahmanyam, V. Avasthi, and H. Sastry, "Security algorithms for cloud computing," Procedia Comput. Sci., 2016.', page: "193" },
]

export default function ReferencesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState<"all" | "modern" | "original">("all")

  const filteredModern = modernExternalRefs.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.authors.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredOriginal = original59Refs.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background pastel glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Main Project View</span>
          </Link>
          <div className="flex items-center gap-2 font-bold text-lg text-foreground">
            <Cloud className="w-5 h-5 text-primary" />
            <span>Cloud Citations &amp; Knowledge Hub</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Header with rhyming touches */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/15 text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm shadow-primary/20">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            Dynamic Pastel Citations Store
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Global Catalog of References Galore!
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-balance italic mb-6">
            &ldquo;Search through the wisdom of the past, with knowledge built to hold and last! <br />
            Explore the fifty-nine classic papers in review, or modern external links waiting for you.&rdquo;
          </p>

          {/* Pastel Artwork Banner */}
          <div className="grid md:grid-cols-2 gap-4 my-8 max-w-3xl mx-auto">
            <div className="relative h-44 rounded-2xl overflow-hidden border border-primary/40 shadow-md">
              <Image src="/images/pastel_cloud_network.png" alt="Cloud Network" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-44 rounded-2xl overflow-hidden border border-accent/40 shadow-md">
              <Image src="/images/pastel_security_shield.png" alt="Security Shield" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-card/80 backdrop-blur-md border border-border/80 rounded-2xl p-6 mb-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 bg-background/80 border border-border rounded-xl p-1 w-full md:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "all"
                  ? "bg-primary text-background shadow-md shadow-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All Citations ({filteredModern.length + filteredOriginal.length})
            </button>
            <button
              onClick={() => setActiveTab("modern")}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === "modern"
                  ? "bg-gradient-to-r from-primary to-accent text-background shadow-md shadow-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              External Standards ({filteredModern.length})
            </button>
            <button
              onClick={() => setActiveTab("original")}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "original"
                  ? "bg-primary text-background shadow-md shadow-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Original IJACSA Papers ({filteredOriginal.length})
            </button>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by author, title, or word..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/70"
            />
          </div>
        </div>

        {/* Section 1: Modern External Web References */}
        {(activeTab === "all" || activeTab === "modern") && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 border-b border-border/50 pb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground flex items-center gap-2.5">
                  <Shield className="w-7 h-7 text-primary" />
                  Modern External Standards &amp; Live Links (2020–2026)
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Direct links to institutional docs and guidelines so cloud security knowledge expands and shines!
                </p>
              </div>
              <span className="text-xs font-mono font-bold bg-primary/20 text-primary px-3 py-1 rounded-full">
                {filteredModern.length} Live Links
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredModern.map((ref) => (
                <div
                  key={ref.id}
                  className="group bg-card/90 backdrop-blur-md border border-border/80 hover:border-primary rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/15 px-3 py-1 rounded-md">
                        {ref.category}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">{ref.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {ref.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary/80 mb-3">{ref.authors} &middot; {ref.organization}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {ref.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-mono">Verified Official Source</span>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent transition-colors bg-primary/10 group-hover:bg-accent/15 px-4 py-2 rounded-xl"
                    >
                      <span>Visit External Web Page</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Original 59 References */}
        {(activeTab === "all" || activeTab === "original") && (
          <div>
            <div className="flex items-center justify-between mb-6 border-b border-border/50 pb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground flex items-center gap-2.5">
                  <BookOpen className="w-7 h-7 text-accent" />
                  All Fifty-Nine IJACSA Original Citations (1 – 59)
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Complete catalog extracted directly from Mushtaq et al. (2017).
                </p>
              </div>
              <span className="text-xs font-mono font-bold bg-accent/20 text-accent px-3 py-1 rounded-full">
                {filteredOriginal.length} Citations
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredOriginal.map(({ num, text, page }) => (
                <div
                  key={num}
                  className="bg-card/70 backdrop-blur-sm border border-border/60 hover:border-primary/50 rounded-xl p-4 flex gap-3.5 hover:bg-card transition-all duration-200"
                >
                  <span className="w-8 h-8 rounded-lg bg-primary/15 text-primary text-xs font-extrabold flex items-center justify-center flex-shrink-0 mt-0.5">
                    #{num}
                  </span>
                  <div className="min-w-0 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-foreground/90 leading-relaxed mb-3">{text}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-border/40 text-[11px] text-muted-foreground font-mono">
                      <span>Pg. {page}</span>
                      <span className="text-primary/80 font-semibold">Ref. {num}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
