import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

export default function Slideshow() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/photos/drone-point-view-of-overpass-and-city-traffic-at-night-picture-id1360535828?s=612x612" alt="pic 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/photos/pastel-colored-pumpkins-with-light-gray-background-for-thanksgiving-picture-id1344866269?s=612x612" alt="pic 2"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/photos/overpass-and-city-traffic-at-night-picture-id1393629219?s=612x612" alt="pic 3"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/photos/white-and-orange-pumpkin-picture-id860234742?s=612x612" alt="pic 4"/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
