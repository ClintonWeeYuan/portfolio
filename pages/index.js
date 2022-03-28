import {
    Box,
    Button,
    Container,
    Heading,
    Image,
    Link,
    List,
    ListItem,
    Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger,
    useColorModeValue,
} from '@chakra-ui/react'
import Section from '../components/motion'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import {ChevronRightIcon} from "@chakra-ui/icons";
import Layout from '../components/layouts/article'
import {BioSection, BioYear} from "../components/bio";
import {Meta} from '../components/work'

export default function Home() {
    return (
        <Layout>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center">
                    Hello! I&apos;m a full-stack developer based in Singapore!
                </Box>
                <Box display={{md: "flex"}}>
                    <Box mt={2} flexGrow={1}>
                        <Heading as="h2" variant="page-title">Clinton Wee</Heading>
                        <p>Digital Enthusiast</p>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align='center'>
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px"
                               display="inline-block" borderRadius="full" src="/profile2.jpeg" alt="Profile Image"/>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>Riddle me this. I build contracts on blockchains, not on paper. I deliver arguments in functions, not in court. The only client I serve lives on the browser. What am I? </Paragraph>
                    <Box display="flex" justifyContent="flex-end" >
                    <Popover mt={2}>
                        <PopoverTrigger>
                            <Button>Answer</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>A law student gone rogue</PopoverBody>
                        </PopoverContent>

                    </Popover>
                    </Box>
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
                        <BioYear>2016</BioYear>
                        Awarded Top in the World for Maths in Cambridge AS Level
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Graduated from the University of Cambridge
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Working as an Analyst at NCS, a Singaporean Tech Company
                    </BioSection>
                </Section>

                <Section delay={0.7}>
                    <Heading as='h3' variant='section-title'>
                        Programming Knowledge
                    </Heading>
                    <List>
                        <ListItem>
                            <span>Languages: </span>
                            <Meta color='green'>Javascript</Meta>
                            <Meta color='green'>Typescript</Meta>
                            <Meta color='green'>Python</Meta>
                            <Meta color='green'>Solidity</Meta>
                        </ListItem>
                        <ListItem>
                            <span>Frameworks: </span>
                            <Meta color='pink'>ReactJS</Meta>
                            <Meta color='pink'>NextJS</Meta>
                        </ListItem>
                        <ListItem>
                            <span>BE & Database: </span>
                            <Meta color='blue'>NodeJS</Meta>
                            <Meta color='blue'>ExpressJS</Meta>
                            <Meta color='blue'>DynamoDB</Meta>
                            <Meta color='blue'>MongoDB</Meta>
                        </ListItem>
                    </List>
                </Section>

                <Section delay={1.0}>
                    <Heading as='h3' variant='section-title'>
                        My Interests
                    </Heading>
                    <Paragraph>Programming, Badminton, Debating, Cooking, Dota 2</Paragraph>
                </Section>
        </Layout>
    )
}

