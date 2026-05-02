'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Workflow() {
  const workflowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return

    // Wait for DOM to be ready
    const timeoutId = setTimeout(() => {
      const workflowSection = workflowRef.current
      if (!workflowSection) return

      const steps = workflowSection.querySelectorAll('.step-block')
      const screens = workflowSection.querySelectorAll('.screen-state')

      if (steps.length === 0 || screens.length === 0) {
        console.warn('Workflow: Steps or screens not found', {
          steps: steps.length,
          screens: screens.length,
        })
        return
      }

      // Initialize: hide all screens except first
      screens.forEach((screen, idx) => {
        if (idx === 0) {
          ;(screen as HTMLElement).style.opacity = '1'
          ;(screen as HTMLElement).style.transform = 'translateY(0px)'
        } else {
          ;(screen as HTMLElement).style.opacity = '0'
          ;(screen as HTMLElement).style.transform = 'translateY(20px)'
        }
      })

      const triggers: ScrollTrigger[] = []

      steps.forEach((step, i) => {
        const isLastStep = i === steps.length - 1
        const trigger = ScrollTrigger.create({
          trigger: step as Element,
          start: 'top 60%',
          end: isLastStep ? 'bottom top' : 'bottom 40%',
          onEnter: () => {
            // Hide all screens
            screens.forEach((s) => {
              const screenEl = s as HTMLElement
              screenEl.style.opacity = '0'
              screenEl.style.transform = 'translateY(20px)'
            })
            // Show current screen
            if (screens[i]) {
              const currentScreen = screens[i] as HTMLElement
              currentScreen.style.opacity = '1'
              currentScreen.style.transform = 'translateY(0px)'
            }
            // Update step opacity
            gsap.to(step, { opacity: 1, duration: 0.5 })
            // Update header text
            const headerText = document.getElementById('phone-header-text')
            if (headerText) {
              if (i === 2) {
                headerText.innerText = 'DocuSign / DropBox Sign'
              } else {
                headerText.innerText = 'Fast Offers'
              }
            }
          },
          onLeave: () => {
            gsap.to(step, { opacity: 0.3, duration: 0.5 })
          },
          onEnterBack: () => {
            // Hide all screens
            screens.forEach((s) => {
              const screenEl = s as HTMLElement
              screenEl.style.opacity = '0'
              screenEl.style.transform = 'translateY(20px)'
            })
            // Show current screen
            if (screens[i]) {
              const currentScreen = screens[i] as HTMLElement
              currentScreen.style.opacity = '1'
              currentScreen.style.transform = 'translateY(0px)'
            }
            gsap.to(step, { opacity: 1, duration: 0.5 })
            const headerText = document.getElementById('phone-header-text')
            if (headerText) {
              if (i === 2) {
                headerText.innerText = 'DocuSign / DropBox Sign'
              } else {
                headerText.innerText = 'Fast Offers'
              }
            }
          },
        })
        triggers.push(trigger)
      })

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh()
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger && workflowRef.current?.contains(trigger.vars.trigger as Node)) {
          trigger.kill()
        }
      })
      ScrollTrigger.refresh()
    }
  }, [])

  return (
    <section ref={workflowRef} className="relative py-20 pb-4 md:pb-20 mx-0 md:mx-8">
      <div className="absolute inset-0 bg-ink md:rounded-[3rem] -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="container mx-auto px-6 py-10 md:py-20 relative text-white" id="demo">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-light font-bold uppercase tracking-widest text-xs mb-4 block">
            The Workflow
          </span>
          <h2 className="font-serif text-5xl md:text-7xl">
            Start to <span className="italic text-brand-light">Signed.</span>
          </h2>
        </div>

        {/* Mobile: Stacked Cards with Full UI */}
        <div className="md:hidden relative pb-4">
          {/* Step 1 Mobile */}
          <div className="sticky top-24 mb-8 bg-white rounded-3xl p-5 text-ink shadow-2xl border border-gray-200 z-10">
            <div className="mb-6 border-b border-gray-100 pb-4">
              <span className="text-brand font-bold text-3xl font-serif block mb-2">01</span>
              <h3 className="text-2xl font-bold">Fill in the Blanks.</h3>
              <p className="text-base text-gray-500 mt-1">
                Fill out the basics like name, price, and deposit. We pull the rest of the data
                instantly.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">Freehold Agreement</h4>
              <div className="bg-blue-50 p-3 rounded-lg flex items-center gap-3 mb-3">
                <div className="bg-white p-1.5 rounded-full text-blue-600">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-[8px] font-bold text-blue-400 uppercase">SUBJECT</div>
                  <div className="text-xs font-bold text-blue-900">18 Herron Ave</div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-[9px] font-bold text-gray-400 uppercase ml-1 mb-1 block">
                    Buyer
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs"
                      placeholder="Enter Name"
                    />
                    <button className="bg-white border border-gray-200 text-brand rounded-lg px-2 text-sm">
                      +
                    </button>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-1/2">
                    <label className="text-[9px] font-bold text-gray-400 uppercase ml-1 mb-1 block">
                      Price
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold"
                      defaultValue="$1,450,000"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="text-[9px] font-bold text-gray-400 uppercase ml-1 mb-1 block">
                      Deposit
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold"
                      defaultValue="$75,000"
                    />
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#100EA0] text-white text-xs font-bold py-3 rounded-lg shadow-lg mt-4">
                Draft Fast Offer
              </button>
            </div>
          </div>

          {/* Step 2 Mobile */}
          <div className="sticky top-32 mb-8 bg-white rounded-3xl p-5 text-ink shadow-2xl border border-gray-200 z-20">
            <div className="mb-6 border-b border-gray-100 pb-4">
              <span className="text-brand font-bold text-3xl font-serif block mb-2">02</span>
              <h3 className="text-2xl font-bold">Download the Offer.</h3>
              <p className="text-base text-gray-500 mt-1">
                Within 5 seconds, you&apos;ll have a fully built offer in an editable PDF, ready to
                review.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-ink mb-1">Package Generated</h4>
              <p className="text-[10px] text-gray-500 mb-4">OREA Forms 100, 320, 801 Validated.</p>
              <div className="w-full bg-white border border-gray-200 rounded-lg p-3 flex items-center gap-3 mb-4 text-left">
                <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                  <span className="text-red-500 font-bold text-[8px]">PDF</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-800">18 Herron Ave.pdf</div>
                  <div className="text-[8px] text-gray-400">2.4 MB</div>
                </div>
              </div>
              <button className="w-full bg-[#100EA0] text-white text-xs font-bold py-3 rounded-lg shadow-lg mb-2 flex items-center justify-center gap-2">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                  <path d="M3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
                Download
              </button>
            </div>
          </div>

          {/* Step 3 Mobile */}
          <div className="sticky top-40 mb-8 bg-white rounded-3xl p-5 text-ink shadow-2xl border border-gray-200 z-30">
            <div className="mb-6 border-b border-gray-100 pb-4">
              <span className="text-brand font-bold text-3xl font-serif block mb-2">03</span>
              <h3 className="text-2xl font-bold">Send for Signatures.</h3>
              <p className="text-base text-gray-500 mt-1">
                Use our DocuSign templates to pre-place initials and signatures for you on the
                entire offer. No more dragging and dropping.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 relative overflow-hidden group">
              <style jsx>{`
                @keyframes scanLineMobile {
                  0% {
                    top: -10%;
                    opacity: 0;
                  }
                  10% {
                    opacity: 1;
                  }
                  90% {
                    opacity: 1;
                  }
                  100% {
                    top: 110%;
                    opacity: 0;
                  }
                }
                @keyframes revealTagPop {
                  0%,
                  35% {
                    opacity: 0;
                    transform: scale(0.5);
                  }
                  40% {
                    opacity: 1;
                    transform: scale(1.3);
                  }
                  45% {
                    transform: scale(1);
                  }
                  90% {
                    opacity: 1;
                    transform: scale(1);
                  }
                  100% {
                    opacity: 0;
                  }
                }
                @keyframes revealTagPopDelayed {
                  0%,
                  75% {
                    opacity: 0;
                    transform: scale(0.5);
                  }
                  80% {
                    opacity: 1;
                    transform: scale(1.3);
                  }
                  85% {
                    transform: scale(1);
                  }
                  90% {
                    opacity: 1;
                    transform: scale(1);
                  }
                  100% {
                    opacity: 0;
                  }
                }
              `}</style>
              <div className="w-full h-48 bg-white rounded-lg shadow-lg relative overflow-hidden border border-gray-200 mx-auto mb-4">
                <div className="h-6 bg-gray-50 border-b border-gray-200 flex items-center justify-between px-3">
                  <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">
                    OREA Form 100
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                    <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                  </div>
                </div>
                <div
                  className="absolute left-0 w-full z-20"
                  style={{ animation: 'scanLineMobile 3s linear infinite' }}
                >
                  <div className="h-0.5 w-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.8)] relative">
                    <div className="absolute inset-0 bg-white opacity-80 blur-[0.5px]"></div>
                  </div>
                  <div className="h-12 w-full bg-gradient-to-t from-cyan-500/20 via-blue-500/5 to-transparent -mt-12 transform origin-bottom"></div>
                </div>
                <div className="p-4 space-y-4 relative">
                  <div className="space-y-1.5 opacity-50">
                    <div className="w-full h-1 bg-gray-100 rounded-full"></div>
                    <div className="w-3/4 h-1 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="flex justify-end relative py-1">
                    <div className="w-24 h-6 border border-dashed border-gray-300 rounded bg-gray-50/50"></div>
                    <div
                      className="absolute top-1 right-0 bg-[#FFC820] text-ink text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm flex items-center gap-0.5 z-10 whitespace-nowrap"
                      style={{ animation: 'revealTagPop 3s linear infinite' }}
                    >
                      INITIAL
                    </div>
                    <div
                      className="absolute top-1 right-12 bg-[#FF4081] text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm flex items-center gap-0.5 z-10 whitespace-nowrap"
                      style={{ animation: 'revealTagPop 3s linear infinite' }}
                    >
                      INITIAL
                    </div>
                  </div>
                  <div className="space-y-1.5 opacity-50">
                    <div className="w-full h-1 bg-gray-100 rounded-full"></div>
                    <div className="w-1/2 h-1 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="flex justify-start pt-2 relative">
                    <div className="relative w-full">
                      <div className="w-48 h-8 border border-dashed border-gray-300 rounded bg-gray-50/50"></div>
                      <div
                        className="absolute left-2 top-1 bg-[#FFC820] text-ink text-[8px] font-bold px-2 py-1 rounded shadow-md flex items-center gap-1 z-10 whitespace-nowrap"
                        style={{ animation: 'revealTagPopDelayed 3s linear infinite' }}
                      >
                        SIGN HERE
                        <div className="absolute -bottom-0.5 right-1 w-1.5 h-1.5 bg-[#FFC820] rotate-45"></div>
                      </div>
                      <div
                        className="absolute left-24 top-1 bg-[#FF4081] text-white text-[8px] font-bold px-2 py-1 rounded shadow-md flex items-center gap-1 z-10 whitespace-nowrap"
                        style={{ animation: 'revealTagPopDelayed 3s linear infinite' }}
                      >
                        SIGN HERE
                        <div className="absolute -bottom-0.5 right-1 w-1.5 h-1.5 bg-[#FF4081] rotate-45"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#100EA0] text-white text-xs font-bold py-3 rounded-lg shadow-lg mt-2">
                Apply E-Signature Template
              </button>
            </div>
          </div>
        </div>

        {/* Desktop: Scrollytelling with Phone Mockup */}
        <div className="hidden md:flex flex-col md:flex-row gap-20 items-start">
          {/* Sticky Phone */}
          <div className="w-full md:w-1/2 h-[80vh] sticky top-24 flex items-center justify-center">
            <div className="relative w-[360px] h-[700px] bg-white rounded-[40px] border-8 border-gray-200 shadow-2xl overflow-hidden flex flex-col scale-[0.88] origin-center">
              <div className="bg-gray-50 p-6 border-b border-gray-100 flex justify-between items-center">
                <span id="phone-header-text" className="font-bold text-ink text-lg">
                  Fast Offers
                </span>
                <div className="w-8 h-8 bg-brand rounded-full text-white flex items-center justify-center text-xs">
                  JS
                </div>
              </div>
              <div className="flex-1 relative bg-white overflow-hidden">
                {/* Screen 1: Freehold Purchase */}
                <div
                  className="screen-state absolute inset-0 p-6 transition-all duration-500 opacity-100 transform translate-y-0 flex flex-col overflow-y-auto"
                  data-step="1"
                  style={{ zIndex: 10, opacity: 1 }}
                >
                  <h3 className="text-2xl font-serif text-ink mb-6 anim-item">
                    Purchase Agreement
                  </h3>
                  <div className="anim-item mb-6">
                    <div className="bg-blue-50 p-4 rounded-2xl flex items-center gap-4">
                      <div className="bg-white p-2 rounded-full shadow-sm text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                          Subject Property
                        </div>
                        <div className="text-sm font-bold text-blue-900">18 Herron Ave</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="anim-item">
                      <label className="text-[10px] font-bold text-gray-400 uppercase ml-1 mb-1 block">
                        Legal Name of Buyer
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          className="flex-1 bg-gray-50 border-0 rounded-2xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-brand/20 outline-none"
                          placeholder="Enter Full Name"
                        />
                        <button className="bg-gray-50 text-brand rounded-2xl px-4 text-lg hover:bg-brand hover:text-white transition-colors">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-3 anim-item">
                      <div className="w-1/2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase ml-1 mb-1 block">
                          Offer Price
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-3 text-gray-400 font-serif italic">
                            $
                          </span>
                          <input
                            type="text"
                            className="w-full bg-gray-50 border-0 rounded-2xl py-3 pl-8 pr-3 text-sm font-bold text-ink focus:ring-2 focus:ring-brand/20 outline-none"
                            defaultValue="1,450,000"
                          />
                        </div>
                      </div>
                      <div className="w-1/2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase ml-1 mb-1 block">
                          Deposit
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-3 text-gray-400 font-serif italic">
                            $
                          </span>
                          <input
                            type="text"
                            className="w-full bg-gray-50 border-0 rounded-2xl py-3 pl-8 pr-3 text-sm font-bold text-ink focus:ring-2 focus:ring-brand/20 outline-none"
                            defaultValue="75,000"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="anim-item">
                      <label className="text-[10px] font-bold text-gray-400 uppercase ml-1 mb-1 block">
                        Closing Date
                      </label>
                      <input
                        type="date"
                        className="w-full bg-gray-50 border-0 rounded-2xl px-4 py-3 text-sm font-medium text-gray-600 focus:ring-2 focus:ring-brand/20 outline-none"
                      />
                    </div>
                  </div>
                  <div className="mt-auto pt-4 anim-item">
                    <button className="w-full bg-[#100EA0] text-white font-bold py-4 rounded-2xl shadow-xl shadow-brand/20 hover:scale-[1.02] transition-transform text-xs uppercase tracking-widest">
                      Draft Fast Offer
                    </button>
                  </div>
                </div>

                {/* Screen 2: File Download State */}
                <div
                  className="screen-state absolute inset-0 p-6 transition-all duration-500 opacity-0 transform translate-y-10 flex flex-col items-center justify-center text-center"
                  data-step="2"
                  style={{ zIndex: 20 }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">Package Generated</h3>
                  <p className="text-sm text-gray-500 mb-8">OREA Forms 100, 320, 801 Validated.</p>
                  <div className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-4 mb-6 text-left hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center">
                      <span className="text-red-500 font-bold text-xs">PDF</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-800">18 Herron Ave - Offer.pdf</div>
                      <div className="text-xs text-gray-400">2.4 MB • Just now</div>
                    </div>
                  </div>
                  <div className="w-full space-y-3">
                    <button className="w-full bg-[#100EA0] text-white font-bold py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                        <path d="M3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                      </svg>
                      Download PDF
                    </button>
                  </div>
                </div>

                {/* Screen 3: Send to Client */}
                <div
                  className="screen-state absolute inset-0 p-6 transition-all duration-500 opacity-0 transform translate-y-10 flex flex-col overflow-hidden"
                  data-step="3"
                  style={{ zIndex: 30 }}
                >
                  <h3 className="text-2xl font-serif text-ink mb-6 anim-item">
                    Send to Client
                  </h3>
                  <div className="anim-item flex-1 bg-gray-50 rounded-2xl p-0 border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden group">
                    <style jsx>{`
                      @keyframes scanLine {
                        0% {
                          top: -5%;
                          opacity: 0;
                        }
                        5% {
                          opacity: 1;
                        }
                        95% {
                          opacity: 1;
                        }
                        100% {
                          top: 105%;
                          opacity: 0;
                        }
                      }
                      @keyframes revealTagPop {
                        0%,
                        35% {
                          opacity: 0;
                          transform: scale(0.5);
                        }
                        40% {
                          opacity: 1;
                          transform: scale(1.3);
                        }
                        45% {
                          transform: scale(1);
                        }
                        90% {
                          opacity: 1;
                          transform: scale(1);
                        }
                        100% {
                          opacity: 0;
                        }
                      }
                      @keyframes revealTagPopDelayed {
                        0%,
                        75% {
                          opacity: 0;
                          transform: scale(0.5);
                        }
                        80% {
                          opacity: 1;
                          transform: scale(1.3);
                        }
                        85% {
                          transform: scale(1);
                        }
                        90% {
                          opacity: 1;
                          transform: scale(1);
                        }
                        100% {
                          opacity: 0;
                        }
                      }
                    `}</style>
                    <div className="w-10/12 h-[26rem] bg-white rounded-lg shadow-2xl relative transform transition-transform duration-500 hover:scale-105 overflow-hidden border border-gray-200">
                      <div
                        className="absolute left-0 w-full z-20"
                        style={{ animation: 'scanLine 3s linear infinite' }}
                      >
                        <div className="h-0.5 w-full bg-cyan-400 shadow-[0_0_15px_3px_rgba(34,211,238,0.8)] relative">
                          <div className="absolute inset-0 bg-white opacity-80 blur-[1px]"></div>
                        </div>
                        <div className="h-24 w-full bg-gradient-to-t from-cyan-500/20 via-blue-500/5 to-transparent -mt-24 transform origin-bottom"></div>
                      </div>
                      <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center justify-between px-4">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          OREA Form 100
                        </span>
                        <div className="flex gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                        </div>
                      </div>
                      <div className="p-6 space-y-8 relative">
                        <div className="space-y-3 opacity-50">
                          <div className="w-full h-2 bg-gray-100 rounded-full"></div>
                          <div className="w-full h-2 bg-gray-100 rounded-full"></div>
                          <div className="w-3/4 h-2 bg-gray-100 rounded-full"></div>
                        </div>
                        <div className="flex justify-end relative py-2">
                          <div className="w-24 h-8 border-2 border-dashed border-gray-300 rounded bg-gray-50/50"></div>
                          <div
                            className="absolute top-2 right-12 bg-[#FFC820] text-ink text-[10px] font-bold px-2 py-1.5 rounded shadow-lg flex items-center gap-1 z-20 origin-center whitespace-nowrap"
                            style={{ animation: 'revealTagPop 3s linear infinite' }}
                          >
                            INITIAL
                          </div>
                          <div
                            className="absolute top-2 right-0 bg-[#FF4081] text-white text-[10px] font-bold px-2 py-1.5 rounded shadow-lg flex items-center gap-1 z-10 origin-center whitespace-nowrap"
                            style={{ animation: 'revealTagPop 3s linear infinite' }}
                          >
                            INITIAL
                          </div>
                        </div>
                        <div className="space-y-3 opacity-50">
                          <div className="w-full h-2 bg-gray-100 rounded-full"></div>
                          <div className="w-1/2 h-2 bg-gray-100 rounded-full"></div>
                        </div>
                        <div className="flex justify-start pt-6 relative">
                          <div className="relative w-full">
                            <div className="w-56 h-12 border-2 border-dashed border-gray-300 rounded bg-gray-50/50 flex items-center px-3 gap-2">
                              <div className="w-20 h-1.5 bg-gray-200 rounded-full"></div>
                            </div>
                            <div
                              className="absolute left-4 top-3 bg-[#FFC820] text-ink text-[10px] font-bold px-4 py-2 rounded shadow-xl flex items-center gap-2 z-20 origin-center whitespace-nowrap"
                              style={{ animation: 'revealTagPopDelayed 3s linear infinite' }}
                            >
                              SIGN HERE
                              <div className="absolute -bottom-1 right-3 w-2 h-2 bg-[#FFC820] rotate-45"></div>
                            </div>
                            <div
                              className="absolute left-32 top-3 bg-[#FF4081] text-white text-[10px] font-bold px-4 py-2 rounded shadow-xl flex items-center gap-2 z-10 origin-center whitespace-nowrap"
                              style={{ animation: 'revealTagPopDelayed 3s linear infinite' }}
                            >
                              SIGN HERE
                              <div className="absolute -bottom-1 right-3 w-2 h-2 bg-[#FF4081] rotate-45"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 anim-item">
                    <button className="w-full bg-[#100EA0] text-white font-bold py-4 rounded-2xl shadow-xl shadow-brand/20 hover:scale-[1.02] transition-transform text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                      Apply E-Signature Template
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Text */}
          <div className="w-full md:w-1/2 pt-20">
            <div
              className="step-block min-h-[100vh] flex flex-col justify-center opacity-30 transition-opacity duration-500"
              data-target="1"
            >
              <span className="text-brand-light text-6xl font-serif block mb-4">01</span>
              <h3 className="text-4xl font-bold mb-4">Fill in the Blanks.</h3>
              <p className="text-xl text-gray-400">
                Fill out the basics like name, price, and deposit. We pull the rest of the data
                instantly.
              </p>
            </div>
            <div
              className="step-block min-h-[100vh] flex flex-col justify-center opacity-30 transition-opacity duration-500"
              data-target="2"
            >
              <span className="text-brand-light text-6xl font-serif block mb-4">02</span>
              <h3 className="text-4xl font-bold mb-4">Download the Offer.</h3>
              <p className="text-xl text-gray-400">
                Within 5 seconds, you&apos;ll have a fully built offer in an editable PDF, ready to
                review.
              </p>
            </div>
            <div
              className="step-block min-h-[100vh] flex flex-col justify-center opacity-30 transition-opacity duration-500"
              data-target="3"
            >
              <span className="text-brand-light text-6xl font-serif block mb-4">03</span>
              <h3 className="text-4xl font-bold mb-4">Send for Signatures.</h3>
              <p className="text-xl text-gray-400">
                Use our DocuSign templates to pre-place initials and signatures for you on the
                entire offer. No more dragging and dropping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
