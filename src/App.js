/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState } from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import Post from "./components/Posts/Post"
import Posts from './components/Posts/Posts';
import SearchBar from './components/SearchBar/SearchBar';
// Import the dummyData
import dummyData from './dummy-data';
import './App.css';

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [posts, setPosts] = useState(dummyData);
  const [searchTerm, setSearchTerm] = useState('')

  const likePost = postId => {

    setPosts(posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      } else {
        return post;
      }
    })) 

  };

  return (
    <div className='App'>
      {<SearchBar setSearchTerm={setSearchTerm} />}
      {<Posts posts={posts} likePost={likePost}/>}
    </div>
  );
};

export default App;
