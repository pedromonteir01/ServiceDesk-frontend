'use client'
import { useContext } from "react";
import { UserContext } from "@/app/contexts/userContext";
import UserPage from "../UserPage/UserPage";
import LoginComponent from "../LoginComponent/LoginComponent";

const UserComponent = () => {
    const { user } = useContext(UserContext);
    return (
        <>
            {
                user ? (
                    <UserPage/>
                ) : (
                    <LoginComponent/>
                )
            }
        </>
    );
}

export default UserComponent;