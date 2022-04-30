import { Flex } from "@chakra-ui/react";

export function BannerContinent(){
    return(
        <Flex
        h={500}
        width="100vw"
        justify="center"
       
        >
            <Flex 
            backgroundImage="url('./assets/banner/londonbanner.png')"
            bgRepeat="no-repeat" 
            bgSize="cover" 
            
            w={['100%',"1440px"]}
            justify="center"
            alignItems="center"
            >

            </Flex> 
        </Flex>
    )
}