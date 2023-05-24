import React, { useRef, useEffect } from "react";

function SearchbarInput({
  openSearchbar,
  StyledBiSearch,
  NowPlaying,
  Upcoming,
  TopRated,
  Popular,
  getSearchData,
}) {
  const showSearchbar1 = {
    animation: "showSearchbar1 250ms ease-in",
  };
  const showSearchbar2 = {
    animation: "showSearchbar2 250ms ease-in",
  };

  const searchElement = useRef(null);

  useEffect(() => {
    if (searchElement.current) {
      setTimeout(() => {
        searchElement.current.focus();
      }, 500);
    }
  }, []);

  return (
    <div className="searchbar-wrap">
      <StyledBiSearch
        onClick={openSearchbar}
        className="active"
        style={showSearchbar1}
      ></StyledBiSearch>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        maxLength={10}
        style={showSearchbar2}
        onChange={getSearchData}
        ref={searchElement}
      ></input>
    </div>
  );
}

export default SearchbarInput;
