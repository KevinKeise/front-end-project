import ProductCard from "./ProductCard";
import "./ProdList.css";

const ProdList = () => {
    return(
        <div className="container-prod-list">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    );
}

export default ProdList;