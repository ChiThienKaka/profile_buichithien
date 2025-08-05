// components/ThemeSwitch.tsx
import { useTheme } from "../darkmode/theme-provider"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

export function SwitchDarkMode() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  const toggleTheme = () => setTheme(isDark ? "light" : "dark")

  return (
    <div className="w-14">
        <button
        onClick={toggleTheme}
        className={cn(
          "relative flex items-center h-6 w-full rounded-full transition-colors duration-300",
          isDark ? "bg-gray-800" : "bg-[#28a0a0]"
        )}
      >
        <div
          className={cn(
            "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300",
            isDark ? "translate-x-8" : "translate-x-0"
          )}
        >
          {isDark ? (
            <Moon className="h-5 w-5 text-gray-800" />
          ) : (
            <Sun className="h-5 w-5 text-[#28a0a0]" />
          )}
        </div>
      </button>
    </div>
  )
}
