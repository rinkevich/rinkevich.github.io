"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  })
  return () => observer.disconnect()
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark")
}

export function ThemeToggle({ className }: { className?: string }) {
  // Reflect the actual `.dark` class on <html> (set before paint by the inline
  // theme script) without a setState-in-effect.
  const isDark = React.useSyncExternalStore(subscribe, getSnapshot, () => false)

  const toggle = () => {
    const next = !isDark
    document.documentElement.classList.toggle("dark", next)
    try {
      localStorage.setItem("theme", next ? "dark" : "light")
    } catch {
      // ignore unavailable storage (private mode)
    }
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Toggle color theme"
      aria-pressed={isDark}
      onClick={toggle}
      className={cn("text-muted-foreground hover:text-foreground", className)}
    >
      <Sun className="size-4 dark:hidden" />
      <Moon className="hidden size-4 dark:block" />
    </Button>
  )
}
