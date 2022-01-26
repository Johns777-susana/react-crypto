import { ADD_COINS, GET_TOTAL } from '../actions/types';

const initialState = {
  coins: [],
  coinsamount: 0,
  isLoading: true,
};

const users = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_COINS:
      return {
        ...state,
        coins: [...state.coins, payload],
        isLoading: false,
      };
    case GET_TOTAL:
      const total = (state.coinsamount += payload);
      return { ...state, coinsamount: total };
    default:
      return state;
  }
};

export default users;
