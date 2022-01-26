import React, { useState, useRef } from 'react';

const Dropdown = (props) => {

  // useRef hook here, added a ref attr on line 24 to signal which DOM element to look into, on line 16, the reference was used. The value in the DOM is saved in dropdownString.
  const dropdownString = useRef();

  const clickOption = (event) => {
    event.preventDefault();
    props.setOption(event.target.value);
  }

  const handleAdd = (event) => {
    event.preventDefault();
    props.addCard(dropdownString.current.value);
    console.log(props.userCards);
  }

  console.log(props.currentOption);

  return (
    <div>
      <select
        ref={dropdownString}
        className='dropdown'>
        {props.data.map((card, idx) => {
          return <option value={card.name} className='cardName' key={idx}>{card.name}</option>
        })}
      </select>
      <button onClick={handleAdd}>+</button>
    </div>
  )
};

export default  Dropdown;