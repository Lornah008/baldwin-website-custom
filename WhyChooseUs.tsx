import { Balancer } from "react-wrap-balancer"

interface reasons {
  id: number
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}

const reasons: reasons[] = [
  {
    id: 1,
    title: "Always Online",
    description:
      "Whether in the heart of a bustling city or deep in the savannah, we always provide fast and reliable signals.",
    imageUrl: "/assets/always-online.png",
    imageAlt: "Always Online Picture",
  },
  {
    id: 2,
    title: "Government Certified",
    description:
      "We are certified by the Communications Authority of Kenya(CA) and the Uganda Communications Commission(UCC).",
    imageUrl: "/assets/govt-approved.png",
    imageAlt: "Government Certified Picture",
  },
  {
    id: 3,
    title: "All Network Services",
    description:
      "We have partnered with Mobile Network Operators to provide all network services: 5G, 4G, 3G, 2G and GSM.",
    imageUrl: "/assets/all-signals.png",
    imageAlt: "All Network Services Picture",
  },
]

export default function WhyChooseUs() {
  return (
    <section className='px-4 py-8 md:p-8 lg:p-12 bg-fuchsia-50/80'>
      <div className="max-w-screen-xl mx-auto">
        <h2 className='text-2xl text-left md:text-center font-extrabold text-primary lg:text-3xl'>
          Why Choose Us?
        </h2>

        <div className='mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4'>
          {reasons.map((reason) => (
            <div key={reason.id} className='p-1 rounded-xl bg-white'>
              <img src={reason.imageUrl} alt={reason.imageAlt} loading='lazy' className="w-full object-cover" />
              <div className='p-4 space-y-1'>
                <h3 className='text-xl font-semibold text-gray-800'>
                  {reason.title}
                </h3>
                <p className='text-sm text-gray-500 leading-6'>
                  <Balancer>{reason.description}</Balancer>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
