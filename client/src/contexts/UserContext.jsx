import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a context to share user data across components
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Fetch user data from backend (based on JWT token)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/user/me", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setUser(response.data); // Store user data in state
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    // Run fetchUser only if a token is present
    if (localStorage.getItem("token")) {
      fetchUser();
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
