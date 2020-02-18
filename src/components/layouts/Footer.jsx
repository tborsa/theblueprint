import React from 'react';
import { Link } from 'gatsby'
import styled, { css } from 'styled-components';
import { bars, colors, paddings } from '../../styles';

const Foot = styled.div`
  display: flex;
  width: 100%;
  background-color: ${colors.dark};
  padding: ${({paddingLeft}) => paddingLeft || paddings.content};
  padding-left: ${({paddingLeft}) => paddingLeft || paddings.content};
`;
const Col = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  color: ${colors.offWhite};
  font-size: 1rem;
  margin-right: 5rem;
  margin-top: 1rem;
  h3 {
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
  }
  a {
    text-decoration: none;
    margin: 0.1em;
    font-size: 0.8em;
  }
`;

const Logo = styled.img`
  width:5vw;
  height:5vw;
  margin-right: 1.5rem;
  object-fit: cover;
  object-position: 0 0; 
`;

const Legal = styled.p`
  align-self: flex-end;
  margin: 0;
  font-size: 0.5em;
  max-width: 300px;
`;

const Footer = () => {
  return (
    <Foot>
      <Logo src={'https://pngimage.net/wp-content/uploads/2018/06/logo-placeholder-png-7.png'}/>
      <Col>
        <h3>Code by numbers</h3>
        <Link to="/">Questions</Link>
        <Link to="/">Jobs</Link>
        <Link to="/">Help</Link>
        <Link to="/">One</Link>
      </Col>
      <Col>
        <h3>Social</h3>
        <Link to="/">facebook</Link>
        <Link to="/">twitter</Link>
        <Link to="/">instagram</Link>
        <Link to="/">linkedin</Link>
      </Col>
      <Col>
        <h3>Network</h3>
        <Link to="/">people</Link>
        <Link to="/">cats</Link>
        <Link to="/">dogs</Link>
        <Link to="/">birds</Link>
      </Col>
      <Legal>
        site design / logo © 2020 Code by Numbers Inc; user contributions licensed under cc by-sa 4.0 with attribution required. rev 2020.2.18.36089
      </Legal>
    </Foot>
  );
};

export default Footer;