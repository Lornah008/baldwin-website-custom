"use client"
import Link from "next/link"
import { NavRoute } from "@/lib/types"
import { usePathname } from "next/navigation"
import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

export default function OfficeNavBar({ children }: any) {
  const navigation: NavRoute[] = [
    { id: 1, name: "Enquires", href: "/enquires" },
    { id: 2, name: "Articles", href: "/articles" },
  ]

  const pathname = usePathname()

  return (
    <Disclosure as='nav' className='bg-white shadow'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
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
                  <img
                    className='block lg:hidden h-10 w-auto object-contain object-center'
                    alt='Baldwin Enterprises Brand Logo'
                    src='/assets/baldwin-logo.png'
                    loading='eager'
                  />
                  <img
                    className='hidden lg:block h-12 w-auto object-contain object-center'
                    alt='Baldwin Enterprises Brand Logo'
                    src='/assets/baldwin-logo.png'
                    loading='eager'
                  />
                  <div className='flex items-center lg:hidden'>{children}</div>
                </div>
              </div>

              <div className='w-full hidden md:ml-6 lg:flex lg:justify-end md:space-x-8'>
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

                <div className='flex items-center'>{children}</div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='pt-2 pb-3 space-y-1'>
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
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
