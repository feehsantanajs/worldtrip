import { Box, Divider, Flex, HStack, Image, Stack, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

export function Banner(){

    const isWideVersion = useBreakpointValue({
        base:false,
        lg:true,
    })

    return(
        <Flex
        h={368.21}
        width="100vw"
        >
            <Flex 
            backgroundImage="url('./assets/Background.svg')" 
            bgRepeat="no-repeat" 
            bgSize="cover" 
            h={335} 
            w="100vw"
            justify="center"
            alignItems="center"
            >
               
                    <HStack spacing={200} >
                        <Box minWidth={524}>
                            <Stack>
                                <Text fontWeight="medium" fontSize={["xl", "2xl", "2xl", "4xl"]} lineHeight="1.5">
                                    5 Continentes,<Divider  as="br" />
                                    infinitas possibilidades. 
                                </Text>  
                                <Text fontWeight="medium" fontSize={["0.8rem", "xl"]} lineHeight="1.5">
                                    Chegou a hora de tirar do papel a viagem que<Divider  as="br" /> você sempre sonhou.  
                                </Text>  
                            </Stack>      
                        </Box>    
                        <Box position="relative"  top={16} display={["none", "none", "block"]}>
                            <Image src="./assets/Airplane.svg"  w={["300", "300", "430"]} minH={270} alt="airplane" />
                        </Box>   
                    </HStack>
            </Flex> 
        </Flex>
    );
}