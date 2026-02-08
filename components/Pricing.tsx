'use client'

import Link from 'next/link'

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand font-bold uppercase tracking-widest text-xs mb-4 block">
            Membership
          </span>
          <h2 className="font-serif text-5xl md:text-7xl">
            Invest in your <br />
            <span className="italic text-brand">Success.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Monthly */}
          <div className="maglev-card bg-white p-10 rounded-[2.5rem] border border-gray-200 hover:border-gray-300 transition-colors flex flex-col justify-between min-h-[500px]">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold uppercase text-gray-400 tracking-widest">
                  Monthly
                </h3>
              </div>
              <div className="text-6xl font-serif text-ink mb-2">
                $15<span className="text-lg text-gray-400 font-sans font-normal">/mo</span>
              </div>

              <hr className="border-gray-100 mb-8" />
              <ul className="space-y-4 text-ink mb-8 font-sans font-medium text-lg">
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-brand"></span> Unlimited Offers
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-brand"></span> 2026 Updated Forms
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-brand"></span> E-Signature Templates
                </li>
              </ul>
            </div>
            <Link
              href="https://forms.ltd/register"
              className="block w-full py-5 border border-gray-300 rounded-full text-center font-bold hover:bg-ink hover:text-white transition-colors uppercase tracking-widest text-sm"
            >
              Select Monthly
            </Link>
          </div>

          {/* Yearly */}
          <div className="maglev-card bg-brand-dark text-white p-10 rounded-[2.5rem] border border-brand/50 hover:border-brand transition-colors relative overflow-hidden flex flex-col justify-between min-h-[500px]">
            <div className="absolute top-0 right-0 bg-white text-brand-dark text-[10px] font-bold px-6 py-3 rounded-bl-2xl uppercase tracking-widest">
              Best Value
            </div>
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold uppercase text-white tracking-widest">Yearly</h3>
              </div>
              <div className="text-6xl font-serif text-white mb-2">
                $12.5<span className="text-lg text-gray-300 font-sans font-normal">/mo</span>
              </div>

              <hr className="border-white/10 mb-8" />
              <ul className="space-y-4 text-white mb-8 font-sans font-medium text-lg">
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-white"></span> All Monthly Features
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-white"></span>{' '}
                  <span className="font-bold">DocuSign Integration</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-white"></span> 1 Month Free
                </li>
              </ul>
            </div>
            <Link
              href="https://forms.ltd/register"
              className="block w-full py-5 bg-white text-brand-dark rounded-full text-center font-bold hover:scale-105 transition-transform uppercase tracking-widest text-sm shadow-lg shadow-brand/30"
            >
              Start Yearly Plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


