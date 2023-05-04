import Head from 'next/head'
import { NextPage } from 'next'
import { Box, Center, Spacer, Stack} from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Disconnected from '@/components/Disconnected'
import {useWallet}from '@solana/wallet-adapter-react'
import Connected from '@/components/Connected'
const Home:NextPage=()=> {
  const {connected}=useWallet(); //it will tell us whether or not we are connected

  return (
    <div className={styles.container}>
      <Head>
        <title>Mintorrrs</title>
        <meta name='the NFT collections for lads' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        w="full"
        h="calc(100vh)"
        bgImage={connected ? "" :"url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
					{ /* NavBar */ }
          <NavBar/>
          <Spacer />
          <Center>{connected ? <Connected/> : <Disconnected/>}</Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/_buildspace"
                target="_blank"
                rel="noopener noreferrer"
              >
                built with @_buildspace
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}
export default Home;