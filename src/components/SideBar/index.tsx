import React, {useState, ReactNode} from 'react'
import Styled from 'styled-components';

export default function SideBar(
  {children, backgroundColor = '#179742'}:{children?: ReactNode; backgroundColor?:string;}
) {
  let [sideBarOpen,setSideBarOpen] = useState(true);
  return (
    <>
      <SideBarContainer backgroundColor={backgroundColor} open={sideBarOpen}>
        {children}
      </SideBarContainer>
      <SideBarButton open={sideBarOpen} onClick={()=>{setSideBarOpen(!sideBarOpen);}}>{
        sideBarOpen?'<':'>'
      }</SideBarButton>
    </>
  );
}

interface SideBarProps {
  open: boolean;
  backgroundColor?: string;
};

const SideBarContainer = Styled.ul<SideBarProps>`
  background-color:${(props) => props?.backgroundColor};
  overflow: hidden;
  height: 100vh;
  width:${(props) => props.open ? '13vw':'0vw'};
  white-space: nowrap;
  color:#fffbf4;
  transition: 0.4s width linear, 0.2s height linear;
  margin: 0;
  padding: 0;
  padding-top: 2px !important;
  @media (max-width:768px){
    width:100vw;
    height:${(props) => props.open ? '40vh':'0vh'};
  }
`

export const SideBarButton = Styled.button<SideBarProps>`
  position: absolute;
  left:${(props) => props.open ? '13vw':'0vw'};
  height:30px;
  border: 1px solid #3d3d3d;
  background:#fffffe;
  font-weight:600;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: 0.4s left linear, 0.2s top linear;
  @media (max-width:768px){
    left:93%;
    top:-5px;
    transform: rotate(90deg);
  }
`