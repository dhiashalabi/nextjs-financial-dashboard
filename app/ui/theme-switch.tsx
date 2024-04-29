'use client'

import { FiSun, FiMoon } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <FiSun className="h-6 w-6 text-yellow-500" />
      ) : (
        <FiMoon className="h-6 w-6 text-gray-800" />
      )}
    </button>
  )
}
