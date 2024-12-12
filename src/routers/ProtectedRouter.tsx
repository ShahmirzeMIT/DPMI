import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from 'react';
import { useAuth } from "../auth/AutchContext";
interface AuthProviderProps {
    children?: ReactNode;
}

export const ProtectedRoute: React.FC<AuthProviderProps> = ({ children }) => {
    const { token } = useAuth();
    const location = useLocation();
    if (!token) {
        // user is not authenticated
        return <Navigate to={ "/login"} state={{ from: location }} />;
    }
    return <>{children}</>;  // user is authenticated
};
