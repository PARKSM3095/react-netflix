import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation, Pagination } from "swiper";
import axios from "axios";
import Upcominginfo from "./../info/Upcominginfo";

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

  &:before {
    content: "";
    position: absolute;
    display: block;
    top: 20rem;
    left: 0;
    width: 50rem;
    height: 100%;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(20, 20, 20, 0.7) 100%
    );
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
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7) 100%,
      rgba(20, 20, 20, 0.7) 0%
    );
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

function UpcomingSwiper() {
  const [Upcoming, SetUpcoming] = useState([]);
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const swiperRef = useRef();
  const BASE_URI = "https://image.tmdb.org/t/p/w300";
  const [clickContent, setclickContent] = useState([]);
  const [contentOpen, setcontentOpen] = useState(false);

  // 개봉 예정 영화
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=27329c7fc585a6117a294d335030268f&language=ko&page=1%C2%AEion=KR"
      )
      .then((data) => {
        SetUpcoming(data.data.results);
      });
  }, []);
  return (
    <>
      <h3>개봉 예정 영화</h3>
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
        {Upcoming.map((item, index) => {
          const postUrl = `${BASE_URI}${item.backdrop_path}`;
          return (
            <SwiperSlide key={item.id}>
              <img
                src={postUrl}
                alt={item}
                onClick={() => {
                  console.log(item);
                  setclickContent(item);
                  setcontentOpen(true);
                  document.body.style.overflow = "hidden";
                }}
              ></img>
            </SwiperSlide>
          );
        })}
        {contentOpen ? (
          <Upcominginfo
            clickContent={clickContent}
            setcontentOpen={setcontentOpen}
          ></Upcominginfo>
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

export default UpcomingSwiper;
