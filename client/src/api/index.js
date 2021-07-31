import axios from 'axios';

const url = 'http://localhost:5000/test';

export const fetchtestData = () => axios.get(url);
export const sendtestData = (sendData) => axios.post(url, sendData);