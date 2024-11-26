'use server';

import axios from "axios";

const api = process.env.URL + '/data';

export const getAllReqsWithLocals = async() => {
    try {
        const response = await axios.get(api);
        return response.data;
    } catch(e) {
        return e.response.data;
    }   
}

export const getAllDataRequests = async() => {
    try {
        const response = await axios.get(api + '/requests_data');
        return response.data;
    } catch(e) {
        return e.response.data;
    }
}