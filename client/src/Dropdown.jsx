import React, { useState, useRef } from 'react';

const Dropdown = (props) => {

  // useRef hook here, added a ref attr on line 24 to signal which DOM element to look into, on line 16, the reference was used. The value in the DOM is saved in dropdownString.
  const dropdownString = useRef();

  const handleAdd = (event) => {
    event.preventDefault();
    props.addCard(dropdownString.current.value);
    console.log(props.userCards);
  }

  console.log(dropdownString);

  return (
    <div>
      <select
        ref={dropdownString}
        className='dropdown'>
        {props.data.map((card, idx) => {
          return <option value={card.name} className='cardName' key={idx}>{card.name}</option>
        })}
      </select>
      <button class="button is-primary is-small" onClick={handleAdd}>+</button>
    </div>
  )
};

export default  Dropdown;
