import Styled from 'styled-components';

export const MainContainer = Styled.div`
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  @media (max-width:768px){
    flex-direction:column;
  } 
`;

export const LinkContainer = Styled.li`
  color:#fffbf4;
  background: transparent;
  padding:5px;
`;

export const ContentDiv = Styled.div`
  padding:15px 35px;
  @media (max-width:768px){
    width:100%;
    padding:20px 15px;
  }
`;

export const IntroSection = Styled.div`
  white-space: pre-line;
`;