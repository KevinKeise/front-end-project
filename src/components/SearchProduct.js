import "./SearchProduct.css"
const SearchProduct = () => {
    return(
        <div className="container-search-product">
            <div className="container-icon-input-header">
                <div className="container-icon-search">
                    <span class="material-symbols-outlined">search</span>
                </div>
                <div>
                    <input className="input-search-product" type="text" placeholder="Procurar produto"/>
                </div>
            </div>
            <div className="container-button-search">
                <button className="button-search-product">Procurar</button>
            </div>
        </div>
    );
}

export default SearchProduct;