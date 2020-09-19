import axios from 'axios';

//criei variavel api 
const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api' });


//exportar a conf acima
export default api; 