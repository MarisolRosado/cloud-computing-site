import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { DeploymentSection } from "@/components/deployment-section"
import { ServiceModelsSection } from "@/components/service-models-section"
import { CloudComponentsSection } from "@/components/cloud-components-section"
import { CloudSecuritySection } from "@/components/cloud-security-section"
import { SecurityChallengesSection } from "@/components/security-challenges-section"
import { TTPSection } from "@/components/ttp-section"
import { ReferencesSection } from "@/components/references-section"
import { Footer } from "@/components/footer"

export default function CloudComputingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ArchitectureSection />
      <DeploymentSection />
      <ServiceModelsSection />
      <CloudComponentsSection />
      <CloudSecuritySection />
      <SecurityChallengesSection />
      <TTPSection />
      <ReferencesSection />
      <Footer />
    </main>
  )
}
