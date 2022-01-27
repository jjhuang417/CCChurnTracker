import React, { useState, useRef} from 'react';
import axios from 'axios';

const Card = (props) => {

  // Hanlde input
  const [input, setInput] = useState('')
  const spendInput = useRef();

  const inputOnChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
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
            props.setData(response.data);
            setInput('');
          })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const takeOutCard = (event) => {
    event.preventDefault();
    axios.put('/cc/delete', {
      'id': props.eachCard.id
    })
      .then(() => {
        console.log('Card taken out successfully');
        axios.get('/cc', )
          .then((response) => {
            props.setData(response.data);
            setInput('');
          })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  let pre50 = (
    <progress
      class="progress is-warning is-small"
      value={`${props.eachCard.current_spend}`}
      max={`${props.eachCard.spend_threshold}`}>
    </progress>
  )

  let post50 = (
    <progress
      class="progress is-success is-small"
      value={`${props.eachCard.current_spend}`}
      max={`${props.eachCard.spend_threshold}`}>
    </progress>
  )

  return (
    <div class="box">
      <div class="columns">
        <img className='cardImage' src={props.eachCard.url} width="160" height="50"></img>
        <div class="column">
          <span class="is-size-6 has-text-justified has-text-info-dark">{props.eachCard.name}</span>
        </div>
        <span class="column is-one-fifth"><strong class='has-text-link'>Points:</strong> {props.eachCard.points} pts</span>
        <span class="column is-one-fifth">{props.eachCard.rewards}</span>
        <span class="column is-one-fifth">{props.eachCard.benefits}</span>
        <div class="column is-one-fifth">
          <div>${props.eachCard.current_spend} / ${props.eachCard.spend_threshold}</div>
            {(props.eachCard.current_spend/props.eachCard.spend_threshold) > 0.7 ? post50 : pre50}
          <div class="columns">
            <div class="column">
              <input class='input is-small' type='number' ref={spendInput} value={input} onChange={inputOnChange}></input>
              <button class='button is-primary is-small' onClick={addSpend}>$</button>
              <button class='button is-danger is-small is-justify-content-start' onClick={takeOutCard}>X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
