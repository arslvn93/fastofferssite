import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Workflow from '@/components/Workflow'
import Features from '@/components/Features'
import Museum from '@/components/Museum'

// Lazy load heavy components
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="py-20 bg-off-white" />,
})
const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <div className="py-20 bg-white" />,
})
const Footer = dynamic(() => import('@/components/Footer'))
const ScrollAnimations = dynamic(() => import('@/components/animations/ScrollAnimations'))

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="relative z-10 bg-white shadow-2xl">
        <Hero />
        <Problem />
        <Workflow />
        <Features />
        <Museum />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  )
}

