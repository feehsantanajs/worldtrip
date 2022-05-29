import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Flex } from '@chakra-ui/react';
import { SliderItem } from './SliderItem';

interface Continent {
    id: number;
    name: string;
    description: string;
    carrouselImage: string;
}
interface SliderProps {
    continents: Continent[];
}

export function Slider({ continents }: SliderProps) {

    return (
    <Flex w="100vw"
    justifyContent="center"
    alignItems="center"
    >
        <Flex
        maxW="1240px"
        w={["100%","100%","1240px"]}
        justifyContent="center"
        alignItems="center"
        mb="8"
        >
           <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
                {continents.map(continent => ( 
                <SwiperSlide key={`slide-${continent.id}`}>
                    <SliderItem 
                    id={continent.id}
                    name={continent.name}
                    image={continent.carrouselImage}
                    description={continent.description}
                    />
                </SwiperSlide> ))}
            </Swiper>
        </Flex>
    </Flex>
    )
}