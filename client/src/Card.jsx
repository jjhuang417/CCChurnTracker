import React from 'react';

const Card = (props) => {
  return (
    <div>
      <span>{props.id}</span>
      <span>{props.name}</span>
    </div>
  )
}

export default Card;