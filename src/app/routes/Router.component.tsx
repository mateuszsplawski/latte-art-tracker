import { Route, Routes } from 'react-router-dom';

import { AppRoutes } from './Routes';
import { Login, Register, ResetPassword, UserSettings, Home } from 'app/pages';
import { RouteGuard } from './RouteGuard.component';
import { Onboarding } from 'app/pages/Onboarding/Onboarding.component';

export const Router = () => {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<Home />} />
      <Route path={AppRoutes.LOGIN} element={<Login />} />
      <Route path={AppRoutes.REGISTER} element={<Register />} />
      <Route path={AppRoutes.RESET_PASSWORD} element={<ResetPassword />} />
      <Route element={<RouteGuard />}>
        <Route path={AppRoutes.USER_SETTINGS} element={<UserSettings />} />
        <Route path={AppRoutes.ONBOARDING} element={<Onboarding />} />
      </Route>
    </Routes>
  );
};
