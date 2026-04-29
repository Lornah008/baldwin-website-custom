import Image from "next/image"
import Paragraph from "./typography/Paragraph"
import { Balancer } from "react-wrap-balancer"

interface achievements {
    id: number,
    title: string,
    description: string
}

const achievements: achievements[] = [
    { id: 1, title: '7+', description: 'Years of experience' },
    { id: 2, title: '7+', description: 'Team members' },
    { id: 3, title: '100+', description: 'Clients' },
    { id: 4, title: '100+', description: 'Projects' },
]

export default function TrackRecord() {

    return (
        <section className="px-4 py-8 md:p-8 lg:p-12">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

                <h2 className="block md:hidden text-2xl font-extrabold text-primary sm:text-3xl">Our Track Record</h2>
                <div>
                    <Image className="rounded-2xl" width={600} height={1000} src="/assets/pexels-fauxels.jpg" alt="Picture from pexels.com" />
                </div>

                <div className="pl-4 md:pl-8 lg:pl-12 flex flex-col justify-center space-y-4">
                    <h2 className="hidden md:block md:text-2xl lg:text-3xl font-extrabold text-primary">Our Track Record</h2>

                    <Paragraph>
                        <Balancer>
                        We have a proven track record of delivering reliable and fast internet 
                        to homes, corporate offices and business enterprises, helping them to 
                        improve their productivity and efficiency. 
                        We help our clients design, 
                        implement, and manage their internet infrastructure. 
                        </Balancer>
                    </Paragraph>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-4">
                        {
                            achievements.map(achievement =>
                                <div key={achievement.id} className="flex flex-col justify-start py-2 px-4 border-l border-l-gray-500 space-y-1 md:space-y-2 ">
                                    <h3 className="text-start text-xl font-extrabold text-primary sm:text-3xl"> {achievement.title} </h3>
                                    <p className="text-sm text-gray-500"> {achievement.description} </p>
                                </div>
                            )
                        }
                    </div>

                </div>

            </div>

        </section>
    )
}