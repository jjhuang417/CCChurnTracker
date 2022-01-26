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

  // Option state for the dropdown
  // const [currentOption, setOption] = useState('');

  useEffect(() => {
    axios.get('/cc', )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

console.log(cardData);

  return (
    <div>
      <h1>Credit Card Tracker 💳</h1>
      <Dropdown
        data={cardData}
        userCards={userCards}
        setUserCard={setUserCard}/>
      <UserCardList userCards={userCards} />
    </div>
  )
}

export default App;