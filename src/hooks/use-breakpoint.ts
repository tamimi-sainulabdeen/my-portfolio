"use client"

import { useState, useEffect } from "react"

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('md')

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth
      if (width < 640) setBreakpoint('xs')
      else if (width < 768) setBreakpoint('sm')
      else if (width < 1024) setBreakpoint('md')
      else if (width < 1280) setBreakpoint('lg')
      else if (width < 1536) setBreakpoint('xl')
      else setBreakpoint('2xl')
    }

    checkBreakpoint()
    window.addEventListener('resize', checkBreakpoint)
    
    return () => {
      window.removeEventListener('resize', checkBreakpoint)
    }
  }, [])

  return breakpoint
}