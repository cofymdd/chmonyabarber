"use client"

import * as React from "react"
import { CookieIcon, SettingsIcon } from "lucide-react"

import { Button } from "@chmonya-barber/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@chmonya-barber/ui/components/dialog"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@chmonya-barber/ui/components/field"
import { cn } from "@chmonya-barber/ui/lib/utils"
import { Switch } from "@chmonya-barber/ui/components/switch"

const STORAGE_KEY = "chmonya-barber-cookie-settings"
const STORAGE_VERSION = 1

type CookieState = {
  analytics: boolean
  marketing: boolean
}

const defaultState: CookieState = {
  analytics: false,
  marketing: false,
}

const cookieFields = [
  {
    description: "Pomáhajú nám pochopiť, ktoré časti stránky sú užitočné.",
    id: "analytics-cookies",
    key: "analytics",
    label: "Analytické cookies",
  },
  {
    description: "Súvisia so sociálnymi sieťami a meraním kampaní.",
    id: "marketing-cookies",
    key: "marketing",
    label: "Marketingové cookies",
  },
] as const

type CookieSettingsProps = {
  floating?: boolean
  triggerClassName?: string
  triggerLabel?: string
}

function readSettings(): CookieState {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)

    if (!saved) {
      return defaultState
    }

    const parsed = JSON.parse(saved) as Partial<CookieState> & {
      version?: number
    }

    if (
      parsed.version !== STORAGE_VERSION ||
      typeof parsed.analytics !== "boolean" ||
      typeof parsed.marketing !== "boolean"
    ) {
      return defaultState
    }

    return {
      analytics: parsed.analytics,
      marketing: parsed.marketing,
    }
  } catch {
    return defaultState
  }
}

export function CookieSettings({
  floating = true,
  triggerClassName,
  triggerLabel = "Nastavenia cookies",
}: CookieSettingsProps) {
  const [open, setOpen] = React.useState(false)
  const [settings, setSettings] = React.useState<CookieState>(() => {
    if (typeof window === "undefined") {
      return defaultState
    }

    return readSettings()
  })

  function save(nextSettings = settings) {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...nextSettings, version: STORAGE_VERSION })
      )
    } catch {
      // Keeping the dialog usable is more important than persistence.
    }

    setSettings(nextSettings)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            floating && "fixed bottom-4 left-4 z-30 shadow-xl",
            triggerClassName
          )}
          size="sm"
          variant="outline"
        >
          {floating && <SettingsIcon data-icon="inline-start" />}
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-background rounded-md border sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <CookieIcon />
            Cookies
          </DialogTitle>
          <DialogDescription>
            Používame iba nastavenia potrebné pre pohodlnú prevádzku webu. Voľby
            si vieš uložiť v tomto prehliadači.
          </DialogDescription>
        </DialogHeader>

        <FieldGroup className="gap-4">
          {cookieFields.map((field) => (
            <Field
              key={field.id}
              orientation="horizontal"
              className="justify-between rounded-md border p-4"
            >
              <FieldContent>
                <FieldLabel htmlFor={field.id}>{field.label}</FieldLabel>
                <FieldDescription id={`${field.id}-description`}>
                  {field.description}
                </FieldDescription>
              </FieldContent>
              <Switch
                id={field.id}
                aria-describedby={`${field.id}-description`}
                checked={settings[field.key]}
                onCheckedChange={(checked) =>
                  setSettings((current) => ({
                    ...current,
                    [field.key]: checked,
                  }))
                }
              />
            </Field>
          ))}
        </FieldGroup>

        <DialogFooter>
          <Button variant="outline" onClick={() => save(defaultState)}>
            Iba nevyhnutné
          </Button>
          <Button
            onClick={() => save({ analytics: true, marketing: true })}
            variant="secondary"
          >
            Povoliť všetko
          </Button>
          <Button onClick={() => save()}>Uložiť výber</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
