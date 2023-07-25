import React, {useState, ReactNode} from 'react'
import Styled from 'styled-components';

export default function TopBar(
  {children, backgroundColor = '#179742'}:{children?: ReactNode; backgroundColor?:string;}
) {
  let [TopBarOpen,setTopBarOpen] = useState(true);
  return (
    <>
      <Test>
        <TopBarContainer backgroundColor={backgroundColor} open={TopBarOpen}>
          {children}
        </TopBarContainer>
      </Test>
      <TopBarButton open={TopBarOpen} onClick={()=>{setTopBarOpen(!TopBarOpen);}}>{
        TopBarOpen?'<':'>'
      }</TopBarButton>
    </>
  );
}

interface TopBarProps {
  open: boolean;
  backgroundColor?: string;
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

const TopBarContainer = Styled.ul<TopBarProps>`
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
  height: ${(props) => props.open ? '21vh':'0vh'};
  max-height: 180px;
`

export const TopBarButton = Styled.button<TopBarProps>`
  position: absolute;
  border: 1px solid #3d3d3d;
  background:#fffffe;
  height:30px;
  font-weight:600;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: 0.4s left linear, 0.2s top linear;
  left:1%;
  top:-6px;
  transform: rotate(90deg);
`