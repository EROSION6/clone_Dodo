import React from "react";
import "./Slider.scss";
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { slidersUrl } from "../../data/SliderUrl";

const Slider = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={10}
			slidesPerView={5}
			loop={true}
			onSwiper={swiper => console.log(swiper)}
			onSlideChange={() => console.log("slide change")}>
			{slidersUrl.map(url => (
				<SwiperSlide className='sliders' key={url}>
					<img src={url} alt='Slider' />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Slider;
