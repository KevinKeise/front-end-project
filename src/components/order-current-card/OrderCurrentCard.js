import "./OrderCurrentCard.css"

const OrderCurrentCard = () => {
    return(
        <div className="container-order-card">
            <div className="container-content-order-card">
                <div className="container-image-order-card">
                    <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </div>
                <div className="container-text-order-card">
                    <div className="container-text-title-order-card">
                        <h2>Alooooo descricao produto descricao produto</h2>
                    </div>
                    <div className="container-price-opt-order-card">
                        <div className="container">
                            <span className="price-order-card">R$ 2,25</span>
                        </div>
                        <div className="container-select-qtd-orders">
                            <div>
                                <button type="button" className="button-select-qdt-order"> - </button>
                            </div>
                            <div className="container-qtd-product-order">
                                <span>2</span>
                            </div>
                            <div>
                                <button type="button" className="button-select-qdt-order"> - </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderCurrentCard;