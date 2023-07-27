import React from 'react'
import Image from 'next/image'
import { ImageContainer } from './style';

export default function ResponsiveCardImage(
) {
  return (  
    <ImageContainer>
      <Image
        src="https://i.ibb.co/4dY2hWw/blur.jpg"
        fill={true}
        alt="Blur"
      />
    </ImageContainer>
  );
}