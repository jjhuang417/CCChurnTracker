import React, { useState, useRef} from 'react';
import axios from 'axios';

const Card = (props) => {

  // Hanlde input
  const [input, setInput] = useState('')
  const spendInput = useRef();

  const inputOnChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
    console.log('State: ', input);
    console.log('Ref: ', spendInput.current.value);
  }

  const addSpend = (event) => {
    event.preventDefault();
    axios.put('/cc', {
      'id': props.eachCard.id,
      'spend': input
    })
      .then(() => {
        console.log('Spend update successfully');
        axios.get('/cc', )
          .then((response) => {
            setInput('');
          })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div class="box">
      <img className='cardImage' src={props.eachCard.url} width="140" height="50"></img>
      <div class="columns">
        <div class="column">
          <span class="is-size-7 has-text-justified">{props.eachCard.name}</span>
        </div>
        <span class="column is-one-fifth">{props.eachCard.points} pts</span>
        <span class="column is-one-fifth">{props.eachCard.rewards}</span>
        <span class="column is-one-fifth">{props.eachCard.benefits}</span>
        <div class="column is-one-fifth">
          <progress
            class="progress is-link is-small"
            value={`${props.eachCard.current_spend}`}
            max={`${props.eachCard.spend_threshold}`}>
          </progress>
          <div class="columns">
            <div class="column">
              <input type='number' ref={spendInput} value={input} onChange={inputOnChange}></input>
              <button onClick={addSpend}>$</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;

{/* <div class="box">
      <div class="columns">
        <img class="column is-one-four-fifth" className='cardImage' src={props.eachCard.url} width="140" height="50"></img>
        <div class="column is-one-fifth">
          <span class="tag is-primary">{props.eachCard.name}</span>
        </div>
        <span class="column">{props.eachCard.points} pts</span>
        <div class="column">
          <progress
            class="progress is-link is-small"
            value={`${props.eachCard.current_spend}`}
            max={`${props.eachCard.spend_threshold}`}>
          </progress>
        </div>
      </div>
    </div> */}

{/* <div class="columns">
  <div class="column">
    <p class="bd-notification is-info">First column</p>
    <div class="columns is-mobile">
      <div class="column">
        <p class="bd-notification is-info">First nested column</p>
      </div>
      <div class="column">
        <p class="bd-notification is-info">Second nested column</p>
      </div>
    </div>
  </div>
</div> */}