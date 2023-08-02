import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import PageTemplate from '../../organisms/PageTemplate';

export default function LoadingPage() {
  const { t } = useTranslation();

  return (
    <PageTemplate HeaderColor={'#179742'}>
      {t('common:loading')}...
    </PageTemplate>
  );
}
