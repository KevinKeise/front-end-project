import "./ProductCard.css";
import {NavLink} from "react-router-dom"

const ProductCard = () => {
    return(
        <div className="container-product-card">
            <NavLink to="/asd" className="link-card">
                <div className="container-image-prod-card">
                    <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </div>
                <div>
                    <h2>some text</h2>
                </div>
                <div>
                    <h2>desc text text</h2>
                </div>
                <div className="container-price-card">
                    <span>R$ 3,00</span>
                </div>
            </NavLink>
            <div className="container-card-top">
                <button>Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;