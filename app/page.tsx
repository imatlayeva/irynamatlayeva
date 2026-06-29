import Nav from '@/components/ui/Nav'
import Thread from '@/components/ui/Thread'
import ScrollSpy from '@/components/ui/ScrollSpy'
import CustomCursor from '@/components/ui/CustomCursor'
import SpotlightSection from '@/components/ui/SpotlightSection'
import Hero from '@/components/sections/Hero'
import Pause from '@/components/sections/Pause'
import Mirror from '@/components/sections/Mirror'
import Directions from '@/components/sections/Directions'
import HowItWorks from '@/components/sections/HowItWorks'
import Formats from '@/components/sections/Formats'
import About from '@/components/sections/About'
import Credentials from '@/components/sections/Credentials'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <CustomCursor />
      <ScrollSpy />
      <main style={{ paddingTop: '4rem' }}>
        <Hero />
        <Pause text="Тут не потрібно вдавати когось іншого — навіть якщо ти ще тільки шукаєш себе." />

        <SpotlightSection color="warm">
          <Mirror />
        </SpotlightSection>

        <Thread />

        <Directions />

        <Thread />

        <SpotlightSection color="olive">
          <HowItWorks />
        </SpotlightSection>

        <Thread />

        <Formats />

        <Thread />

        <SpotlightSection color="warm">
          <About />
          <Credentials />
        </SpotlightSection>

        <Thread />

        <SpotlightSection color="olive">
          <FAQ />
        </SpotlightSection>

        <Contact />
         <Footer />
      </main>
    </>
  )
}
