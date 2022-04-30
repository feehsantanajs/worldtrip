import { Box, Flex, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { BoxItem } from "./BoxItem/BoxItem";

export function City100(){
    return(
        <Flex flexDirection={["column"]} h={700} >
            <Stack spacing="40px">
                <Text color="dark.300" fontSize="36">Cidades +100 </Text>
                <Flex justifyContent="space-between" flexWrap="wrap" flexGrow={3} rowGap={10}>
                    
                    <BoxItem bannertype="./assets/box/Foto.svg" imagetype="./assets/box/ellipse/Ellipse 6.svg" title="London" subtitle="Reino Unido"/>
                    <BoxItem bannertype="./assets/box/Foto (1).svg" imagetype="./assets/box/ellipse/Ellipse 6 (1).svg" title="London" subtitle="Reino Unido"/>
                    <BoxItem bannertype="./assets/box/Foto (2).svg" imagetype="./assets/box/ellipse/Ellipse 6 (2).svg" title="London" subtitle="Reino Unido"/>
                    <BoxItem bannertype="./assets/box/Foto (3).svg" imagetype="./assets/box/ellipse/Ellipse 6 (3).svg" title="London" subtitle="Reino Unido"/>
                    <BoxItem bannertype="./assets/box/Foto (4).svg" imagetype="./assets/box/ellipse/Ellipse 6 (4).svg" title="London" subtitle="Reino Unido"/>
                    
                </Flex>
            </Stack>
            
        </Flex>
    )
}