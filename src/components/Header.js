import React from "react";
import styled from "styled-components";
import { BiSearch, BiBell } from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from "./../imgs/logo.png";

const StyledBiSearch = styled(BiSearch)`
  color: #fff;
  font-size: 28rem;
  margin-right: 20rem;
`;

const StyledBiBell = styled(BiBell)`
  color: #fff;
  font-size: 28rem;
  margin-right: 60rem;
`;
const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 20rem;
  font-size: 14rem;
`;

function Header() {
  return (
    <>
      <nav>
        <img className="main-logo" src={Logo} alt="logo"></img>
        <StyledLink to="/">홈</StyledLink>
        <StyledLink to="/">시리즈</StyledLink>
        <StyledLink to="/">영화</StyledLink>
        <StyledLink to="/">NEW! 요즘 대세 콘텐츠</StyledLink>
        <StyledLink to="/">내가 찜한 콘텐츠</StyledLink>
        <StyledLink to="/">언어별로 찾아보기</StyledLink>
      </nav>
      <div className="main-header-search-box">
        <StyledBiSearch></StyledBiSearch>
        <StyledBiBell></StyledBiBell>
      </div>
    </>
  );
}

export default Header;
