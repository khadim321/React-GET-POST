import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm'

function App() {
  return (
    <div className="App">
  
        <h1>Helooo React this is http Methods</h1><br/>
        <h3>GET METHOD</h3><br/>
        <PostList/>
        <br/>
        <h3>POST METHOD</h3><br/>
        <PostForm/>
      
    </div>
  );
}

export default App;
