import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const TimeCheck = () => {
    return(
        <Layout title="TimeCheck">
            <Container maxW='80%'>
                <Title>
                    TimeCheck <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    A simple and clean timer, with multiple themes, cross-screen synchronization, built-in alert system, and password protection.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta color='green'>Website</Meta>
                        <Link href='https://timecheck.vercel.app/'>
                            https://timecheck.vercel.app/ <ExternalLinkIcon mx='2px'/>
                        </Link>
                        <ListItem>
                            <Meta color='orange'>Stack</Meta>
                            <span>NextJS, DynamoDB, NodeJS, SemanticUI</span>
                        </ListItem>
                    </ListItem>
                </List>
                <WorkImage src='/timecheck.png' alt="TimeCheck"/>
                <WorkImage src='/timecheck2.png' alt="TimeCheck"/>
            </Container>
        </Layout>
    )
}

export default TimeCheck;