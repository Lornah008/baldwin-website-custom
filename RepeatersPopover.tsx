import Link from 'next/link'
import { Fragment } from 'react'
import { repeaters } from '@/lib/repeaters'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


export default function Repeaters() {
    return (
        <div className="px-0">
            <Menu as="div" className="relative">
                {({ open }) => (
                    <>
                        <Menu.Button
                            className={`
                            ${open ? 'text-primary' : 'text-opacity-90'}
                            group inline-flex items-center rounded-md bg-white py-2 text-base md:text-sm font-medium text-gray-500 md:text-gray-400 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span>Repeaters</span>
                            <ChevronDownIcon
                                className={`${open ? 'text-primary' : 'text-opacity-70'}
                                ml-2 h-5 w-5 text-gray-500 md:text-gray-400 group-hover:text-primary transition duration-150 ease-in-out group-hover:text-opacity-80`}
                                aria-hidden="true"
                            />
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Menu.Items className="absolute left-1/2 z-10 mt-3 w-screen max-w-full -translate-x-1/2 transform lg:max-w-4xl">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid grid-cols-1 gap-4 bg-white p-2 md:p-4 lg:grid-cols-3">
                                        <div>
                                            <p className="ml-4 p-2 text-sm font-medium text-gray-900">
                                                Home
                                            </p>
                                            {repeaters.filter(repeater => repeater.type === 'home').map((repeater) => (
                                                <Menu.Item key={repeater.id}>
                                                    {({ active }) => (
                                                        <Link
                                                            href={`/repeaters/${repeater.id}`}
                                                            className="mb-2 flex items-center rounded-lg p-2 text-gray-500 transition duration-150 ease-in-out hover:bg-fuchsia-50 hover:text-primary focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                        >
                                                            <div className="ml-4">
                                                                <p className="text-sm">
                                                                    {repeater.name}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>

                                        <div>
                                            <p className="ml-4 p-2 text-sm font-medium text-gray-900">
                                                Enterprise
                                            </p>
                                            {repeaters.filter(repeater => repeater.type === 'enterprise').map((repeater) => (
                                                <Menu.Item key={repeater.id}>
                                                    {({ active }) => (
                                                        <Link
                                                            href={`/repeaters/${repeater.id}`}
                                                            className="mb-2 flex items-center rounded-lg p-2 text-gray-500 transition duration-150 ease-in-out hover:bg-fuchsia-50 hover:text-primary focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                        >
                                                            <div className="ml-4">
                                                                <p className="text-sm">
                                                                    {repeater.name}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>

                                        <div>
                                            <p className="ml-4 p-2 text-sm font-medium text-gray-900">
                                                Marine and Vehicles
                                            </p>
                                            {repeaters.filter(repeater => repeater.type === 'marine and vehicles').map((repeater) => (
                                                <Menu.Item key={repeater.id}>
                                                    {({ active }) => (
                                                        <Link
                                                            href={`/repeaters/${repeater.id}`}
                                                            className="mb-2 flex items-center rounded-lg p-2 text-gray-500 transition duration-150 ease-in-out hover:bg-fuchsia-50 hover:text-primary focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                        >
                                                            <div className="ml-4">
                                                                <p className="text-sm">
                                                                    {repeater.name}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-4">
                                        <Link
                                            href="/blog"
                                            className="flow-root group rounded-md px-4 py-2 transition duration-150 ease-in-out hover:bg-fuchsia-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <span className="flex items-center">
                                                <span className="text-sm font-medium text-gray-900 group-hover:text-primary">
                                                    Blog Articles
                                                </span>
                                            </span>
                                            <span className="block text-sm text-gray-500 group-hover:text-gray-600">
                                                Check out our blog and get tips to boost your signals and maintain your repeaters.
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    )
}
