import React from 'react'
import { useRouter } from 'next/router';
import SimpleList from '../../organisms/SimpleList';
import PageTemplate from '../../organisms/PageTemplate';
import ProjectCard from '@/components/molecules/ProjectCard';
import { MainContainer, CardsContainer } from './style';

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
              <MainContainer>
                <h3>Projects:</h3>
                <p>Hello, this is the Projects section, You can choose a project of mine to see:</p>
                <CardsContainer>
                  <ProjectCard 
                    imageUrl='https://i.ibb.co/4dY2hWw/blur.jpg'
                    title='AnotherFlix'
                    subTitle='An Netflix UI Clone'
                    projectUrl='/projects/description?id=1'
                  />
                  <ProjectCard 
                    imageUrl='https://i.ibb.co/4dY2hWw/blur.jpg'
                    title='Spotify UI Clone'
                    subTitle='The name says it all'
                    projectUrl='/projects/description?id=2'
                  />
                  <ProjectCard 
                    imageUrl='https://i.ibb.co/4dY2hWw/blur.jpg'
                    title='API Requester'
                    subTitle='An app to show my APIs (or another one)'
                    projectUrl='/projects/description?id=3'
                  />
                </CardsContainer>
              </MainContainer>
            )
          }
      }})()
    }</PageTemplate>
  );
}