import React, { useState, useEffect } from 'react';
import axios from 'axios';

// ************
// Imported components
// ************
import Dropdown from './Dropdown.jsx';
import UserCardList from './UserCardList.jsx';

const App = () => {
  // ************
  // Data for existing card info
  // ************
  const [cardData, setData] = useState([]);

  // ************
  // Add a new card to the user array
  // ************
  const addCard = (cardID) => {
    axios.put('/cc/finished', {
      'id': cardID
    })
      .then(() => {
        console.log('Spend update successfully');
        axios.get('/cc', )
          .then((response) => {
            console.log(response.data);
            setData(response.data);
          })
      })
      .catch((error) => {
        console.log(error);
      })
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

  // ************
  // Use conditional rendering here to counter asyn of state setting: don't render till cardData has length
  // ************
  if (cardData.length !== 0) {
    var allthingstorender = (
      <div>
        <section class="hero is-info is-small">
          <div class="hero-body">
            <p class="title has-text-centered">
              Credit Card Churning Tracker
            </p>
          </div>
        </section>
        <div class='has-text-centered'>-</div>
        <Dropdown
          data={cardData}
          addCard={addCard}
          />
        <UserCardList
          cardData={cardData.filter((card)=>{
            return card.finished;
          })}
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