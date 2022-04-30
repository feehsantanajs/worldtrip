import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Flex, Image,Link } from '@chakra-ui/react';
export function Slider(){
    const slides = [];



    return(
        <Flex mt="52px" mb="52px"  alignItems="center" justifyContent="center">
            <Box w={['100%','100%',1240]}>
                <Swiper 
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    pagination={{ clickable: true }}
                    navigation
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide><Link href="./continent"><Image src='./assets/slide/img1.jpg'    h={['375px','375px','450px']} w={['100%','100%','1240px']} /></Link></SwiperSlide>
                    <SwiperSlide><Image src='./assets/slide/img2.jpg'    h={['375px','375px','450px']} w={['100%','100%','1240px']} /></SwiperSlide>
                    <SwiperSlide><Image src='./assets/slide/img3.jpg'    h={['375px','375px','450px']} w={['100%','100%','1240px']} /></SwiperSlide>
                    <SwiperSlide><Image src='./assets/slide/img4.jpg'    h={['375px','375px','450px']} w={['100%','100%','1240px']} /></SwiperSlide>
                </Swiper>
            </Box>
            
     
        </Flex>
    )
}