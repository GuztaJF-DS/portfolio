import Styled from 'styled-components';

export const ContentSection = Styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  width: 80%;
`;

export const LinkContainer = Styled.div`
  display:flex;
  flex-direction:column;
  .Link {
    margin-top:10px;
    transition:color 0.3s;
  }
`;

export const IntroSection = Styled.div`
  white-space: pre-line;
`;