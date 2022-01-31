import {
  ADD_COINS,
  BUY_MORE_COINS,
  EXCHANGE_COINS,
  GET_TOTAL,
  REMOVE_0_COINS,
} from './types';

import { setAlert } from './alerts';

export const getTotal = (amount) => (dispatch) => {
  dispatch({
    type: GET_TOTAL,
    payload: parseInt(amount),
  });
};

export const addCoins = (amount, id, title, img, history) => (dispatch) => {
  dispatch({
    type: ADD_COINS,
    payload: { amount: parseInt(amount), id, title, img },
  });
  history.push('/');
  dispatch(setAlert('Coins successfully purchased', 'success'));
};

export const buyMoreCoins = (amount, id) => (dispatch) => {
  dispatch({
    type: BUY_MORE_COINS,
    payload: { amount, id },
  });
  dispatch(getTotal(amount));
  dispatch(setAlert('Coins successfully purchased', 'success'));
};

export const exchangeCoins = (amount, id, title) => (dispatch) => {
  dispatch({
    type: EXCHANGE_COINS,
    payload: { amount, id, title },
  });
  dispatch(setAlert('Coins successfully exchanged', 'success'));
};

export const updateZeroCoins = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_0_COINS,
    payload: id,
  });
  dispatch(setAlert('List successfully updated', 'success'));
};
