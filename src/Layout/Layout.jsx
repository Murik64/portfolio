import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";



const Layout = ({isDarkMode,setIsDarkMode}) => {
    return (
        <>
            <NavBar 
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            />
            <Outlet />
        </>
    )
}

export default Layout;