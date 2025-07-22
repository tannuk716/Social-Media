import React from 'react';
import PostShare from '../PostShare/PostShare';
import Posts from '../Posts/Posts';

const PostSide = () => {
  return (
    <div className="flex flex-col gap-4 h-screen overflow-auto">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;
