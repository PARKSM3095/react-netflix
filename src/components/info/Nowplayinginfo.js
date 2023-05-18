import React from "react";
import styled from "styled-components";
import { AiOutlineClose, AiFillHeart } from "react-icons/ai";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

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
const StyleAiFillHeart = styled(AiFillHeart)`
  color: #f44336;
  margin-right: 5rem;
`;

const StyleBsFillHandThumbsUpFill = styled(BsFillHandThumbsUpFill)`
  color: skyblue;
  margin-right: 5rem;
`;

function Nowplayinginfo({ clickContent, setcontentOpen }) {
  const URILIST = `https://image.tmdb.org/t/p/w300/${clickContent.poster_path}`;
  const popularityUp = Math.floor(clickContent.popularity);
  return (
    <div className="info-bg">
      <div className="info-wrap">
        <div className="info-content">
          <div className="info-title">
            <h2>{clickContent.title}</h2>
            <h5>{clickContent.original_title}</h5>
            <div className="info-body">
              <div className="info-body-left">
                <img src={URILIST} alt={clickContent.title}></img>
              </div>
              <div className="info-body-right">
                <p className="title">{clickContent.release_date}</p>
                <p className="tagline">{clickContent.tagline}</p>
                <p>{clickContent.overview}</p>
                <div className="info-body-genre">
                  <p>
                    <StyleBsFillHandThumbsUpFill />
                    <span>{popularityUp}</span>
                  </p>
                  <p>
                    <StyleAiFillHeart />
                    <span>{clickContent.vote_count}</span>
                  </p>
                </div>
              </div>
            </div>
            <StyleAiOutlineClose
              onClick={() => {
                setcontentOpen(false);
                document.body.style.overflow = "auto";
              }}
            ></StyleAiOutlineClose>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nowplayinginfo;
