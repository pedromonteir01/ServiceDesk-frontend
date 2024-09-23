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

export const getUserByRole = async(role) => {
    try {
        const response = await fetch(`${api}/users/role/${role}`);
        const data = response.json();
        return data;
    } catch(e) {
        console.log('Error in feetching data:', e);
    }
}

export const createUser = async(user) => {
    try {
        const response = await fetch(`${api}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: user.name, email: user.email, password: user.password, isAdmin: user.isAdmin, isStudent: user.isStudent })
        });
        const data = response.json();
        return data;
    } catch(e) {
        console.log('Error in feetching data:', e);
    }
}

export const updateUser = async(user, email) => {
    try {
        const response = await fetch(`${api}/users/${email}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: user.name, email: user.email, password: user.password, isAdmin: user.isAdmin, isStudent: user.isStudent })
        });
        const data = response.json();
        return data;
    } catch(e) {
        console.log('Error in feetching data:', e);
    }
}

export const deleteUser = async(email) => {
    try {
        const response = await fetch(`${api}/users/${email}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });
        const data = response.json();
        return data;
    } catch(e) {
        console.log('Error in feetching data:', e);
    }
}

export const changePassword = async(password) => {
    try {
        const response = await fetch(`${api}/users/change/password${email}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: password  })
        });
        const data = response.json();
        return data;
    } catch(e) {
        console.log('Error in feetching data:', e);
    }
}