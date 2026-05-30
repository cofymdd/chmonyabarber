"use client"

import { ClockIcon, MapPinIcon, MenuIcon, PhoneIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu"
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
  label: string
  href: string
}

type SiteHeaderProps = {
  navItems: NavItem[]
  logo: string
  location: string
  hours: string
  phone: string
}

export function SiteHeader({
  navItems,
  logo,
  location,
  hours,
  phone,
}: SiteHeaderProps) {
  const phoneHref = `tel:${phone.replace(/\s/g, "")}`

  return (
    <header className="sticky top-0 isolate z-40 border-b bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <a href="#uvod" className="flex min-w-0 items-center gap-3">
          <img src={logo} alt="Infinity Barber" className="h-10 w-auto" />
          <span className="sr-only">Infinity Barber</span>
        </a>

        <div className="hidden min-w-0 flex-col items-center gap-1 md:flex">
          <p className="text-xs font-medium uppercase text-muted-foreground">
            Prehľad
          </p>
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink href={item.href}>
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden min-w-0 items-center gap-3 text-right text-sm lg:flex">
          <MapPinIcon className="size-4 shrink-0 text-muted-foreground" />
          <div className="min-w-0">
            <a href="#kontakt" className="font-medium hover:underline">
              {location}
            </a>
            <p className="text-muted-foreground">{hours}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
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
              className="w-[min(88vw,24rem)] border-border bg-background"
            >
              <SheetHeader>
                <SheetTitle>INFINITY BARBER</SheetTitle>
                <SheetDescription>
                  {location}. {hours}.
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-2 px-6 py-2">
                {navItems.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <a
                      href={item.href}
                      className="rounded-md border px-4 py-3 text-base font-medium hover:bg-muted"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 p-6">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
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
        </div>
      </div>
    </header>
  )
}
