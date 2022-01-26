import React from 'react';
import Card from './Card.jsx';

const UserCardList = (props) => {
  return (
    <div>
      {props.userCards.map((eachCard) => {
        return (
          <Card eachCard={eachCard} key={eachCard.id}/>
        )
      })}
    </div>
  );
}

export default UserCardList;