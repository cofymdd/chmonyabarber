"use client"

import * as React from "react"
import { CookieIcon, SettingsIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Switch } from "@workspace/ui/components/switch"

const STORAGE_KEY = "infinity-cookie-settings"

type CookieState = {
  analytics: boolean
  marketing: boolean
}

const defaultState: CookieState = {
  analytics: false,
  marketing: false,
}

export function CookieSettings() {
  const [open, setOpen] = React.useState(false)
  const [settings, setSettings] = React.useState<CookieState>(defaultState)

  React.useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)

    if (!saved) {
      return
    }

    try {
      setSettings(JSON.parse(saved) as CookieState)
    } catch {
      setSettings(defaultState)
    }
  }, [])

  function save(nextSettings = settings) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSettings))
    setSettings(nextSettings)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-4 left-4 z-30 shadow-xl"
          size="sm"
          variant="outline"
        >
          <SettingsIcon data-icon="inline-start" />
          Nastavenia cookies
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-md border bg-background sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <CookieIcon />
            Cookies
          </DialogTitle>
          <DialogDescription>
            Používame iba nastavenia potrebné pre pohodlnú prevádzku webu.
            Voľby si vieš uložiť v tomto prehliadači.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4 rounded-md border p-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="analytics-cookies" className="font-medium">
                Analytické cookies
              </label>
              <p className="text-sm text-muted-foreground">
                Pomáhajú nám pochopiť, ktoré časti stránky sú užitočné.
              </p>
            </div>
            <Switch
              id="analytics-cookies"
              checked={settings.analytics}
              onCheckedChange={(analytics) =>
                setSettings((current) => ({ ...current, analytics }))
              }
            />
          </div>

          <div className="flex items-center justify-between gap-4 rounded-md border p-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="marketing-cookies" className="font-medium">
                Marketingové cookies
              </label>
              <p className="text-sm text-muted-foreground">
                Súvisia so sociálnymi sieťami a meraním kampaní.
              </p>
            </div>
            <Switch
              id="marketing-cookies"
              checked={settings.marketing}
              onCheckedChange={(marketing) =>
                setSettings((current) => ({ ...current, marketing }))
              }
            />
          </div>
        </div>

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
