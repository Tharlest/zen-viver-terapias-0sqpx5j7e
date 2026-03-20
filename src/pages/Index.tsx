import { HeroSection } from '@/components/sections/HeroSection'
import { LogosSection } from '@/components/sections/LogosSection'
import { OfferSection } from '@/components/sections/OfferSection'
import { ValuePropsSection } from '@/components/sections/ValuePropsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Index() {
  return (
    <div className="w-full">
      <HeroSection />
      <LogosSection />
      <OfferSection />
      <ValuePropsSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
    </div>
  )
}
