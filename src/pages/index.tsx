import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner/Banner'
import { Header } from '../components/Header/Header'
import { Slider } from '../components/Slider'
import { TravelTypes } from '../components/TravelTypes/TravelTypes'


const Home: NextPage = () => {
  return (
    <Flex 
    w="100vw" 
    h="100%"
    direction="column"
    >
      <Header />
      <Banner />
      <TravelTypes />

        
      <Flex       
      as={Box}    
      w={['100%','100%', '839px']}
      h={153}
      mt="80px"
      marginLeft="auto"
      marginRight="auto"
      justify="center"
      alignItems="end"
      fontSize={['20px','36px']}
      color="dark.300"
      >
      
        <VStack _before={{ 
          content: '" "', position: 'relative', left: '0', 
          top:'-50px', width:'90px', borderTop:'1px' 
        }}>
          <Text>Vamos nessa ?</Text>
          <Text>Então escolha seu continente</Text>
        </VStack >
      </Flex>
      <Slider />
    
    </Flex>  
  )
}
export default Home
