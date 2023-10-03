import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    // Obtén la función de navegación de react-router-dom
    const navigate = useNavigate();

    // Estados para el modal
    const [isOpen, setIsOpen] = useState(false);

    // Estados para el correo electrónico y la contraseña
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [password, setPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(true);

    // Función para validar el correo electrónico
    const validateEmail = (email) => {
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return regex.test(email);
    };

    // Manejar cambios en el campo de correo electrónico
    const handleChangeEmail = (ev) => {
        const inputEmail = ev.target.value;
        setEmail(inputEmail);
        setIsValidEmail(validateEmail(inputEmail));
    };

    // Función para validar la contraseña
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

    // Manejar cambios en el campo de contraseña
    const handleChangePassword = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        setIsValidPassword(validatePassword(inputPassword));
    };

    // Abrir el modal
    const openModal = () => {
        setIsOpen(true);
    };

    // Cerrar el modal
    const closeModal = () => {
        setIsOpen(false);
    };

    // Manejar el envío del formulario
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        try {
            // Realizar una solicitud POST con Axios
            const response = await axios.post('/user/login', { email, password });
            console.log(`Respuesta del servidor: ${response.data}`);
            navigate("/");
        } catch (error) {
            console.log(`Error al enviar la solicitud de ingreso: ${error}`);
        }
        console.log("click")
    };

    return (
        <>
            <button onClick={openModal} className='button is-success'>
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
                                        value={email}
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
                        </form>
                    </section>
                    <footer className="modal-card-foot">
                        <button type="submit" className="button is-success">Log in</button>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default Login;