import React from "react";
import styled from "@emotion/styled";

const NavStyle = styled.div`
  background-color: tomato;
  overflow: hidden;
  width: 100%;
  margin-top: 0;
  margin-bottom: 2vh;
  a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    margin: auto;
  }
`;

export const Navbar = () => {
  return (
    <NavStyle>
      <a href="/">
        Home
      </a>
      <a href="/bet">Bet</a>
      <a href="/matches">Matches</a>
      <a href="/ranking">Ranking</a>
    </NavStyle>
  );
};
