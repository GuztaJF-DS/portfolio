import React, {ReactNode} from 'react'
import { HeaderContainer } from './style';

export default function Header(
  {children, backgroundColor = '#179742'}:
  {children?: ReactNode; backgroundColor?:string;}
) {
  return (  
    <HeaderContainer backgroundColor={backgroundColor}>
      Gustavo&apos;s Portfolio
      {children}
    </HeaderContainer>
  );
}