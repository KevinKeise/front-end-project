import "./ProductCard.css";

const ProductCard = () => {
    return(
        <div className="container-product-card">
            <div className="container-image-prod-card">
                <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <div>
                    <button>Cart</button>
                </div>
            </div>
            <div>
                <h2>some text</h2>
            </div>
            <div>
                <h2>desc text text</h2>
            </div>
            <div>
                <span>R$ 3,00</span>
            </div>
        </div>
    );
}

export default ProductCard;