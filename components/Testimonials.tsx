'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    quote:
      "I honestly didn't realize how much mental energy I was expending on just starting an offer. Fast Offers isn't just fast, it's effortless.",
    highlight: "Fast Offers isn't just fast, it's effortless.",
    author: 'Sunny Shahid',
    role: 'Sales Representative',
    image:
      'https://formsltd.s3.ca-central-1.amazonaws.com/public/misc/Wesbite+Images/Testimonials/sunny.jpg',
    bg: 'bg-white',
    textColor: 'text-ink',
  },
  {
    quote:
      "I'm not the most tech-savvy person, so I'm always wary of new software. But Fast Offers is genuinely intuitive and incredibly user-friendly.",
    highlight: "It's the easiest, most impactful real estate tool l've ever adopted",
    author: 'Daaron Johnston',
    role: 'Broker',
    image:
      'https://formsltd.s3.ca-central-1.amazonaws.com/public/misc/Wesbite+Images/Testimonials/daaron.jpeg',
    bg: 'bg-[#fafafa]',
    textColor: 'text-ink',
  },
  {
    quote:
      "I can literally draft a perfect offer for my client while we're still talking on the phone, email it over, and have it ready for e-signature within minutes.",
    highlight: 'ready for e-signature within minutes.',
    author: 'Ryan Wykes',
    role: 'Broker',
    image:
      'https://formsltd.s3.ca-central-1.amazonaws.com/public/misc/Wesbite+Images/Testimonials/ryan.webp',
    bg: 'bg-ink',
    textColor: 'text-white',
    border: 'border-2 border-brand',
  },
  {
    quote:
      "It's not just a tool; it's an integral part of my modern real estate toolkit that I couldn't operate effectively without.",
    highlight: "If you're not using it, you're working harder, not smarter.",
    author: 'Emma Pace',
    role: 'Broker',
    image:
      'https://formsltd.s3.ca-central-1.amazonaws.com/public/misc/Wesbite+Images/Testimonials/emma.webp',
    bg: 'bg-white',
    textColor: 'text-ink',
  },
  {
    quote:
      'Fast Offers is simply how real estate should be done in the 21st century. It takes all the fragmented, time-consuming steps of offer generation.',
    highlight: 'how real estate should be done in the 21st century.',
    author: 'Callie Kinnear',
    role: 'Top Producer',
    image:
      'https://formsltd.s3.ca-central-1.amazonaws.com/public/misc/Wesbite+Images/Testimonials/Callie.jpg',
    bg: 'bg-[#fafafa]',
    textColor: 'text-ink',
  },
  {
    quote:
      "Onboarding new talent used to mean countless hours of my time overseeing offer drafting to prevent errors. Fast Offers has been a godsend.",
    highlight: 'Fast Offers has been a godsend.',
    author: 'Dave Hutch',
    role: 'Broker',
    image:
      'https://formsltd.s3.ca-central-1.amazonaws.com/public/misc/Wesbite+Images/Testimonials/dave.webp',
    bg: 'bg-ink',
    textColor: 'text-white',
    border: 'border-2 border-brand',
  },
]

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="testimonials" className="relative py-20 pb-12 md:py-32 md:pb-32 bg-off-white">
      <div className="container mx-auto px-6 md:px-20">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-brand font-bold uppercase tracking-widest text-xs mb-4 block">
            Stories
          </span>
          <h2 className="font-serif text-4xl md:text-7xl">
            Top producers
            <br />
            <span className="italic text-brand">trust the system.</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto pb-12 md:pb-20">
          {testimonials.map((testimonial, idx) => {
            // Cards stack normally without sticky title
            const cardSpacing = isMobile ? 4 : 8
            const firstCardTop = isMobile ? 80 : 100
            
            return (
            <div
              key={idx}
              className="sticky mb-12"
              style={{
                top: `${firstCardTop + idx * cardSpacing}px`,
                zIndex: (idx + 1) * 10,
              }}
            >
              <div
                className={`maglev-card ${testimonial.bg} ${testimonial.textColor} p-0 rounded-[2.5rem] border border-gray-200 shadow-xl min-h-[300px] md:min-h-[400px] flex flex-row relative overflow-hidden`}
                style={{ zIndex: (idx + 1) * 10 }}
              >
                {/* Left side: Full-height image with overlay */}
                <div className="relative w-1/3 md:w-1/4 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  {/* Name and role overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="font-bold uppercase tracking-widest text-xs md:text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-[10px] md:text-xs mt-1 text-gray-300">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                
                {/* Right side: Quote text */}
                <div className="flex-1 p-8 md:p-12 flex items-center">
                  <p className="font-serif text-2xl md:text-4xl leading-tight">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

