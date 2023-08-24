import React, { useState } from 'react';
import Link from 'next/link';
import {
  MainContainer,
  AnimatedTitle,
  AnimatedSubTitle,
  LinkContainer,
} from './styles';
import useTranslation from 'next-translate/useTranslation';

export default function MainPage() {
  let [currentColor, setCurrentColor] = useState('#d63131');
  const { t } = useTranslation('common');
  return (
    <>
      <MainContainer>
        <AnimatedTitle>Hello...</AnimatedTitle>
        <AnimatedSubTitle>Is there anybody in there?...</AnimatedSubTitle>
        <LinkContainer currentColor={currentColor}>
          <Link
            onMouseOver={() => {
              setCurrentColor('#179742');
            }}
            onMouseOut={() => {
              setCurrentColor('#d63131');
            }}
            href={'/projects'}
            className={'Link'}
          >
            {t('projects')}
          </Link>
          <Link
            onMouseOver={() => {
              setCurrentColor('#1d5283');
            }}
            onMouseOut={() => {
              setCurrentColor('#d63131');
            }}
            href={'/studies'}
            className={'Link'}
          >
            {t('studies')}
          </Link>
          <Link
            onMouseOver={() => {
              setCurrentColor('#7e35af');
            }}
            onMouseOut={() => {
              setCurrentColor('#d63131');
            }}
            href={'/blog'}
            className={'Link'}
          >
            Blog
          </Link>
        </LinkContainer>
      </MainContainer>
    </>
  );
}
