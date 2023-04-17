import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiSearch, BiBell } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsStarFill } from "react-icons/bs";
import { AiFillCaretRight, AiOutlineInfoCircle } from "react-icons/ai";
import axios from "axios";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
import MoviebgTitle from "./../imgs/bg_title.png";

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
  margin-right: 60rem;
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
  margin-bottom: 80rem;
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
const StyleAiOutlineInfoCircle = styled(AiOutlineInfoCircle)`
  margin-right: 5rem;
`;
const StyleAiFillCaretRight = styled(AiFillCaretRight)`
  margin-right: 5rem;
`;

const BASE_URI = "https://image.tmdb.org/t/p/w300/";

function Main({ Logo }) {
  const [NowPlaying, SetNowPlaying] = useState([]);
  const [MovieBg, SetMovieBg] = useState("");
  // 현재 상영중인 영화
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=27329c7fc585a6117a294d335030268f&language=ko&page=1%C2%AEion=KR"
      )
      .then((data) => {
        SetNowPlaying(data.data.results);
      });
  }, []);

  //개봉 예정 영화
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=27329c7fc585a6117a294d335030268f&language=ko&page=1%C2%AEion=KR"
      )
      .then((data) => {});
  }, []);

  //영화 예고편
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/447365/videos?api_key=27329c7fc585a6117a294d335030268f&language=ko&page=1%C2%AEion=KR"
      )
      .then((data) => {
        console.log(data.data.results[0].key);
        SetMovieBg(`https://www.youtube.com/embed/${data.data.results[0].key}`);
        console.log(MovieBg);
      });
  }, []);

  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const swiperRef = useRef();

  return (
    <div className="main-wrap">
      <div className="main-header">
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
      <div className="main-bg">
        <ReactPlayer
          className="react-player"
          url={
            "https://rr2---sn-5hnednss.googlevideo.com/videoplayback?expire=1681461315&ei=47s4ZKaODaDZx_APp4qM2AM&ip=185.108.106.246&id=o-AGXLDDuLTAUDRNMYINEZ1nKpjb46zppi6LheasGTTZKT&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&spc=99c5CW5696wNJk_F2TxDeMT8n_5osy__Wd8r8NWLmg&vprv=1&mime=video%2Fmp4&ns=sENaOzN7JB7Au35gnHcTLXcM&gir=yes&clen=30794479&dur=151.317&lmt=1676266003432259&keepalive=yes&fexp=24007246&c=WEB&txp=5535434&n=soLllnZ8FfIraQ&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAILhCUitZRSzvjXKg3lCuy49265rabPc0h_Y1F9a-6y_AiByC0vOYeRl26MSfmxdS8TOcmRDNVg-IQ9iryxWYBmWZg%3D%3D&rm=sn-pmcg-bg0res&req_id=feacbbffe00ea3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-h5qz67s&cms_redirect=yes&cmsv=e&mh=qD&mip=112.216.155.242&mm=34&mn=sn-5hnednss&ms=ltu&mt=1681439114&mv=D&mvi=2&pl=0&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAJwEMgxINWHShvDpKCK6uHEkmbWb4Hdw6pMtedk6G3EcAiAPDPtoEgmowMtwAJ49RrPcgDqa-auOazLXEWrdhJ8HUA%3D%3D"
          } // 플레이어 url
          width="100%" // 플레이어 크기 (가로)
          height="auto" // 플레이어 크기 (세로)
          muted={true}
          playing={true}
          loop={true}
          controls={false} // 플레이어 컨트롤 노출 여부
          light={false} // 플레이어 모드
          pip={false} // pip 모드 설정 여부
        />
        <div className="main-bg-box">
          <img src={MoviebgTitle} alt="가디언즈 오브 갤럭시"></img>
          <div className="main-btn-box">
            <button className="main-start-btn">
              <StyleAiFillCaretRight></StyleAiFillCaretRight>재생
            </button>
            <button className="main-info-btn">
              <StyleAiOutlineInfoCircle></StyleAiOutlineInfoCircle>정보
            </button>
          </div>
        </div>
      </div>
      <div className="main-body">
        <h3>현재 상영중인 영화</h3>
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
          {NowPlaying.map((item, index) => {
            const postUrl = `${BASE_URI}${item.backdrop_path}`;
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
