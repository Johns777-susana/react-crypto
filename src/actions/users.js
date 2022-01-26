import { ADD_COINS, GET_TOTAL } from './types';

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
