'use client'

import { useEffect } from 'react'

export default function EvidenceWidget() {
  useEffect(() => {
    // Only load Evidence.io script on non-mobile devices
    function isMobileDevice() {
      return (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth <= 768
      )
    }

    if (!isMobileDevice()) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src =
        'https://code.evidence.io/js/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQ5N30.bOu4KGNzZ0WNsXbQzGgwwRZe_tJjfFC1rK9BRpYvXv0'
      document.body.appendChild(script)

      // Cleanup function to remove script if component unmounts
      return () => {
        const existingScript = document.querySelector(
          'script[src="https://code.evidence.io/js/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQ5N30.bOu4KGNzZ0WNsXbQzGgwwRZe_tJjfFC1rK9BRpYvXv0"]'
        )
        if (existingScript) {
          document.body.removeChild(existingScript)
        }
      }
    }
  }, [])

  return null
}
