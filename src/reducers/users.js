import {
  ADD_COINS,
  BUY_MORE_COINS,
  EXCHANGE_COINS,
  GET_TOTAL,
  REMOVE_0_COINS,
  ADD_COINS_FAIL,
  BUY_MORE_COINS_FAIL,
  EXCHANGE_COINS_FAIL,
} from '../actions/types';
import data from '../data';

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

    case BUY_MORE_COINS:
      const index = state.coins.map((x) => x.id).indexOf(payload.id);

      const reqCoin = state.coins[index];

      reqCoin.amount += parseInt(payload.amount);
      return {
        ...state,
        coins: [...state.coins],
        isLoading: false,
      };
    case GET_TOTAL:
      const total = (state.coinsamount += payload);
      return { ...state, coinsamount: total };
    case EXCHANGE_COINS:
      const indexOfReqItem = state.coins
        .map((x) => x.title)
        .indexOf(payload.title);

      if (indexOfReqItem === -1) {
        // this is if the existing coins do not exist in the array
        const indexOfStateItem = state.coins
          .map((x) => x.id)
          .indexOf(payload.id);

        const reqItemFromState = state.coins[indexOfStateItem];

        reqItemFromState.amount -= parseInt(payload.amount);

        const indexFromData = data.map((x) => x.title).indexOf(payload.title);

        const img = data[indexFromData].img;
        const id = data[indexFromData].id;
        payload.id = id;
        payload.amount = parseInt(payload.amount);
        const addedPayload = { ...payload, img };

        return {
          ...state,
          coins: [...state.coins, addedPayload],
          isLoading: false,
        };
      } else {
        // this is if the exchange coins already exists in the coins array
        const indexOfStateItem = state.coins
          .map((x) => x.title)
          .indexOf(payload.title);

        const reqItemFromState = state.coins[indexOfStateItem];

        reqItemFromState.amount += parseInt(payload.amount);

        const indexOfStateItemFromId = state.coins
          .map((x) => x.id)
          .indexOf(payload.id);

        const reqItem = state.coins[indexOfStateItemFromId];

        reqItem.amount -= parseInt(payload.amount);

        return {
          ...state,
          isLoading: false,
        };
      }
    case REMOVE_0_COINS:
      const idIndex = state.coins.map((x) => x.id).indexOf(payload);

      state.coins.splice(idIndex, 1);

      return {
        ...state,
        isLoading: false,
      };
    case ADD_COINS_FAIL:
    case BUY_MORE_COINS_FAIL:
    case EXCHANGE_COINS_FAIL:
      return {
        ...state,
        coins: [...state.coins],
        coinsamount: state.coinsamount,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default users;
