import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FooterContainer } from './style';

export default function Footer() {
  const { asPath } = useRouter();

  return (  
    <FooterContainer>
      <div>
        <Link
          href={'https://github.com/GuztaJF-DS'}
          className={"Link"}
        >
          Github
        </Link>
        <Link
          href={'https://leetcode.com/noobshippuden13/'}
          className={"Link"}
        >
          LeetCode
        </Link>
      </div>
      <div>
        <Link 
          href={asPath} 
          locale="pt-BR"
          className={"Link"}
        >
          PT-BR
        </Link>
        <Link 
          href={asPath}
          locale="en-US"
          className={"Link"}
        >
          EN-US
        </Link>
      </div>
    </FooterContainer>
  );
}