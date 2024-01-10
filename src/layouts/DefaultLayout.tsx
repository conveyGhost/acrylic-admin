import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export const DefaultLayout = () => {
    return (
        <div className="relative">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
