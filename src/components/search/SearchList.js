import React, { useState } from "react";
import Searchinfo from "./Searchinfo";

function SearchList({ searchResult, userInput }) {
  const BASE_URI = "https://image.tmdb.org/t/p/w300";
  const [clickContent, setclickContent] = useState([]);
  const [contentOpen, setcontentOpen] = useState(false);
  return (
    <div className="searchlist-wrap">
      <p>"{userInput}" 에 대한 검색결과 입니다.</p>
      {searchResult.map((item, index) => {
        const postUrl = `${BASE_URI}${item.backdrop_path}`;
        return (
          <img
            src={postUrl}
            alt={item.title}
            onClick={() => {
              setclickContent(item);
              setcontentOpen(true);
              document.body.style.overflow = "hidden";
            }}
          ></img>
        );
      })}
      {contentOpen ? (
        <Searchinfo
          clickContent={clickContent}
          setcontentOpen={setcontentOpen}
        ></Searchinfo>
      ) : null}
    </div>
  );
}

export default SearchList;
