'use client'

export default function Problem() {
  return (
    <section id="problem" className="py-20 md:py-32 px-6 md:px-20 max-w-7xl mx-auto md:overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-4 static lg:sticky lg:top-32 overflow-visible">
          <span className="text-brand font-bold uppercase tracking-widest text-xs mb-4 block">
            The Reality
          </span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-4 text-ink">
            Your time is worth <br />
            <span className="italic text-brand">$1000/hr.</span>
          </h2>
          <p className="text-ink-light text-base md:text-lg leading-relaxed">
            Stop wasting it on administrative friction. The old way of paperwork is costing you
            deals.
          </p>
        </div>
        <div className="lg:col-span-8">
          <p className="font-sans text-2xl md:text-5xl font-light leading-[1.2] text-ink-light mb-12">
            Fast Offers started with a simple mission:
            <span className="highlight-text text-ink font-normal">
              {' '}
              Save agents time on paperwork{' '}
            </span>
            so they can focus on what matters -{' '}
            <span className="highlight-text text-ink font-normal">their clients.</span>
          </p>
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-2 border-gray-200 pl-6 hover:border-brand transition-colors duration-500">
              <h3 className="font-bold text-xl md:text-2xl mb-2 text-ink">Eliminate Errors</h3>
              <p className="text-ink-light text-sm md:text-base leading-relaxed">
                No more missing clauses. Our logic engine knows if it&apos;s a Condo or Freehold and
                adapts automatically.
              </p>
            </div>
            <div className="border-l-2 border-gray-200 pl-6 hover:border-brand transition-colors duration-500">
              <h3 className="font-bold text-xl md:text-2xl mb-2 text-ink">Instant Signatures</h3>
              <p className="text-ink-light text-sm md:text-base leading-relaxed">
                Fully Built Templates with DocuSign. Initals and Signatures are pre-placed. Click
                send, and the deal is done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


