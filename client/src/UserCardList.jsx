import React from 'react';
import Card from './Card.jsx';

const UserCardList = (props) => {
  return (
    <div>
      {props.cardData.map((eachCard) => {
        console.log('This is each card: ', eachCard);
        return (
          <Card eachCard={eachCard} key={eachCard.id} setData={props.setData} />
        )
      })}
    </div>
  );
}

export default UserCardList;