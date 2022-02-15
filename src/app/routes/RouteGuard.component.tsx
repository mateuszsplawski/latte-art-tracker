import { useAuthentication } from 'lib/authentication';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from './Routes';

export const RouteGuard = () => {
  const { isUserAuthenticated } = useAuthentication();

  if (!isUserAuthenticated) return <Navigate to={AppRoutes.HOME} />;

  return null;
};
