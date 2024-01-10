import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Dashboard } from "../pages/Dashboard";

export const Router = () => {
  return (
    <Routes>
      <Route path="" element={<DefaultLayout />}>
 
        <Route index element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />

      </Route>

    </Routes>
  )

}