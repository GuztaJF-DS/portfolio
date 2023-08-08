import React from 'react'
import { MainContainer } from './style';
import ResponsiveCoverImage from '@/components/atoms/ResponsiveCoverImage';
import Link from 'next/link';

interface CoverCardProps{
  title: string;
  subTitle: string;
  imageUrl: string;
  appUrl: string;
  gitUrl: string;
}

export default function CoverCard({ title, subTitle, imageUrl, appUrl, gitUrl }:CoverCardProps) {
  return (
  <MainContainer>
    <h4>{title}</h4>
    <ResponsiveCoverImage imageUrl={imageUrl}/>
    <h5>{subTitle}</h5>
    <Link href={appUrl} className={"Link"}>WebSite Link</Link>
    <Link href={gitUrl} className={"Link"}>Github Link</Link>
  </MainContainer>
  );
}