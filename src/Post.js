import React from 'react';

function Post(props) {
  return (
    <>
      <article>
        <strong>{props.title}</strong> <br />
        <small>{props.subtitle}</small>
      </article>
      <br />
    </>
  )
}

export default Post;