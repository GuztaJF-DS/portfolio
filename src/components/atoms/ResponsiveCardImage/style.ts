import Styled from 'styled-components';

export const ImageContainer = Styled.div`
  position: relative;
  width:10vw;
  height:10vw;
  @media (max-width:768px){
    width:15vw;
    height:15vw;
  }
  @media (min-width:1440px){
    width:144px;
    height:144px;
  }
`