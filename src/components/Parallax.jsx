
import React from 'react';
import styled, { css } from 'styled-components';
import { bars, colors, paddings } from '../styles';

const ParallaxOut = styled.div`
  height: ${(props) => props.height};
  overflow: hidden;
`;
  
const ParallaxIn = styled.div`
  height: 100vh;
  z-index: -1;
  transform: translateZ(-1px) scale(2);
`;


const Parallax = ({height, children}) => {
  return (
    <ParallaxOut height={height}>
      <ParallaxIn >
        {children}
      </ParallaxIn>
    </ParallaxOut>
  )
};

export default Parallax;