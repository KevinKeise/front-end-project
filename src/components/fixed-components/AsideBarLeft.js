import "./AsideBarLeft.css"
import {NavLink} from "react-router-dom"
import logo from "../../img/icons8-logo-100.png"

const AsideBarLeft = () => {
    return (
        <div className="container-aside-left-bar">
            <div className="container-opt-aside-bar">
                <div className="container-logo-opts">
                    <div className="container-logo">
                        <NavLink to="/"><img src={logo} className="img-logo"/></NavLink>
                    </div>
                    <div className="container-up-aside-bar">
                        <ul className="list-aside-left">
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? "style-link" : "none"}>
                                    <span className="material-symbols-outlined">home</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="profiles" className={({ isActive }) => isActive ? "style-link" : "none"}>
                                    <span class="material-symbols-outlined">groups</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="container-down-aside-bar">
                    <ul className="list-aside-left">
                        <li>
                            <NavLink to="user/config" className={({ isActive }) => isActive ? "style-link" : "none"}>
                                <span className="material-symbols-outlined">settings</span>
                            </NavLink>
                        </li>
                            
                        <li>
                            <NavLink to="/exit" className={({ isActive }) => isActive ? "style-link" : "none"}>
                                <span className="material-symbols-outlined">logout</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AsideBarLeft;