import Link from 'next/link';
import React from 'react'
import { FooterContainer } from './style';

export default function Footer() {
  return (  
    <FooterContainer>
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
    </FooterContainer>
  );
}