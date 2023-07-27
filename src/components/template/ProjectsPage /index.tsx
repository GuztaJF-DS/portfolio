import React from 'react'
import { useRouter } from 'next/router';
import SimpleList from '../../organisms/SimpleList';
import PageTemplate from '../../organisms/PageTemplate';
import ProjectCard from '@/components/molecules/ProjectCard';

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
              <div>
                <h3>Projects:</h3>{'\n'}
                Hello, this is the Projects section, You can choose a project of mine to see:{'\n'}
                <ProjectCard imageUrl='' title='Title' subTitle='Sub Title' projectUrl='/projects/description?title=title' />
              </div>
            )
          }
      }})()
    }</PageTemplate>
  );
}
