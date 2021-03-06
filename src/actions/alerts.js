import { REMOVE_ALERT, SET_ALERT } from './types';
import { v4 as uuid } from 'uuid';

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuid();

  dispatch({
    type: SET_ALERT,
    payload: { id, msg, alertType },
  });

  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id,
    });
  }, 3000);
};
