
import {CREATE, FETCH_ALL} from '../constants/actionTypes.js';

export default (testReducers = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload;
      case CREATE:
        return [...testReducers, action.payload];
      default:
        return testReducers;
    }
  };