import React, { ReactNode } from 'react';
import { MainContainer } from './style';

interface DetailsProp {
  children?: ReactNode;
  backgroundColor: string;
}

export default function DetailsContent({
  children,
  backgroundColor,
}: DetailsProp) {
  return (
    <MainContainer backgroundColor={backgroundColor}>{children}</MainContainer>
  );
}
