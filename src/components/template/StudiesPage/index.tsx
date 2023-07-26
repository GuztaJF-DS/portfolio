import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

import Header from '../../atoms/Header';
import SimpleList from '../../organisms/SimpleList';
import { MainContainer, LinkContainer, ContentDiv, IntroSection } from './style';

export default function StudiesPage() {
  const router = useRouter();
  const { page } = router.query;

  return (
    <MainContainer>
      <Header height='21vh' backgroundColor={'#1d5283'}>
        <LinkContainer>
          <Link href={'/'} className={'Link'}>
            ᐊ Return
          </Link>
          <Link href={'/studies'} className={'Link'}>
            Introduction
          </Link>
          <Link href={'?page=SimpleList'} className={'Link'}>
            Simple Linked List
          </Link>
        </LinkContainer>
      </Header>
      <ContentDiv>
          {
            (()=>{
            switch(page){
              case 'SimpleList':{
                return(
                  <SimpleList />
                )
              }
              default: {
                return (
                  <IntroSection>
                    <h3>Studies:</h3>{'\n'}
                    Hello, this is the studies section, here i will show some programming concepts, paradigms{'\n'}
                    algorithms, and data structures.{'\n'}
                    This is probably the one that will take longer to make, mainly because i not only have to{'\n'}
                    learn the thing, but i also have to make it work and explain it, so expect a snail&apos;s pace here.{'\n'}
                    Anyway, feel free to look at the stuff I&apos;ve already done :){'\n'}
                  </IntroSection>
                )
              }
            }})()
          }
      </ContentDiv>
    </MainContainer>
  );
}
