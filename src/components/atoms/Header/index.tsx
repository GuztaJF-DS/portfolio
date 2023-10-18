import React, { ReactNode } from 'react';
import { HeaderContainer, ShadowMaskContainer } from './style';

export default function Header({ children }: { children?: ReactNode }) {
  return (
    <HeaderContainer>
      <ShadowMaskContainer>
        Gustavo&apos;s Portfolio
        {children}
      </ShadowMaskContainer>
    </HeaderContainer>
  );
}
