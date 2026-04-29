import * as React from 'react'
import { Body, Container, Head, Heading, Hr, Html, Preview, Tailwind, Text } from '@react-email/components'

interface ContactFormEmailProps {
    firstName: string
    lastName: string
    message: string
    emailAddress: string
}

export const ContactFromEmailTemplate: React.FC<Readonly< ContactFormEmailProps>> = 

    ({firstName , lastName , message , emailAddress }) => {

    return (
        <Html>
            <Head />
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">

                        <Text className="text-slate-800 text-[14px] leading-[24px]">
                            {message},
                        </Text>

                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            This email was sent by {' '}
                            <span className="text-black">{firstName} </span>
                            {' '}
                            <span className="text-black">{lastName}</span>.
                            {' '} from
                            <span className="text-black">{emailAddress} </span>
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default ContactFromEmailTemplate