import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { bars, colors, paddings } from '../../styles';

const Bar = styled.div`
  align-items: center;
  z-index: 100;
  width: 100%;
  display: flex;
  height: ${({thin}) => thin? bars.thin : bars.medium}; 
  background-color: ${({bgColor}) => bgColor || colors.secondary};
  padding-left: ${({paddingLeft}) => paddingLeft || paddings.content};
  padding-right: ${({paddingRight}) => paddingRight || paddings.content};
`;

const Notification = styled.p`
  margin: 0;
  font-size: ${({thin}) => thin? `calc(${bars.thin} * 0.6)` : `calc(${bars.medium} * 0.6)` };
  line-height: 1em;
  color: ${colors.white};
`;


const NotificationBar = (props) => {
  return (
    <Bar thin={props.thin}>
      <Notification thin={props.thin}>Do the stuff <Link to="/">Here</Link></Notification>
    </Bar>
  );
};

export default NotificationBar;