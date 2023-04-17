import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  AiFillCaretRight,
  AiOutlineInfoCircle,
  AiOutlineClose,
} from "react-icons/ai";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import MoviebgVideo from "./../imgs/main/MovieBg.mp4";
import titleBg from "./../imgs/bg_title.png";

const StyleAiOutlineInfoCircle = styled(AiOutlineInfoCircle)`
  margin-right: 5rem;
`;

const ModalContent = styled.div``;
const StyleModal = styled(Modal)`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
`;
const StyleReactPlayer = styled(ReactPlayer)`
  /* &::after {
    top: 0;
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    content: "";
    background: rgb(24, 24, 24);
    background: linear-gradient(
      0deg,
      rgba(24, 24, 24, 1) 0%,
      rgba(24, 24, 24, 0) 100%
    );
  } */
`;
const StyleAiFillCaretRight = styled(AiFillCaretRight)`
  margin-right: 5rem;
  &:focus-visible {
    outline: none;
  }
`;
const StyleAiOutlineClose = styled(AiOutlineClose)`
  position: absolute;
  color: #fff;
  background: #181818;
  right: 15rem;
  border-radius: 100%;
  top: 15rem;
  font-size: 20rem;
  cursor: pointer;
  padding: 10rem;
`;

function MainBg() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ComingPlaying, setComingPlaying] = useState([]);
  const [MovieGenres, setMovieGenres] = useState([]);
  const [Collection, setCollection] = useState([]);

  // 현재 상영중인 영화
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
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
      <StyleModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div className="modal-wrap">
          <ModalContent>
            <StyleReactPlayer
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
            <div className="modal-title">
              <img src={titleBg} alt="가디언즈 오브 갤럭시3" />
              <button className="main-start-btn">
                <StyleAiFillCaretRight></StyleAiFillCaretRight>
                재생
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-body-left">
                <h2>{ComingPlaying.title}</h2>
                <p className="title">
                  2023 {Math.floor(ComingPlaying.runtime / 60)}
                  시간 {Math.floor(ComingPlaying.runtime % 60)}분
                </p>
                <p className="tagline">{ComingPlaying.tagline}</p>
                <p>{ComingPlaying.overview}</p>
              </div>
              <div className="modal-body-right">
                {/* <img src={ModalPoster} alt="가디언즈 오브 갤럭시3"></img>/ */}
                <p>
                  특징 : <span>{Collection.name}</span>
                </p>
                <p>
                  장르 :
                  {MovieGenres.map((item, index) => {
                    return <span key={index}> {item.name}</span>;
                  })}
                </p>
              </div>
            </div>
            <StyleAiOutlineClose onClick={closeModal}></StyleAiOutlineClose>
          </ModalContent>
        </div>
      </StyleModal>
    </>
  );
}

export default MainBg;
