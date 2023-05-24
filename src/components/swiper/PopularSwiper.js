import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation, Pagination } from "swiper";
import Popularinfo from "./../info/Popularinfo";
import axios from "axios";

const StyleIoIosArrowBack = styled(IoIosArrowBack)`
  color: #ccc;
  font-size: 30rem;
  opacity: 0;
  transition: 0.3s all;
`;
const StyleIoIosArrowForward = styled(IoIosArrowForward)`
  color: #ccc;
  font-size: 30rem;
  opacity: 0;
  transition: 0.3s all;
`;

const StyleSwiper = styled(Swiper)`
  padding: 0 60rem;

  &:hover:before {
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(20, 20, 20, 0.7) 100%
    );
    transition: 0.3s all;
  }

  &:hover:after {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7) 100%,
      rgba(20, 20, 20, 0.7) 0%
    );
    transition: 0.3s all;
  }

  &:before {
    content: "";
    position: absolute;
    display: block;
    top: 20rem;
    left: 0;
    width: 50rem;
    height: 100%;
    z-index: 10;
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    right: 0px;
    top: 0;
    top: 20rem;
    width: 60rem;
    height: 100%;
    z-index: 1;
  }
  &:hover ${StyleIoIosArrowBack} {
    opacity: 1;
    transition: 0.3s all;
  }
  &:hover ${StyleIoIosArrowForward} {
    opacity: 1;
    transition: 0.3s all;
  }
  img {
    cursor: pointer;
  }
`;

function PopularSwiper({ Popular }) {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const swiperRef = useRef();
  const BASE_URI = "https://image.tmdb.org/t/p/w300/";
  const [clickContent, setclickContent] = useState([]);
  const [contentOpen, setcontentOpen] = useState(false);

  return (
    <>
      <h3>가장 인기있는 영화</h3>
      <StyleSwiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={6}
        slidesPerGroup={6}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {Popular.map((item, index) => {
          const postUrl = `${BASE_URI}${item.backdrop_path}`;
          return (
            <SwiperSlide key={item.id}>
              <img
                src={postUrl}
                alt={item}
                onClick={() => {
                  setclickContent(item);
                  setcontentOpen(true);
                  document.body.style.overflow = "hidden";
                }}
              ></img>
            </SwiperSlide>
          );
        })}
        {contentOpen ? (
          <Popularinfo
            clickContent={clickContent}
            setcontentOpen={setcontentOpen}
          ></Popularinfo>
        ) : null}
        <span
          className="movie-navigation-left"
          onClick={() => swiperRef.current?.slidePrev(800)}
        >
          <StyleIoIosArrowBack />
        </span>
        <span
          className="movie-navigation-right"
          onClick={() => swiperRef.current?.slideNext(800)}
        >
          <StyleIoIosArrowForward />
        </span>
      </StyleSwiper>
    </>
  );
}

export default PopularSwiper;
