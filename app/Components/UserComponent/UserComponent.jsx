'use client'
import { useContext } from "react";
import { UserContext } from "@/app/contexts/userContext";
import UserPage from "../UserPage/UserPage";
import LoginComponent from "../LoginComponent/LoginComponent";

const UserComponent = () => {
    const { user, setUser, setAccessToken, setRefreshToken } = useContext(UserContext);
    return (
        <>
            {
                user ? (
                    <UserPage user={user}/>
                ) : (
                    <LoginComponent setUser={setUser} setAccessToken={setAccessToken} setRefreshToken={setRefreshToken}/>
                )
            }
        </>
    );
}

export default UserComponent;