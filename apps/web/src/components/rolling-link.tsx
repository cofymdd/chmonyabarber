import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

type RollingTextProps = {
  text: string
}

export function RollingText({ text }: RollingTextProps) {
  return (
    <span className="infinity-rolling-text" aria-label={text}>
      <span aria-hidden="true" className="inline-flex">
        {Array.from(text).map((letter, index) => (
          <span
            className="infinity-rolling-letter"
            data-letter={letter}
            key={`${letter}-${index}`}
            style={{ "--letter-index": index } as React.CSSProperties}
          >
            {letter}
          </span>
        ))}
      </span>
    </span>
  )
}

type RollingLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  text: string
}

export const RollingLink = React.forwardRef<
  HTMLAnchorElement,
  RollingLinkProps
>(({ className, text, ...props }, forwardedRef) => {
  return (
    <a
      className={cn(
        "infinity-rolling-link focus-visible:ring-ring/30 text-muted-foreground hover:text-foreground focus-visible:text-foreground rounded-sm font-semibold transition-[color,opacity] duration-300 focus-visible:ring-3 focus-visible:outline-none",
        className
      )}
      data-nav-link
      ref={forwardedRef}
      {...props}
    >
      <RollingText text={text} />
    </a>
  )
})

RollingLink.displayName = "RollingLink"
