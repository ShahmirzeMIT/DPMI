// import { Navigate, useLocation } from "react-router-dom";
// import { ReactNode } from 'react';
// import { useAuth } from "../auth/AutchContext";


// interface ProtectedRouteProps {
//     children: ReactNode;  // Ensure children is always passed to the component
// }

// export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
//     const { token } = useAuth();
//     const location = useLocation();

//     // Check if user is authenticated
//     if (!token) {
//         // If not authenticated, redirect to login page and preserve the current location
//         return <Navigate to="/login" state={{ from: location }} />;
//     }

//     // If authenticated, render the protected route's children
//     return <>{children}</>;
// };
