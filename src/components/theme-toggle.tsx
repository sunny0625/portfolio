'use client'

import { Moon, SunMedium } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5" />

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/90 backdrop-blur transition duration-300 hover:scale-105 hover:border-blue-400/40 hover:shadow-glow dark:bg-white/5 light:bg-slate-900/5"
    >
      <SunMedium className={`absolute h-4 w-4 transition-all duration-300 ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
      <Moon className={`absolute h-4 w-4 transition-all duration-300 ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
    </button>
  )
}
