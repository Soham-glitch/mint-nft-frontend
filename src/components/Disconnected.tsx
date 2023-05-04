import { FC, MouseEventHandler, useCallback} from 'react'
import {
    Button, Container, HStack, VStack, Heading, Text
} from '@chakra-ui/react'
import {useWalletModal}from '@solana/wallet-adapter-react-ui'
import {useWallet}from '@solana/wallet-adapter-react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const Disconnected:FC=()=>{
    const modalState=useWalletModal();
    const {wallet, connect}=useWallet();

    const handleClick: MouseEventHandler<HTMLButtonElement>=useCallback(
        (event)=>{
        if(event.defaultPrevented){ return }
        if(!wallet){
            modalState.setVisible(true)
        }else{
            connect().catch(()=>{})
        }

        },[wallet, connect, modalState]
    )
    return (
        <Container>
            <VStack spacing={20}>
                <Heading
                color={'white'}
                as={'h1'}
                size={'3x1'}
                noOfLines={2}
                textAlign={'center'}
                >
                    Mint your buildoor. Earn $BLD. Level upp!! 
                </Heading>
                <Button
                bgColor={'accent'}
                color={'purple'}
                maxW={"380 px"}
                onClick={handleClick}
                >
                    <HStack>
                        <Text>Become a mintorrr</Text>
                        <ArrowForwardIcon/>
                    </HStack>
                </Button>
            </VStack>
        </Container>
    )
}
export default Disconnected