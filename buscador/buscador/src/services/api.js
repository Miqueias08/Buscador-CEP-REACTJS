import axios from 'axios';
//18230000/json/

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
});

export default api;