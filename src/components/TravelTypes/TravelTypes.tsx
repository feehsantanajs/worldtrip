import { Grid, GridItem, SimpleGrid  } from "@chakra-ui/react";
import { ItemTravelType } from "./ItemTravelType";
export function TravelTypes(){
    return(
           <Grid templateColumns={["1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]} 
           width="100%"
           justifyContent="space-between"
           alignItems="center"           
           mt="10"
           mx="auto"
           maxW="1160px"
           gap={[1, 5]}>
               <GridItem>
                    <ItemTravelType src="./assets/cocktail.svg" title="Vida noturna" />
               </GridItem>
               <GridItem>
                    <ItemTravelType src="./assets/surf.svg" title="Praia"/>
               </GridItem>
               <GridItem>
                    <ItemTravelType src="./assets/building.svg" title="Moderno"/>
 
               </GridItem>
               <GridItem>
                    <ItemTravelType src="./assets/museum.svg" title="clássico"/>
 
               </GridItem>
               <GridItem>
                    <ItemTravelType src="./assets/earth.svg" title="e mais..."/>    
               </GridItem>
                         
            </Grid>
      
    )
}