import React from 'react';
import BlogPage from '@/components/template/BlogPage';
import BlogData from 'public/data/blog.json';
import { IBlog } from '@/interfaces/Blog';

export default function Blog() {
  return <BlogPage postsData={BlogData as IBlog[]} />;
}
