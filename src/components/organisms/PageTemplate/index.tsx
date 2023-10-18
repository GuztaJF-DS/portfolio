import React, { ReactNode, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Header from '../../atoms/Header';
import Footer from '../../atoms/Footer';
import { MainContainer, ContentDiv, LinkContainer } from './style';
import { PropWithChild } from '@/interfaces/common';

export default function PageTemplate({ children }: PropWithChild) {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <Header />
      <ContentDiv>{children}</ContentDiv>
      <Footer />
    </MainContainer>
  );
}
