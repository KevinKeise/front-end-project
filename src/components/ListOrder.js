import OrderCurrentCard from "./OrderCurrentCard";
import "./ListOrder.css";

const ListOrder = () => {
    return(
        <div  className="container-list-order-aside">
            <OrderCurrentCard/>
            <OrderCurrentCard/>
            <OrderCurrentCard/>
            <OrderCurrentCard/>
            <OrderCurrentCard/>
        </div>
    );
}

export default ListOrder;