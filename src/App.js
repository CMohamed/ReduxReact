import React from 'react';
import './App.css';
import Posts from './components/Posts.js'
import PostForm from './components/Postform.js'

function App() {
  return (
    <div className="App">
      <PostForm/>
      <hr/>
      <Posts/>
    </div>
  );
}

export default App;
