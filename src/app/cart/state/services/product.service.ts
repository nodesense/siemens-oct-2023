import axios from 'axios';
import { API_ENDPOINT } from '../../../config';

// return promise with products array
export const getAllProducts = (axiosParams: any) => {
    return axios.get(`${API_ENDPOINT}/api/products`, axiosParams)
                .then( response => {
                    console.log("get products resp", response)
                    return response.data; 
                })
}