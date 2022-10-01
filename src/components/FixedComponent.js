import { Outlet } from "react-router-dom";
import AsideBarLeft from "./AsideBarLeft";
import AsideBarRight from "./AsideBarRight";
import Header from "./Header";


const FixedComponent = () => {
    return(
        <>
            <Header/>
            <AsideBarLeft/>
            <Outlet/>
            <AsideBarRight/>
        </>
    );
}

export default FixedComponent;