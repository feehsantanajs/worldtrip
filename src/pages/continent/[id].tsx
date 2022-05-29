import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { Jumbotron } from "../../components/Jumbotron/Jumbotron";

import db from '../../../db.json';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Info } from "../../components/Info/Info";
import { City100 } from "../../components/City100/City100";

export interface Country {
    id: number;
    image: string;
    name: string;
    capital: string;
    flag: string;
  }

interface ContinentProps {
    id: number;
    name: string;
    description: string;
    text: string;
    numberOfCountries: number;
    numberOfLanguages: number;
    jumbotronImage: string;
    carrouselImage: string;
    countries: Country[];
  }
export default function Continent(){

    const { continents } = db;
    const router = useRouter();
    const [continent, setContinent] = useState<ContinentProps | undefined>(undefined);

    const {id} = router.query;
    
    useEffect(() => {
        const selectedContinent = continents.find(
          continent => continent.id === Number(id)
        )
        setContinent(selectedContinent);
      }, [id])

    return(
        <Flex 
        w="100%"
        justifyContent="center"
        direction="column"
        alignItems="center"
        >
            <Header />
            {continent &&
                <Jumbotron image={continent.jumbotronImage}  name={continent.name} />
                
            }
            {continent &&
            <Info  
            text={continent.text}
            numberOfCountries={continent.numberOfCountries}
            numberOfLanguages={continent.numberOfLanguages}
            />
            }
            
            {continent &&
            <City100  
              countries={continent.countries}
            />
            }
        </Flex>
    )
}