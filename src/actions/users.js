import {
  ADD_COINS,
  ADD_COINS_FAIL,
  BUY_MORE_COINS,
  BUY_MORE_COINS_FAIL,
  EXCHANGE_COINS,
  EXCHANGE_COINS_FAIL,
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
  if (amount === undefined) {
    dispatch({
      type: ADD_COINS_FAIL,
    });
    dispatch(setAlert('Coin Buy Failed', 'danger'));
  } else {
    dispatch({
      type: ADD_COINS,
      payload: { amount: parseInt(amount), id, title, img },
    });
    history.push('/');
    dispatch(getTotal(amount));
    dispatch(setAlert('Coins successfully purchased', 'success'));
  }
};

export const buyMoreCoins = (amount, id) => (dispatch) => {
  if (amount === undefined) {
    dispatch({
      type: BUY_MORE_COINS_FAIL,
    });
    dispatch(setAlert('Coins purchase failed', 'danger'));
  } else {
    dispatch({
      type: BUY_MORE_COINS,
      payload: { amount, id },
    });
    dispatch(getTotal(amount));
    dispatch(setAlert('Coins successfully purchased', 'success'));
  }
};

export const exchangeCoins = (amount, id, title) => (dispatch) => {
  if (amount === '' || title === '') {
    dispatch({
      type: EXCHANGE_COINS_FAIL,
    });
    dispatch(setAlert('Coins Exchange failed', 'danger'));
  } else {
    dispatch({
      type: EXCHANGE_COINS,
      payload: { amount, id, title },
    });
    dispatch(setAlert('Coins successfully exchanged', 'success'));
  }
};

export const updateZeroCoins = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_0_COINS,
    payload: id,
  });
  dispatch(setAlert('List successfully updated', 'success'));
};
