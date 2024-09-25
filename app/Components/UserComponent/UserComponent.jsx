'use client'
import { useContext } from "react";
import { UserContext } from "@/app/contexts/userContext";
import Login from "@/app/Login/page";
import UserPage from "../UserPage/UserPage";
import LoginComponent from "../LoginComponent/LoginComponent";

const UserComponent = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <>
            {
                user ? (
                    <UserPage user={user}/>
                ) : (
                    <LoginComponent/>
                )
            }
        </>
    );
}

export default UserComponent;