import { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from './loading'
import FAQs from '@/components/FAQs'
import Clients from '@/components/Clients'
import Hero from '@/components/HeroSection'
import TrackRecord from '@/components/TrackRecord'
import WhyChooseUs from '@/components/WhyChooseUs'
import CorePartnerShip from '@/components/CorePartnership'

export const metadata: Metadata = {
      title: 'Baldwin Enterprises',
      description: 'Boost your signal today with our cell boosters.',
}

export default function Home() {
      return (
              <section>
                    <Suspense fallback={<Loading />}>
                            <Hero />
                            <WhyChooseUs />
                            <Clients />
                            <CorePartnerShip />
                            <TrackRecord />
                            <FAQs />
                    </Suspense>Suspense>
              </section>section>
            )
}
</section>
