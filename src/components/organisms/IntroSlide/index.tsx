import React from 'react';
import { Title } from './style';
import PrimaryContent from '@/components/atoms/PrimaryContent';
import DetailsContent from '@/components/atoms/DetailsContent';
import SlideContainer from '@/components/atoms/SlideContainer';
// import useTranslation from 'next-translate/useTranslation';

export default function IntroSlide() {
  // const { t } = useTranslation('common');
  return (
    <SlideContainer>
      <PrimaryContent>
        <Title>Portfolio</Title>
      </PrimaryContent>
      <DetailsContent backgroundColor={'#470c94'}>Intro</DetailsContent>
    </SlideContainer>
  );
}
