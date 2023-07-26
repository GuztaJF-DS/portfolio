import React from 'react'
import { useRouter } from 'next/router';
import SimpleList from '../../organisms/SimpleList';
import PageTemplate from '../../organisms/PageTemplate';

export default function BlogPage() {
  const router = useRouter();
  const { page } = router.query;

  return (
    <PageTemplate HeaderColor={'#8424c4'}>{
      (()=>{
        switch(page){
          case 'SimpleList':{
            return(
              <SimpleList />
            )
          }
          default: {
            return (
              <div>
                <h3>Blog:</h3>{'\n'}
                Hello, this is the Blog section, i will be making some posts, about things, not necessarily about Computers:{'\n'}
              </div>
            )
          }
      }})()
    }</PageTemplate>
  );
}
