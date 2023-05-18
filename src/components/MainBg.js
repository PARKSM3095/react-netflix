import React from "react";
import styled from "styled-components";
import { AiFillCaretRight, AiOutlineInfoCircle } from "react-icons/ai";
import ReactPlayer from "react-player";
import MoviebgVideo from "./../imgs/main/MovieBg.mp4";
import titleBg from "./../imgs/bg_title.png";

const StyleAiOutlineInfoCircle = styled(AiOutlineInfoCircle)`
  margin-right: 5rem;
`;
const StyleAiFillCaretRight = styled(AiFillCaretRight)`
  margin-right: 5rem;
  &:focus-visible {
    outline: none;
  }
`;
function MainBg({ openModal }) {
  return (
    <>
      <ReactPlayer
        className="react-player"
        url={MoviebgVideo} // 플레이어 url
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
        <img src={titleBg} alt="가디언즈 오브 갤럭시3" />
        <div className="main-btn-box">
          <button className="main-start-btn">
            <StyleAiFillCaretRight></StyleAiFillCaretRight>
            재생
          </button>
          <button className="main-info-btn" onClick={openModal}>
            <StyleAiOutlineInfoCircle></StyleAiOutlineInfoCircle>
            정보
          </button>
        </div>
      </div>
    </>
  );
}

export default MainBg;
