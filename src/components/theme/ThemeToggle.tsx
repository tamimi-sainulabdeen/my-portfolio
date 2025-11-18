"use client"

import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className="w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700" />
    )
  }

  const isDark = resolvedTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center cursor-pointer shadow-lg"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-background shadow-lg flex items-center justify-center"
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        animate={{
          x: isDark ? 26 : 2,
        }}
      >
        <motion.div
          initial={false}
          animate={{ 
            rotate: isDark ? 360 : 0,
            scale: isDark ? 1.1 : 1 
          }}
          transition={{ duration: 0.5 }}
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-primary" />
          ) : (
            <Sun className="w-4 h-4 text-secondary" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  )
}