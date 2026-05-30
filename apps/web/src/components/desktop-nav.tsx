import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu"

type NavItem = {
  href: string
  label: string
}

type DesktopNavProps = {
  navItems: NavItem[]
}

export function DesktopNav({ navItems }: DesktopNavProps) {
  return (
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
  )
}
