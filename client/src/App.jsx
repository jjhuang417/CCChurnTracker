import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Dropdown from './Dropdown.jsx';
import UserCardList from './UserCardList.jsx';

const App = () => {
  // Data for existing card info
  const [cardData, setData] = useState([]);

  // Data for user inputted cards
  const [userCards, setUserCard] = useState([]);

  // Add a new card to the user array
  const addCard = (cardName) => {
    for (let i = 0; i < cardData.length; i++) {
      if (cardData[i].name === cardName) {
        setUserCard([...userCards, cardData[i]]);
        break;
      }
    }
  }

  useEffect(() => {
    axios.get('/cc', )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  // Use conditional rendering here to counter asyn of state setting: don't render till cardData has length
  if (cardData.length !== 0) {
    var allthingstorender = (
      <div>
        <h1 class='is-size-3'>Credit Card Tracker 💳</h1>
        <Dropdown
          data={cardData}
          userCards={userCards}
          setUserCard={setUserCard}
          addCard={addCard}
          />
           <UserCardList
            cardData={cardData}
            userCards={userCards}
            setUserCard={setUserCard}
            setData={setData}/>
      </div>
    )
  } else {
    var allthingstorender = null;
  };

  return (
      <div>
        {cardData.length !== 0 ? allthingstorender : <h1>Loading Card Info....</h1>}
      </div>
  )
}

export default App;