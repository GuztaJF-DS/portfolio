import React from 'react'
import Link from 'next/link';
import Styled from 'styled-components';

const MainContainer = Styled.main`
  .Link {
    margin-left:12px;
  }
  i {
      margin-top:10px;
  }
`;

export default function Home() {
  return (
    <>
      <MainContainer>
        <p>
          hi, i&apos;m still building most of this things, so yeah expect some bugs
        </p>
        <p>
          also, welcome, and feel free to look what i&apos;ve done yet :)
        </p>
        <br/>
        <i>
          Studies:
        </i>
        <Link href={'/dataStructure'} className={"Link"}>
          Data Structure
        </Link>
        <i>
          Projects:
        </i>
        <Link href={'https://anotherflix.vercel.app/'} className={"Link"}>
          AnotherFlix
        </Link>
        <Link href={'https://spotifycloneui.netlify.app/'} className={"Link"}>
          Spotify Ui Clone - (Old project, not really planning on finishing this one)
        </Link>
        <i>
          Links:
        </i>
        <Link href={'https://github.com/GuztaJF-DS'} className={"Link"}>
          My Github
        </Link>
        <Link href={'https://leetcode.com/noobshippuden13/'} className={"Link"}>
          My LeetCode Profile
        </Link>
      </MainContainer>
    </>
  );
}
