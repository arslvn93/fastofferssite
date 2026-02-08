'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Museum() {
  return (
    <section id="museum" className="relative h-screen overflow-hidden bg-white">
      <div className="horizontal-wrapper">
        {/* Slide 1 */}
        <div className="museum-panel flex flex-col justify-center items-start px-10 md:px-20 border-r border-gray-100 bg-paper">
          <span className="text-brand font-bold uppercase tracking-widest text-sm mb-6">
            The Outcome
          </span>
          <h2 className="font-serif text-6xl md:text-8xl mb-6 text-ink">
            Unfair
            <br />
            <span className="italic text-brand">Advantage.</span>
          </h2>
          <div className="w-20 h-1 bg-ink"></div>
        </div>
        {/* Slide 2 */}
        <div className="museum-panel flex items-center justify-center bg-gray-50 relative border-r border-gray-100">
          <div className="w-[70vw] h-[70vh] relative overflow-hidden group shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
              alt="Luxury Home"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-brand/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"></div>
          </div>
          <h2 className="absolute font-serif text-2xl md:text-6xl text-ink bg-white px-8 py-6 md:px-16 md:py-12 border border-gray-200 shadow-2xl z-20 pointer-events-none tracking-tight text-center leading-tight outline outline-1 outline-gray-200 outline-offset-4 md:outline-offset-8">
            <span className="font-bold">8000+ OFFERS</span>
            <br />
            Generated in 2025
          </h2>
        </div>
        {/* Slide 3 */}
        <div className="museum-panel flex items-center justify-center bg-ink text-white px-6 md:px-10">
          <div className="max-w-4xl text-center">
            <p className="font-serif text-3xl md:text-6xl leading-tight mb-8">
              &quot;It&apos;s the easiest, most impactful real estate tool l&apos;ve ever adopted.&quot;
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="text-center">
                <div className="font-bold uppercase tracking-widest text-sm">Daaron Johnston</div>
                <div className="text-brand-light text-xs opacity-70">Broker</div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 4 */}
        <div className="museum-panel flex flex-col items-center justify-center bg-brand text-white">
          <h2 className="font-serif text-6xl md:text-[15vw] leading-none mb-10">Free Trial</h2>
          <Link
            href="https://forms.ltd/register"
            className="px-12 py-6 bg-white text-brand rounded-full text-xl font-bold hover:scale-110 transition-transform shadow-2xl"
          >
            30 Day Trial - No Card Required
          </Link>
        </div>
      </div>
    </section>
  )
}

