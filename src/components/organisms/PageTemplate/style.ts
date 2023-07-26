import Styled from 'styled-components';

export const MainContainer = Styled.div`
  display:flex;
  align-items:flex-start;
  flex-direction:column;
`;

export const ContentDiv = Styled.div`
  padding:20px 35px;
  @media (max-width:768px){
    width:100%;
    padding:20px 15px;
  }
`;

export const LinkContainer = Styled.li`
  padding:24px 15px 0px 22px;
  display:flex;
  flex-direction:column;
  .Link {
    margin-bottom:10px;
    color:#fffbf4;
    background-color:#4b202000;
    transition:color 0.3s;
  }
`;
