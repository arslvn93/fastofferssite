'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="bg-brand pt-32 pb-12 px-6 md:px-20 border-t border-brand-dark fixed bottom-0 left-0 w-full z-0 text-white"
    >
      {/* Large Background Text/Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-[-20%] md:right-[-10%] md:left-auto md:translate-x-0 md:translate-y-0 text-[30vw] sm:text-[40vw] md:text-[40vw] font-bold leading-none select-none text-white tracking-tighter"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          FO
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0">
        {/* Left: Big CTA */}
        <div className="hidden md:flex flex-col gap-8 max-w-2xl">
          <h2 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tight pb-4 overflow-visible">
            Ready to save <br />
            <span className="italic text-brand-light opacity-80">your time?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://forms.ltd/register"
              className="px-8 py-4 bg-white text-brand rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-light transition-colors w-fit shadow-lg"
            >
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* Right: Logo & Links */}
        <div className="flex flex-col items-center md:items-end gap-8 w-full md:w-auto">
          {/* Logo */}
          <div
            className="text-white select-none w-full md:w-auto flex justify-center md:justify-end opacity-90 hover:opacity-100 transition-opacity"
            aria-label="Fast Offers"
          >
            <svg
              viewBox="0 0 800 150"
              className="h-16 md:h-20 w-auto fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="matrix(2.8277243,0,0,2.8277243,-7761.7454,-5281.8881)">
                <g transform="matrix(2.6367825,0,0,2.6367825,699.46912,1339.0883)" fill="currentColor">
                  <text
                    xmlSpace="preserve"
                    transform="matrix(0.06067336,0,0,0.06067336,803.42442,175.93079)"
                    fill="currentColor"
                  >
                    <tspan x="1254.4082" y="703.13993">
                      <tspan>®</tspan>
                    </tspan>
                  </text>
                  <path
                    d="m 787.88845,205.89576 v -2.31906 h -10.87191 v 14.89303 h 2.76585 v -5.70191 h 7.19121 v -2.34033 h -7.19121 v -4.53173 z"
                    fill="currentColor"
                  />
                  <path
                    d="m 792.71499,206.98082 c -1.82972,0 -3.5956,0.46807 -4.80832,1.4042 l 1.04251,1.93609 c 0.85103,-0.7021 2.17013,-1.12761 3.44667,-1.12761 1.89355,0 2.82968,0.91486 2.82968,2.46799 v 0.1702 h -2.93606 c -3.44667,0 -4.72321,1.4893 -4.72321,3.38285 0,1.97864 1.63823,3.40412 4.23387,3.40412 1.70206,0 2.93606,-0.55317 3.57433,-1.53186 v 1.38293 h 2.51054 v -6.65931 c 0,-3.27647 -1.89354,-4.8296 -5.17001,-4.8296 z m -0.36169,9.70174 c -1.36165,0 -2.17013,-0.61699 -2.17013,-1.5744 0,-0.82976 0.48935,-1.51058 2.29779,-1.51058 h 2.74457 v 1.3191 c -0.44679,1.17016 -1.57441,1.76588 -2.87223,1.76588 z"
                    fill="currentColor"
                  />
                  <path
                    d="m 803.60108,218.61866 c 3.19136,0 5.14873,-1.38293 5.14873,-3.5105 0,-4.44663 -7.021,-2.40416 -7.021,-4.70194 0,-0.74466 0.76593,-1.27655 2.38289,-1.27655 1.08506,0 2.17012,0.21276 3.25519,0.85103 l 1.02123,-2.0212 c -1.02123,-0.61699 -2.74457,-0.97868 -4.25515,-0.97868 -3.06371,0 -4.9998,1.4042 -4.9998,3.55305 0,4.53174 7.021,2.48926 7.021,4.65939 0,0.7872 -0.7021,1.25527 -2.38289,1.25527 -1.42547,0 -2.95733,-0.46807 -3.95729,-1.12761 l -1.02123,2.02119 c 1.02123,0.72338 2.91478,1.27655 4.80832,1.27655 z"
                    fill="currentColor"
                  />
                  <path
                    d="m 815.82777,215.95919 c -0.40424,0.31913 -0.93614,0.46806 -1.48931,0.46806 -0.99996,0 -1.5744,-0.59572 -1.5744,-1.70206 v -5.40404 h 3.04243 v -2.12757 h -3.04243 v -2.59564 h -2.65947 v 10.19108 c 0,2.51054 1.42547,3.82964 3.91474,3.82964 0.95741,0 1.91482,-0.25531 2.55309,-0.76593 z"
                    fill="currentColor"
                  />
                  <path
                    d="m 827.08512,218.68248 c 4.61684,0 8.02096,-3.23391 8.02096,-7.65927 0,-4.42535 -3.40412,-7.65927 -8.02096,-7.65927 -4.61683,0 -8.02095,3.25519 -8.02095,7.65927 0,4.40408 3.40412,7.65927 8.02095,7.65927 z m 0,-2.42543 c -2.99988,0 -5.23383,-2.1914 -5.23383,-5.23384 0,-3.04243 2.23395,-5.23383 5.23383,-5.23383 2.99989,0 5.23384,2.1914 5.23384,5.23383 0,3.04244 -2.23395,5.23384 -5.23384,5.23384 z"
                    fill="currentColor"
                  />
                  <path
                    d="m 841.74421,204.68304 c 0.55317,0 1.06379,0.19148 1.46803,0.46807 0.13583,-0.66846 0.57232,-1.53681 0.97419,-1.81179 -0.002,-0.003 -0.11204,-0.0939 -0.22954,-0.18812 -0.59572,-0.42551 -1.48931,-0.61699 -2.40416,-0.61699 -2.6382,0 -4.06367,1.55313 -4.06367,3.93601 v 0.72338 h -1.87227 v 2.12757 h 1.87227 v 9.14858 h 2.65947 v -9.14858 h 3.04243 v -2.12757 h -3.12754 v -0.68083 c 0,-1.21271 0.57445,-1.82971 1.68079,-1.82971 z"
                    fill="currentColor"
                  />
                  <path
                    d="m 848.46284,204.68304 c 0.55317,0 1.06379,0.19148 1.44676,0.46807 l 0.74465,-1.99993 c -0.59572,-0.42551 -1.46803,-0.61699 -2.38289,-0.61699 -2.63819,0 -4.08494,1.55313 -4.08494,3.93601 v 11.99953 h 2.65947 v -9.14858 h 3.06371 v -2.12757 h -3.12754 v -0.68083 c 0,-1.21271 0.57445,-1.82971 1.68078,-1.82971 z"
                    fill="currentColor"
                  />
                  <path
                    d="m 856.07279,216.36343 c -1.6595,0 -2.8935,-0.7021 -3.44667,-1.99992 l 8.70179,-1.70206 c -0.0213,-3.55305 -2.57437,-5.68063 -5.74446,-5.68063 -3.38284,0 -5.85083,2.42544 -5.85083,5.80828 0,3.38285 2.46799,5.82956 6.27635,5.82956 1.95737,0 3.55305,-0.63828 4.55301,-1.85099 l -1.4042,-1.63824 c -0.82976,0.82976 -1.80844,1.234 -3.08499,1.234 z m -0.48934,-7.25503 c 1.59568,0 2.78713,0.93613 3.14881,2.31905 l -6.42527,1.234 v -0.0213 c 0,-2.17013 1.34037,-3.53177 3.27646,-3.53177 z"
                    fill="currentColor"
                  />
                  <path
                    d="m 864.76786,208.76798 v -1.65951 h -2.53182 v 11.36126 h 2.65947 v -5.51042 c 0,-2.31906 1.27655,-3.5105 3.29774,-3.5105 0.19148,0 0.38297,0.0213 0.617,0.0638 v -2.53181 c -1.89354,0 -3.27647,0.59572 -4.04239,1.78716 z"
                    fill="currentColor"
                  />
                  <path
                    d="m 873.75836,218.61866 c 3.19137,0 5.14874,-1.38293 5.14874,-3.5105 0,-4.44663 -7.021,-2.40416 -7.021,-4.70194 0,-0.74466 0.76592,-1.27655 2.38288,-1.27655 1.08506,0 2.17013,0.21276 3.25519,0.85103 l 1.02124,-2.0212 c -1.02124,-0.61699 -2.74457,-0.97868 -4.25515,-0.97868 -3.06371,0 -4.99981,1.4042 -4.99981,3.55305 0,4.53174 7.021,2.48926 7.021,4.65939 0,0.7872 -0.7021,1.25527 -2.38288,1.25527 -1.42548,0 -2.95733,-0.46807 -3.95729,-1.12761 l -1.02124,2.02119 c 1.02124,0.72338 2.91478,1.27655 4.80832,1.27655 z"
                    fill="currentColor"
                  />
                </g>
              </g>
            </svg>
          </div>

          <div className="flex gap-6 text-xs md:text-sm font-bold uppercase tracking-widest text-brand-light/70">
            <Link
              href="https://www.youtube.com/@fastoffers"
              className="hover:text-white transition-colors"
            >
              YouTube
            </Link>
            <Link
              href="https://www.instagram.com/fastoffers.ca/"
              className="hover:text-white transition-colors"
            >
              Instagram
            </Link>
          </div>

          <div className="text-[10px] md:text-xs text-brand-light/40 uppercase tracking-widest">
            © 2026 Fast Offers Inc. Made in Toronto.
          </div>
        </div>
      </div>
    </footer>
  )
}


