import React, { use } from 'react';
import { useState, useEffect } from 'react';
import { UserContext } from './context/userContext';
import App from './App';

export default function AppWrapper() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <App />
        </UserContext.Provider>
    );
}