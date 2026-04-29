"use client"
import Image from "next/image"
import H1 from "./typography/H1"
import PrimaryButton from "./PrimaryButton"
import { useRouter } from "next/navigation"
import Balancer from "react-wrap-balancer"

export default function Hero() {
  const router = useRouter()

  return (
    <div className='pt-8 w-full h-[500px] md:h-[450px] bg-gradient-to-r from-[#c11e38] to-[#220b34]'>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className='px-8 flex flex-col gap-y-5 justify-center'>
          <p className='px-3 py-0.5 w-fit text-xs font-normal bg-green-50 text-green-500 border border-green-500 rounded-full'>
            Government approved & compliant
          </p>

          <H1 className='text-white'>
            <Balancer>Boost your signal today with our Repeaters</Balancer>
          </H1>

          <p className='text-sm text-slate-200'>
            <Balancer>
              Start enjoying crystal-clear calls and lightning-fast data speeds
              indoors, no matter how thick your walls are.
            </Balancer>
          </p>

          <PrimaryButton onClick={() => router.push("/contact")}>
            Book Consultation
          </PrimaryButton>
        </div>

        <div className='px-8 flex justify-center'>
          <Image
            src='/assets/office-repeater.png'
            className='object-center object-contain'
            width={600}
            height={800}
            alt='Office repeater for boosting mobile signals in 5-15 rooms'
          />
        </div>
      </div>
    </div>
  )
}
