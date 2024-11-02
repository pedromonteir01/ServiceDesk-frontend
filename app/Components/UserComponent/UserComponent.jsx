'use client'
import { useContext } from "react";
import { UserContext } from "@/app/contexts/userContext";
import UserPage from "../UserPage/UserPage";
import LoginComponent from "../LoginComponent/LoginComponent";
import AdminPage from "../Admin/AdminPage";

const UserComponent = () => {
    const { user } = useContext(UserContext);
    return (
        <>
            {
                user ? 
                    user.isadmin? <AdminPage/> : <UserPage/>
                : 
                    <LoginComponent/>
                
            }
        </>
    );
}

export default UserComponent;