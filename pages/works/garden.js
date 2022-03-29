import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Garden = () => {
    return(
        <Layout title="TimeCheck">
            <Container maxW='100%'>
                <Title>
                    Garden <Badge>In Progress</Badge>
                </Title>
                <Paragraph>
                    A smart contract built on Ethereum mainnet, which allows users to acquire our ERC20 tokens, and stake those tokens for a period of time, in return for monetary rewards.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta color='green'>Website</Meta>
                        <Link href='https://hedged.garden'>
                            https://hedged.garden <ExternalLinkIcon mx='2px'/>
                        </Link>
                        <ListItem>
                            <Meta color='orange'>Stack</Meta>
                            <span>NextJS, Python, Solidity, Brownie</span>
                        </ListItem>
                    </ListItem>
                </List>
                <WorkImage src='/garden.png' alt="Hedged Garden"/>
                <WorkImage src='/garden2.png' alt="Hedged Garden"/>
            </Container>
        </Layout>
    )
}

export default Garden;