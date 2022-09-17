import ProductCard from "./ProductCard";
import "./ProdList.css";
import {NavLink} from "react-router-dom"

const ProdList = () => {
    return(
        <div className="container-prod-list">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    );
}

export default ProdList;