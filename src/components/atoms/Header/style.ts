import Styled from 'styled-components';

export const HeaderContainer = Styled.div`
  background-color:#7e35af;
  transition:background-color 0.25s;
  width:100%;
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
  width:100%;
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
