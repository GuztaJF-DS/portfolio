import React from 'react'
import Link from 'next/link';
import { MainContainer, ContentContainer, LinkContainer } from './style';
import ResponsiveCardImage from '@/components/atoms/ResponsiveCardImage';

interface ProjectCardProps{
  imageUrl: string;
  title: string;
  subTitle: string;
  projectUrl: string;
}

export default function ProjectCard({ imageUrl, title, subTitle, projectUrl }:ProjectCardProps) {
  return (
  <MainContainer>
    <ResponsiveCardImage imageUrl={imageUrl}/>
    <ContentContainer>
      <div>
        <h3>{title}</h3>
        <h5>{subTitle}</h5>
      </div>
      <LinkContainer>
        <Link href={projectUrl} className={'Link'}>
          More...
        </Link>
      </LinkContainer>
    </ContentContainer>
  </MainContainer>
  );
}