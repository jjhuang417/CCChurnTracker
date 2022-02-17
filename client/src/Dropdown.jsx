import React, { useState, useRef } from 'react';

const Dropdown = (props) => {

  // ************
  // useRef hook here to hold the value of the options
  // ************
  const dropdownString = useRef();

  // ************
  // Function for adding a new card to the list
  // ************
  const handleAdd = (event) => {
    event.preventDefault();
    props.addCard(dropdownString.current.value);
  }

  return (
    <div class="columns is-justify-content-center">
      <div>
        <div class="select is-rounded is-focused is-link">
          <select
            ref={dropdownString}
            className='dropdown'>
            {props.data.map((card, idx) => {
              return <option class='dropdown-item' value={card.id}  className='cardName' key={idx}>{card.name}</option>
            })}
          </select>
        </div>
      </div>
      <div>
        <button class="button is-link is-rounded is-focused" onClick={handleAdd}>+</button>
      </div>
    </div>
  )
};

export default  Dropdown;