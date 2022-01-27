import React, { useState, useRef} from 'react';
import axios from 'axios';

const Card = (props) => {

  const card = props.eachCard;

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
      'id': card.id,
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
      'id': card.id
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

  let pre70 = (
    <progress
      class="progress is-warning is-small"
      value={`${card.current_spend}`}
      max={`${card.spend_threshold}`}>
    </progress>
  )

  let post70 = (
    <progress
      class="progress is-success is-small"
      value={`${card.current_spend}`}
      max={`${card.spend_threshold}`}>
    </progress>
  )

  return (
    <div class="box" id='creditCard'>
      <div class="columns is-vcentered">
        <div lass="column">
          <a href={card.page_link} id='cardImage' target='_blank'><img class="column" className='cardImage' src={card.url} width="220" height="50"></img></a>
          <div class="is-size-6 has-text-centered has-text-info">{card.name}</div>
        </div>
        <div class="column">
          <div><strong>Bonus:</strong> {card.points} pts</div>
          <div><strong>Annual Fee:</strong> ${card.annual_fee}</div>
        </div>
        <div class='column'>
          <div>Spend ${card.spend_threshold} in {card.spend_duration} month to get sign-up bonus.</div>
        </div>
        <div class="column">
          <div><strong>Rewards:</strong> {card.rewards}</div>
        </div>
        <div class="column">
          <div><strong>Benefits:</strong> {card.benefits}</div>
        </div>
          <div class="column is-one-fifth">
          <div>${card.current_spend} / ${card.spend_threshold}</div>
            {(card.current_spend/card.spend_threshold) > 0.7 ? post70 : pre70}
          <div class="columns">
            <div class="column">
              <input class='input is-small' type='number' ref={spendInput} value={input} onChange={inputOnChange}></input>
            </div>
            <div class="column">
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
