import React, { useState } from 'react';

import Post from '../Post';
import Header from '../Header';

import { Title } from './styles';

import { ThemeProvider } from '../../context/ThemeContext';

function App() {
  const [posts, setPosts] = useState([
      { id: Math.random(), likes: 10, title: "Título da Notícia 1", subtitle: "Subtítulo da Notícia 1", read: false, removed: false },
      { id: Math.random(), likes: 3, title: "Título da Notícia 2", subtitle: "Subtítulo da Notícia 2", read: true, removed: false },
      { id: Math.random(), likes: 1, title: "Título da Notícia 3", subtitle: "Subtítulo da Notícia 3", read: false, removed: false },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        likes: Math.round(Math.random()*100),
        title: `Título da Notícia ${prevState.length + 1}`,
        subtitle: `Subtítulo da Notícia ${prevState.length + 1}`,
        read: false,
        removed: false,
      }
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => {
      // return prevState.filter(post => post.id !== postId)
      return prevState.map((post) => (
        post.id === postId
          ? { ...post, removed: true }
          : post
      ));
    })
  }

  return (
    <ThemeProvider>
      <Header 
        title="JStack's Blog"         
      >
        <Title as="h2">
          Posts da Semana
        </Title>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}          
          onRemove={handleRemovePost}
          post={post}
        />
      ))}

    </ThemeProvider>
  )
}

export default App;