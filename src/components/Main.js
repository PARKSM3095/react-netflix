import React, { useState, useEffect } from "react";
import axios from "axios";
import NowPlayingSwiper from "./swiper/NowPlayingSwiper";
import PopularSwiper from "./swiper/PopularSwiper";
import UpcomingSwiper from "./swiper/UpcomingSwiper";
import TopRatedSwiper from "./swiper/TopRatedSwiper";
import MainBg from "./MainBg";
import Header from "./Header";
import Maininfo from "./info/Maininfo";
import SearchList from "./search/SearchList";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Main() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ComingPlaying, setComingPlaying] = useState([]);
  const [Collection, setCollection] = useState([]);
  const [NowPlaying, SetNowPlaying] = useState([]);
  const [Upcoming, SetUpcoming] = useState([]);
  const [TopRated, SetTopRated] = useState([]);
  const [Popular, SetPopular] = useState([]);
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
        setCollection(data.data.belongs_to_collection);
      });
  }, []);

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

  // 가장 인기있는 영화
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=27329c7fc585a6117a294d335030268f&language=ko&page=1%C2%AEion=KR"
      )
      .then((data) => {
        SetPopular(data.data.results);
      });
  }, []);

  // 최고의 랭킹 영화
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=27329c7fc585a6117a294d335030268f&language=ko&page=1%C2%AEion=KR"
      )
      .then((data) => {
        SetTopRated(data.data.results);
      });
  }, []);

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

  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  // navbar sticky
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

  //검색창 on / off
  const [showHTML, setShowHTML] = useState(false);

  const openSearchbar = () => {
    setShowHTML(true);
  };

  const closeSearchbar = () => {
    setShowHTML(false);
    setUserInput("");
  };

  //검색기능
  const [userInput, setUserInput] = useState("");

  const movieAPI = [...NowPlaying, ...Upcoming, ...TopRated, ...Popular];
  const movieList = [...new Set(movieAPI.map(JSON.stringify))].map(JSON.parse);

  const searchResult = movieList.filter((movieList) => {
    return movieList.title.includes(userInput);
  });

  const getSearchData = (e) => {
    setUserInput(e.target.value);
  };

  console.log(searchResult);

  return (
    <div className="main-wrap">
      <div className={navbar ? "main-header active" : "main-header"}>
        <Header
          openSearchbar={openSearchbar}
          showHTML={showHTML}
          NowPlaying={NowPlaying}
          Upcoming={Upcoming}
          TopRated={TopRated}
          Popular={Popular}
          searchResult={searchResult}
          getSearchData={getSearchData}
        ></Header>
      </div>
      <div className="body-wrap">
        {userInput === "" || showHTML === false ? (
          <>
            <div className="main-bg" onClick={closeSearchbar}>
              <MainBg openModal={openModal}></MainBg>
            </div>
            <div className="body-content-wrap" onClick={closeSearchbar}>
              <div className="main-body first-list">
                <NowPlayingSwiper NowPlaying={NowPlaying}></NowPlayingSwiper>
              </div>
              <div className="main-body">
                <UpcomingSwiper Upcoming={Upcoming}></UpcomingSwiper>
              </div>
              <div className="main-body">
                <TopRatedSwiper TopRated={TopRated}></TopRatedSwiper>
              </div>
              <div className="main-body">
                <PopularSwiper Popular={Popular}></PopularSwiper>
              </div>
            </div>
          </>
        ) : (
          <SearchList searchResult={searchResult} userInput={userInput} />
        )}
      </div>
      {modalIsOpen ? (
        <Maininfo
          setModalIsOpen={setModalIsOpen}
          ComingPlaying={ComingPlaying}
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
