import Styled from 'styled-components';

export const MainContainer = Styled.div`
  display:flex;
  background-color:black;
  width:40vw;
  height:100vh;
  color:#ffffff;
  @media(max-width:768px){
    flex-direction: column;
    width:100vw;
    height:40vh;
  }
`;
