import { Flex, HStack, Stack, VStack } from "@chakra-ui/react";
import { BannerContinent } from "../components/BannerContinent/BannerContinent";
import { City100 } from "../components/City100";
import { Header } from "../components/Header/Header";
import { Info } from "../components/Info/Info";

export default function Continent(){
    return(
    <Flex 
    w="100vw" 
    h="100%"
    direction="column"
    >
        <Header />
        <BannerContinent />
        <Flex 
        w={['90%','90%%', '1160px']}
        h={["100%","100%","211px"]}
        flexDirection="column"
        marginLeft="auto"
        marginRight="auto"
        >
        <Stack spacing="80px">
            <Info />
            <City100 />
        </Stack>
           
        </Flex>
    </Flex>
    );
}