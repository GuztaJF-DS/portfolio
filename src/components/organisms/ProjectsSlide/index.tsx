import React from 'react';
import {
  Title,
} from './style';
import SlideContainer from '@/components/atoms/SlideContainer';
import PrimaryContent from '@/components/atoms/PrimaryContent';
import DetailsContent from '@/components/atoms/DetailsContent';
// import useTranslation from 'next-translate/useTranslation';

export default function ProjectsSlide() {;
  // const { t } = useTranslation('common');
  return (
    <SlideContainer>
      <PrimaryContent>
        <Title>Portfolio</Title>
      </PrimaryContent>
          <DetailsContent backgroundColor={'#0c9423'}>Projects</DetailsContent>
    </SlideContainer>
  );
}
