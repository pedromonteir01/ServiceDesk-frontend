'use server';

const api = process.env.URL;

export const getAllUsers = async() => {
    try {
        const response = await fetch(`${api}/users`);
        const data = response.json();
        return data;
    } catch(e) {
        console.log('Error in feetching data:', e);
    }
}


export const getUserByEmail = async(email) => {
    try {
        const response = await fetch(`${api}/users/${email}`);
        const data = response.json();
        return data;
    } catch(e) {
        console.log('Error in feetching data:', e);
    }
}

export const getUserByName= async(name) => {
    try {
        const response = await fetch(`${api}/users/name/${name}`);
        const data = response.json();
        return data;
    } catch(e) {
        console.log('Error in feetching data:', e);
    }
}
