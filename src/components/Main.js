import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiSearch, BiBell } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsStarFill } from "react-icons/bs";
import axios from "axios";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 20rem;
  font-size: 14rem;
`;

const StyledBiSearch = styled(BiSearch)`
  color: #fff;
  font-size: 28rem;
  margin-right: 20rem;
`;

const StyledBiBell = styled(BiBell)`
  color: #fff;
  font-size: 28rem;
  margin-right: 20rem;
`;
const StyleBsStarFill = styled(BsStarFill)`
  color: #fff;
  font-size: 14rem;
`;
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
`;

function Main({ Logo }) {
  const [NowPlaying, SetNowPlaying] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=27329c7fc585a6117a294d335030268f&language=ko&page=1%C2%AEion=KR"
      )
      .then((data) => {
        SetNowPlaying(data.data.results);
        console.log(NowPlaying);
      });
  }, []);

  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const swiperRef = useRef();

  return (
    <div className="main-wrap">
      <div className="main-header">
        <img className="logo" src={Logo} alt="logo"></img>
        <nav>
          <StyledLink to="/">홈</StyledLink>
          <StyledLink to="/">시리즈</StyledLink>
          <StyledLink to="/">영화</StyledLink>
          <StyledLink to="/">NEW! 요즘 대세 콘텐츠</StyledLink>
          <StyledLink to="/">내가 찜한 콘텐츠</StyledLink>
          <StyledLink to="/">언어별로 찾아보기</StyledLink>
        </nav>
        <div className="main-header-search-box">
          <StyledBiSearch></StyledBiSearch>
          <StyledBiBell></StyledBiBell>
        </div>
      </div>
      <div className="main-body">
        <h3>현재 상영중인 영화</h3>
        <StyleSwiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={5}
          slidesPerGroup={5}
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
          {NowPlaying.map((item, index) => {
            const postUrl = `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`;
            return (
              <SwiperSlide key={index}>
                <img src={postUrl} alt={index}></img>
              </SwiperSlide>
            );
          })}
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
      </div>
    </div>
  );
}

export default Main;

{
  /* <h5>{item.title}</h5>
    <p>{item.overview}</p>
    <span>
      <StyleBsStarFill></StyleBsStarFill> {item.vote_average}
    </span> */
}
