import React from 'react'
import { useRouter } from 'next/router';
import SimpleList from '../../organisms/SimpleList';
import { IntroSection } from './style';
import PageTemplate from '../../organisms/PageTemplate';

export default function ProjectsPage() {
  const router = useRouter();
  const { page } = router.query;

  return (
    <PageTemplate HeaderColor={'#179742'}>{
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
    }</PageTemplate>
  );
}
