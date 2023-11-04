import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Css/cart.css";
import { CartContext } from '../Context/ShoppingCartContext';

function CartButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useContext(CartContext);

    function formatPrice(price) {
        return price.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS"
        });
    }

    // Función para actualizar la cantidad de un producto en el carrito
    const updateQuantity = (productId, newQuantity) => {
        const updatedCart = cart.map(product => {
            if (product._id === productId) {
                return { ...product, quantity: newQuantity };
            }
            return product;
        });
        setCart(updatedCart);
    };

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

    const openModal = () => {
        setIsOpen(true);
    };

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
  <div className="modal-card" style={{ maxWidth: '80%', width: 'auto' }}> {/* Estilos para el ancho */}
                    <header className="modal-card-head">
                        <p className="modal-card-title has-text-primary">Productos en el carrito</p>
                        <button onClick={closeModal} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th className='has-text-info'>Imagen</th>
                                    <th className='has-text-info'>Marca</th>
                                    <th className='has-text-info'>Modelo</th>
                                    <th className='has-text-info'>Descripcion</th>
                                    <th className='has-text-info'>Cantidad</th>
                                    <th className='has-text-info'>Precio</th>
                                    <th className='has-text-info'>Quitar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(producto => (
                                    <tr key={producto._id}>
                                        <td>
                                            <img
                                                className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                                                src={producto.url_image}
                                                alt={`imagen del producto ${producto.marca} ${producto.modelo}`}
                                            />
                                        </td>
                                        <td>{producto.marca}</td>
                                        <td>{producto.modelo}</td>
                                        <td>{producto.descripcion}</td>
                                        <td>
                                            <input
                                                type="number"
                                                value={producto.quantity}
                                                onChange={(e) => {
                                                    const newQuantity = parseInt(e.target.value, 10);
                                                    if (!isNaN(newQuantity) && newQuantity >= 1) {
                                                        updateQuantity(producto._id, newQuantity);
                                                    }
                                                }}
                                            />
                                        </td>
                                        <td className='has-text-primary'>{formatPrice(producto.precio)}</td>
                                        <td><button onClick={() => removeItem(producto._id)}>❌</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                    <footer className="modal-card-foot is-flex is-flex-direction-column is-justity-content-center">
                        <h3 className='mb-5 has-text-weight-bold'><span className='has-text-info'>Total:</span> {formatPrice(totalPrice)}</h3>
                        <Link onClick={closeModal} to="/checkout" className="button is-success">Ir a pagar</Link>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default CartButton;
