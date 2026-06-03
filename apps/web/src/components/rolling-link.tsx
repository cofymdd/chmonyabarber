import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

type RollingTextProps = {
  accessibleText?: string
  text: string
}

function getAccessibleText(text: string) {
  return text.replace(/,\s*$/, "")
}

export function RollingText({ accessibleText, text }: RollingTextProps) {
  const label = accessibleText ?? getAccessibleText(text)

  return (
    <span className="infinity-rolling-text">
      <span className="sr-only">{label}</span>
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
>(
  (
    { "aria-label": ariaLabel, className, rel, target, text, ...props },
    forwardedRef
  ) => {
    const safeRel =
      target === "_blank"
        ? Array.from(new Set(`${rel ?? ""} noopener noreferrer`.split(/\s+/)))
            .filter(Boolean)
            .join(" ")
        : rel

    return (
      <a
        className={cn(
          "infinity-rolling-link focus-visible:ring-ring/30 text-muted-foreground hover:text-foreground focus-visible:text-foreground rounded-sm font-semibold transition-[color,opacity] duration-300 focus-visible:ring-3 focus-visible:outline-none",
          className
        )}
        data-nav-link
        rel={safeRel}
        ref={forwardedRef}
        target={target}
        {...props}
      >
        <RollingText
          accessibleText={ariaLabel ?? getAccessibleText(text)}
          text={text}
        />
      </a>
    )
  }
)

RollingLink.displayName = "RollingLink"
