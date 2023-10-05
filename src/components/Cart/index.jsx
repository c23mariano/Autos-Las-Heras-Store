import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import ItemCart from "../ItemCart";

const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Mariano',
            email: 'mariano@gmail.com',
            phone: '1122334455',
            adress: 'Directorio 32'
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <>
            <p>No hay elementos en el carrito</p>
            <Link to='/'>Realizar pedido de compra</Link>
            </>
        );
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                total: {totalPrice()}
            </p>
            <button onClick={handleClick}>Emitir orden de compra</button>
        </>
    );
}

export default Cart