import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BlogPage from '@/components/template/BlogPage';
import axios from 'axios';
import LoadingPage from '@/components/template/LoadingPage';
import BlogData from 'public/data/blog.json';
import { IBlog } from '@/interfaces/Blog';

export default function Blog() {
  return <BlogPage postsData={BlogData as IBlog[]} />;
}
