import React, { ReactNode } from 'react';
import { HeaderContainer, ShadowMaskContainer } from './style';

export default function Header({
  children,
  backgroundColor = '#179742',
}: {
  children?: ReactNode;
  backgroundColor?: string;
}) {
  return (
    <HeaderContainer backgroundColor={backgroundColor}>
      <ShadowMaskContainer>
        Gustavo&apos;s Portfolio
      </ShadowMaskContainer>
    </HeaderContainer>
  );
}
