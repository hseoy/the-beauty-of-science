import React from 'react';
import PopularPosts from 'components/home/PopularPosts';

const PopularPostsContainer = () => {
  // @TODO Get a list of popular posts from the server
  const post = {
    thumbnailImage: '#',
    date: '2021.03.10',
    title: 'ABCD',
    author: {
      name: 'Yunseo Hwang',
      level: 1,
    },
  };
  const posts = [
    { ...post, id: 1 },
    { ...post, id: 2 },
    { ...post, id: 3 },
    { ...post, id: 4 },
    { ...post, id: 5 },
    { ...post, id: 6 },
    { ...post, id: 7 },
    { ...post, id: 8 },
    { ...post, id: 9 },
    { ...post, id: 10 },
    { ...post, id: 11 },
    { ...post, id: 12 },
  ];

  return <PopularPosts posts={posts} />;
};

export default PopularPostsContainer;
