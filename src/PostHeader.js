import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function PostHeader(props) {
  return (
    <>
      <strong>
        {props.post.read ? <s>{props.post.title}</s> : props.post.title}
      </strong> 
      <Button theme={props.theme} onClick={() => props.onRemove(props.post.id)}>
        Remover
      </Button>
    </>
  )
}

PostHeader.propTypes = {
  theme: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
}

export default PostHeader;