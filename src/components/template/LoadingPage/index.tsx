import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import PageTemplate from '../../organisms/PageTemplate';

export default function LoadingPage({ headerColor }: { headerColor: string }) {
  const { t } = useTranslation();

  return (
    <PageTemplate HeaderColor={headerColor}>
      {t('common:loading')}...
    </PageTemplate>
  );
}
