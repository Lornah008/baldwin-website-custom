import { Balancer } from "react-wrap-balancer"
import Link from "next/link"
import { Button } from "./ui/button"

export default function CorePartnerShip() {
  return (
    <section className='px-4 py-8 md:p-8 lg:p-12 bg-fuchsia-50/80'>
      <div className="max-w-screen-xl mx-auto flex flex-col md:items-center">
        <h2 className='md:text-center text-2xl font-extrabold text-primary lg:text-3xl'>
          Our Core Partnership <br className='block md:hidden' />
          With Stella Doradus
        </h2>

        <div className='mt-4 md:mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8'>
          <div className='lg:col-span-3 flex justify-center'>
            <iframe
              className='w-full aspect-video rounded-xl'
              src='https://www.youtube.com/embed/XINYGsNs5aA'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>

          <div className='lg:col-span-2 flex flex-col justify-center'>
            <h3 className='text-lg lg:text-xl font-semibold text-gray-800 leading-7'>
              <Balancer>
                We partner with Stella Doradus to bring you high-performance mobile signal repeaters built with cutting-edge European technology. The result? Clearer calls, faster data speeds, and consistent signal strength, even in low-coverage areas.
              </Balancer>
            </h3>

            <div className='mt-4 lg:mt-6 text-base text-gray-500 space-y-2'>
              {[
                "Fully licensed and regulation-compliant solutions",
                "Skilled technical specialists you can trust",
                "10+ years of hands-on industry experience",
                "Access to premium-grade mobile signal repeater systems",
                "Proven performance in residential and commercial environments"
              ].map((item, index) => (
                <div key={index} className='flex items-center gap-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='1em'
                    height='1em'
                    viewBox='0 0 16 16'
                    className="text-primary flex-shrink-0"
                  >
                    <path
                      fill='currentColor'
                      d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z'
                    ></path>
                  </svg>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="https://www.stelladoradus.com/" target="_blank">
                <Button size="lg" className="w-full md:w-auto">
                  Explore Stella Doradus Technology
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
