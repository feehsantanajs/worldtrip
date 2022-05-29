import { Flex, Text } from "@chakra-ui/react";
interface JumbotronProps{
    image:string;
    name:string;
}
export function Jumbotron({image,name}:JumbotronProps){
    return(
        <Flex
        backgroundImage={`url(${image})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        direction="column-reverse"
        justifyContent={["center", "flex-start"]}
        alignItems={["center", "flex-start"]}
        w="100%"
        h="500px"
        pl="8"
        pb="8"
        >
            <Text
            fontSize="48px"
            fontWeight="600"
            >
                {name}
            </Text>
        </Flex>
    )
}