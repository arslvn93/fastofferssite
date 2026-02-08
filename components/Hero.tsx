'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const brokerageLogos = [
  'https://formsltd.s3.ca-central-1.amazonaws.com/public/misc/Wesbite+Images/Brokerage+Logos/EHR.png',
  'https://formsltd.s3.ca-central-1.amazonaws.com/public/misc/Wesbite+Images/Brokerage+Logos/Valery.png',
  'https://formsltd.s3.ca-central-1.amazonaws.com/public/misc/Wesbite+Images/Brokerage+Logos/Bay+St.png',
  'https://formsltd.s3.ca-central-1.amazonaws.com/public/misc/Wesbite+Images/Brokerage+Logos/Property.png',
  'https://formsltd.s3.ca-central-1.amazonaws.com/public/misc/Wesbite+Images/Brokerage+Logos/EXP.png',
  'https://formsltd.s3.ca-central-1.amazonaws.com/public/misc/Wesbite+Images/Brokerage+Logos/Forest+Hill.png',
  'https://formsltd.s3.ca-central-1.amazonaws.com/public/misc/Wesbite+Images/Brokerage+Logos/Rare.png',
  'https://formsltd.s3.ca-central-1.amazonaws.com/public/misc/Wesbite+Images/Brokerage+Logos/Strata.png',
  'https://formsltd.s3.ca-central-1.amazonaws.com/public/misc/Wesbite+Images/Brokerage+Logos/Zolo.png',
]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    const heroElements = heroRef.current.querySelectorAll('.hero-anim')
    gsap.to(heroElements, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.1,
      ease: 'power4.out',
      delay: 0.5,
    })
  }, [])

  return (
    <header
      ref={heroRef}
      className="relative min-h-[100svh] flex flex-col justify-center items-center px-4 bg-paper bg-grid-pattern pt-24 md:pt-20 pb-8 md:pb-16 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw] bg-gradient-to-tr from-brand-light to-white rounded-full blur-[80px] md:blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="relative z-20 text-center max-w-6xl w-full">
        <div className="overflow-hidden mb-2">
          <p className="hero-anim translate-y-full font-sans font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-brand text-[10px] md:text-sm">
            Trusted by 350+ Ontario Agents
          </p>
        </div>

        <h1 className="font-serif text-[16vw] md:text-[13vw] leading-[0.9] md:leading-[0.85] font-medium text-ink tracking-tight mb-6 md:mb-8">
          <div className="overflow-hidden">
            <span className="hero-anim block translate-y-full">Offers In</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-anim block translate-y-full italic text-brand">Seconds.</span>
          </div>
        </h1>

        <div className="flex flex-col items-center gap-6 md:gap-8 hero-anim opacity-0 translate-y-10 w-full px-2">
          <p className="max-w-xl text-base md:text-xl text-ink-light font-sans leading-relaxed text-center">
            The modern offer platform for Ontario real estate agents.{' '}
            <br className="hidden md:block" /> No more paperwork headaches - just faster deals and
            happier clients.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://forms.ltd/register"
              className="group relative px-8 py-4 bg-brand text-white rounded-full overflow-hidden hover-trigger shadow-xl shadow-brand/20 w-full md:w-auto text-center"
            >
              <span className="relative z-10 font-bold uppercase tracking-widest text-sm">
                Start Free Trial
              </span>
              <div className="absolute inset-0 bg-ink transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          </div>

          {/* IMAGE MARQUEE */}
          <div className="mt-12 md:mt-8 w-full max-w-5xl mx-auto text-center">
            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 md:mb-6">
              Trusted by top producers at
            </p>

            <div className="overflow-hidden mask-fade-sides relative w-full group">
              <div className="flex gap-8 md:gap-16 items-center animate-marquee whitespace-nowrap w-max group-hover:[animation-play-state:paused]">
                {[...brokerageLogos, ...brokerageLogos].map((logo, idx) => (
                  <Image
                    key={idx}
                    src={logo}
                    alt="Brokerage logo"
                    width={120}
                    height={40}
                    className="h-6 md:h-8 w-auto opacity-70"
                    unoptimized
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Layered Cards */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="hidden md:block absolute top-[10%] md:top-1/3 -left-1 md:left-[5%] w-36 md:w-64 bg-white p-3 md:p-6 rounded-2xl shadow-2xl md:shadow-brand/10 transform -rotate-6 opacity-40 md:opacity-100 parallax-card">
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-[10px] md:text-xs">
              ✓
            </div>
            <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">Status</div>
          </div>
          <div className="font-serif text-sm md:text-xl">Offer Ready</div>
          <div className="text-[10px] md:text-xs text-gray-400 mt-1">123 King St W • $1.4M</div>
        </div>
        <div className="hidden md:block absolute bottom-[3%] md:bottom-1/4 -right-8 md:right-[5%] w-36 md:w-64 bg-white p-3 md:p-6 rounded-2xl shadow-2xl md:shadow-brand/10 transform rotate-3 opacity-40 md:opacity-100 parallax-card">
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center text-brand text-[10px] md:text-xs">
              ⚡
            </div>
            <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">Speed</div>
          </div>
          <div className="font-serif text-sm md:text-xl">Generated in 5s</div>
          <div className="text-[10px] md:text-xs text-gray-400 mt-1">Form 100, 320, 801 Ready</div>
        </div>
      </div>
    </header>
  )
}


