import Styled from 'styled-components';

export const MainContainer = Styled.div`
  display: flex;
  flex-direction:column;
  max-width:1120px;
  word-break: break-word;
  @media (max-width:768px){
    font-size:0.8em;
  }
  @media (max-width:598px){
    font-size:0.6em;
  }
  @media (max-width:425px){
    font-size:0.6em;
    max-width:80vw;
  }
`

export const CardsContainer = Styled.div`
  margin-top:20px;
  display:grid;
  grid-template-columns: 25vw  25vw 25vw;
	gap: 20px;
  @media(min-width:1440px){
    grid-template-columns: 360px  360px 360px;
  }
  @media (max-width:890px){
    grid-template-columns: 36vw  36vw;
  }
  @media (max-width:425px){
    grid-template-columns: 80vw;
  }
`