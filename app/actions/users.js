'use server';

import axios from "axios";

const api = process.env.URL;

export const getAllUsers = async() => {
    try {
        const response = await axios.get(`${api}/users`);
        return response.data;
    } catch(e) {
        console.log('Error in feetching data:', e);
    }
}


export const getUserByEmail = async(email) => {
    try {
        const response = await axios.get(`${api}/users/${email}`);
        return response.data;        
    } catch(e) {
        console.log('Error in feetching data:', e);
    }
}

export const getUserByName= async(name) => {
    try {
        const response = await axios.get(`${api}/users/name/${name}`);
        return response.data;
    } catch(e) {
        console.log('Error in feetching data:', e);
    }
}

export const getUserByRole = async(role) => {
    try {
        const response = await axios.get(`${api}/users/role/${role}`);
        return response.data;
    } catch(e) {
        console.log('Error in feetching data:', e);
    }
}

export const loginInAPI = async({email, password}) => {
    try {
        const response = await axios.post(`${api}/authenticate`, { 
            email: email, 
            password: password 
        });

        return response.data;
    } catch(e) {
        return e.response.data
    }
}

export const createUser = async(user) => {
    try {
        const response = await axios.post(`${api}/users`, { 
            name: user.name, email: user.email, password: user.password, isAdmin: user.isAdmin, isStudent: user.isStudent 
        });
        return response.data;        
    } catch(e) {
        return e.response.data;
    }
}

export const updateUser = async(user, email) => {
    try {
        const response = await axios.put(`${api}/users/${email}`, { 
            name: user.name, email: user.email, password: user.password, isAdmin: user.isAdmin, isStudent: user.isStudent 
        });
        return response.data;
    } catch(e) {
        console.log('Error in feetching data:', e);
    }
}

export const deleteUser = async(email) => {
    try {
        const response = await axios.delete(`${api}/users/${email}`);
        return response.data;
    } catch(e) {
        console.log('Error in feetching data:', e);
    }
}

export const changePassword = async(password) => {
    try {
        const response = await axios.patch(`${api}/users/change/password${email}`, { password: password  });
        return response.data;
    } catch(e) {
        console.log('Error in feetching data:', e);
    }
}