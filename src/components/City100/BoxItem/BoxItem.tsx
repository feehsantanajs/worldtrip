import { Box, Flex, Image, Text } from "@chakra-ui/react";
interface BoxItemProps{
    bannertype:string,
    title:string,
    subtitle:string,
    imagetype:string
}

export function BoxItem({bannertype,title,subtitle,imagetype}:BoxItemProps){
    return(
        <Flex 
        w="256px" 
        h="279px" 
        border="1px" 
        borderColor='highlight.100'
        flexFlow="column"
        borderRadius={4}
        >
            <Flex flexGrow={0} flexBasis="auto">
                <Image src={bannertype} alt='ImageLondon'/>
            </Flex>
            <Flex justifyContent="space-around" align="center"  flexBasis="100%" bg="light.100">                       
                    <Box>
                        <Text fontSize="20px" fontWeight="600" color="dark.300">{title}</Text>
                        <Text fontSize="16px" color="dark.200">{subtitle}o</Text>
                    </Box>
                    <Box >
                        <Image src={imagetype} alt='ellipse'/>                           
                    </Box>                     
            </Flex>
            
        </Flex>
    )
}