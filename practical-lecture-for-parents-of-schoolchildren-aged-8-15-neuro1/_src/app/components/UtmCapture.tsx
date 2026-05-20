'use client'

import { useEffect } from 'react'
import { captureUtm } from '@/lib/utm'

/** Runs once on mount — saves landing-URL UTM to localStorage. */
export default function UtmCapture() {
  useEffect(() => {
    captureUtm()
  }, [])
  return null
}
