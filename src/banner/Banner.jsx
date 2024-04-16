import React from "react";
// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// image
import banner_left from "../images/banner_left.png";
import banner_right from "../images/banner_right.png";

function Banner(props) {
  return (
    <div className="SwiperColor">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="Swiper_left">
          <div className="banner_div">
            <div className="banner_item">
              <div className="banner_redbox">
                <p>교육비 100% 지원</p>
              </div>
              <div className="banner_bold_font">엘리스 AI 트랙</div>
              <div className="banner_small_font">
                내 인생의 개발 전환점
                <br />
                엘리스 AI 트랙과 함께 성공적인 개발자 커리어를 만들어보세요!
              </div>
            </div>
            <img
              className="banner_image"
              src={banner_left}
              alt="banner_left"
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="Swiper_right">
          <div className="banner_div">
            <div>
              <div className="banner_redbox">
                <p>1분기 신입 개발자 적극 채용중</p>
              </div>
              <div className="banner_bold_font">
                채용 플랫폼 엘리스웍스에서
                <br />
                개발자 이력서 작성하기{" "}
              </div>
              <div className="banner_small_font">
                신입 개발자 맞춤 채용 플랫폼 엘리스웍스 !<br></br>개발자 취업
                준비는 엘리스웍스에서 시작하세요
              </div>
            </div>
            <img
              className="banner_image"
              src={banner_right}
              alt="banner_left"
            ></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
