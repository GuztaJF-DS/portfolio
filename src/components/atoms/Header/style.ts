import Styled from 'styled-components';

interface HeaderProps {
  backgroundColor?: string;
};

export const HeaderContainer = Styled.ul<HeaderProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:${(props) => props?.backgroundColor};
  color:#fffbf4;
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
`;