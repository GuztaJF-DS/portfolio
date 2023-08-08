import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import BlogPage from '@/components/template/BlogPage';
import axios from 'axios';
import LoadingPage from '@/components/template/LoadingPage';

export default function Blog() {
  const router = useRouter();
  const { id } = router.query;
  const [postsData, setPostsData] = useState();
  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_PORTFOLIO_API as string}/posts`)
    .then(function (response) {
      setPostsData(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  },[id]);

  return (
    <>
      {!postsData ?(()=>(
        <LoadingPage headerColor={'#7e35af'}/>
      ))():(()=>(
        <BlogPage postsData={postsData} />
      ))()}
    </>
  );
}
