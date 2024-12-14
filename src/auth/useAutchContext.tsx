import React, { useState, useContext, ReactNode, createContext, useEffect } from 'react';

// Define the context and its type
interface AuthContextType {
  token: string | null;
  setAuthToken: (token: string | null) => void;
  clearAuthToken: () => void;
  isAuthenticated: boolean;
}

// Create the context with a default value of `null`
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// Define the AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Retrieve token from localStorage and initialize state
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Check localStorage for a stored token
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const setAuthToken = (newToken: string | null) => {
    if (newToken) {
      localStorage.setItem('token', newToken);
    } else {
      localStorage.removeItem('token');
    }
    setToken(newToken);
  };

  const clearAuthToken = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ token, setAuthToken, clearAuthToken, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
