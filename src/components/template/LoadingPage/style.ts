import Styled from 'styled-components';

export const MainContainer = Styled.div`
  display: flex;
  max-width:870px;
  justify-content: center;
  @media (max-width:768px){
    flex-direction:column-reverse;
    *{
      margin-bottom:15px;
    }
  }
`

export const ProjectInfo = Styled.div`
  display: flex;
  flex-direction:column;
  min-width: 50%;
  padding-right:30px;
  white-space: pre-line;
  
  * {
    margin-bottom:10px;
  }

  @media (max-width:768px){
    width: 100%;
  }
`