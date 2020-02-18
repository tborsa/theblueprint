import React from 'react';
import NotificationBar from '../navigation/NotificationBar';
import Navigation from '../navigation/Navigation';
import Footer from './Footer';
import styled, { css } from 'styled-components';
import { bars, colors, paddings } from '../../styles';

const ParralaxContain = styled.div`
  width: 100%;
  transform-style: preserve-3d;
  height: 100vh;
  perspective: 1px;
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
`;

const Content = styled.div`
  width: 100%;
`;

const Spaceer = styled.div`
  height: ${({thin}) => thin? bars.thin : bars.medium}; 
`;

const Main = ({location, children}) => {
  let header

  let rootPath = `/`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }

  return (
    <ParralaxContain>
      <NotificationBar thin/>
      <Content>
        <Navigation />
        {children}
      </Content>
      <Footer/>
    </ParralaxContain>
  )
};

export default Main;