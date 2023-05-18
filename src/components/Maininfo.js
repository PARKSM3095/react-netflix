import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

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

function Maininfo({
  ComingPlaying,
  MovieGenres,
  postUrl,
  Collection,
  setModalIsOpen,
}) {
  return (
    <div className="info-bg">
      <div className="info-wrap">
        <div className="info-content">
          <div className="info-title">
            <div className="info-body">
              <div className="info-body-left">
                <h2>{ComingPlaying.title}</h2>
                <h5>{ComingPlaying.original_title}</h5>
                <img src={postUrl} alt={ComingPlaying.title}></img>
                <p className="title">{ComingPlaying.release_date}</p>
                <p className="tagline">{ComingPlaying.tagline}</p>
                <p>{ComingPlaying.overview}</p>
                <div className="info-body-genre">
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
            </div>
            <StyleAiOutlineClose
              onClick={() => {
                setModalIsOpen(false);
              }}
            ></StyleAiOutlineClose>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maininfo;
