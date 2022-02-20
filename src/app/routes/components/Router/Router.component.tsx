import { Route, Switch } from 'react-router-dom';

import { AppRoutes } from '../../Routes';
import { Login, Register, ResetPassword, UserSettings, Home } from 'app/pages';
import { Onboarding } from 'app/pages/Onboarding/Onboarding.component';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute.component';

export const Router = () => {
  return (
    <Switch>
      <Route exact path={AppRoutes.HOME}>
        <Home />
      </Route>
      <Route path={AppRoutes.LOGIN}>
        <Login />
      </Route>
      <Route path={AppRoutes.REGISTER}>
        <Register />
      </Route>
      <Route path={AppRoutes.RESET_PASSWORD}>
        <ResetPassword />
      </Route>
      <ProtectedRoute path={AppRoutes.USER_SETTINGS}>
        <UserSettings />
      </ProtectedRoute>
      <ProtectedRoute path={AppRoutes.ONBOARDING}>
        <Onboarding />
      </ProtectedRoute>
    </Switch>
  );
};
