'use client'
import { createContext, useEffect, useState } from "react";
import { refreshAccessToken } from "../actions/users";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);

    useEffect(() => {
        const savedAccessToken = localStorage.getItem('accessToken');
        const savedRefreshToken = localStorage.getItem('refreshToken');

        if(savedAccessToken && savedRefreshToken) {
            setAccessToken(savedAccessToken);
            setRefreshToken(savedRefreshToken);
        }

    }, []);

    useEffect(() => {
        const interval = setInterval(async () => {
            if(accessToken && isTokenExpired(accessToken)) {
                try {
                    const response = await refreshAccessToken(refreshToken);
                    if(response.accessToken && response.refreshToken) {
                        setAccessToken(response.accessToken);
                        setRefreshToken(response.refreshToken);
                        localStorage.setItem('accessToken', response.accessToken);
                        localStorage.setItem('refreshToken', response.refreshToken);
                    }
                } catch(e) {
                    console.log("Erro ao renovar o token:", error);
                }
            }
        }, 15 * 60 * 1000);
        return () => clearInterval(interval);
    }, [accessToken, refreshToken]);
    
    return (
        <UserContext.Provider value={{ user, setUser, accessToken, setAccessToken, refreshToken, setRefreshToken }}>
            {children}
        </UserContext.Provider>
    );
}