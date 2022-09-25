import ProductCard from "./ProductCard";
import "./ProdList.css";
import TypeFoodList from "./TypeFoodList";


const ProdList = () => {
    return(
        <div className="container-prod-list">
            <div className="container-list-opt-types">
                <TypeFoodList/>
            </div>
            <div className="container-products">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    );
}

export default ProdList;