import React from 'react';
import styled, { css } from 'styled-components';
import { bars, colors, paddings } from '../../styles';
import { Link } from 'gatsby';

const Bar = styled.div`
  position: sticky;
  padding: 4px;
  top: 0px;
  align-items: center;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: ${({thin}) => thin? bars.thin : bars.medium}; 
  background-color: ${({bgColor}) => bgColor || colors.primary};
  padding-left: ${({paddingLeft}) => paddingLeft || paddings.content};
  padding-right: ${({paddingRight}) => paddingRight || paddings.content};
`;

const Logo = styled.img`
  max-width:20%;
  max-height:100%;
  width: auto;
  height: auto;
`;

const Nav = styled.div`
  display: flex;
  a {
    text-decoration: none;
    margin-left: 1rem;
  }
`;

const Item = styled.div`

`;

const Navigation = () => {
  return (
    <Bar>
      <Logo src={'https://pngimage.net/wp-content/uploads/2018/06/logo-placeholder-png-7.png'}/>
      <Nav>
        <Link to={"/"}>One</Link>
        <Link to={"/"}>Two</Link>
        <Link to={"/"}>Three</Link>
        <Link to={"/"}>Four</Link>
      </Nav>
    </Bar>
  );
};

export default Navigation;