import React, {useState, ReactNode} from 'react'
import Styled from 'styled-components';

export default function Header(
  {children, backgroundColor = '#179742', height}:
  {children?: ReactNode; backgroundColor?:string; height?:string}
) {
  let [HeaderOpen,setHeaderOpen] = useState(true);
  return (
    <>
      <Test>
        <HeaderContainer height={height} backgroundColor={backgroundColor} open={HeaderOpen}>
          {children}
        </HeaderContainer>
      </Test>
      <HeaderButton open={HeaderOpen} backgroundColor={backgroundColor} onClick={()=>{setHeaderOpen(!HeaderOpen);}}>{
        HeaderOpen?'<':'>'
      }</HeaderButton>
    </>
  );
}

interface HeaderProps {
  open: boolean;
  backgroundColor?: string;
  height?: string;
};

const Test = Styled.div`
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #0303034c;
    border-radius: 10px;
  }
`

const HeaderContainer = Styled.ul<HeaderProps>`
  background-color:${(props) => props?.backgroundColor};
  overflow: hidden;
  white-space: nowrap;
  color:#fffbf4;
  transition: 0.4s width linear, 0.2s height linear, 0.2s max-height linear;
  margin: 0;
  padding: 0;
  padding-top: 2px !important;
  overflow:auto;
  width:100vw;
  height: ${(props) => props.open ? props?.height:'0vh'};
  max-height: 180px;
`

export const HeaderButton = Styled.button<HeaderProps>`
  position: absolute;
  border: 1px solid #fffffe;
  color: #fffffe;
  background:${(props) => props?.backgroundColor};
  mix-blend-mode: difference;
  height:30px;
  font-weight:600;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: 0.4s left linear, 0.2s top linear;
  left:1%;
  top:-6px;
  transform: rotate(90deg);
`