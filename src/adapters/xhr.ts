import axios from 'axios';

export default axios.create({
  baseURL: 'https://auction-now.herokuapp.com/api/',
  headers: { 'Content-Type': 'application/json' },
});
