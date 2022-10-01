import "./AsideBarRight.css"
import HeaderCart from "../header-cart/HeaderCart";
import ListOrder from "../list-orders/ListOrder";
import Payment from "../payment/Payment";

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