import React from 'react'
import Link from 'next/link';
import { MainContainer, AnimatedTitle, AnimatedSubTitle, LinkContainer } from './styles';

export default function Home() {
  return (
    <>
      <MainContainer>
        <AnimatedTitle>Hello...</AnimatedTitle>
        <AnimatedSubTitle>Is there anybody in there?...</AnimatedSubTitle>
        <LinkContainer>
          <Link href={'https://anotherflix.vercel.app/'} className={"Link"}>
            Projects
          </Link>
          <Link href={'https://anotherflix.vercel.app/'} className={"Link"}>
            Studies
          </Link>
          <Link href={'https://anotherflix.vercel.app/'} className={"Link"}>
            Blog
          </Link>
        </LinkContainer>
      </MainContainer>
    </>
  );
}
