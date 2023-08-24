import Styled from 'styled-components';

interface HeaderProps {
  backgroundColor?: string;
}

export const HeaderContainer = Styled.div<HeaderProps>`
  background-color:${props => props?.backgroundColor};
  transition:background-color 0.25s;
`;

export const ShadowMaskContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:#fffbf4;
  background: linear-gradient(90deg, rgba(0,0,0,0.363) 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 75%, rgba(0,0,0,0.363) 100%);
  margin: 0;
  padding: 0;
  width:100vw;
  height: 10vh;
  max-height: 80px;
  transition:background-color 0.25s;

  .Link {
    color:#fffbf4;
    transition:color 0.3s;
  }
  @media (max-width:768px){
    height: 12vh;
  }
`;
