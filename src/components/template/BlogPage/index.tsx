import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ContentSection, LinkContainer } from './style';
import PageTemplate from '../../organisms/PageTemplate';

export default function BlogPage() {
  const router = useRouter();
  const { page } = router.query;

  return (
    <PageTemplate HeaderColor={'#7e35af'}>
      <ContentSection>
        <LinkContainer>
          <h3>Blog:</h3>
          <Link href={'/studies'} className={'Link'}>
            Introduction
          </Link>
        </LinkContainer>
        {
        (()=>{
          switch(page){
            default: {
              return (
                <div>
                  Hello, this is the Blog section, i will be making some posts, about things, not necessarily about Computers
                </div>
              )
            }
        }})()
      }
      </ContentSection>
    </PageTemplate>
  );
}
