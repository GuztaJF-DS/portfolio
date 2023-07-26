import React, {useState, ReactNode} from 'react'
import { MainContainer, HeaderContainer, HeaderButton } from './style';

export default function Header(
  {children, backgroundColor = '#179742', height}:
  {children?: ReactNode; backgroundColor?:string; height?:string}
) {
  let [HeaderOpen,setHeaderOpen] = useState(true);
  return (
    <>
      <MainContainer>
        <HeaderContainer height={height} backgroundColor={backgroundColor} open={HeaderOpen}>
          {children}
        </HeaderContainer>
      </MainContainer>
      <HeaderButton open={HeaderOpen} backgroundColor={backgroundColor} onClick={()=>{setHeaderOpen(!HeaderOpen);}}>{
        HeaderOpen?'<':'>'
      }</HeaderButton>
    </>
  );
}