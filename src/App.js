import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';

function App() {
  const [theme, setTheme] = useState('dark');

  const [posts, setPosts] = useState([
      { id: Math.random(), likes: 10, title: "Título da Notícia 1", subtitle: "Subtítulo da Notícia 1", read: false },
      { id: Math.random(), likes: 3, title: "Título da Notícia 2", subtitle: "Subtítulo da Notícia 2", read: true },
      { id: Math.random(), likes: 1, title: "Título da Notícia 3", subtitle: "Subtítulo da Notícia 3", read: false },
  ]);

  function handleToogleTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark');
  }

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        likes: Math.round(Math.random()*100),
        title: `Título da Notícia ${prevState.length + 1}`,
        subtitle: `Subtítulo da Notícia ${prevState.length + 1}`,
        read: false
      }
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => {
      return prevState.filter(post => post.id !== postId)
    })
  }

  return (
    <>
      <Header theme={theme} title="JStack's Blog" onTooggleTheme={handleToogleTheme}>
        <h2>Posts da Semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}          
          onRemove={handleRemovePost}
          post={post}
          theme={theme}
        />
      ))}

    </>
  )
}

export default App;