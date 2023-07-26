import React, {ReactNode} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../atoms/Header';
import { MainContainer, LinkContainer, ContentDiv } from './style';

interface TemplateProps {
  children?: ReactNode;
  HeaderColor: string;
}

export default function PageTemplate({children, HeaderColor}:TemplateProps) {
  return (
    <MainContainer>
      <Header backgroundColor={HeaderColor} height={'12vh'}>
        <LinkContainer>
          <Link href={'/'} className={'Link'}>
            ᐊ Return
          </Link>
        </LinkContainer>
      </Header>
      <ContentDiv>
        {children}
      </ContentDiv>
    </MainContainer>
  );
}
