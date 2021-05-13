import React from 'react';

import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>

      </div>
      <div className={s.posts}>
        <Post message="Hey" />
        <Post message="Yo" />
      </div>
    </div>
  );
};

export default Posts;