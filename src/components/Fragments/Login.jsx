import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [password, setPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(true);

    const validateEmail = (email) => {
        // Expresión regular para validar correos electrónicos
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return regex.test(email);
    };

    const handleChange = (ev) => {
        const inputEmail = ev.target.value;
        setEmail(inputEmail);
        setIsValid(validateEmail(inputEmail));
    };

    const validatePassword = (password) => {
        // Debe tener al menos 8 caracteres
        if (password.length < 8) {
            return false;
        }

        // Debe contener al menos una letra mayúscula
        if (!/[A-Z]/.test(password)) {
            return false;
        }

        // Debe contener al menos una letra minúscula
        if (!/[a-z]/.test(password)) {
            return false;
        }

        // Debe contener al menos un número
        if (!/[0-9]/.test(password)) {
            return false;
        }

        return true;
    };

    const handleChangePassword = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        setIsValidPassword(validatePassword(inputPassword));
    };

    const openModal = (ev) => {
        setIsOpen(true);
    }

    const closeModal = (ev) => {
        setIsOpen(false);
    }

    const handleSubmit = (ev) => {
        try {
            const response = axios.post('url', { email, password });
            console.log(`Respuesta del servido: ${response.data}`);
            navigate("/");
        } catch (error) {
            console.log(`Error al enviar la solicitud de ingreso: ${error}`);
        }
    }

    return (
        <>
            <button onClick={openModal} className='btn btn-success'>Comentar</button>
            <hr />

            <div className={`modal ${isOpen ? 'is-active' : ''}`}>
                <div className='modal-content'>
                    <form action="" onSubmit={handleSubmit}>
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="email" placeholder="Email" name='email' onChange={handleChange} value={email} />
                                {isValid ? null : <p style={{ color: 'red' }}>Email no válido</p>}
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                                <span class="icon is-small is-right">
                                    <i class="fas fa-check"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="password" placeholder="Password" name='password'
                                    value={password}
                                    onChange={handleChangePassword} />
                                {isValidPassword ? null : (
                                    <p style={{ color: 'red' }}>
                                        La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.
                                    </p>
                                )}
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control">
                                <button class="button is-success">
                                    Login
                                </button>
                            </p>
                        </div>
                        <button type='submit' class="modal-close is-large" aria-label="close"></button>
                    </form>
                    <button className='btn btn-block' onClick={closeModal}>X</button>
                </div>
            </div>
        </>
    )
}

export default Login;
