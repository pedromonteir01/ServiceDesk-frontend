'use client';
import { getAllUsers } from "@/app/actions/users";
import { useEffect, useState } from "react";

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async() => {
            const data = await getAllUsers();
            setUsers(data);
        }
        fetchUsers();
    }, [])

    return users;
}

export default UsersList;