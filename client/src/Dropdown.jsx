import React, { useState } from 'react';

const Dropdown = (props) => {

  const [currentOption, setOption] = useState('');

  const clickOption = (event) => {
    event.preventDefault();
    setOption(event.target.value);
  }

  const clickMe = (event) => {
    event.preventDefault();
    if (currentOption !== '--' || currentOption !== '') {
      for(let i = 0; i < props.data.length; i++) {
        if(props.data[i].name === currentOption) {
          props.userCards.push(props.data[i]);
          props.setUserCard(props.userCards);
          console.log()
          break;
        }
      }
    }
  }

  // console.log(props.userCards);

  return (
    <div>
      <select onChange={clickOption} className='dropdown'>
        {props.data.map((card) => {
          return <option value={card.name} className='cardName'>{card.name}</option>
        })}
      </select>
      <button onClick={clickMe}>Add</button>
    </div>
  )
};

export default  Dropdown;