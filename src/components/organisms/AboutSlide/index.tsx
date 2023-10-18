import React from 'react';
import { Title } from './style';
import PrimaryContent from '@/components/atoms/PrimaryContent';
import DetailsContent from '@/components/atoms/DetailsContent';
import SlideContainer from '@/components/atoms/SlideContainer';
// import useTranslation from 'next-translate/useTranslation';

export default function AboutSlide() {
  // const { t } = useTranslation('common');
  return (
    <SlideContainer>
      <PrimaryContent>
        <Title>Portfolio</Title>
      </PrimaryContent>
      <DetailsContent backgroundColor={'#940c0c'}>About</DetailsContent>
    </SlideContainer>
  );
}
