import React from 'react'
import { MainContainer } from './style';
import ResponsiveCoverImage from '@/components/atoms/ResponsiveCoverImage';
import Link from 'next/link';

interface CoverCardProps{
  title: string;
  subTitle: string;
  imageUrl: string;
  siteLink: string;
  gitLink: string;
}

export default function CoverCard({ title, subTitle, imageUrl, siteLink, gitLink }:CoverCardProps) {
  return (
  <MainContainer>
    <h4>{title}</h4>
    <ResponsiveCoverImage imageUrl={imageUrl}/>
    <h4>{subTitle}</h4>
    <Link href={siteLink}>WebSite Link</Link>
    <Link href={gitLink}>Github Link</Link>
  </MainContainer>
  );
}