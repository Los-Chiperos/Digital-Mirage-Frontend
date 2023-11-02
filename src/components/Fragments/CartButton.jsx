import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "../Css/cart.css";
import { CartContext } from '../Context/ShoppingCartContext';

const CartButton = () => {
    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    return (
        <div>
            <Link>
                <div className="cart-btn" id="cart-btn">🛒</div>
                <span className="cart-counter" id="cart-counter">{quantity}</span>
            </Link>
        </div>
    )
}

export default CartButton;
