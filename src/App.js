import React from 'react';

import Post from './Post';
import Header from './Header';

function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da Semana</h2>  
      </Header>

      <hr />

      <Post title="Título da Notícia 01" 
            subtitle="Subtítulo da Notícia 01"
      />
      <Post title="Título da Notícia 02" 
            subtitle="Subtítulo da Notícia 02"
      />
      <Post title="Título da Notícia 03" 
            subtitle="Subtítulo da Notícia 03"
      />

    </>
  )
}

export default App;