import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ProjectInfo, MainContainer } from './style';
import CoverCard from '@/components/molecules/CoverCard';
import PageTemplate from '../../organisms/PageTemplate';
import { IProject, IProjects } from '@/interfaces/Projects';

export default function DescriptionPage({ project }: { project: IProjects }) {
  const router = useRouter();
  const [currentProj, setCurrentProj] = useState<IProject | undefined>();
  const { id } = router.query;
  const { locale } = router;

  useEffect(() => {
    if (project) {
      const projTranslated = project.versions.find(ver => {
        return ver.locale === locale;
      });
      setCurrentProj(projTranslated);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, locale]);

  if (!project || !currentProj) {
    return (
      <PageTemplate HeaderColor={'#179742'}>
        <h1>Project Not Found :(</h1>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate HeaderColor={'#179742'}>
      <MainContainer>
        <ProjectInfo>
          <h2>{currentProj.title}:</h2>
          <a>{currentProj.description}</a>
        </ProjectInfo>
        <CoverCard
          title={currentProj.title}
          subTitle={currentProj.subTitle}
          imageUrl={currentProj.imageUrl}
          appUrl={currentProj?.appUrl}
          gitUrl={currentProj.gitUrl}
        />
      </MainContainer>
    </PageTemplate>
  );
}
