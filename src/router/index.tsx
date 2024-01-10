import { Route, Routes } from "react-router-dom";
import Login from '../pages/Auth/Login';
import SignUp from "../pages/Auth/SIgnUp";
import { AuthLayout } from "../layouts/AuthLayout";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Dashboard } from "../pages/Dashboard";

export const Router = () => {
  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="" element={<DefaultLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Route>

    </Routes>
  )

}