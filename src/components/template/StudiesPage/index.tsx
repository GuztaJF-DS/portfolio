import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import SimpleList from '../../organisms/SimpleList';
import { ContentSection, LinkContainer, IntroSection } from './style';
import PageTemplate from '../../organisms/PageTemplate';

export default function StudiesPage() {
  const router = useRouter();
  const { page } = router.query;
  const { t } = useTranslation();

  return (
    <PageTemplate HeaderColor={'#1d5283'}>
      <ContentSection>
        <LinkContainer>
          <h3>{t('common:studies')}:</h3>
          <Link href={'/studies'} className={'Link'}>
            {t('studies:section1')}
          </Link>
          <Link href={'?page=SimpleList'} className={'Link'}>
            {t('studies:section2')}
          </Link>
        </LinkContainer>
        {(() => {
          switch (page) {
            case 'SimpleList': {
              return <SimpleList />;
            }
            default: {
              return <IntroSection>{t('studies:intro')}</IntroSection>;
            }
          }
        })()}
      </ContentSection>
    </PageTemplate>
  );
}
