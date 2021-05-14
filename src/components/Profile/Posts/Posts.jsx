import React from 'react';

import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>

      </div>
      <div className={s.posts}>
        <Post message="Hey" />
        <Post message="Yo" />
      </div>
    </div>
  );
};

export default Posts;