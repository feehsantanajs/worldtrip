import { Flex, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { BoxItem } from "./BoxItem";
import {Country} from './types'
interface City100Props{
    countries: Country[];
}
export function City100({countries}:City100Props){
    return(
        <Flex 
        flexDirection={["column"]} 
        w="100%" maxW={1160} h={700} 
        mt="16"
        mb="8"
        px="8"
        
        >
        <Text color="dark.300" fontSize="36">Cidades +100 </Text>
        <SimpleGrid as="ul" mt={10} minChildWidth="256px" spacing="45px">
            {countries.map(country =>(
                    <BoxItem bannertype={country.image} imagetype={country.flag} title={country.name} subtitle={country.capital}/>
            
            ))}
        </SimpleGrid>
        
        </Flex>
    )
}