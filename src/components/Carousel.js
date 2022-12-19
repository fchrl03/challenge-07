import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { FaStar } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';

import { ImgTestiMale, ImgTestiFemale } from '../assets/images';

function Carousel() {
  return (
    <div>
      <Swiper
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={2}
        navigation
        className="h-fit"
      >
        <SwiperSlide>
          <div className="bg-[#F1F3FF] h-[270px] rounded-lg flex gap-5 items-center justify-center drop-shadow-md px-12">
            <div>
              <img className="w-[350px]" src={ImgTestiMale} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2 text-sm text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-sm">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="text-sm font-bold">John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F1F3FF] h-[270px] rounded-lg flex gap-5 items-center justify-center drop-shadow-md px-12">
            <div>
              <img className="w-[350px]" src={ImgTestiFemale} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2 text-sm text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-sm">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="text-sm font-bold">John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F1F3FF] h-[270px] rounded-lg flex gap-5 items-center justify-center drop-shadow-md px-12">
            <div>
              <img className="w-[350px]" src={ImgTestiMale} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2 text-sm text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-sm">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="text-sm font-bold">John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F1F3FF] h-[270px] rounded-lg flex gap-5 items-center justify-center drop-shadow-md px-12">
            <div>
              <img className="w-[350px]" src={ImgTestiFemale} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2 text-sm text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-sm">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="text-sm font-bold">John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
