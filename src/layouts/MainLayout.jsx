import { Outlet } from "react-router-dom"
import NavBar from "../components/navBar"

const MainLayout = () => {
    return(
        <div className="">
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default MainLayout