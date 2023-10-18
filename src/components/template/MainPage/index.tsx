import React, { useEffect, useRef, useState } from 'react';
import { MainContainer, SlideButton } from './style';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import IntroSlide from '@/components/organisms/IntroSlide';
import AboutSlide from '@/components/organisms/AboutSlide';
import ProjectsSlide from '@/components/organisms/ProjectsSlide';

export default function MainPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const MainRef = useRef<HTMLDivElement | null>(null);

  const Swipehandlers = useSwipeable({
    onSwipedDown: () => PreviousSlide(true),
    onSwipedUp: () => NextSlide(true),
    trackMouse: true,
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
    const currentRef = MainRef?.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleScroll, {
        passive: true,
      });

      return () => {
        currentRef.removeEventListener('wheel', handleScroll);
      };
    }
  }, [MainRef, currentSlide]);

  function sleep(duration: number) {
    return new Promise(resolve => {
      setTimeout(resolve, duration);
    });
  }

  async function NextSlide(swipping = false) {
    if (!swipping) {
      await sleep(150);
    }
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  async function PreviousSlide(swipping = false) {
    if (!swipping) {
      await sleep(150);
    }
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  return (
    <div {...Swipehandlers}>
      <MainContainer currentSlide={currentSlide} ref={MainRef}>
        <IntroSlide />
        <AboutSlide />
        <ProjectsSlide />
      </MainContainer>
      <SlideButton onClick={() => PreviousSlide()} prev>
        <Image priority src="/pointer.svg" height={32} width={32} alt="svg" />
      </SlideButton>
      <SlideButton onClick={() => NextSlide()}>
        <Image priority src="/pointer.svg" height={32} width={32} alt="svg" />
      </SlideButton>
    </div>
  );
}
