import Header from "./Header";
import "./Initial.css";
import ProdList from "./ProdList";
import TypeFoodList from "./TypeFoodList";

const Initial = () => {
    return(
        <div className="container-initial">
            <Header/>
            <TypeFoodList/>
            <ProdList/>
        </div>
    );
}

export default Initial;