import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-7359.firebaseio.com/'
});

export default instance;