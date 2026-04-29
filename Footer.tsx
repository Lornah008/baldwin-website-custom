'use client'
import Balancer from 'react-wrap-balancer'
import PrimaryButton from "./PrimaryButton"
import { useRouter } from 'next/navigation'

type SvgInHtml = any

const navigation = {
    product: [
        { id: 1, name: 'Repeaters', href: '#' },
        { id: 2, name: 'Services', href: '/services' },
        { id: 3, name: 'Projects', href: '/projects' },
    ],
    connect: [
        { id: 1, name: 'Blog', href: '/blog' },
        { id: 2, name: 'About Us', href: '/about' },
        { id: 3, name: 'Contact Us', href: '/contact' },
    ],
    social: [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/people/Baldwin-Enterprises/100063841064330/',
            icon: (props: SvgInHtml) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/baldwin_ent',
            icon: (props: SvgInHtml) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://ke.linkedin.com/company/baldwin-enterprises-limited',
            icon: (props: SvgInHtml) => (
                <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
            ),
        },
    ],
}

export default function Footer() {

    const router = useRouter()
  
    function bookConsultation() {
  
      router.push('/contact')
    }

    const date = new Date()
    const currentYear = date.getFullYear()
    return (
        <footer className="bg-[#450c0d]" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="max-w-screen-xl mx-auto pt-12 px-4 sm:px-6 lg:pt-16 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="mt-8 xl:mt-0 md:col-span-2">
                        <h3 className="text-xl font-semibold text-gray-100 tracking-wide normal-case">
                            <Balancer>Let&#39;s get started on something great</Balancer>
                        </h3>
                        <p className="mt-4 text-base text-gray-300">
                            <Balancer>Join over 100+ happy clients already connected with Baldwin.</Balancer>
                        </p>
                        <div className="mt-4 mb-12 md:mb-0 rounded-md sm:flex-shrink-0">
                            <PrimaryButton onClick={() => bookConsultation()}>Book Consultation</PrimaryButton>
                        </div>
                    </div>


                    <div className="md:grid md:grid-cols-2 md:gap-8 mt-4 xl:mt-0">
                        <div>
                            <h3 className="text-sm font-medium text-gray-200 capitalize">Product</h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {navigation.product.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-base text-gray-300 hover:text-white">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-medium text-gray-200 capitalize">Connect</h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {navigation.connect.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-base text-gray-300 hover:text-white">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>



                </div>
                <div className="my-8 border-t border-secondary pt-8 md:flex md:items-center md:justify-between">
                    <p className="text-xs text-secondary">
                        &copy; {currentYear} Baldwin Enterprises. All rights reserved.
                    </p>
                    <div className="mt-8 md:mt-0 flex flex-col md:flex-row justify-center items-center space-x-6">

                        <p className="text-xs text-secondary">
                            +254 707 408 000
                        </p>

                        <a href="mailto:info@baldwin.enterprises" target="_blank" className=" text-xs text-secondary hover:text-white">
                            <span>info@baldwin.enterprises</span>
                        </a>

                        <div className='flex justify-center items-center gap-x-4 mt-4 md:mt-0'>
                            {navigation.social.map((item) => (
                                <a key={item.name} href={item.href} target="_blank" className="flex justify-center items-center text-secondary hover:text-white">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}