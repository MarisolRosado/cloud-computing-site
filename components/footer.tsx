import { Cloud } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 text-center bg-card/30">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center items-center gap-2 text-primary mb-3">
          <Cloud className="w-5 h-5" />
          <span className="font-bold text-foreground">Cloud Computing Environment & Security Challenges</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Interactive study guide based on the academic paper by Mushtaq, Akram, Khan, Khan, Shahzad &amp; Ullah (2017).
          Published in the <em>International Journal of Advanced Computer Science and Applications (IJACSA)</em>, Vol. 8, No. 10, pp. 183–195.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-4">
          Task 1 – Cloud Computing Environment and Security Challenges (Theory)
        </p>
      </div>
    </footer>
  )
}
