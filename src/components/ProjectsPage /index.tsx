import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../Header';
import SimpleList from '../SimpleList';
import { MainContainer, LinkContainer, ContentDiv, IntroSection } from './styles';

export default function ProjectsPage() {
  const router = useRouter();
  const { page } = router.query;

  return (
    <MainContainer>
      <Header backgroundColor={'#179742'} height={'12vh'}>
        <LinkContainer>
          <Link href={'/'} className={'Link'}>
            ᐊ Return
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
                    <h3>Projects:</h3>{'\n'}
                    Hello, this is the Projects section, You can choose a project of mine to see:{'\n'}
                  </IntroSection>
                )
              }
            }})()
          }
      </ContentDiv>
    </MainContainer>
  );
}
