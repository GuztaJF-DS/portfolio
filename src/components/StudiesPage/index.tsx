import React from 'react'
import SideBar from '../SideBar';
import SimpleList from '../SimpleList';
import { MainContainer, LinkContainer, ContentDiv, IntroSection } from './styles';
import { useRouter } from 'next/router';

export default function StudiesPage() {
  const router = useRouter();
  const { page } = router.query;

  return (
    <MainContainer>
      <SideBar backgroundColor={'#1d5283'}>
        <LinkContainer>test</LinkContainer>
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
                    algorithms and data structures.{'\n'}
                    This is probably the one that will take the longer to make, mainly because i not only have{'\n'}
                    to learn the thing, but i also have to make it work and explain it, so expect a snail pace here.{'\n'}
                    Anyway, fell free to look to the stuff i&apos;ve already done :)
                  </IntroSection>
                )
              }
            }})()
          }
      </ContentDiv>
    </MainContainer>
  );
}
