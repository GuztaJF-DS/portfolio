import Styled from 'styled-components';

interface RightContainerProps {
  backgroundColor:string;
}

interface MainContainerProps {
  currentSlide:number;
}

export const MainContainer = Styled.main<MainContainerProps>`
  display:flex;
  height:fit-content;
  height: 100vh;
  transition: transform 0.7s;
  transform: translateY(calc((-100vh) * ${(props) => props.currentSlide}));
`;

export const SlideButton = Styled.button<{prev?:boolean}>`
  position:absolute;
  right:1vw;
  height:3vw;
  border-radius:50%;
  border:none;
  background:#ffffffda;
  width:3vw;
  ${(props) => props.prev ? 
  `
    top:1vw;
  `:
  `
    bottom:1vw;
  `
  }
`;

export const SlideContainer = Styled.main`
  display:flex;
  flex-direction: row;
`;

export const LeftContainer = Styled.div`
  display:flex;
  background-color:black;
  width:40vw;
  height:100vh;
  color:#ffffff;
`;

export const RightContainer = Styled.div<RightContainerProps>`
  background-color:${props => props.backgroundColor};
  width:60vw;
  font-size: 90px;
`;

export const Title = Styled.h1`
  width: fit-content;
  font-size: 90px;
`;