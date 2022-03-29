import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Card2Me = () => {
    return(
        <Layout title="TimeCheck">
            <Container maxW='100%'>
                <Title>
                    Cards-To-Me <Badge>2022</Badge>
                </Title>
                <Paragraph>
                    A simple and clean timer, with multiple themes, cross-screen synchronization, built-in alert system, and password protection.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta color='green'>Website</Meta>
                        <Link href='https://cards-to-me.vercel.app'>
                            https://cards-to-me.vercel.app <ExternalLinkIcon mx='2px'/>
                        </Link>
                        <ListItem>
                            <Meta color='orange'>Stack</Meta>
                            <span>NextJS, DynamoDB, NodeJS, SemanticUI</span>
                        </ListItem>
                    </ListItem>
                </List>
                <WorkImage src='/card2me.png' alt="Cards-To-Me"/>
                <WorkImage src='/card2me2.png' alt="Cards-To-Me"/>
            </Container>
        </Layout>
    )
}

export default Card2Me;