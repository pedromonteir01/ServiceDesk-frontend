'use client';
import { getUserByEmail } from "@/app/actions/users";
import { useState, useEffect } from "react";

const User = ({ email }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async() => {
            const data = await getUserByEmail(email);
            setUser(data);
        }
        fetchUser;
    },[]);

    return user;
}

export default User;