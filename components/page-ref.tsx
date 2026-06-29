import { BookOpen } from "lucide-react"

interface PageRefProps {
  pages: string
  label?: string
}

export function PageRef({ pages, label = "Source" }: PageRefProps) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20 select-none">
      <BookOpen className="w-3 h-3" />
      {label}: p.{pages}
    </span>
  )
}
