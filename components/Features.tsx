'use client'

export default function Features() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-10 bg-off-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>

      <div className="text-center mb-16 md:mb-24 relative z-10">
        <span className="text-brand font-bold uppercase tracking-widest text-xs mb-4 block">
          The Platform
        </span>
        <h2 className="font-serif text-4xl md:text-6xl text-ink">
          Made for Agents, <br />
          <span className="italic text-brand">by Agents.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto relative z-10">
        {/* Card 1: Blazing Speed (Tall) */}
        <div className="md:col-span-4 md:row-span-2 maglev-card bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-200 shadow-2xl flex flex-col relative overflow-hidden group">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50/50 opacity-50 pointer-events-none"></div>
          <div className="scanline opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            <h3 className="font-serif text-3xl md:text-4xl text-ink mb-6 flex items-center gap-3">
              <svg
                className="w-8 h-8 text-brand"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Blazing Speed
            </h3>
            <p className="text-ink-light text-base md:text-lg leading-relaxed mb-4">
              19 minutes of paperwork compressed into seconds. No redundant data entry, no hunting
              for forms.
            </p>
          </div>

          {/* The Visual: Vertical Accelerator */}
          <div className="flex-1 relative flex items-center justify-center min-h-[200px] border-t border-b border-gray-100 bg-gray-50/50 my-4 rounded-2xl overflow-hidden">
            {/* Moving Track */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-brand/20 to-transparent"></div>
            </div>

            {/* Floating Documents (Infinite Scroll) */}
            <div className="absolute flex flex-col items-center w-full animate-[scrollDown_10s_linear_infinite] group-hover:animate-[scrollDown_2s_linear_infinite] transition-all duration-500">
              {/* Set 1 */}
              <div className="flex flex-col items-center gap-6 py-6 w-full">
                {/* Doc 801 */}
                <div className="w-28 h-36 bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex flex-col relative">
                  <div className="flex justify-between items-start">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-[8px] font-bold text-gray-400">
                      PDF
                    </div>
                    <div className="text-[10px] font-bold text-gray-300">OREA</div>
                  </div>
                  <div className="mt-auto">
                    <div className="text-3xl font-serif font-bold text-gray-300">801</div>
                    <div className="w-full h-1 bg-gray-100 rounded mt-2"></div>
                    <div className="w-2/3 h-1 bg-gray-100 rounded mt-1"></div>
                  </div>
                </div>
                {/* Doc 100 (Valid) */}
                <div className="w-32 h-40 bg-white rounded-xl border border-brand/30 shadow-xl p-4 flex flex-col relative z-10">
                  <div className="absolute -right-3 top-6 bg-green-500 text-white text-[9px] px-2 py-1 rounded-full font-bold uppercase shadow-md transform rotate-12">
                    Ready
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-8 h-8 bg-brand/5 rounded-full flex items-center justify-center text-[10px] font-bold text-brand">
                      PDF
                    </div>
                    <div className="text-[10px] font-bold text-brand/40">OREA</div>
                  </div>
                  <div className="mt-auto">
                    <div className="text-4xl font-serif font-bold text-brand">100</div>
                    <div className="w-full h-1.5 bg-brand/10 rounded mt-3"></div>
                    <div className="w-3/4 h-1.5 bg-brand/10 rounded mt-1.5"></div>
                  </div>
                  <div className="absolute bottom-4 right-4 text-green-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                {/* Doc 320 */}
                <div className="w-28 h-36 bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex flex-col relative">
                  <div className="flex justify-between items-start">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-[8px] font-bold text-gray-400">
                      PDF
                    </div>
                    <div className="text-[10px] font-bold text-gray-300">OREA</div>
                  </div>
                  <div className="mt-auto">
                    <div className="text-3xl font-serif font-bold text-gray-300">320</div>
                    <div className="w-full h-1 bg-gray-100 rounded mt-2"></div>
                    <div className="w-2/3 h-1 bg-gray-100 rounded mt-1"></div>
                  </div>
                </div>
                {/* Doc 127 */}
                <div className="w-28 h-36 bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex flex-col relative">
                  <div className="flex justify-between items-start">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-[8px] font-bold text-gray-400">
                      PDF
                    </div>
                    <div className="text-[10px] font-bold text-gray-300">OREA</div>
                  </div>
                  <div className="mt-auto">
                    <div className="text-3xl font-serif font-bold text-gray-300">127</div>
                    <div className="w-full h-1 bg-gray-100 rounded mt-2"></div>
                    <div className="w-2/3 h-1 bg-gray-100 rounded mt-1"></div>
                  </div>
                </div>
              </div>
              {/* Set 2 (Duplicate for Loop) */}
              <div className="flex flex-col items-center gap-6 py-6 w-full">
                {/* Doc 801 */}
                <div className="w-28 h-36 bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex flex-col relative">
                  <div className="flex justify-between items-start">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-[8px] font-bold text-gray-400">
                      PDF
                    </div>
                    <div className="text-[10px] font-bold text-gray-300">OREA</div>
                  </div>
                  <div className="mt-auto">
                    <div className="text-3xl font-serif font-bold text-gray-300">801</div>
                    <div className="w-full h-1 bg-gray-100 rounded mt-2"></div>
                    <div className="w-2/3 h-1 bg-gray-100 rounded mt-1"></div>
                  </div>
                </div>
                {/* Doc 100 (Valid) */}
                <div className="w-32 h-40 bg-white rounded-xl border border-brand/30 shadow-xl p-4 flex flex-col relative z-10">
                  <div className="absolute -right-3 top-6 bg-green-500 text-white text-[9px] px-2 py-1 rounded-full font-bold uppercase shadow-md transform rotate-12">
                    Ready
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-8 h-8 bg-brand/5 rounded-full flex items-center justify-center text-[10px] font-bold text-brand">
                      PDF
                    </div>
                    <div className="text-[10px] font-bold text-brand/40">OREA</div>
                  </div>
                  <div className="mt-auto">
                    <div className="text-4xl font-serif font-bold text-brand">100</div>
                    <div className="w-full h-1.5 bg-brand/10 rounded mt-3"></div>
                    <div className="w-3/4 h-1.5 bg-brand/10 rounded mt-1.5"></div>
                  </div>
                  <div className="absolute bottom-4 right-4 text-green-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                {/* Doc 320 */}
                <div className="w-28 h-36 bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex flex-col relative">
                  <div className="flex justify-between items-start">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-[8px] font-bold text-gray-400">
                      PDF
                    </div>
                    <div className="text-[10px] font-bold text-gray-300">OREA</div>
                  </div>
                  <div className="mt-auto">
                    <div className="text-3xl font-serif font-bold text-gray-300">320</div>
                    <div className="w-full h-1 bg-gray-100 rounded mt-2"></div>
                    <div className="w-2/3 h-1 bg-gray-100 rounded mt-1"></div>
                  </div>
                </div>
                {/* Doc 127 */}
                <div className="w-28 h-36 bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex flex-col relative">
                  <div className="flex justify-between items-start">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-[8px] font-bold text-gray-400">
                      PDF
                    </div>
                    <div className="text-[10px] font-bold text-gray-300">OREA</div>
                  </div>
                  <div className="mt-auto">
                    <div className="text-3xl font-serif font-bold text-gray-300">127</div>
                    <div className="w-full h-1 bg-gray-100 rounded mt-2"></div>
                    <div className="w-2/3 h-1 bg-gray-100 rounded mt-1"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Speed Lines (Visible on Hover) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute left-1/4 top-0 w-[1px] h-full bg-brand/10 animate-[rain_0.5s_linear_infinite]"></div>
              <div className="absolute right-1/4 top-0 w-[1px] h-full bg-brand/10 animate-[rain_0.7s_linear_infinite]"></div>
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>
          </div>

          {/* 5s Bar Footer */}
          <div className="relative z-10">
            <div className="flex items-end gap-2 mb-2">
              <span className="text-6xl font-bold text-brand tracking-tighter">5s</span>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                Avg Time
              </span>
            </div>
            {/* Speed Visual */}
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div className="h-full bg-brand w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[2s] ease-out"></div>
            </div>
            <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-widest">
              <span>Start</span>
              <span>Done</span>
            </div>
          </div>
        </div>

        {/* Card 2: Super Simple (Wide) */}
        <div className="md:col-span-8 maglev-card bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-200 shadow-2xl overflow-hidden group flex flex-col md:flex-row items-center gap-8">
          <div className="scanline opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 flex-1">
            <h3 className="font-serif text-3xl md:text-4xl text-ink mb-6 flex items-center gap-3">
              <svg
                className="w-8 h-8 text-brand"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              Super Simple
            </h3>
            <p className="text-ink-light text-base md:text-lg leading-relaxed">
              No steep learning curve. If you can send an email, you can use Fast Offers. Our logic
              engine handles the complexity so you don't have to.
            </p>
          </div>

          {/* UI Visual: Simple Input Interaction */}
          <div className="w-full md:w-1/2 bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-inner relative overflow-hidden min-h-[200px] flex flex-col justify-center">
            {/* Status Bar */}
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>

            <div className="space-y-4 pt-4 relative">
              {/* Inputs (Pre-filled) */}
              <div className="flex gap-3">
                <div className="w-3/5 relative">
                  <label className="text-[9px] font-bold text-gray-400 uppercase ml-1 mb-1 block">
                    Buyer Name
                  </label>
                  <div className="bg-white border border-gray-200 rounded-xl h-10 w-full flex items-center px-3">
                    <div className="text-sm font-medium text-ink">John Smith</div>
                  </div>
                </div>
                <div className="w-2/5 relative">
                  <label className="text-[9px] font-bold text-gray-400 uppercase ml-1 mb-1 block">
                    Offer Price
                  </label>
                  <div className="bg-white border border-gray-200 rounded-xl h-10 w-full flex items-center px-3">
                    <div className="text-sm font-medium text-ink">$1,450,000</div>
                  </div>
                </div>
              </div>

              {/* Button Interaction */}
              <button className="w-full bg-[#100EA0] text-white font-bold py-3 rounded-xl shadow-lg shadow-brand/20 relative overflow-hidden transition-all duration-200 animate-[buttonPress_2.5s_ease-in-out_infinite]">
                <span className="relative z-10 text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                  Draft Fast Offer
                </span>
              </button>

              {/* Success Message */}
              <div className="flex items-center justify-center gap-2 text-green-600 opacity-0 transform translate-y-2 animate-[successFade_2.5s_ease-in-out_infinite]">
                <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-[10px]">
                  ✓
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Generated</span>
              </div>

              {/* Animated Cursor */}
              <div className="absolute top-0 left-0 pointer-events-none z-20 transform translate-x-[120%] translate-y-[150%] group-hover:translate-x-[60%] group-hover:translate-y-[80px] animate-[cursorMove_2.5s_ease-in-out_infinite] transition-transform duration-[1s] cubic-bezier(0.22, 1, 0.36, 1)">
                <div className="relative animate-[click_2.5s_ease-in-out_infinite]">
                  <svg
                    className="w-20 h-20 drop-shadow-2xl"
                    viewBox="0 0 550 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="matrix(0.353 0 0 -0.353 256.5 196.6499)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FFFFFF"
                        d="M209.5,105.85c0-0.4,0-0.817,0-1.25l-0.15-68.4l0.15-15.55l-0.15,15.55l0.15,68.4C209.5,105.033,209.5,105.45,209.5,105.85v32.8l8.4-1c9.167-0.667,22.7-1,40.6-1c30.833,0,52.25-13.667,64.25-41c3.767-8.533,6.35-17.933,7.75-28.2c0.7-5.133,1.033-9.4,1-12.8l-0.25-51c-6.167-121.433-18.083-214.5-35.75-279.2c-17.633-64.7-33.3-115.967-47-153.8l-364-1c-36.2,172.967-108.183,307.633-215.95,404C-306.75,88.383-249.1,89.7-158.5-22.4v373.05c0.1,3,0.417,6.55,0.95,10.649c1.3,10.267,3.683,19.667,7.15,28.2c10.367,25.533,28.333,39.134,53.9,40.8c25.6-1.666,43.583-15.267,53.95-40.8c3.466-8.533,5.85-17.934,7.15-28.2c0.533-4.1,0.833-7.649,0.9-10.649V225.55v-117v117h8.4c9.167-0.666,22.7-1,40.6-1c30.833,0,52.25-13.666,64.25-41c3.767-8.533,6.35-17.933,7.75-28.2c0.567-4.1,0.9-7.65,1-10.65v-75v75v42h8.4c9.167-0.667,22.7-1,40.6-1c30.833,0,52.25-13.667,64.25-41c3.767-8.534,6.35-17.934,7.75-28.2C209.067,112.4,209.4,108.85,209.5,105.85z M209.05,11.7l0.3,24.5L209.05,11.7z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="65.65"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="3"
                        d="M209.5,105.85c-0.1,3-0.433,6.55-1,10.65c-1.4,10.267-3.983,19.667-7.75,28.2c-12,27.333-33.417,41-64.25,41c-17.9,0-31.433,0.333-40.6,1h-8.4v-42v-75 M87.5,144.7c-0.1,3-0.433,6.55-1,10.65c-1.4,10.267-3.983,19.667-7.75,28.2c-12,27.334-33.417,41-64.25,41c-17.9,0-31.433,0.334-40.6,1h-8.4v-117 M-34.5,225.55V350.65c-0.067,3-0.367,6.55-0.9,10.649c-1.3,10.267-3.684,19.667-7.15,28.2c-10.367,25.533-28.35,39.134-53.95,40.8c-25.567-1.666-43.533-15.267-53.9-40.8c-3.467-8.533-5.85-17.934-7.15-28.2c-0.534-4.1-0.85-7.649-0.95-10.649V-22.4c-90.6,112.1-148.25,110.783-172.95-3.95c107.767-96.367,179.75-231.033,215.95-404l364,1c13.7,37.833,29.367,89.1,47,153.8c17.667,64.7,29.583,157.767,35.75,279.2l0.25,51c0.033,3.4-0.3,7.667-1,12.8c-1.4,10.267-3.983,19.667-7.75,28.2c-12,27.333-33.417,41-64.25,41c-17.9,0-31.433,0.333-40.6,1l-8.4,1v-32.8c0-0.4,0-0.817,0-1.25l-0.15-68.4l0.15-15.55 M209.05,11.7l0.3,24.5"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: E-Signature (Wide) */}
        <div className="md:col-span-8 maglev-card bg-ink text-white rounded-[2.5rem] p-8 md:p-10 border-0 shadow-2xl overflow-hidden group flex flex-col md:flex-row-reverse items-center gap-8" style={{ backgroundColor: '#050505' }}>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="scanline opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="flex-1 relative z-10">
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 flex items-center gap-3" style={{ fontFamily: 'Gambetta, serif' }}>
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              E-Signature Ready
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              We place every initial and signature tag for you automatically. Compatible with
              DocuSign and Authentisign. Just click send.
            </p>
          </div>

          {/* UI Visual: DocuSign Mock */}
          <div className="w-full md:w-1/2 h-48 bg-white rounded-t-2xl rounded-b-md relative shadow-2xl transform group-hover:translate-y-2 transition-transform duration-500 overflow-hidden">
            {/* Document Header */}
            <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-20 h-2 bg-gray-200 rounded-full"></div>
            </div>
            {/* Document Body */}
            <div className="p-6 space-y-3 opacity-50">
              <div className="w-full h-2 bg-gray-100 rounded-full"></div>
              <div className="w-3/4 h-2 bg-gray-100 rounded-full"></div>
              <div className="w-full h-2 bg-gray-100 rounded-full"></div>
              <div className="w-1/2 h-2 bg-gray-100 rounded-full"></div>
            </div>
            {/* Signature Tag */}
            <div className="absolute bottom-8 right-8 bg-[#FFC820] text-ink text-[8px] font-bold px-3 py-2 rounded shadow-lg flex items-center gap-2 transform scale-0 animate-[popLoop_4.5s_ease-in-out_infinite] origin-bottom-right">
              <div className="w-3 h-3 border border-ink rounded-sm"></div>
              SIGN HERE
              <div className="absolute -bottom-1 right-4 w-2 h-2 bg-[#FFC820] rotate-45"></div>
            </div>
            {/* Initial Tag */}
            <div className="absolute bottom-20 left-8 bg-[#FFC820] text-ink text-[8px] font-bold px-2 py-1.5 rounded shadow-lg flex items-center gap-1 transform scale-0 animate-[popLoop_4.5s_ease-in-out_1.5s_infinite] origin-bottom-left">
              INITIAL
              <div className="absolute -bottom-1 left-2 w-2 h-2 bg-[#FFC820] rotate-45"></div>
            </div>
            {/* Initial Tag 2 */}
            <div className="absolute top-12 right-12 bg-[#FFC820] text-ink text-[8px] font-bold px-2 py-1.5 rounded shadow-lg flex items-center gap-1 transform scale-0 animate-[popLoop_4.5s_ease-in-out_3s_infinite] origin-top-right">
              INITIAL
              <div className="absolute -top-1 right-2 w-2 h-2 bg-[#FFC820] rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
