import { Flex, Icon, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiArrowDropLeftLine } from 'react-icons/ri';
import { Logo } from "./Logo";

export function Header(){
    const { asPath } = useRouter();
    return(
      
        <Flex
        as="header"
        w='100%'
        h="100"
        justify="center"
        align="center"
        >
            {asPath !== "/" &&
                <Link href="/">
                    <Icon
                    as={RiArrowDropLeftLine}
                    fontSize={["25px", "36px"]}
                    color="gray.500"
                    position="absolute"
                    top={["15px", "30px"]}
                    left="20px"
                    cursor="pointer"
                    />
                     <Logo />
              </Link>
            }
           
        </Flex>
         
    );
}