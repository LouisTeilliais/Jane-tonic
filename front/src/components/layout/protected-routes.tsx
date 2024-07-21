import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: any) => {
    const accessToken = sessionStorage.getItem('accessToken');

    if (!accessToken) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
