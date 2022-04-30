import {  Flex, Text, Tooltip, VStack } from "@chakra-ui/react";
import { ItemInfo } from "./ItemInfo/ItemInfo";
import { InfoOutlineIcon} from '@chakra-ui/icons'
export function Info(){
    return(
        <Flex
        mt="80px"
        justify="space-between"
        
        flexDirection={['column','column','row']}
        >
             <Flex justify="center" alignItems="center" w={600}>
                <Text fontSize={24} color="dark.300">
                A Europa é, por convenção, um dos seis 
                continentes do mundo. Compreendendo a 
                península ocidental da Eurásia, a Europa 
                geralmente divide-se da Ásia a leste pela 
                divisória de águas dos montes Urais, o rio Ural, o 
                mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                </Text>
            </Flex>
            <Flex w={["100%","100%","490px"]} mt={['30px','30px','0']}justify={["space-between","space-between","space-around"]}  align={["left","left","center"]}>
                <ItemInfo type="países" number={50}/>
                <ItemInfo type="línguas" number={60}/>
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