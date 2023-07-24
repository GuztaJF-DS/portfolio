import Styled from 'styled-components';

export const MainContainer = Styled.main`
  padding: 10px;
  .Link {
    margin-left:12px;
  }
  i {
      margin-top:10px;
  }
`;

export const AnimatedTitle = Styled.h1`
  --margin-width: 20vw;
  @keyframes animation {
    0%   {margin-right:0px; opacity:0;}
    75% {opacity:1;}
    100% {margin-right:var(--margin-width);}
  }
  align-self:flex-end;
  font-size: 6vw;
  width: fit-content;
  animation-fill-mode: forwards;
  animation-name: animation;
  animation-duration: 3s;
  @media (max-width:768px){
    --margin-width: 10vw;
    font-size: 11vw;
  }
  @media (max-width:425px){
    --margin-width: 17vw;
    font-size: 17vw;
  }
`

export const AnimatedSubTitle = Styled.h1`
  --margin-width: 12vw;
  @keyframes subAnimation {
    0%   {margin-right:0vw; opacity:0;}
    75%  {opacity:1;}
    100% {margin-right:var(--margin-width);; opacity:1;}
  }
  opacity:0;
  align-self:flex-end;
  font-size: 2.5vw;
  width: fit-content;
  animation-name: subAnimation;
  animation-fill-mode: forwards;
  animation-delay: 3s;
  animation-duration: 3s;
  @media (max-width:768px){
    font-size: 4.5vw;
  --margin-width: 2vw;
  }
  @media (max-width:425px){
    font-size: 7vw;
  }
`
