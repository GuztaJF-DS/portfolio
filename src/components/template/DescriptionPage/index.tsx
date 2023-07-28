import React from 'react'
import { useRouter } from 'next/router';
import { ProjectInfo, MainContainer } from './style';
import CoverCard from '@/components/molecules/CoverCard';
import PageTemplate from '../../organisms/PageTemplate';
import projectsDescription from '../../../dataMocks/ProjectsDescription.json';

export default function DescriptionPage() {
  const router = useRouter();
  const { id } = router.query;
  const currentProject = projectsDescription.find((pj)=>{return pj.id===id});

  if(!currentProject){
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
          <h2>{currentProject.Name}:</h2>
          <a>{currentProject.Description}</a>
        </ProjectInfo>
        <CoverCard 
          title={currentProject.Name}
          subTitle={currentProject.SubTitle}
          imageUrl={currentProject.ImageUrl}
          siteLink={currentProject.Link}
          gitLink={currentProject.GitLink}
        />
      </MainContainer>
    </PageTemplate>
  );
}
