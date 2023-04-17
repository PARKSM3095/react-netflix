import React from "react";
import NowPlayingSwiper from "./swiper/NowPlayingSwiper";
import MainBg from "./MainBg";
import Header from "./Header";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Main() {
  return (
    <div className="main-wrap">
      <div className="main-header">
        <Header></Header>
      </div>
      <div className="main-bg">
        <MainBg></MainBg>
      </div>
      <div className="main-body">
        <NowPlayingSwiper></NowPlayingSwiper>
      </div>
    </div>
  );
}

export default Main;
