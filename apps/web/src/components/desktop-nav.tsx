import { RollingLink } from "@/components/rolling-link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@chmonya-barber/ui/components/navigation-menu"

type NavItem = {
  href: string
  label: string
}

type DesktopNavProps = {
  navItems: NavItem[]
}

export function DesktopNav({ navItems }: DesktopNavProps) {
  return (
    <NavigationMenu className="max-w-none" viewport={false}>
      <NavigationMenuList className="chmonya-nav-list gap-0">
        {navItems.map((item, index) => (
          <NavigationMenuItem key={item.href}>
            <RollingLink
              href={item.href}
              text={`${item.label}${index < navItems.length - 1 ? ", " : ""}`}
            />
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
