import React, {useState} from "react";
import "./itemDetail.css";
import { useCartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
        <div className="container">
            <div className="detail">
                <img className="detail__image" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    {
                        goToCart
                        ? <Link to={'/cart'}>Finalizar compra</Link>
                        :<ItemCount initial={1} stock={5} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>  
    );
}

export default ItemDetail;