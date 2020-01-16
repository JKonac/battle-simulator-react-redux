import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import Dice from './components/dice';
import {Provider} from 'react-redux';
import store, {setMessage, reducer, initialState, updateDices} from './redux';

describe('rendering', () => {
test('App renders successfully', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});

test('Dice renders successfully', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dice />, div);
});
})

describe('actions', () => {
  it('Should dispatch set message action', () => {
    const message = 'You Win'
    const expectedAction = {
      type: "SET_MESSAGE",
      payload: message,
    }
    expect(setMessage(message)).toEqual(expectedAction)
  })
})

describe('Reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        ...initialState
      }
    )
  })

  it('Should update the dices', () => {
    expect(
      reducer(
          {
            ...initialState
          }
        ,
        {
          type: "UPDATE_DICES",
          payload: [1, 2, 3, 4]
        }
      )
    ).toEqual(
      {
        ...initialState,
        currentDices: [1, 2, 3, 4]
      }
    )
  })
})