import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';

import { useUser } from 'lib/api';
import { AppRoutes } from 'app';

export const ProtectedRoute = ({
    children, ...props
}: RouteProps) => {
    const location = useLocation()
    const { isAuthenticated, isLoadingUserData, userData } = useUser();

    if (isLoadingUserData) return <h1>Loading</h1>;

    if (!isAuthenticated) return <Redirect to={AppRoutes.LOGIN} />

    if (location.pathname !== AppRoutes.ONBOARDING && !userData?.onboarded) return <Redirect to={AppRoutes.ONBOARDING} />;

    return (
        <Route {...props}>
            {children}
        </Route>
    );
};
