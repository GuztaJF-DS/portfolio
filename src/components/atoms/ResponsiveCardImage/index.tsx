import React from 'react'
import Image from 'next/image'
import { ImageContainer } from './style';

export default function ResponsiveCardImage({imageUrl}:{imageUrl:string}) {
  return (  
    <ImageContainer>
      <Image
        src={imageUrl}
        fill={true}
        className={'image'}
        alt="Blur"
      />
    </ImageContainer>
  );
}