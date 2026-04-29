"use client"
import Link from "next/link"
import { NavRoute } from "@/lib/types"
import PrimaryButton from "./PrimaryButton"
import { Disclosure } from "@headlessui/react"
import RepeatersPopover from "./RepeatersPopover"
import { usePathname, useRouter } from "next/navigation"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

export default function NavBar() {
  const navigation: NavRoute[] = [
    { id: 1, name: "Services", href: "/services" },
    { id: 2, name: "Projects", href: "/projects" },
    { id: 3, name: "Blog", href: "/blog" },
    { id: 4, name: "About Us", href: "/about" },
    { id: 5, name: "Contact", href: "/contact" },
  ]

  const router = useRouter()

  function bookConsultation() {
    router.push("/contact")
  }

  const pathname = usePathname()

  return (
    <Disclosure
      as='nav'
      className='bg-white shadow-none border-b border-gray-100'
    >
      {({ open }) => (
        <>
          <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='w-full lg:w-fit flex'>
                <div className='-ml-2 mr-2 flex items-center lg:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='w-full flex items-center justify-between'>
                  <Link href='/'>
                    <img
                      className='block lg:hidden h-10 w-auto object-contain object-center'
                      alt='Baldwin Enterprises Brand Logo'
                      src='/assets/baldwin-logo.png'
                      loading='eager'
                    />
                  </Link>

                  <Link href='/'>
                    <img
                      className='hidden lg:block h-12 w-auto object-contain object-center'
                      alt='Baldwin Enterprises Brand Logo'
                      src='/assets/baldwin-logo.png'
                      loading='eager'
                    />
                  </Link>

                  <div className='flex items-center lg:hidden'>
                    <PrimaryButton onClick={() => bookConsultation()}>
                      Book Consultation
                    </PrimaryButton>
                  </div>
                </div>
              </div>

              <div className='w-full hidden md:ml-6 lg:flex lg:justify-end md:space-x-8'>
                <Link
                  href='/'
                  className={
                    pathname === "/"
                      ? "border-primary text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      : "border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  }
                >
                  Home
                </Link>

                <div className='flex items-center justify-center'>
                  <RepeatersPopover />
                </div>

                {navigation.map((nav) => {
                  const isActive = pathname.startsWith(nav.href)

                  return (
                    <Link
                      href={nav.href}
                      key={nav.id}
                      className={
                        isActive
                          ? "border-primary text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                          : "border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      }
                    >
                      {nav.name}
                    </Link>
                  )
                })}

                <div className='flex items-center'>
                  <PrimaryButton onClick={() => bookConsultation()}>
                    Book Consultation
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='pt-2 pb-3 space-y-1'>
              <Disclosure.Button
                as='a'
                href='/'
                className={
                  pathname === "/"
                    ? "bg-secondary border-primary text-primary block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                }
              >
                Home
              </Disclosure.Button>

              <div className='pl-4'>
                <RepeatersPopover />
              </div>

              {navigation.map((nav) => {
                const isActive = pathname.startsWith(nav.href)

                return (
                  <Disclosure.Button
                    as='a'
                    href={nav.href}
                    key={nav.id}
                    className={
                      isActive
                        ? "bg-secondary border-primary text-primary block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                    }
                  >
                    {nav.name}
                  </Disclosure.Button>
                )
              })}
            </div>
            <div className='pt-4 pb-3 border-t border-gray-200'>
              <div className='flex items-center px-4'>
                <PrimaryButton onClick={() => bookConsultation()}>
                  Book Consultation
                </PrimaryButton>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
