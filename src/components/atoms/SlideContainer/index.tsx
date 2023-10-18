import React from 'react';
import { MainContainer } from './style';
import { PropWithChild } from '@/interfaces/common';

export default function SlideContainer({ children }: PropWithChild) {
  return <MainContainer>{children}</MainContainer>;
}
