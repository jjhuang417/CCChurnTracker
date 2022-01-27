import React from 'react';
import Card from './Card.jsx';

const UserCardList = (props) => {
  return (
    <div>
      {props.userCards.map((eachCard) => {
        return (
          <Card eachCard={eachCard} key={eachCard.id} setData={props.setData}/>
        )
      })}
    </div>
  );
}

export default UserCardList;