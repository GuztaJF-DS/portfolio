import React from 'react'
import { ProjectInfo, MainContainer } from './style';
import CoverCard from '@/components/molecules/CoverCard';
import PageTemplate from '../../organisms/PageTemplate';

export default function DescriptionPage({project}:any) {
  if(!project){
    return (
      <PageTemplate HeaderColor={'#179742'}>
        <h1>
          Project Not Found :(
        </h1>
      </PageTemplate>
    )
  }

  return (
    <PageTemplate HeaderColor={'#179742'}>
      <MainContainer>
        <ProjectInfo>
          <h2>{project.title}:</h2>
          <a>{project.description}</a>
        </ProjectInfo>
        <CoverCard 
          title={project.title}
          subTitle={project.subTitle}
          imageUrl={project.imageUrl}
          appUrl={project.appUrl}
          gitUrl={project.gitUrl}
        />
      </MainContainer>
    </PageTemplate>
  );
}
