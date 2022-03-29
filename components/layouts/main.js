import {Box, Container} from "@chakra-ui/react";
import Head from "next/head";
import Navbar from '../navbar';
// import VoxelDog from '../voxel-dog'
// import NoSsr from '../no-ssr'

export default function Main({children, router}) {
    return(
    <Box as='main' pb={8}>
        <Head>
            <title>Clinton Wee</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/logo1.png"/>
        </Head>
        <Navbar path={router.asPath}/>
        <Container maxW={{base:"95%", md:"80%"}} pt={20}>
            {/*<NoSsr>*/}
            {/*<VoxelDog/>*/}
            {/*</NoSsr>*/}
            {children}
        </Container>
    </Box>
    )
}