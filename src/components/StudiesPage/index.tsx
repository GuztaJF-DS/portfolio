import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import SideBar from '../TopBar';
import SimpleList from '../SimpleList';
import { MainContainer, LinkContainer, ContentDiv, IntroSection } from './styles';

export default function StudiesPage() {
  const router = useRouter();
  const { page } = router.query;

  return (
    <MainContainer>
      <SideBar backgroundColor={'#1d5283'}>
        <LinkContainer>
          <Link href={'/'} className={'Link'}>
            Main Page
          </Link>
          <Link href={'/studies'} className={'Link'}>
            Introduction
          </Link>
          <Link href={'?page=SimpleList'} className={'Link'}>
            Simple Linked List
          </Link>
        </LinkContainer>
      </SideBar>
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
                    <h3>Introduction:</h3>{'\n'}
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
