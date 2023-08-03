import Styled from 'styled-components';

export const MainContainer = Styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  width: 70%;
    > div {
      max-width:700px
    }
  @media (max-width:768px){
    width: 90%;
    flex-direction:column;
    > div {
      margin-bottom:20px;
    }
  }
`;

export const LinkContainer = Styled.div`
  display:flex;
  flex-direction:column;
  margin-right:20px;
  width:20%;
  .Link {
    margin-top:10px;
    transition:color 0.3s;
  }
  @media (max-width:768px){
    width: 100%;
  }
`;

export const ContentContainer = Styled.div`
  display:flex;
  flex-direction:column;
  text-align:start;
  width:80%;
  a{
    font-size:0.7em;
    margin-bottom:25px;
  }
  @media (max-width:768px){
    width: 100%;
  }
`;