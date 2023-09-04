import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { MainContainer, LinkContainer, ContentContainer } from './style';
import PageTemplate from '../../organisms/PageTemplate';
import { IBlog, IPostVersions } from '@/interfaces/Blog';

export default function BlogPage({ postsData }: { postsData: IBlog[] }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [currentPost, setCurrentPost] = useState<IPostVersions>({
    _id: '',
    title: t('blog:intro-title'),
    post: t('blog:intro-post'),
    locale: '',
    date: '',
  });
  const { id } = router.query;
  const { locale } = router;

  useEffect(() => {
    const post = postsData.find(post => {
      return post._id === id;
    });
    if (post) {
      const postTranslated = post.versions.find(ver => {
        return ver.locale === locale;
      });
      setCurrentPost(
        postTranslated || { ...currentPost, title: 'Post Not Found' },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, locale]);

  return (
    <PageTemplate HeaderColor={'#7e35af'}>
      <MainContainer>
        <LinkContainer>
          <h3>Blog:</h3>
          {postsData.map(post => {
            return (
              <Link key={post._id} href={'?id=' + post._id} className={'Link'}>
                {
                  post.versions.find(ver => {
                    return ver.locale === locale;
                  })?.title
                }
              </Link>
            );
          })}
        </LinkContainer>
        <ContentContainer>
          <h1>{currentPost.title}</h1>
          {id ? <a>{new Date(currentPost.date).toUTCString()}</a> : ''}
          <>{currentPost.post}</>
        </ContentContainer>
      </MainContainer>
    </PageTemplate>
  );
}
