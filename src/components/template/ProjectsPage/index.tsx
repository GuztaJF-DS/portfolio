import React, { useEffect, useState } from 'react'
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
  const { locale } = router;
  const { t } = useTranslation();

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
                  {projects?.map((p)=>{
                    const postTranslated = p.versions.find((ver)=>{
                      return ver.locale===locale;
                    });
                    console.log(postTranslated);
                    return (
                    <ProjectCard 
                      key={p._id}
                      imageUrl={postTranslated?.imageUrl || 'https://i.ibb.co/B2NBXSL/Sem-t-tulo.png'}
                      title={postTranslated?.title || 'Not Found'}
                      subTitle={postTranslated?.subTitle || ''}
                      projectUrl={`/projects/description?id=${p?._id}`}
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