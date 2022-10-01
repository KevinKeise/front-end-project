import SearchProduct from "../search-product/SearchProduct";
import Welcome from "../welcome/Welcome";
import "./Header.css";

const Header = () => {
    return(
        <div className="container-header">
            <div className="container-header-welcome">
                <Welcome/>
            </div>
            <div className="container-header-search">
                <SearchProduct/>
            </div>
        </div>
        
    );
}

export default Header;