"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        id: 1,
        question: "What is a signal booster?",
        answer: "A signal booster is a device that amplifies and improves cellular signal strength in areas with weak or no coverage.",
    },
    {
        id: 2,
        question: "How does a signal booster work?",
        answer: "A signal booster works by capturing the weak cellular signal from cell towers outside, amplifying it, and rebroadcasting it inside your home, office, factory, or vehicle to provide improved coverage and signal strength.",
    },
    {
        id: 3,
        question: "Why do I need a signal booster?",
        answer: "You may need a signal booster if you live or work in an area with weak or no cellular coverage. It may also be necessary if you frequently experience dropped calls, slow data speeds, or poor call quality.",
    },
    {
        id: 4,
        question: "How do I know which signal booster is the best for me?",
        answer: "The best signal booster for you depends on the area of coverage you are looking for and the type of network service required i.e., 5G, 4G, 3G, 2G and GSM. Thus, we have different signal booster solutions for different applications:",
        children: [
            { id: 1, child: "Home Repeaters to boost coverage for 4 to 5 rooms." },
            { id: 2, child: "Office & Enterprise Repeaters for businesses of varying sizes." },
            { id: 3, child: "Vehicle & Marine Repeaters for businesses that are on the move, whether on land or sea." },
        ]
    },
    {
        id: 5,
        question: "What causes signal issues in rural areas?",
        answer: "Signal problems in rural areas are a result of several issues that relate to the strength of the connection and the terrain:",
        children: [
            { id: 1, child: "Use of location-dependent 3G/4G mobile connection technology." },
            { id: 2, child: "Far distances from cell towers." },
            { id: 3, child: "Base stations are far apart because of the sparsely populated." },
            { id: 4, child: "Vegetation cover, like thick forests." },
            { id: 5, child: "Natural physical obstructions, like hills and mountains." },
        ]
    },
    {
        id: 6,
        question: "What are the causes of signal issues in urban areas?",
        answer: "Despite urban areas being modernised and optimised to support strong internet connections, you will still find some buildings or sections in buildings with poor connectivity. These normally include:",
        children: [
            { id: 1, child: "Basement areas, which have no signals because they are below ground level where there no clear line of site to cell towers." },
            { id: 2, child: "In tall buildings with more than 10 floors the top floors are affected because base station antennas only send signal up to 30 metres above ground." },
            { id: 3, child: "Certain type of building materials deflect signal, such as glass and concrete." },
            { id: 4, child: "Shadowing of buildings by other structures from the base station." },
        ]
    },
    {
        id: 7,
        question: "How to avoid signal issues?",
        answer: "Signal issues are a common problem in many rural and urban areas of Africa. You can boost insufficient mobile signal coverage to improve data speeds and call quality by having a signal booster installed.",
    },
    {
        id: 8,
        question: "Do you provide signal boosters for all operators?",
        answer: "Yes, our repeaters are designed to work with any mobile network operators.",
    },
    {
        id: 9,
        question: "Is a signal booster installation legal?",
        answer: "Only network safe and approved boosters are legal.",
    },
    {
        id: 10,
        question: "Can I install a signal booster myself?",
        answer: "While it is possible to install a signal booster yourself, we highly recommend hiring a professional installation service, like Baldwin Enterprises, to guarantee proper installation and compliance with regulatory requirements.",
    },
    {
        id: 11,
        question: "How long does it take to install a signal booster?",
        answer: "The installation time for signal boosters varies depending on the complexity of the environment, but it typically takes a few hours to a few days to complete.",
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function FAQs() {
    return (
        <div className="bg-gray-50">
            <div className="px-4 py-8 md:p-8 lg:p-12">
                <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                    <h2 className="md:text-center text-2xl font-extrabold text-primary sm:text-3xl">Frequently Asked Questions</h2>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.id} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg">
                                            <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                                <span className="font-medium text-gray-900">{faq.question}</span>
                                                <span className="ml-6 h-7 flex items-center">
                                                    <ChevronDownIcon
                                                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base text-gray-500">{faq.answer}</p>
                                            {
                                                faq.children && faq.children.map(child =>
                                                    <ul key={child.id}>
                                                        <li className='mt-2 ml-4 flex gap-x-2 items-center text-base text-gray-500'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                                                                <path fill="currentColor" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                                                            </svg>
                                                            <span className='w-fit'>{child.child}</span>
                                                        </li>
                                                    </ul>
                                                )
                                            }
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}