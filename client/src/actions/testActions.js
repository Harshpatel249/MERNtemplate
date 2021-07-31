import * as api from '../api';

import {CREATE, FETCH_ALL} from '../constants/actionTypes.js';

export const getTestData = () => async (dispatch) => {
    try {
      const { data } = await api.fetchtestData();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const sendTestData = (sendData) => async (dispatch) => {
    try {
      const { data } = await api.sendtestData(sendData);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };