import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterActions';

function CounterApp() {
  const counter = useSelector(state => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default CounterApp;
