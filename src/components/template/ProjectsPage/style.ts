import Styled from 'styled-components';

export const MainContainer = Styled.div`
  display: flex;
  flex-direction:column;
  max-width:1120px;
  word-break: break-word;
  @media (max-width:1440px){
    max-width:90vw;
  }
  > h3{
    font-size: 18px;
  }
  > p {
    font-size: 16px;
  }
`;
export const CardsContainer = Styled.div`
  margin-top:20px;
  display:grid;
  grid-template-columns: 25vw  25vw 25vw;
	gap: 20px;
  @media(min-width:1440px){
    grid-template-columns: 360px  360px 360px;
  }
  @media (max-width:768px){
    grid-template-columns: 40vw  40vw;
  }
  @media (max-width:675px){
    grid-template-columns: 90vw;
  }
`;
