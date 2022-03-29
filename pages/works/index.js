import {Container,  Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../../components/motion'
import {WorkGridItem } from "../../components/grid-item";
import Layout from '../../components/layouts/article'


const Works = () => {
    const timeCheck = '/timecheck.png'
    const card2me = './card2me.png'
    const intograd = './intograd.png'
    const garden = './garden.png'
    return(
        <Layout>
        <Container maxW='100%'>
            <Heading as='h3' fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id='timecheck' title="TimeCheck" thumbnail={timeCheck}>
                        A simple and clean timer, with multiple themes, cross-screen synchronization, built-in alert system, and password protection.
                    </WorkGridItem>

                </Section>
                <Section>
                    <WorkGridItem id='card2me' title="Cards-To-Me" thumbnail={card2me}>
                        Let a loved one know you&apos;re thinking of them by designing a custom E-card, using intuitive drag & drop interface, and sending it via link.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id='intograd' title="Intograd" thumbnail={intograd}>
                        A platform for postgraduate applicants (mentees) to connect with successful postgraduate students (mentors). Mentors are paired with mentees according to their specific needs and backgrounds. New signups are automatically sent a welcome email.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id='garden' title="Hedged Garden" thumbnail={garden}>
                        A smart contract built on Ethereum mainnet, which allows users to acquire our ERC20 tokens, and stake those tokens for a period of time, in return for monetary rewards.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works