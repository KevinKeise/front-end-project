import "./AsideBarRight.css"
import HeaderCart from "./HeaderCart";
import ListOrder from "./ListOrder";
import Payment from "./Payment";

const AsideBarRight = () => {
    return(
        <div className="container-aside-right-bar">
            <div className="container-content-right-bar">
                <div className="container-head-list-aside">
                    <HeaderCart/>
                    <ListOrder/>
                </div>
                <Payment/>
            </div>
        </div>
    );
}

export default AsideBarRight;