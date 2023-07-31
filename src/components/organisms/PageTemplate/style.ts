import Styled from 'styled-components';

export const MainContainer = Styled.div`
  display:flex;
  align-items:flex-start;
  flex-direction:column;
`;

export const ContentDiv = Styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  padding:40px 35px;
  margin-bottom:4vh;
  @media (max-width:768px){
    padding:20px 15px;
  }
`;

export const LinkContainer = Styled.div`
  width: 30%;
  display:flex;
  justify-content:space-between;
  .Link {
    text-align:center;
    width: 33%;
  }

  @media (max-width:768px){
    width: 70%;
  }
`;