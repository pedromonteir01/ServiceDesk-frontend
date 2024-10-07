'use server';

import axios from "axios";

const api = process.env.URL;

export const getAllReqsWithLocals = async() => {
    try {
        const response = await axios.get(`${api}/data`);
        console.log(response.data);
        return response.data;
    } catch(e) {
        console.log(e); 
    }   
}