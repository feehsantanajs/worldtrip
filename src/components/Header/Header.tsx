import { Flex, Image } from "@chakra-ui/react";

export function Header(){
    return(
      
        <Flex
        as="header"
        w='100%'
        h="100"
        justify="center"
        align="center"
        >
        
            <Image src="./assets/Logo.svg" alt='Worldtrip'  />
        
        </Flex>
         
    );
}