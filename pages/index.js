import {Box, Button, Container, Heading, Image, Link, useColorModeValue,} from '@chakra-ui/react'
import Section from '../components/motion'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import {ChevronRightIcon} from "@chakra-ui/icons";
import Layout from '../components/layouts/article'
import {BioSection, BioYear} from "../components/bio";

export default function Home() {
    return (
        <Layout>

            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center">
                    Hello! I&apos;m a full-stack developer based in Singapore!
                </Box>
                <Box display={{md: "flex"}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">Clinton Wee</Heading>
                        <p>Digital Enthusiast</p>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align='center'>
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px"
                               display="inline-block" borderRadius="full" src="/clinton.jpg" alt="Profile Image"/>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>Clinton is a freelance full stack developer with a passion for building digital services
                        that
                        make life easier for anyone and everyone.</Paragraph>
                    <NextLink href="/works/inkdrop"><Link>Inkdrop</Link></NextLink>
                    <Box align='center' my={4}>
                        <NextLink href="/works"><Button rightIcon={<ChevronRightIcon/>} colorScheme='teal'>My
                            Portfolio</Button></NextLink>
                    </Box>

                </Section>
                <Section delay={0.4}><Heading as='h3' variant='section-title'>
                    Bio
                </Heading>
                    <BioSection>
                        <BioYear>1997</BioYear>
                        Born in Sarawak, Malaysia.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Graduated from the University of Cambridge
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Working as an Analyst at NCS, a Singaporean Tech Firm
                    </BioSection>
                </Section>

                <Section delay={0.7}>
                    <Heading as='h3' variant='section-title'>
                        My Interests
                    </Heading>
                    <Paragraph>Programming, Badminton, Hiking, Cooking, Dota2</Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

