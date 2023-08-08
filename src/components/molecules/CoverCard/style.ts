import Styled from 'styled-components';

export const MainContainer = Styled.div`
  position: relative;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  text-align:center;
  border:20px #e0e0e0 solid;
  border-bottom:5px;
  * {
    margin-bottom:20px;
  }
  background:#e0e0e0;
  h4{
    font-size:1.1em;
  }
  h5, .Link {
    font-size:0.9em;
  }
`;
