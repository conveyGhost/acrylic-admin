import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
    return (
        <div className="flex justify-center">
            <Outlet />
        </div>
    )
}