import { Box, Flex, Text } from "@chakra-ui/react";

interface ItemInfoProps{
    number:number;
    type:string;
}
export function ItemInfo({number,type}:ItemInfoProps){
    return(
        <Box as={Flex} flexDirection="column" justifyContent="center"  alignItems="center">
            <Text fontSize={50} color="highlight.100">{number}</Text>
            <Text fontSize={24} color="dark.300" fontWeight="600">
                {type}    
            </Text>
        </Box>
    )
}