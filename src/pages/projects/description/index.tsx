import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import DescriptionPage from '@/components/template/DescriptionPage';
import axios from 'axios';
import LoadingPage from '@/components/template/LoadingPage';
import { IProjects } from '@/interfaces/Projects';

export default function Home() {
    console.log()
  const router = useRouter();
  const { id } = router.query;
  const [projectData, setProjectData] = useState();
  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_PORTFOLIO_API as string}/projects`)
    .then(function (response) {
      const currentProject = response.data.find((pj:IProjects)=>{return pj._id===id});
      setProjectData(currentProject);
    })
    .catch(function (error) {
      console.error(error);
    });
  },[id]);

  return (
    <>
      {!projectData ?(()=>(
        <LoadingPage />
      ))():(()=>(
        <DescriptionPage project={projectData} />
      ))()}
    </>
  );
}
