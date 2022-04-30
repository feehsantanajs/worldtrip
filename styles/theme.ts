import { extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
    colors:{
      dark:{
        '200':'#999999' ,
        '300':'#47585B',
        '999':'#000000' ,

      },
      light:{
        '50':'#ffffff',
        '100':'#F5F8FA', 
        '200':'#DADADA', 
      },
      highlight:{
        '50':'#ffb9086',
        '100':'#FFBA08',
      }
    },
    fonts:{
        heading:'Poppins',
        body: 'Poppins',
    },
    styles:{
        global:{
            body:{
                bg:'light.200',
                color:'gray.50'
            }
        }
    }
})