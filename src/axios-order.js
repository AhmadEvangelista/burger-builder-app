import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-a2f9f.firebaseio.com/',
});
export default instance;
