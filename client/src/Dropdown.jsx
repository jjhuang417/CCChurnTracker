import React, { useState, useRef } from 'react';

const Dropdown = (props) => {

  // useRef hook here, added a ref attr on line 24 to signal which DOM element to look into, on line 16, the reference was used. The value in the DOM is saved in dropdownString.
  const dropdownString = useRef();

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

{/* <div class="columns">
      <div class="column is-one-fifth is-justify-content-center">
        <div class="select">
          <select
            ref={dropdownString}
            className='dropdown'>
            {props.data.map((card, idx) => {
              return <option value={card.id}  className='cardName' key={idx}>{card.name}</option>
            })}
          </select>
        </div>
      </div>
      <div class="column">
        <button class="button is-link" onClick={handleAdd}>+</button>
      </div>
    </div> */}