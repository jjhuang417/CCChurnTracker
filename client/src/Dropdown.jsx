import React from 'react';

const Dropdown = () => {
  return (
    <div>
      <select className='dropdown'>
        <option>--</option>
        <option>Chase Freedom Unlimited</option>
        <option>Chase Flex</option>
        <option>Chase Sapphire Preferred</option>
        <option>Chase Sapphire Reserved</option>
      </select>
      <button>Add</button>
    </div>
  )
};

export default  Dropdown;