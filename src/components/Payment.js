import "./Payment.css";

const Payment = () => {
    return(
        <div className="container-payment">
            <div className="container-info style-botton-esp">
                <div className="container-price-info">
                    <div>
                        <h3 className="header-text-price">Subtotal</h3>
                    </div>
                    <div>
                        <span className="price-payment">$ 3.50</span>
                    </div>
                </div>
                <div className="container-price-info">
                    <div>
                        <h3 className="header-text-price">Desconto</h3>
                    </div>
                    <div>
                        <span className="price-payment">- $ 3.50</span>
                    </div>
                </div>
                <div className="container-price-info">
                    <div>
                        <h3 className="header-text-price">Total</h3>
                    </div>
                    <div>
                        <span className="price-payment">$  3.50</span>
                    </div>
                </div>
            </div>
            <div className="container-price-info container-info style-botton-esp-2">
                <div>
                    <h3 className="total-price-payment-text">Total</h3>
                </div>
                <div>
                    <span className="price-payment-total">$ 3.50</span>
                </div>
            </div>
            <div className="container-button-payment-side">
                <button type="buttton" className="button-payment-side">Continuar para pagamento</button>
            </div>
        </div>
    );
}

export default Payment;