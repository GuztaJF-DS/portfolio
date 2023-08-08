import React, { useEffect, useState } from 'react'
import ProjectsPage from '@/components/template/ProjectsPage';
import axios from 'axios';
import LoadingPage from '@/components/template/LoadingPage';

export default function Projects() {
  const [projectData, setProjectData] = useState();
  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_PORTFOLIO_API as string}/projects`)
    .then(function (response) {
      setProjectData(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  },[]);

  return (
    <>
      {!projectData ?(()=>(
        <LoadingPage headerColor={'#179742'}/>
      ))():(()=>(
        <ProjectsPage projects={projectData} />
      ))()}
    </>
  );
}
