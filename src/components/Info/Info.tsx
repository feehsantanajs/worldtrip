import {  Flex, Text, Tooltip, VStack } from "@chakra-ui/react";

import { InfoOutlineIcon} from '@chakra-ui/icons'
import { ItemInfo } from "./ItemInfo";
interface InfoProps{
    text:string;
    numberOfCountries:number;
    numberOfLanguages:number;
}
export function Info({text,numberOfCountries,numberOfLanguages}:InfoProps){
    return(
        <Flex
        mt="80px"
        justify="space-between"
        
        flexDirection={['column','column','row']}
        >
             <Flex justify="center" alignItems="center" w={600}>
                <Text fontSize={24} color="dark.300">
                {text}
                </Text>
            </Flex>
            <Flex w={["100%","100%","490px"]} mt={['30px','30px','0']}justify={["space-between","space-between","space-around"]}  align={["left","left","center"]}>
                <ItemInfo type="países" number={numberOfCountries}/>
                <ItemInfo type="línguas" number={numberOfLanguages}/>
                <Flex width="186px" justify="space-between">                    
                        <ItemInfo type="cidades +100" number={27}/> 
                        <Flex position="relative" top="85px" >                                     
                            <Tooltip hasArrow label='Info' bg='gray.300' color='black' >
                                <InfoOutlineIcon  color="dark.300"/> 
                            </Tooltip>   
                        </Flex>                  
                </Flex>
            </Flex>
        </Flex>  
        
    )
}