import Styled from 'styled-components';

export const FooterContainer = Styled.div`
  position:fixed;
  bottom:0px;
  display: flex;
  background: #1a1a1a;
  color:#fffbf4;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width:100vw;
  height: 8vh;
  max-height: 80px;
  transition:background-color 0.25s;
  div {
    display: flex;
    min-width:10%;
    height: 100%;
    align-items:center;
    justify-content: space-evenly;
  }

  .Link {
    color:#fffbf4;
    width:80px;
    text-align:center;
    transition:color 0.3s;
    :hover{
      font-size:1.05em;
    }
  }
`;
