import React, { useState, createContext } from "react";

export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
    const [login, setLogin] = useState('');

    return (
        <LoginContext.Provider value={[login, setLogin]}>
            {children}
        </LoginContext.Provider>
    );
};
