import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue} from "@chakra-ui/react"
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 100%;
    line-height:20px;
    padding: 10px;
    &:hover img{
    transform: rotate(20deg);

    }
    `

const Logo = () => {
    const logoImg = "/logo1.png"
    return(
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={logoImg} width={40} height={40} alt="Logo Image"/>
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                          fontFamily='M PLUS Rounded 1c'
                          fontWeight="bold"
                          ml={3}>Clinton Wee</Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo