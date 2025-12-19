"use client"

import { useTheme } from "@/lib/contexts"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-all duration-300 ${
        isDark
          ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
