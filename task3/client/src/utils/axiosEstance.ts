import axios from 'axios';

export const productInstance = axios.create({
    baseURL: "http://localhost:4000"
    
})