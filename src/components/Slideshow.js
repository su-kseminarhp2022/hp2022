import pic1 from "../img/1.jpg";
import pic2 from "../img/2.jpg";
import pic3 from "../img/3.jpg";
import pic4 from "../img/4.jpg";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.scss";
import {Lazy, Pagination, Navigation, Autoplay} from "swiper";

export default function Slideshow() {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-pagination-color": "#000",
                }}
                lazy={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 3000,
                }}
                modules={[Lazy, Pagination, Navigation, Autoplay]}
                centeredSlides={true}
                slidesPerView={1.5}
            >
                <SwiperSlide>
                    <img
                        data-src={pic1}
                        className="swiper-lazy"
                        alt="pic1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        data-src={pic2}
                        className="swiper-lazy"
                        alt="pic2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        data-src={pic3}
                        className="swiper-lazy"
                        alt="pic3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        data-src={pic4}
                        className="swiper-lazy"
                        alt="pic4"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
