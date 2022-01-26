import React from 'react';

const Card = (props) => {
  return (
    <div>
      <img src={props.eachCard.url}></img>
      <span>{props.eachCard.name}</span>
      <span>{props.eachCard.points}</span>
    </div>
  )
}

export default Card;