import React from 'react'
import Link from 'next/link';
import { MainContainer, AnimatedTitle, AnimatedSubTitle } from './styles';

export default function Home() {
  return (
    <>
      <MainContainer>
        <AnimatedTitle>Hello...</AnimatedTitle>
        <AnimatedSubTitle>Is there anybody in there?...</AnimatedSubTitle>
      </MainContainer>
    </>
  );
}
