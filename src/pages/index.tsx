import React from 'react'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main>
        <p>
          hi, i&apos;m still building most of this things, so yeah expect some bugs
        </p>
        <p>
          also, welcome, and feel free to look what i&apos;ve done yet :)
        </p>
        <br/>
        <Link href={'/dataStructure'}>
          Data Structure
        </Link>
        <Link href={'https://anotherflix.vercel.app/'}>
          AnotherFlix
        </Link>
        <Link href={'https://spotifycloneui.netlify.app/'}>
          Spotify Ui Clone - (Old project, not really planning on finishing this one)
        </Link>
        <Link href={'https://github.com/GuztaJF-DS'}>
          My Github
        </Link>
      </main>
    </>
  );
}
