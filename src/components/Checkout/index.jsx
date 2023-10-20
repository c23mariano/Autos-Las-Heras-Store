import {addDoc, collection, getFirestore} from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

export const Checkout = () => {

    const [name, setName] = useState (' ');
    const [email, setEmail] = useState (' ');
    const [phone, setPhone] = useState (' ');

    const [orderId, setOrderId] = useState();

    const {cart, totAmount, clearCart} = useContext(CartContext)

    const createOrder = () => {
        const db = getFirestore()
        const order = {
            buyer: {
                name,
                email,
                phone,
            },
            items: cart,
            date: new Date(),
            total: totAmount
        };

        const ordersRef = collection(db, "orders");
        addDoc(ordersRef, order).then(result => setOrderId(result.id));

        clearCart();
    }

    if(orderId) {
        return (
            <div>
                <h1>{`Orden de compra creada!`}</h1>
                <h2>{`Tu ID de orden es ${orderId}`}</h2>
                <Link to="/"><button>Ir al catalogo</button></Link>
            </div>
        )
    }
}

export default Checkout
