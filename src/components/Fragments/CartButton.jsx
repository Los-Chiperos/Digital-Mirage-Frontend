import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Css/cart.css";
import { CartContext } from '../Context/ShoppingCartContext';

const CartButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    const totalPrice = cart.reduce((acc, curr) => {
        return acc + curr.quantity * curr.precio;
    }, 0);


    /**
     * Abre un modal.
     */
    const openModal = () => {
        setIsOpen(true);
    };

    /**
     * Cierra un modal.
     */
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button onClick={openModal}>
                <div className="cart-btn" id="cart-btn">🛒</div>
                <span className="cart-counter" id="cart-counter">{quantity}</span>
            </button>

            <div className={`modal ${isOpen ? 'is-active' : ''}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title has-text-primary">Productos en el carrito</p>
                        <button onClick={closeModal} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th className='has-text-info'>Código</th>
                                    <th className='has-text-info'>Marca</th>
                                    <th className='has-text-info'>Modelo</th>
                                    <th className='has-text-info'>Descripcion</th>
                                    <th className='has-text-info'>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(producto => {
                                        return (
                                            <>
                                                <tr>
                                                    <th>{producto._id}</th>
                                                    <th>{producto.marca}</th>
                                                    <th>{producto.modelo}</th>
                                                    <th>{producto.descripcion}</th>
                                                    <th className='has-text-primary'>${producto.precio}</th>
                                                </tr>
                                            </>
                                        )

                                    })
                                }
                            </tbody>
                        </table>
                    </section>
                    <footer className="modal-card-foot">
                        <h3>Total: {totalPrice}</h3>
                        <Link onClick={() => console.log(cart)} className="button is-success">Ir a pagar</Link>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default CartButton;
