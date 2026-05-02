'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ScrollAnimations() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    let timeoutId: NodeJS.Timeout
    const cleanupFunctions: (() => void)[] = []
    const timeoutIds: NodeJS.Timeout[] = []

    try {
      // Wait for DOM to be ready
      timeoutId = setTimeout(() => {
        // Use requestAnimationFrame to ensure DOM is fully rendered
        requestAnimationFrame(() => {
          try {
      // Function to set up highlight text animations
      const setupHighlightTexts = () => {
        const highlightTexts = document.querySelectorAll('.highlight-text')
        highlightTexts.forEach((h) => {
          // Check if this element already has a ScrollTrigger
          if (!(h as HTMLElement).dataset.hasScrollTrigger) {
            ScrollTrigger.create({
              trigger: h as Element,
              start: 'top 80%',
              onEnter: () => h.classList.add('active'),
            })
            ;(h as HTMLElement).dataset.hasScrollTrigger = 'true'
          }
        })
      }

      // Set up highlight text animations initially
      setupHighlightTexts()

      // Set up highlight texts multiple times to catch lazy-loaded components
      // Use increasing delays to catch components that load at different times
      const delays = [500, 1500, 3000]
      delays.forEach((delay) => {
        const id = setTimeout(() => {
          try {
            const beforeCount = document.querySelectorAll('[data-has-scroll-trigger="true"]').length
            setupHighlightTexts()
            const afterCount = document.querySelectorAll('[data-has-scroll-trigger="true"]').length
            // Only refresh if we actually added new triggers
            if (afterCount > beforeCount) {
              ScrollTrigger.refresh()
            }
          } catch (error) {
            console.error('Error setting up highlight texts:', error)
          }
        }, delay)
        timeoutIds.push(id)
      })

      // Maglev cards 3D effect
      const cards = document.querySelectorAll('.maglev-card')
      cards.forEach((node) => {
        const card = node as HTMLElement
        const handleMouseMove: EventListener = (e) => {
          const me = e as MouseEvent
          const rect = card.getBoundingClientRect()
          const x = me.clientX - rect.left
          const y = me.clientY - rect.top
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          const rotateX = ((y - centerY) / centerY) * -3
          const rotateY = ((x - centerX) / centerX) * 3
          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
          card.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 30px rgba(0,0,0,0.05)`
        }

        const handleMouseLeave: EventListener = () => {
          card.style.transform = `rotateX(0) rotateY(0) scale(1)`
          card.style.boxShadow = `0 20px 40px rgba(0,0,0,0.03)`
        }

        card.addEventListener('mousemove', handleMouseMove)
        card.addEventListener('mouseleave', handleMouseLeave)

        cleanupFunctions.push(() => {
          card.removeEventListener('mousemove', handleMouseMove)
          card.removeEventListener('mouseleave', handleMouseLeave)
        })
      })

      // Parallax cards
      const parallaxCards = document.querySelectorAll('.parallax-card')
      parallaxCards.forEach((card) => {
        const speed = parseFloat((card as HTMLElement).getAttribute('data-speed') || '0')
        gsap.to(card, {
          y: () => 100 * speed + '%',
          scrollTrigger: {
            trigger: 'header',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      // Museum scroll (horizontal scroll)
      let museumScrollTrigger: ScrollTrigger | null = null
      const museumSection = document.getElementById('museum')
      const horizontalWrapper = document.querySelector('.horizontal-wrapper')

      if (museumSection && horizontalWrapper) {
        const scrollDistance = (horizontalWrapper as HTMLElement).scrollWidth - window.innerWidth
        const isMobile = window.innerWidth < 768
        const firstSlidePadding = window.innerHeight * 0.3 // Padding for first slide
        const lastSlidePadding = isMobile 
          ? window.innerHeight * 0.2  // Minimal padding on mobile
          : window.innerHeight * 2     // Longer padding on desktop
        const totalScrollDistance = scrollDistance + firstSlidePadding + lastSlidePadding

        const museumTL = gsap.timeline({
          scrollTrigger: {
            trigger: '#museum',
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => '+=' + totalScrollDistance,
            invalidateOnRefresh: true,
          },
        })

        museumScrollTrigger = museumTL.scrollTrigger ?? null

        // Calculate ratios for timeline segments
        const firstPaddingRatio = firstSlidePadding / totalScrollDistance
        const scrollRatio = scrollDistance / totalScrollDistance
        const lastPaddingRatio = lastSlidePadding / totalScrollDistance

        // First slide: stay at x: 0
        museumTL.to(horizontalWrapper, {
          x: 0,
          duration: firstPaddingRatio,
          ease: 'none',
        })
        // Scroll through slides
        .to(horizontalWrapper, {
          x: -scrollDistance,
          duration: scrollRatio,
          ease: 'none',
        })
        // Last slide: stay at final position
        .to(horizontalWrapper, {
          x: -scrollDistance,
          duration: lastPaddingRatio,
          ease: 'none',
        })
      }

      // Footer reveal animation
      const footer = document.getElementById('site-footer')
      const mainContent = document.getElementById('main-content')
      
      if (footer && mainContent) {
        const updateFooterHeight = () => {
          const footerHeight = footer.offsetHeight
          ;(mainContent as HTMLElement).style.marginBottom = `${footerHeight}px`
          ScrollTrigger.refresh()
        }

        updateFooterHeight()
        window.addEventListener('resize', updateFooterHeight)

        cleanupFunctions.push(() => {
          window.removeEventListener('resize', updateFooterHeight)
        })

        // Trigger footer reveal when mainContent bottom reaches viewport bottom
        ScrollTrigger.create({
          trigger: mainContent,
          start: 'bottom bottom',
          end: () => `+=${footer.offsetHeight}`,
          scrub: true,
          onUpdate: (self) => {
            // Don't update footer reveal if museum scroll is currently active/pinned
            if (museumScrollTrigger?.isActive) {
              return
            }

            // Don't update footer reveal if testimonials section is still visible
            // This allows testimonials cards to finish stacking before footer reveal starts
            const testimonialsSection = document.getElementById('testimonials')
            if (testimonialsSection) {
              const testimonialsRect = testimonialsSection.getBoundingClientRect()
              // If testimonials section bottom is still above viewport bottom (with some buffer)
              // Don't start the footer reveal animation
              if (testimonialsRect.bottom > window.innerHeight * 0.3) {
                // Reset to initial state and return early
                gsap.set(mainContent, {
                  clearProps: 'transform,filter,borderRadius,boxShadow,overflow',
                })
                ;(mainContent as HTMLElement).style.overflow = 'visible'
                gsap.set(footer, { scale: 0.95, opacity: 1 })
                return
              }
            }

            const p = self.progress

            if (p <= 0) {
              // CRITICAL FIX: Restore overflow: visible so sticky elements work when scrolling back up
              gsap.set(mainContent, {
                clearProps: 'transform,filter,borderRadius,boxShadow,overflow',
              })
              ;(mainContent as HTMLElement).style.overflow = 'visible' // Explicit safety
            } else {
              // Only set overflow: hidden if testimonials section is not in viewport
              // This preserves sticky positioning for testimonials cards
              const testimonialsSection = document.getElementById('testimonials')
              const testimonialsInViewport = testimonialsSection && 
                testimonialsSection.getBoundingClientRect().bottom > window.innerHeight * 0.2
              
              const scale = 1 - p * 0.05
              const isMobile = window.innerWidth < 768
              const maxRadius = isMobile ? 60 : 100
              const radius = p * maxRadius
              const baseOpacity = isMobile ? 0.2 : 0.6
              const dynamicOpacity = isMobile ? 0.2 : 0.4

              gsap.set(mainContent, {
                scale: scale,
                borderRadius: `0 0 ${radius}px ${radius}px`,
                overflow: testimonialsInViewport ? 'visible' : 'hidden',
                transformOrigin: 'center bottom',
                boxShadow: `0 80px 100px -40px rgba(0,0,0,${baseOpacity + p * dynamicOpacity})`,
              })
            }

            gsap.set(footer, {
              scale: 0.95 + p * 0.05,
              opacity: 1,
            })
          },
          onLeaveBack: () => {
            // Force clear on leaving back to be safe
            gsap.set(mainContent, { clearProps: 'transform,filter,borderRadius,boxShadow,overflow' })
            ;(mainContent as HTMLElement).style.overflow = 'visible' // Explicit safety
          },
        })

        // Ensure footer is visible initially
        gsap.set(footer, { opacity: 1, scale: 0.95 })
      }

      ScrollTrigger.refresh()
          } catch (error) {
            console.error('Error in ScrollAnimations requestAnimationFrame:', error)
          }
        })
      }, 300)
    } catch (error) {
      console.error('Error in ScrollAnimations useEffect:', error)
    }

    return () => {
      try {
        if (timeoutId) clearTimeout(timeoutId)
        timeoutIds.forEach((id) => clearTimeout(id))
        cleanupFunctions.forEach((cleanup) => cleanup())
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      } catch (error) {
        console.error('Error cleaning up ScrollAnimations:', error)
      }
    }
  }, [])

  return null
}

