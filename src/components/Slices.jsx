import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import { bars, colors, paddings } from '../styles';
import { Link } from 'gatsby';

const Background = styled.div`
  height: 100vh;
  background-image: linear-gradient(to bottom, #623aa4, #24133d);
  display: float;
  justify-content: center;
  align-items:center;
`;

const SliceContainer = styled.div`
  height: 80vh;
  width: 90vw;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: -1px -1px 10px 5px  #2a1747;
`;
  
const ScrollContainer = styled.div`
  display: flex;
  border-radius: 10px;
  height: 100%;
  overflow-x: scroll;
  cursor: pointer;
  &.active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
    transform: scale(1.01);
  }
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  } 
  &::-webkit-scrollbar:horizontal {
    height: 11px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0 0 8px 8px;
    background-color: rgba(0, 0, 0, .5);
  }
`;
  
const Slice = styled.div`
  border-top: 5px solid salmon;
  filter: brightness(50%);
  position: relative;
  display:flex;
  flex-direction:column;
  padding: 3vw;
  padding-top: 5vw;
  border-right: 1px solid #4e1380;
  flex-shrink: 0;
  width: 35vh;
  height: 100%;
  overflow: hidden;
  background-color: #310742;
  &.selected {
    filter: brightness(100%);
  }
`;

const Picture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Number = styled.div`
  color: #cbc1d3;
  font-weight: 800;
  font-size: 0.8em;
  display: flex;
  align-items: center;
  div {
    border-radius: 50%;
    margin-right: 0.5vw;
    width: 1vw;
    height: 1vw;
    background-color: #cbc1d3;
  }
`;
const Worm = styled.div`
  width: 15%;
  margin-top: 1em;
  border-radius: 3px;
  height: 6px;
  background-color: #9a0f39;
`;
const Icon = styled.img`
  width: 7vw;
  height: 7vw;
  margin-top: 2em;
  margin-bottom: 2em;
`;
const Title = styled.h2`
  font-weight: bold;
  color:  #cbc1d3;
  line-height: 1em;
  margin: 0;
`;
const Subtitle = styled.h3`
  margin: 0;
  line-height: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 1em;
  color: #9a0f39;
`;

const Paragraph = styled.p`
  margin: 0;
  line-height: 1em;
`;


const Slices = () => {
  let [selected, setSelected] = useState(0);
  let isDown = false;
  let startX;
  let scrollLeft;
  
  const mousedown =  (e) => {
    isDown = true;
    e.preventDefault();
    e.currentTarget.classList.add('active');
    startX = e.pageX - e.currentTarget.offsetLeft;
    scrollLeft = e.currentTarget.scrollLeft;
  };
  const mouseleave = (e) => {
    isDown = false;
    e.currentTarget.classList.remove('active');
  };
  const mouseup = (e) => {
    isDown = false;
    e.currentTarget.classList.remove('active');
  };
  const mousemove =  (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 3;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  let content = [
    {image: "https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg"},
    {image: "https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg"},
    {image: "https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg"},
  ]

  const slices = content.map((slice, index) => {
    return (
      <Slice key={index} onMousewhy={() => setSelected(index)} className={selected == index? 'selected' : 'test'} >
        <Picture src={slice.image}></Picture>
        <Number><div></div>{index}</Number>
        <Worm></Worm>
        <Icon src="https://img.icons8.com/cotton/256/000000/music.png"></Icon>
        <Title>Some Text</Title>
        <Subtitle>summary information</Subtitle>
        <Paragraph>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.</Paragraph>
      </Slice>
    )
  })

  return (
    <Background>
      <SliceContainer>
        <ScrollContainer onMouseDown={mousedown} onMouseLeave={mouseleave} onMouseUp={mouseup} onMouseMove={mousemove} >
         {slices}
        </ScrollContainer>
      </SliceContainer>
    </Background>
  );
};

export default Slices;