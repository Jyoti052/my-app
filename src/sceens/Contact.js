import React from 'react'
import store from '../store/store'
import {incrementByAmount} from '../store/reducer';
import { useSelector } from 'react-redux';

function Contact() {
 
  const value = useSelector(state => state.value) // to access the value

  return (
    <div>
      <h1>{value}</h1>
    <button onClick = { () => 
      {store.dispatch(incrementByAmount(5));// 5 is the value by which we want to increase the amount
       console.log("state updated!!");
      }}>Increase Count By 5</button>
      </div>
  )
}

export default Contact