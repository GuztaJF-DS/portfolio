import React, { ReactNode, useState } from 'react'
import Link from 'next/link';
import Header from '../../atoms/Header';
import Footer from '../../atoms/Footer';
import { MainContainer, ContentDiv, LinkContainer } from './style';

interface TemplateProps {
  children?: ReactNode;
  HeaderColor: string;
}

export default function PageTemplate({children, HeaderColor}:TemplateProps) {
  let [currentColor,setCurrentColor] = useState(HeaderColor)
  ;
  return (
    <MainContainer>
      <Header backgroundColor={currentColor}>
        <LinkContainer>
          <Link 
            onMouseOver={()=>{setCurrentColor("#179742")}}
            onMouseOut={()=>{setCurrentColor(HeaderColor)}}
            href={'/projects'}
            className={"Link"}
          >
            Projects
          </Link>
          <Link 
            onMouseOver={()=>{setCurrentColor("#1d5283")}}
            onMouseOut={()=>{setCurrentColor(HeaderColor)}}
            href={'/studies'}
            className={"Link"}
          >
            Studies
          </Link>
          <Link 
            onMouseOver={()=>{setCurrentColor("#7e35af")}}
            onMouseOut={()=>{setCurrentColor(HeaderColor)}}
            href={'/blog'}
            className={"Link"}
          >
            Blog
          </Link>
        </LinkContainer>
      </Header>
      <ContentDiv>
        {children}
      </ContentDiv>
      <Footer />
    </MainContainer>
  );
}
