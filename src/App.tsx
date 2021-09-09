import React from 'react';
import logo from './logo.svg';
import './App.css';
import { comments } from './data/comments'
import Post from './components/Post';
import Comments from './components/comments';

function App() {
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">
      
      <Post />

        {/* comments section */}
        <div className="">
        
        {comments.map(e => {return (
                <Comments username={e.username} userImagePath={e.userImagePath}  commentText={e.commentText} 
                likeNum={e.likeNum} replies={e.replies}/>)
        })}

        </div>

      </div>
    </div>
  );
}

export default App;

