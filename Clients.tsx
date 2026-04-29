import Image from "next/image"
import Marquee from "react-fast-marquee"

export default function Clients() {

    interface ClientLogo {
        id: number,
        imageAlt: string,
        imageUrl: string,
    }

    const clientLogos: ClientLogo[] = [
        { id: 1, imageUrl: '/assets/airtel-ke.png', imageAlt: 'Airtel Kenya Logo', },
        { id: 2, imageUrl: '/assets/safaricom.png', imageAlt: 'Safaricom Logo', },
        { id: 3, imageUrl: '/assets/airtel-sy.png', imageAlt: 'Airtel Seychelles', },
        { id: 4, imageUrl: '/assets/kenchic.png', imageAlt: 'Kenchic Logo', },
        { id: 5, imageUrl: '/assets/equity.png', imageAlt: 'Equity Bank Logo', },
        { id: 6, imageUrl: '/assets/carrefour.png', imageAlt: 'Carrefour Logo', },
        { id: 7, imageUrl: '/assets/asilia.png', imageAlt: 'Asilia Logo', },
        { id: 8, imageUrl: '/assets/the-safari-collection.png', imageAlt: 'The Safari Collection Logo', },
    ]

    return (
        <div className="my-8 max-w-screen-xl mx-auto">
            <Marquee pauseOnHover gradient={false} speed={30}>
                <div className="flex items-center gap-x-6 md:gap-x-8 lg:gap-x-12 pr-4">
                    {clientLogos.map((client) =>
                        <div>
                            <img
                                key={client.imageUrl}
                                loading='lazy'
                                alt={client.imageAlt}
                                src={client.imageUrl}
                                className="block lg:hidden h-8 w-auto object-contain object-center"
                            />
                            <img
                                key={client.id}
                                loading='lazy'
                                src={client.imageUrl}
                                alt={client.imageAlt}
                                className="hidden lg:block h-16 w-auto object-contain object-center"
                            />
                        </div>
                    )}
                </div>
            </Marquee>

        </div>
    )
}
