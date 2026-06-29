import { PageRef } from "./page-ref"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  pages?: string
  className?: string
}

export function SectionHeader({ tag, title, subtitle, pages, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", className)}>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {tag && (
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {tag}
          </span>
        )}
        {pages && <PageRef pages={pages} />}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl text-pretty">
          {subtitle}
        </p>
      )}
      <div className="mt-6 h-px w-24 bg-primary/50" />
    </div>
  )
}
