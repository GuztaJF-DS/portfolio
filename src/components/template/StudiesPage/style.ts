import Styled from 'styled-components';

export const ContentSection = Styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  width: 80%;
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
  .Link {
    margin-top:10px;
    transition:color 0.3s;
  }
`;

export const IntroSection = Styled.div`
  white-space: pre-line;
  max-width:770px;
`;
