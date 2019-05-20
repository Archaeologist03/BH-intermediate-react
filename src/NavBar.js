import React from "react";
import { Link } from "@reach/router";
// import styled from 'react-emotion';
import styled from "@emotion/styled";

import colors from "./colors";

import { jsx, css, keyframes } from "@emotion/core";

// const bounce = keyframes`
//   from, 20%, 53%, 80%, to {
//     transform: translate3d(0,0,0);
//   }

//   40%, 43% {
//     transform: translate3d(0, -30px, 0);
//   }

//   70% {
//     transform: translate3d(0, -15px, 0);
//   }

//   90% {
//     transform: translate3d(0,-4px,0);
//   }
// `;

const Spin = keyframes`
  from {
    transfrom: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpyGlass = styled("span")`
  display: inline-block;
  animation: ${props => props.frequency}s ${Spin} linear infinite;
`;

const Container = styled.header`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => (
  <Container>
    <NavLink to="/">Adopt Me!</NavLink>
    <NavLink to="/search-params">
      <SpyGlass frequency={5} aria-label="search" role="img">
        🔍
      </SpyGlass>
    </NavLink>
  </Container>
);

export default NavBar;
