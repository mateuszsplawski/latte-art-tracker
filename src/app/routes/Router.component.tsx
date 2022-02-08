import { Route, Routes } from "react-router-dom";

import { Layout } from "lib/ui-kit";
import { Login } from "../pages/Login/Login.component";
import { Register } from "../pages/Register/Register.component";
import { ResetPassword } from "../pages/ResetPassword/ResetPassword.component";
import { UserSettings } from "app/pages/UserSettings/UserSettings.component";
import { AppRoutes } from "./Routes";

export const Router = () => {
  return (
    <Routes>
      <Route
        path={AppRoutes.HOME}
        element={
          <Layout>
            <h1>Home view</h1>
          </Layout>
        }
      />
      <Route path={AppRoutes.LOGIN} element={<Login />} />
      <Route path={AppRoutes.REGISTER} element={<Register />} />
      <Route path={AppRoutes.RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={AppRoutes.USER_SETTINGS} element={<UserSettings />} />
    </Routes>
  );
};
