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

    const removeItem = (id) => {
        setCart((currItems) => {
            if (currItems.find((item) => item._id === id)?.quantity === 1) {
                return currItems.filter((item) => item._id !== id);
            } else {
                return currItems.map((item) => {
                    if (item._id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

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
                                    <th className='has-text-info'>Cantidad</th>
                                    <th className='has-text-info'>Precio</th>
                                    <th className='has-text-info'>Quitar</th>
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
                                                    <th>{quantity}</th>
                                                    <th className='has-text-primary'>${producto.precio}</th>
                                                    <th><button onClick={() => removeItem(producto._id)}>❌</button></th>
                                                </tr>
                                            </>
                                        )

                                    })
                                }
                            </tbody>
                        </table>
                    </section>
                    <footer className="modal-card-foot is-flex is-flex-direction-column is-justity-content-center">
                        <h3 className='mb-5 has-text-weight-bold'><span className='has-text-info'>Total:</span> ${totalPrice}</h3>
                        <Link onClick={() => closeModal()} to="/checkout"
                            className="button is-success">Ir a pagar</Link>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default CartButton;
