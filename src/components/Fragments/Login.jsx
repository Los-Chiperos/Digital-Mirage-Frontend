import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    // Obtiene la función de navegación para redirigir al usuario.
    const navigate = useNavigate();

    // Estado para controlar la visibilidad de un modal.
    const [isOpen, setIsOpen] = useState(false);

    // Estado para almacenar el nombre de usuario (email) y validar su formato.
    const [username, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    // Estado para almacenar la contraseña y validar su complejidad.
    const [password, setPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(true);

    /**
     * Valida si el email cumple con un formato válido.
     * @param {string} username - El valor del campo de email a validar.
     * @returns {boolean} - True si el email es válido, de lo contrario, false.
     */
    const validateEmail = (username) => {
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return regex.test(username);
    };

    /**
     * Maneja el cambio en el campo de email.
     * @param {Event} ev - El evento de cambio en el campo de email.
     */
    const handleChangeEmail = (ev) => {
        const inputEmail = ev.target.value;
        setEmail(inputEmail);
        setIsValidEmail(validateEmail(inputEmail));
    };

    /**
     * Valida la complejidad de la contraseña.
     * @param {string} password - El valor del campo de contraseña a validar.
     * @returns {boolean} - True si la contraseña es válida, de lo contrario, false.
     */
    const validatePassword = (password) => {
        if (password.length < 8) {
            return false;
        }
        if (!/[A-Z]/.test(password)) {
            return false;
        }
        if (!/[a-z]/.test(password)) {
            return false;
        }
        if (!/[0-9]/.test(password)) {
            return false;
        }
        return true;
    };

    /**
     * Maneja el cambio en el campo de contraseña.
     * @param {Event} e - El evento de cambio en el campo de contraseña.
     */
    const handleChangePassword = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        setIsValidPassword(validatePassword(inputPassword));
    };

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

    /**
     * Maneja el envío del formulario de inicio de sesión.
     * @param {Event} ev - El evento de envío del formulario.
     */
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        if (isValidEmail && isValidPassword) {
            try {
                const response = await axios.post('https://back.digital-mirage.ar/user/login', { username, password });
                console.log(`Respuesta del servidor: ${response.data}`);
                navigate("/");
            } catch (error) {
                console.log(`Error al enviar la solicitud de ingreso: ${error}`);
            }
        }
    };

    return (
        <>
            <button onClick={openModal} className='button is-success mr-3'>
                Ingresar
            </button>
            <hr />

            <div className={`modal ${isOpen ? 'is-active' : ''}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Ingreso de usuario</p>
                        <button onClick={closeModal} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <form action="" onSubmit={handleSubmit} method='POST'>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input
                                        className="input"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        onChange={handleChangeEmail}
                                        value={username}
                                    />
                                    {isValidEmail ? null : (
                                        <p style={{ color: 'red' }}>Email no válido</p>
                                    )}
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input
                                        className="input"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        onChange={handleChangePassword}
                                    />
                                    {isValidPassword ? null : (
                                        <p style={{ color: 'red' }}>
                                            La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.
                                        </p>
                                    )}
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </p>
                            </div>
                            <footer className="modal-card-foot">
                                <button type="submit" className="button is-success">Log in</button>
                            </footer>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Login;
