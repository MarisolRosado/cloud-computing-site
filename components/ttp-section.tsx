"use client"

import Image from "next/image"
import { SectionHeader } from "./section-header"
import { PageRef } from "./page-ref"

export function TTPSection() {
  return (
    <section id="ttp" className="py-24 max-w-7xl mx-auto px-6">
      <SectionHeader
        tag="Section IV"
        title="Analysis and Discussion: Trusted Third Party (TTP)"
        subtitle={`"Trusted third party in cryptography helps to facilitate the interaction among the two parties and reviews all crucial operations among them. The cloud computing environment required the TTP services that exhibits to establish the essential trust level and offers an ideal solution to maintain the authenticity, integrity and confidentiality of communication and data."`}
        pages="192–193"
      />

      {/* Trusted Crypto Showcase Image */}
      <div className="mb-8">
        <Image
          src="/images/pastel_trusted_crypto.png"
          alt="Trusted Third Party Cryptography Visualization"
          width={1200}
          height={400}
          className="rounded-2xl border border-border w-full object-cover shadow-md"
        />
      </div>

      {/* TTP Overview */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-bold text-foreground">What is TTP?</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            TTP can produce the trusted security domain with specifically addressing the loss or missing of the traditional security boundary. It is an impartial organization which delivers the confidence of business by technical and commercial security features to electronic transactions.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            TTP services are underwritten and offered along with the technical but also through the structural, financial and legal means. It is operationally linked with the <strong className="text-foreground">chain of trust (certificate paths)</strong> for the purpose of providing a web trust that establishes the concept of <strong className="text-foreground">Public Key Infrastructure (PKI)</strong>.
          </p>
          <div><PageRef pages="192" label="Source" /></div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-bold text-foreground">Public Key Infrastructure (PKI)</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            PKI offers legally acceptable and technically sound mean to implement <strong className="text-foreground">data integrity, data confidentiality, authorization, strong authentication, and non-repudiation</strong>. In a distributed information system, PKI gets benefits from coupling through the directory that is a set of objects having same attributes that are organized in hierarchical and logical manner.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            PKI is coupled with directory and can be utilized to distribute: 1) certificate status information (CRL); 2) application certificate such as end-user certificate needed to obtain using email before the transfer of encrypted message; and 3) private key — if the users do not use similar machine every day then portability is needed. The directory contains the encrypted secret or private key are decrypted using the password given by customer at the remote workstation.
          </p>
          <div><PageRef pages="192" label="Source" /></div>
        </div>
      </div>

      {/* PKI + SSO */}
      <div className="bg-card border border-primary/20 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-foreground mb-3">PKI with Single-Sign-On (SSO)</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          PKI is used with the <strong className="text-foreground">Single-Sign-On (SSO)</strong> mechanism that can be ideal for cloud computing environment, where customers navigate among the abundance of the boundaries of cross-organization. In SSO environment, the user is not required to enter the password repeatedly to access multiple resources over the network. SSO is deployed with PKI to enhance the authentication and authorization process of the whole infrastructure.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          <strong className="text-foreground">Shibboleth</strong> is the middleware open source software that offers SSO within or across the organizational boundaries and trust on third party or cloud provider to share the information like user and named attributes. Authorization process can be achieved after the successful authentication in which the customer exchanges attributes without worry about the disclosure of personal information in the resource server.
        </p>
        <div><PageRef pages="192–193" label="Source" /></div>
      </div>

      {/* 3 TTP Methods */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {[
          {
            num: "1",
            title: "Client-Server Authentication",
            pages: "192",
            content: [
              "The certification authority needs to verify the entities or systems that are involved in interaction with the cloud computing environment — which includes certifying virtual servers, network devices, environment users, and physical infrastructure servers.",
              "The certification authority of PKI develops the required strong credentials for the virtual or physical entities that are involved in cloud and security domain are build with specific boundaries.",
              "The availability of the strongest authentication process in distributed environments is the digital signature that is the combination of LDAP and SSO which ensure the user flexibility and mobility.",
              "The authentication of customers is performed transparently and automatically to other devices or servers over the network by signing private key.",
            ],
          },
          {
            num: "2",
            title: "Low or High-Level Confidentiality",
            pages: "193",
            content: [
              "Transmission of data across the network is a challenge due to continuously rising threats of data interruption or modification.",
              "PKI allows by implementing SSL or IPSec protocol for the secure communications. IPSec enables to send or receive the protected packets such as UDP, TCP, ICMP, etc. without any modification and offers authenticity and confidentiality based on the requirement.",
              "IPSec customers can authenticate themselves with the PKI certificate to enhance scalability due to the earlier transmitted trusted CA certificate.",
              "SSL protocol enables the interface among applications with end-to-end encryption and TCP/IP protocols offer encrypted communication channel and authentication between the client-server. SSL and IPSec are chosen based on the security requirement and diverse needs.",
            ],
          },
          {
            num: "3",
            title: "Cryptographic Data Separation",
            pages: "193",
            content: [
              "The protection of sensitive data is essential in the cloud computing environment — established as a crucial factor in the successful SaaS model deployment.",
              "Cryptographic separating of the data, computations and processes are hidden or secret using the encryption technique that appears intangible for outsiders and maintains the confidentiality, integrity and privacy of data.",
              "Symmetric and asymmetric cryptographic techniques are combined (referred as hybrid cryptography) that can provide the efficiency and security of data.",
            ],
          },
        ].map(({ num, title, pages, content }) => (
          <div key={num} className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">{num}</span>
              <h4 className="text-sm font-bold text-foreground">{title}</h4>
            </div>
            <ul className="space-y-2">
              {content.map((c, i) => (
                <li key={i} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4"><PageRef pages={pages} label="Source" /></div>
          </div>
        ))}
      </div>

      {/* Analysis & Discussion summary */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-foreground mb-3">Analysis and Discussion (Section IV)</h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>This section discusses the suggested security solution of the challenges faced in the adoption of cloud computing environment that influences customers to release security burden with trusting a third party. This study observed that the concerns of trust, security and privacy are highlighted by many cloud providers and customers.</p>
          <p>The deployment of security strategies in the cloud environment to achieve integrity, confidentiality and availability of data or systems that adopts to change the relationship between the cloud provider and the customers. A <strong className="text-foreground">trust-worthy access control infrastructure</strong> is needed to avoid any unauthorized access to the shared resources. Trust required operating in each layer of the cloud service models (IaaS, SaaS, PaaS) and it needs to ensure security at the technical, legal, procedural and operational level to allow secure communication.</p>
          <p>Trust certificate establishes entities credentials, identity and responsibilities and serves as the electronic authentication. The required trust is provided by TTP to ensure the identity of communicating parties or entities and examined to adhere the strict policies and requirements. The end user is needed to utilize electronic certificate for authentication with the cloud service and validating the access rights.</p>
          <p>A number of services are hosted by the cloud infrastructure, so several applications are transferred to the virtual server and each required their own certificate for the SSL communication. The application provider needs his own certificate for the encryption and decryption of application data and authentication for secure communications in the cloud.</p>
          <p>Key management is the challenging issue in cloud infrastructure as the virtualization services are concealing the representation of the location of physical key storage and disable the traditional protection mechanism. The solution is addressed with cryptography by PKI that provides and ensures the integrity, confidentiality and authentication of the communication and data involved.</p>
        </div>
        <div className="mt-4"><PageRef pages="193–194" label="Source" /></div>
      </div>

      {/* Conclusion */}
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-foreground mb-3">Conclusion and Future Work (Section V)</h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>Cloud computing is the emerging technology that brings many benefits for its customers, organizations and companies. However, despite bringing several advantages, it raises many security challenges in the adoption of cloud.</p>
          <p>This research attempted to present many security challenges, threats, attacks and vulnerabilities in the systems or data during transfer to the cloud. The countermeasure of the security threats will assist the organizations to continue the cost-benefit analysis and to encourage them to transfer into the cloud.</p>
          <p>Cloud computing security requires a fundamental point of view from where it is based on mitigating protection and trust to the TTP. Most of the identified threats can be addressed by the combination of <strong className="text-foreground">SSO, LDAP and PKI</strong> in cloud computing that is dealing with the authenticity, availability, integrity and confidentiality in communication or data.</p>
          <p>This research can be further analyzed in future to improve the quality and availability of services that brings the attraction of the customers toward the deployment of cloud computing and develop more customer trust to the TTP. Also, developing a framework of complete security and privacy trust evaluation management system is a part of cloud computing services which satisfies the security demands.</p>
        </div>
        <div className="mt-4"><PageRef pages="194" label="Source" /></div>
      </div>
    </section>
  )
}
