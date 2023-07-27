import Styled from 'styled-components';

export const ImageContainer = Styled.div`
  position: relative;
  width:10vw;
  filter: brightness(0.8);
  filter: saturate(90%);
  height:10vw;
  @media (max-width:768px){
    width:15vw;
    height:15vw;
  }
  @media (min-width:1440px){
    width:144px;
    height:144px;
  }
  .image {
    object-fit: cover;
  }
`
