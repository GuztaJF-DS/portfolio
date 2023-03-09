import React from 'react'
import Link from 'next/link';
import { BackButton } from '@/components/BackButton';

export default function DataStructure() {
  return (
      <main>
        <BackButton />
        <Link href='/dataStructure/linkedList'>
          linkedList
        </Link>
        <Link href='/dataStructure/stacks'>
          stacks
        </Link>
      </main>
  );
}
