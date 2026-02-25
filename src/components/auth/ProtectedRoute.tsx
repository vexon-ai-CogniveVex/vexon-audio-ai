import { Navigate, useLocation } from "react-router-dom";
import api from "@/lib/api";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const session = api.getCurrentUser();
    const location = useLocation();

    if (!session) {
        // Redirect to login but save the current location to redirect back after login
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
