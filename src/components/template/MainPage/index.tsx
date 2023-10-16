import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  MainContainer,
  SlideContainer,
  LeftContainer,
  RightContainer,
  Title,
  SlideButton,
} from './styles';
// import useTranslation from 'next-translate/useTranslation';


export default function MainPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const divRef = useRef<HTMLDivElement | null>(null);

  function handleScroll(event: WheelEvent) {
    const delta = event.deltaY;
    if (delta > 0) {
      NextSlide();
    } else if (delta < 0) {
      PreviousSlide();
    }
  }

  useEffect(() => {
    if (divRef.current) {
      divRef.current.addEventListener('wheel', handleScroll, { passive: true });

      return () => {
        if (divRef.current) {
          divRef.current.removeEventListener('wheel', handleScroll);
        }
      };
    }
  }, [divRef, currentSlide]);

  function NextSlide(){
    if(currentSlide<2){
      setCurrentSlide(currentSlide+1);
    }
  }

  function PreviousSlide(){
    if(currentSlide>0){
      setCurrentSlide(currentSlide-1);
    }
  }
  // const { t } = useTranslation('common');
  
  return (
    <>
    <MainContainer currentSlide={currentSlide} ref={divRef}>
      <SlideContainer>
        <LeftContainer>
          <Title>Portfolio</Title>
        </LeftContainer>
        <RightContainer backgroundColor={'#0c9482'} >
          Intro
        </RightContainer>
      </SlideContainer>
      <SlideContainer>
        <LeftContainer>
          <Title>Portfolio</Title>
        </LeftContainer>
        <RightContainer backgroundColor={'#940c0c'} >
          About
        </RightContainer>
      </SlideContainer>
      <SlideContainer>
        <LeftContainer>
          <Title>Portfolio</Title>
        </LeftContainer>
        <RightContainer backgroundColor={'#0c9423'} >
          Projects
        </RightContainer>
      </SlideContainer>
    </MainContainer>
      <SlideButton
        onClick={PreviousSlide}
        prev
      >
        Prev
      </SlideButton>
      <SlideButton
        onClick={NextSlide}
      >
        Next
      </SlideButton>
    </>
  );
}
