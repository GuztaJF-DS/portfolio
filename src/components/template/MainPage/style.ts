import Styled from 'styled-components';

interface MainContainerProps {
  currentSlide: number;
}

export const MainContainer = Styled.main<MainContainerProps>`
  display:flex;
  height:fit-content;
  height: 100vh;
  transition: transform 0.7s;
  transform: translateY(calc((-100vh) * ${props => props.currentSlide}));
`;

export const SlideButton = Styled.button<{ prev?: boolean }>`
  position:absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  right:1vw;
  border-radius:50%;
  border:none;
  background:#ffffff;
  opacity: 0.6;
  height:3vw;
  width:3vw;
  font-size:1vw;
  font-weight:900;
  transition:opacity 0.2s;
  ${props =>
    props.prev
      ? `
    transform:rotate(90deg);
    top:1vw;
  `
      : `
    transform:rotate(-90deg);
    bottom:1vw;
  `}
  :hover{
    opacity: 0.85;
  }

  @media(max-width:768px){
    height:6vw;
    width:6vw;
    font-size:5vw;
  }

  @media(max-width:425px){
    height:10vw;
    width:10vw;
    font-size:5vw;
  }
`;
