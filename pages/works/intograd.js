import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Intograd = () => {
    return(
        <Layout title="TimeCheck">
            <Container maxW='100%'>
                <Title>
                    Intograd <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    A platform for postgraduate applicants (mentees) to connect with successful postgraduate students (mentors). Mentors are paired with mentees according to their specific needs and backgrounds. New signups are automatically sent a welcome email.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta color='green'>Website</Meta>
                        <Link href='https://www.intograd.org/'>
                            https://www.intograd.org <ExternalLinkIcon mx='2px'/>
                        </Link>
                        <ListItem>
                            <Meta color='orange'>Stack</Meta>
                            <span>ReactJS, MongoDB, NodeJS</span>
                        </ListItem>
                    </ListItem>
                </List>
                <WorkImage src='/intograd.png' alt="Intograd"/>
                <WorkImage src='/intograd2.png' alt="Intograd"/>
            </Container>
        </Layout>
    )
}

export default Intograd;