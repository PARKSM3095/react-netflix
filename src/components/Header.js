import React from "react";
import styled from "styled-components";
import { BiSearch, BiBell } from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from "./../imgs/logo.png";
import SearchbarInput from "./search/SearchbarInput";

const StyledBiSearch = styled(BiSearch)`
  color: #fff;
  font-size: 26rem;
  margin-right: 20rem;
  cursor: pointer;
`;

const StyledBiBell = styled(BiBell)`
  color: #fff;
  font-size: 26rem;
  margin-right: 60rem;
  margin-left: 10rem;
`;
const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 10rem;
  font-size: 14rem;
`;

function Header({
  showHTML,
  openSearchbar,
  NowPlaying,
  Upcoming,
  TopRated,
  Popular,
  searchResult,
  getSearchData,
}) {
  return (
    <>
      <nav>
        <StyledLink to="/">
          <img className="main-logo" src={Logo} alt="logo"></img>
        </StyledLink>
        <StyledLink to="/">홈</StyledLink>
        <StyledLink to="/">시리즈</StyledLink>
        <StyledLink to="/">영화</StyledLink>
        <StyledLink to="/">NEW! 요즘 대세 콘텐츠</StyledLink>
        <StyledLink to="/">내가 찜한 콘텐츠</StyledLink>
        <StyledLink to="/">언어별로 찾아보기</StyledLink>
      </nav>
      <div className="main-header-search-box">
        {showHTML ? (
          <SearchbarInput
            openSearchbar={openSearchbar}
            StyledBiSearch={StyledBiSearch}
            NowPlaying={NowPlaying}
            Upcoming={Upcoming}
            TopRated={TopRated}
            Popular={Popular}
            searchResult={searchResult}
            getSearchData={getSearchData}
          />
        ) : (
          <StyledBiSearch onClick={openSearchbar}></StyledBiSearch>
        )}
        <StyledBiBell></StyledBiBell>
      </div>
    </>
  );
}

export default Header;
