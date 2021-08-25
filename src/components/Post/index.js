import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

import { Subtitle, Likes } from './styles';
import  styles from './Post.scss';
function Post(props) {
  return (
      <article 
        className={
          props.post.removed
            ? styles.postDeleted
            : styles.post
        }
      >
        <PostHeader
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read,
          }}
        />
        <Subtitle>{props.post.subtitle}</Subtitle>
        <Likes>Likes: {props.post.likes}</Likes>
      </article>
  )
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
}

export default Post;