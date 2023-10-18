import React from 'react';
import { MainContainer } from './style';
import { PropWithChild } from '@/interfaces/common';

export default function PrimaryContent({ children }: PropWithChild) {
  return <MainContainer>{children}</MainContainer>;
}
