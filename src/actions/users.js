import {
  ADD_COINS,
  BUY_MORE_COINS,
  EXCHANGE_COINS,
  GET_TOTAL,
  TEST,
} from './types';

export const getTotal = (amount) => (dispatch) => {
  dispatch({
    type: GET_TOTAL,
    payload: parseInt(amount),
  });
};

export const addCoins = (amount, id, title, img) => (dispatch) => {
  dispatch({
    type: ADD_COINS,
    payload: { amount: parseInt(amount), id, title, img },
  });
};

export const buyMoreCoins = (amount, id) => (dispatch) => {
  dispatch({
    type: BUY_MORE_COINS,
    payload: { amount, id },
  });
  dispatch(getTotal(amount));
};

export const exchangeCoins = (amount, id, title) => (dispatch) => {
  dispatch({
    type: EXCHANGE_COINS,
    payload: { amount, id, title },
  });
};
