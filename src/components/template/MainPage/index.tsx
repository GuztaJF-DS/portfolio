import React, { useEffect, useRef, useState } from 'react';
import {
  MainContainer,
  SlideContainer,
  LeftContainer,
  RightContainer,
  Title,
  SlideButton,
} from './styles';
import { useSwipeable } from 'react-swipeable';
// import useTranslation from 'next-translate/useTranslation';


export default function MainPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const divRef = useRef<HTMLDivElement | null>(null);

  const handlers = useSwipeable({
    onSwipedDown: () => PreviousSlide(true),
    onSwipedUp: () => NextSlide(true),
    trackMouse: true
  });

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

  function sleep(duration:number) {
    return new Promise((resolve) => {
      setTimeout(resolve, duration)
    })
  }

  async function NextSlide(swipping=false){
    if(!swipping){
      await sleep(150);
    }
    if(currentSlide<2){
      setCurrentSlide(currentSlide+1);
    }
  }

  async function PreviousSlide(swipping=false){
    if(!swipping){
      await sleep(150);
    }
    if(currentSlide>0){
      setCurrentSlide(currentSlide-1);
    }
  }
  // const { t } = useTranslation('common');
  
  return (
    <>
    <MainContainer {...handlers} currentSlide={currentSlide} ref={divRef}>
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
        onClick={()=>PreviousSlide()}
        prev
      >
        Prev
      </SlideButton>
      <SlideButton
        onClick={()=>NextSlide()}
      >
        Next
      </SlideButton>
    </>
  );
}
