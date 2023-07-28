import Styled from 'styled-components';

export const MainContainer = Styled.div`
  display: flex;
  width:100%;
  height:10vw;
  @media (max-width:768px){
    height:15vw;
  }
  @media (min-width:1440px){
    height:144px;
  }
`;

export const ContentContainer = Styled.div`
  display: flex;
  padding:10px;
  width: 70%;
  justify-content:space-between;
  background:#e7e7e7;
  h5 {
    font-weight:500;
    font-size:0.82em;
  }

  @media (max-width:1130px){
    font-size:0.7em;
  }
  @media (max-width:890px){
    font-size:0.7em;
  }
  @media (max-width:425px){
    width: 85%;
    font-size:1em;
  }
`;

export const LinkContainer = Styled.div`
  display: flex;
  word-break: keep-all;
  font-size:0.8em;
  align-items:flex-end;
  .Link:hover{
    font-size:1.02em;
    font-weight:600;
  }
`;
