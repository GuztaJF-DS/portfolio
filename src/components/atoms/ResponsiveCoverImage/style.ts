import Styled from 'styled-components';

export const ImageContainer = Styled.div`
  position: relative;
  width:20vw;
  height:20vw;
  @media (max-width:768px){
    width:30vw;
    height:30vw;
  }
  @media (max-width:425px){
    width:45vw;
    height:45vw;
  }
  @media (min-width:1440px){
    width:144px;
    height:144px;
  }
  .image {
    object-fit: cover;
  }
`;
