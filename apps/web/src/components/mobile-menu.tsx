"use client"

import { ClockIcon, MenuIcon, PhoneIcon } from "lucide-react"

import { RollingLink } from "@/components/rolling-link"
import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

type NavItem = {
  href: string
  label: string
}

type MobileMenuProps = {
  hours: string
  location: string
  navItems: NavItem[]
  phone: string
}

export function MobileMenu({
  hours,
  location,
  navItems,
  phone,
}: MobileMenuProps) {
  const phoneHref = `tel:${phone.replace(/\s/g, "")}`

  return (
    <>
      <Button asChild size="icon" variant="outline">
        <a href={phoneHref} aria-label="Zavolať">
          <PhoneIcon />
        </a>
      </Button>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" aria-label="Otvoriť menu">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="border-border bg-background w-[min(88vw,24rem)]"
        >
          <SheetHeader>
            <SheetTitle>INFINITY BARBER</SheetTitle>
            <SheetDescription>
              {location}. {hours}.
            </SheetDescription>
          </SheetHeader>
          <nav
            aria-label="Mobilná navigácia"
            className="flex flex-col gap-2 px-6 py-2"
          >
            {navItems.map((item, index) => (
              <SheetClose key={item.href} asChild>
                <RollingLink
                  href={item.href}
                  className="border-border bg-background hover:bg-muted rounded-md border px-4 py-3 text-base"
                  text={`${item.label}${index < navItems.length - 1 ? ", " : ""}`}
                />
              </SheetClose>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 p-6">
            <div className="text-muted-foreground flex items-start gap-3 text-sm">
              <ClockIcon className="mt-0.5 size-4 shrink-0" />
              <span>{hours}</span>
            </div>
            <Button asChild>
              <a href={phoneHref}>
                <PhoneIcon data-icon="inline-start" />
                Zavolať
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
