import React from 'react'
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation'
import SimpleList from '../../organisms/SimpleList';
import PageTemplate from '../../organisms/PageTemplate';
import ProjectCard from '@/components/molecules/ProjectCard';
import { MainContainer, CardsContainer } from './style';
import { IProjects } from '@/interfaces/Projects';

export default function ProjectsPage({projects}:{projects:IProjects[]}) {
  const router = useRouter();
  const { page } = router.query;
  const { t } = useTranslation()

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
                <h3>{t('common:projects')}:</h3>
                <p>{t('projects:intro')}</p>
                <CardsContainer>
                  {projects.map((p)=>{
                    return (
                    <ProjectCard 
                      key={p._id}
                      imageUrl={p.imageUrl}
                      title={p.title}
                      subTitle={p.subTitle}
                      projectUrl={`/projects/description?id=${p._id}`}
                    />
                  )})}
                </CardsContainer>
              </MainContainer>
            )
          }
      }})()
    }</PageTemplate>
  );
}