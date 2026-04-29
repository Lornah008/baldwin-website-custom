'use client'
import Image from "next/image"
import Balancer from 'react-wrap-balancer'
import H1 from "@/components/typography/H1"
import H2 from "@/components/typography/H2"
import { useRouter } from "next/navigation"
import Paragraph from "@/components/typography/Paragraph"

export default function Services() {

    const router = useRouter()

    function enquireNow() {
        router.push('/contact')
    }

    interface services {
        id: number,
        title: string,
        imageSrc: string,
        imageAlt: string,
        description: string,
    }

    const services: services[] = [
        {
            id: 1,
            title: 'Signal Booster Installation',
            imageSrc: '/assets/3d-fluency-gps-signal.png',
            imageAlt: '3d fluency gps signal illustration from icons8',
            description: 'Our team of trained technicians will help you select the best signal booster for your home, office, or commercial premises before making their way to your location to set it up properly and optimize it for maximum performance.',
        },
        {
            id: 2,
            title: 'Network Optimization',
            imageSrc: '/assets/business-3d-three-grey-metal-gears.png',
            imageAlt: 'business 3d three grey metal gears illustration from icons8',
            description: 'We offer a wide selection of EU-compliant StellaDoradus repeaters and antennas that boost voice and cellular networks, including 5G, 4G, 3G, 2G, and GSM, from all major network carriers, including Airtel and Safaricom.',
        },
        {
            id: 4,
            title: 'Signal Testing',
            imageSrc: '/assets/business-3d-blue-wi-fi-sign.png',
            imageAlt: 'business 3d blue WiFi sign illustration from icons8',
            description: 'We use test your signal strength and determine what could be causing the lag before recommending suitable solutions. We also map out serving signal sites and identify both outdoor and indoor antenna placements.',
        },
        {
            id: 3,
            title: 'Onsite Surveys',
            imageSrc: '/assets/3d-fluency-test-passed.png',
            imageAlt: '3d fluency test passed illustration from icons8',
            description: 'Schedule a site visit, during which our signal experts assess the environment and come up with tailored solutions for you. The solutions are based on your business needs, the size of the property, the terrain, cell tower proximity, building materials, and floor plans.',
        },
    ]

    return (
        <div className="p-4 md:p-8 lg:p-12 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-2">
                    <H1 className="my-3">Services</H1>

                    <Paragraph>
                        <Balancer>
                            At Baldwin Enterprises, we invested in state-of-the-art
                            technology to ensure that you get the best possible
                            coverage and fast connection speeds.
                            We also understand that everyone has unique needs, so
                            we have a range of services that ensure we provide you
                            with customized network optimization solutions.
                        </Balancer>
                    </Paragraph>
                </div>

            </div>

            <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    services.map(service => {
                        const isOdd = service.id % 2 !== 0

                        return (
                            <div key={service.id} className={isOdd ? "pt-6 pb-8 pl-6 pr-8 md:pt-12 md:pb-16 md:pl-8 lg:pr-32 bg-fuchsia-50 rounded-lg space-y-7" : "pt-6 pb-8 pl-6 pr-8 md:pt-12 md:pb-16 md:pl-8 lg:pr-32 bg-indigo-50 rounded-lg space-y-7"}>
                                <Image src={service.imageSrc} alt={service.imageAlt} width={80} height={80} />

                                <div className="py-4 md:py-8 space-y-4">
                                    <H2>{service.title}</H2>
                                    <Paragraph>
                                        <Balancer>
                                            {service.description}
                                        </Balancer>
                                    </Paragraph>
                                </div>

                                <button onClick={() => enquireNow()} className={isOdd ? "px-4 py-2 bg-light border border-primary text-sm text-primary rounded-lg" : "px-4 py-2 bg-blue-100 border border-blue-600 text-sm text-blue-600 rounded-lg"}>
                                    Enquire Now
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}