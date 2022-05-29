import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SliderItemProps{
    id:number;
    name:string;
    image:string;
    description:string;
}

export function SliderItem({id,name,image,description}:SliderItemProps){
    return(

    <Link href={`continent/${id}`}>
      <Flex
        backgroundImage={`url(${image})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        cursor="pointer"
        w="100%"
        h={["250px", "450px"]}>
        <Flex
          justifyContent="center"
          alignItems="center"
          direction="column"
          w="100%"
        >
          <Text fontWeight="600" fontSize={["24px", "48px"]}>{name}</Text>
          <Text fontWeight="500" fontSize={["14px", "24px"]}>{description}</Text>
        </Flex>
      </Flex>
    </Link>
    );
}