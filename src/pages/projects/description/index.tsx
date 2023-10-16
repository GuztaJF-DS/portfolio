import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DescriptionPage from '@/components/template/DescriptionPage';
import LoadingPage from '@/components/template/LoadingPage';
import ProjectsData from 'public/data/projects.json';
import { IProjects } from '@/interfaces/Projects';

export default function Description() {
  const router = useRouter();
  const { id } = router.query;
  const [projectData, setProjectData] = useState<IProjects>();
  useEffect(() => {
    const currentProject = (ProjectsData as IProjects[]).find(
      (pj: IProjects) => {
        return pj._id === id;
      },
    );
    setProjectData(currentProject);
  }, [id]);

  return (
    <>
      {!projectData
        ? (() => <LoadingPage headerColor={'#179742'} />)()
        : (() => <DescriptionPage project={projectData} />)()}
    </>
  );
}
