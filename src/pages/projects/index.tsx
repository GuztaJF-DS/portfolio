import React from 'react';
import ProjectsPage from '@/components/template/ProjectsPage';
import ProjectsData from 'public/data/projects.json';
import { IProjects } from '@/interfaces/Projects';

export default function Projects() {
  return <ProjectsPage projects={ProjectsData as IProjects[]} />;
}
