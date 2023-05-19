import React, { useState, useEffect } from "react";
import axios from "axios";
import NowPlayingSwiper from "./swiper/NowPlayingSwiper";
import PopularSwiper from "./swiper/PopularSwiper";
import UpcomingSwiper from "./swiper/UpcomingSwiper";
import TopRatedSwiper from "./swiper/TopRatedSwiper";
import MainBg from "./MainBg";
import Header from "./Header";
import Maininfo from "./info/Maininfo";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Main() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ComingPlaying, setComingPlaying] = useState([]);
  const [MovieGenres, setMovieGenres] = useState([]);
  const [Collection, setCollection] = useState([]);
  const BASE_URI = "https://image.tmdb.org/t/p/w300/";
  const postUrl = `${BASE_URI}${ComingPlaying.poster_path}`;

  // 메인 영화페이지
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/447365-guardians-of-the-galaxy-volume-3?api_key=27329c7fc585a6117a294d335030268f&language=ko&%C2%AEion=KR"
      )
      .then((data) => {
        setComingPlaying(data.data);
        setMovieGenres(data.data.genres);
        setCollection(data.data.belongs_to_collection);
      });
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const [showHTML, setShowHTML] = useState(false);

  const openSearchbar = () => {
    setShowHTML(true);
  };

  const closeSearchbar = () => {
    setShowHTML(false);
  };

  return (
    <div className="main-wrap">
      <div className={navbar ? "main-header active" : "main-header"}>
        <Header openSearchbar={openSearchbar} showHTML={showHTML}></Header>
      </div>
      <div class="body-wrap" onClick={closeSearchbar}>
        <div className="main-bg">
          <MainBg openModal={openModal}></MainBg>
        </div>
        <div className="main-body">
          <NowPlayingSwiper></NowPlayingSwiper>
        </div>
        <div className="main-body">
          <UpcomingSwiper></UpcomingSwiper>
        </div>
        <div className="main-body">
          <TopRatedSwiper></TopRatedSwiper>
        </div>
        <div className="main-body">
          <PopularSwiper></PopularSwiper>
        </div>
      </div>
      {modalIsOpen ? (
        <Maininfo
          setModalIsOpen={setModalIsOpen}
          ComingPlaying={ComingPlaying}
          MovieGenres={MovieGenres}
          postUrl={postUrl}
          Collection={Collection}
        ></Maininfo>
      ) : (
        document.body.style.removeProperty("overflow")
      )}
    </div>
  );
}

export default Main;
