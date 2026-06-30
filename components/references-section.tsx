import Link from "next/link"
import { ExternalLink, BookOpen, ArrowRight, Sparkles } from "lucide-react"
import { PageRef } from "./page-ref"

const externalLinks = [
  {
    label: "Original Paper — IJACSA Vol. 8, No. 10, 2017",
    url: "https://thesai.org/Publications/ViewPaper?Volume=8&Issue=10&Code=IJACSA&SerialNo=25",
    desc: "Mushtaq et al. — Cloud Computing Environment and Security Challenges: A Review, pp. 183–195",
  },
  {
    label: "NIST SP 800-145 — Cloud Computing Definition",
    url: "https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf",
    desc: "Mell & Grance (2011) — The NIST Definition of Cloud Computing [Ref. 4, p. 183]",
  },
  {
    label: "Cloud Security Alliance (CSA)",
    url: "https://cloudsecurityalliance.org",
    desc: "Top threats to cloud computing — best practices for cloud security assurance [Ref. 51, p. 191]",
  },
  {
    label: "Amazon Web Services (IaaS/PaaS)",
    url: "https://aws.amazon.com",
    desc: "IaaS provider: EC2, S3, Xen-based VMs — cited for availability and IaaS [Ref. 52, p. 191]",
  },
  {
    label: "Microsoft Azure",
    url: "https://azure.microsoft.com",
    desc: "Public & hybrid cloud PaaS/IaaS — Microsoft Azure cited as PaaS vendor [Ref. 2, p. 185]",
  },
  {
    label: "Google Cloud Platform",
    url: "https://cloud.google.com",
    desc: "Google App Engine (PaaS) and geographic redundancy provider [Refs. 3, 6, p. 183–185]",
  },
  {
    label: "OpenStack — Private Cloud IaaS",
    url: "https://www.openstack.org",
    desc: "Open-source private cloud infrastructure cited as IaaS vendor [p. 186, Table I]",
  },
  {
    label: "RFC 5280 — PKI and CRL Profile",
    url: "https://www.rfc-editor.org/rfc/rfc5280",
    desc: "Internet X.509 PKI Certificate and CRL — foundation of TTP/SSO/LDAP discussed in Section IV [Ref. 55, p. 192]",
  },
]

const allRefs = [
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

export function ReferencesSection() {
  // Show only top 6 featured citations on the landing page to keep it clean and dynamic
  const featuredRefs = allRefs.slice(0, 6);

  return (
    <section id="references" className="py-24 relative overflow-hidden bg-gradient-to-b from-card/20 via-background to-card/40 border-t border-border/50">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-primary bg-primary/15 border border-primary/30 px-4 py-1.5 rounded-full mb-4 shadow-sm shadow-primary/20">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-accent" />
            Sources &amp; References Bright
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight bg-gradient-to-r from-foreground via-primary/90 to-accent bg-clip-text">
            Featured Citations In Line
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base italic">
            &ldquo;We trimmed the list to make it fast, with research built to hold and last! <br />
            Explore core sources right below, or visit our portal where seventy-five glow.&rdquo;
          </p>
        </div>

        {/* Dedicated Banner pointing to the separate /references page */}
        <div className="mb-14 relative group rounded-3xl p-[2px] bg-gradient-to-r from-primary via-accent to-primary background-animate shadow-2xl shadow-primary/10 hover:shadow-primary/25 transition-all duration-500">
          <div className="bg-card/95 backdrop-blur-xl rounded-[23px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
                ✨ Specialized Hub Online
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Seeking all fifty-nine citations too, plus modern web standards just for you?
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                We designed a <strong className="text-primary font-semibold">Comprehensive Citations Portal</strong> featuring every paper reference neatly categorized, plus modern cloud links directly to AWS, Azure, NIST, and Gartner!
              </p>
            </div>
            <Link
              href="/references"
              className="group/btn flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-background font-bold text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
            >
              <BookOpen className="w-5 h-5" />
              <span>Explore Citations Hub!</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* APA Main Citation */}
        <div className="bg-gradient-to-br from-primary/15 via-card/80 to-accent/10 border border-primary/40 rounded-2xl p-7 mb-12 shadow-xl backdrop-blur-md hover:border-primary/60 transition-all duration-300">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
            <p className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              Main Source — APA Citation
            </p>
            <PageRef pages="183–195" label="Full Paper" />
          </div>
          <p className="text-base text-foreground font-medium leading-relaxed">
            Mushtaq, M. F., Akram, U., Khan, I., Khan, S. N., Shahzad, A., &amp; Ullah, A. (2017).{" "}
            <em className="text-primary font-semibold">Cloud Computing Environment and Security Challenges: A Review.</em>{" "}
            International Journal of Advanced Computer Science and Applications (IJACSA), 8(10), 183–195.{" "}
            <a
              href="https://thesai.org/Publications/ViewPaper?Volume=8&Issue=10&Code=IJACSA&SerialNo=25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary font-semibold underline underline-offset-4 ml-1 inline-flex items-center gap-1 transition-colors"
            >
              https://thesai.org <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </p>
          <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
            <span>Faculty of Computer Science and IT, Universiti Tun Hussein Onn Malaysia (UTHM)</span>
            <span className="text-primary font-mono font-semibold">IJACSA 2017</span>
          </div>
        </div>

        {/* Featured 6 references */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2.5">
            <BookOpen className="w-6 h-6 text-primary" />
            Top Core References (6 of 59)
          </h3>
          <Link
            href="/references"
            className="text-sm font-semibold text-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors"
          >
            See All 59 Fine <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-14">
          {featuredRefs.map(({ num, text, page }) => (
            <div
              key={num}
              className="group bg-card/80 backdrop-blur-sm border border-border/70 hover:border-primary/50 rounded-2xl p-5 flex gap-4 shadow-sm hover:shadow-md hover:bg-card transition-all duration-300"
            >
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 text-primary text-sm font-extrabold flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all">
                {num}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-foreground/90 leading-relaxed font-medium group-hover:text-foreground transition-colors">{text}</p>
                <div className="mt-3 flex items-center justify-between">
                  <PageRef pages={page} />
                  <span className="text-[11px] font-mono text-muted-foreground group-hover:text-primary/80 transition-colors">Foundation Citation</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured External Links */}
        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2.5">
          <ExternalLink className="w-6 h-6 text-accent" />
          Featured External Web Links
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {externalLinks.slice(0, 4).map(({ label, url, desc }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card/60 backdrop-blur-sm border border-border/70 rounded-2xl p-5 hover:border-accent hover:bg-gradient-to-br hover:from-accent/10 hover:to-primary/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-base font-bold text-foreground group-hover:text-accent transition-colors leading-snug">{label}</p>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent flex-shrink-0 mt-1 transition-colors" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{desc}</p>
              </div>
              <span className="text-xs font-semibold text-primary group-hover:text-accent inline-flex items-center gap-1 mt-auto">
                Visit External Page &rarr;
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

