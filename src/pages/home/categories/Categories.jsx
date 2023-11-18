/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SubTitleSection from "../../../components/subTitleSection/SubTitleSection";

const Categories = () => {
  return (
    <section>
     <SubTitleSection
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></SubTitleSection>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-[137px]"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h3 className="uppercase text-[32px] font-normal text-center -mt-16 text-[#FFF] p-6">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h3 className="uppercase text-[32px] font-normal text-center -mt-16 text-[#FFF] p-6">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h3 className="uppercase text-[32px] font-normal text-center -mt-16 text-[#FFF] p-6">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h3 className="uppercase text-[32px] font-normal text-center -mt-20 text-[#FFF] p-6">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h3 className="uppercase text-[32px] font-normal text-center -mt-16 text-[#FFF] p-6">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Categories;
