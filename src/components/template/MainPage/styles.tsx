import Styled from 'styled-components';

export const MainContainer = Styled.main`
  margin: auto;
  max-width:1440px;
  width:100vw;
`;

export const AnimatedTitle = Styled.h1`
  --margin-width: 20vw;
  @keyframes animation {
    0%   {margin-right:0px; opacity:0;}
    25% {opacity:1;}
    100% {margin-right:var(--margin-width);}
  }
  @keyframes breathe {
    0% {font-size: 6vw;}
    50% {font-size: 6.01vw;}
    100% {font-size: 6vw;}
  }
  align-self:flex-end;
  font-size: 6vw;
  width: fit-content;
  animation:animation 3s forwards, breathe 10s 3s linear infinite;
  background-color: #fffbf4;
  @media (max-width:768px){
    --margin-width: 10vw;
    font-size: 11vw;
  }
  @media (max-width:425px){
    --margin-width: 17vw;
    font-size: 17vw;
  }
  @media (min-width:1440px){
    --margin-width: 244.8px;
    font-size: 86.4px;
  }
`;

export const AnimatedSubTitle = Styled.h1`
  --margin-width: 12vw;
  @keyframes subAnimation {
    0%   {margin-right:0vw; opacity:0;}
    25%  {opacity:1;}
    100% {margin-right:var(--margin-width);; opacity:1;}
  }
  @keyframes subBreathe {
    0% {font-size: 2.5vw;}
    50% {font-size: 2.501vw;}
    100% {font-size: 2.5vw;}
  }
  opacity:0;
  align-self:flex-end;
  font-size: 2.5vw;
  width: fit-content;
  animation:subAnimation 3s 3s forwards, subBreathe 10s 6s linear infinite;
  @media (max-width:768px){
    font-size: 4.5vw;
  --margin-width: 2vw;
  }
  @media (max-width:425px){
    font-size: 7vw;
  }
  @media (min-width:1440px){
    font-size: 36px;
    --margin-width: 172.8px;
  }
`;

interface LinkContainerProps {
  currentColor: string;
}

export const LinkContainer = Styled.div<LinkContainerProps>`
  display:flex;
  justify-content:space-evenly;
  background-color:${props => props.currentColor};
  width:75%;
  height:23px;
  margin-top:40vh;
  transition:background-color 0.25s;
  .Link {
    color:#fffbf4;
    background-color:transparent;
    transition:color 0.3s;
  }
`;
