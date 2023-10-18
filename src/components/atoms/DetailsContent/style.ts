import Styled from 'styled-components';

interface MainProps {
  backgroundColor: string;
}

export const MainContainer = Styled.div<MainProps>`
  background-color:${props => props.backgroundColor};
  width:60vw;
  font-size: 5vw;
  @media(max-width:768px){
    flex-direction: column;
    width:100vw;
    height:60vh;
  }
`;
