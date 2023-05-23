import React, { useState } from "react";

function SearchbarInput({ openSearchbar, StyledBiSearch }) {
  const showSearchbar1 = {
    animation: "showSearchbar1 250ms ease-in",
  };
  const showSearchbar2 = {
    animation: "showSearchbar2 250ms ease-in",
  };

  const [userInput, setUserInput] = useState("");

  const getSearchData = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  return (
    <div className="searchbar-wrap">
      <StyledBiSearch
        onClick={openSearchbar}
        className="active"
        style={showSearchbar1}
      ></StyledBiSearch>
      <input
        type="text"
        placeholder="제목, 내용, 장르를 입력하세요"
        style={showSearchbar2}
        onChange={getSearchData}
      ></input>
    </div>
  );
}

export default SearchbarInput;
