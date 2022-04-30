import {Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface ItemTravelTypeProps{
    src:string;
    title: string;
}

export function ItemTravelType({src,title}:ItemTravelTypeProps){
    const isWideVersion = useBreakpointValue({
        base: false,
        md:true,
        sm: false,
      })
    return(
        <Flex flexDirection={["row","row", "column"]} justifyContent="center" alignItems="center" color="dark.300" fontWeight={600}>
        
                {isWideVersion ?
                 <Image src={src} />
                 :
                 <Text color="yellow.500" fontSize={["md", "xl", "2xl"]} mr="2">•</Text>
                }
                
                <Text>{title}</Text>  
       
        </Flex>
    )
}