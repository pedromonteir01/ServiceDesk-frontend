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