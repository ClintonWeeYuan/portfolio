import {Container,  Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/motion'
import {WorkGridItem } from "../components/grid-item";
import Layout from '../components/layouts/article'


const Works = () => {
    const timeCheck = '/timecheck.png'
    const card2me = './card2me.png'
    return(
        <Layout>
        <Container>
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
                    <WorkGridItem id='Card2Me' title="Card2Me" thumbnail={card2me}>
                        Let a loved one know you&apos;re thinking of them by designing a custom E-card, using intuitive drag & drop interface, and sending it via link.
                    </WorkGridItem>

                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works