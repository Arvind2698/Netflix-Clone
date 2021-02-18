import axios from 'axios';
import {TMBDKey} from './Credentials';

export default axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:TMBDKey
    }
});