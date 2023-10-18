import Styled from 'styled-components';

export const MainContainer = Styled.main`
  display:flex;
  flex-direction: row;
  @media(max-width:768px){
    flex-direction: column;
  }
`;
