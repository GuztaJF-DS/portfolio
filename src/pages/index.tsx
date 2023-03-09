import React from 'react'
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main>
        <p>
          hi
        </p>
        <Link href={'/dataStructure'}>
          ./dataStructure
        </Link>
        <Link href={'/algorithms'}>
         ./algorithms
        </Link>
      </main>
    </>
  );
}
