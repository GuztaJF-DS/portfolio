import Styled from 'styled-components';

export const ContentSection = Styled.div`
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
  .Link {
    margin-top:10px;
    transition:color 0.3s;
  }
`;