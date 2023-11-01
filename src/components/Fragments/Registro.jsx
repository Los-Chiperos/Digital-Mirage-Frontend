import React, { useState, useNavigate } from 'react';
import { validateUsuario, validateNombreApellido, validateContrasena, validateEmail } from './Validaciones';
import axios from 'axios';

const Registro = () => {
    const navigate = useNavigate();

    // Estado para controlar la visibilidad de un modal
    const [isOpen, setIsOpen] = useState(false);

    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        usuario: '',
        contrasena: '',
        nombre: '',
        apellido: '',
        email: '',
    });

    // Estado para gestionar mensajes de error
    const [errors, setErrors] = useState({
        usuario: '',
        contrasena: '',
        nombreApellido: '',
        email: ''
    });

    /**
     * Función que maneja cambios en los campos del formulario.
     * @param {Event} ev - El evento de cambio del campo.
     */
    const handleInputChange = (ev) => {
        const { name, value } = ev.target;

        let error = '';

        if (name === 'usuario') {
            // Validación del usuario
            error = validateUsuario(value) ? '' : "El usuario debe tener al menos 6 caracteres";
        } else if (name === 'contrasena') {
            // Validación de la contraseña
            error = validateContrasena(value) ? '' : "La contraseña debe tener al menos 6 caracteres, una letra mayúscula y una letra minúscula";
        } else if (name === 'nombre' || name === 'apellido') {
            // Validación del nombre o apellido
            error = validateNombreApellido(value) ? '' : "El nombre o apellido solo debe contener letras";
        } else if (name === 'email') {
            // Validación del email
            error = validateEmail(value) ? '' : "Introduzca un email válido";
        }

        // Actualiza el estado con los nuevos datos y errores
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: error });
    };

    /**
     * Función que maneja el envío del formulario.
     * @param {Event} ev - El evento de envío del formulario.
     */
    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (formData) {
            // Realiza una solicitud POST a la URL del servidor con los datos del formulario
            axios.post('https://back.digital-mirage.ar/user/newuser', formData)
                .then((response) => {
                    if (!response.data) {
                        alert("Formulario no enviado, datos no válidos");
                    } else {
                        alert("El formulario se envió correctamente");
                        // Navega a la página de inicio de sesión
                        navigate("/user/login");
                    }
                    console.log('Respuesta del servidor:', response.data);
                })
                .catch((error) => {
                    // Maneja los errores de la solicitud
                    alert("Error al enviar los datos!");
                    console.error('Error en la solicitud:', error);
                });
        } else {
            console.log("Form data vacío");
            alert("Debe llenar el formulario");
        }
    };

    /**
     * Función para abrir el modal.
     */
    const openModal = () => {
        setIsOpen(true);
    };

    /**
     * Función para cerrar el modal.
     */
    const closeModal = () => {
        setIsOpen(false);
    };

    /**
     * Función para limpiar el formulario y restablecer los errores.
     */
    const cleanForm = () => {
        // Restablece los datos del formulario y los errores a sus valores iniciales
        setFormData({
            usuario: '',
            contrasena: '',
            nombre: '',
            apellido: '',
            email: ''
        });

        setErrors({
            usuario: '',
            contrasena: '',
            nombreApellido: '',
            email: ''
        });
    };


    return (
        <>
            <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={openModal}
            >
                Comenzar
            </button>
            <div className={`modal ${isOpen ? 'is-active' : ''}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Registro de usuarios</p>
                        <button onClick={closeModal} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <form action='' method='POST' onSubmit={handleSubmit}>
                            <div className="field">
                                <label className="label">Usuario</label>
                                <div className="control">
                                    <input
                                        name="usuario"
                                        value={formData.usuario}
                                        onChange={handleInputChange}
                                        className={`input ${errors.usuario ? 'is-danger' : 'is-success'}`}
                                        type="text"
                                        placeholder="Tu nombre de usuario"
                                    />
                                </div>
                                {errors.usuario && <p className="help is-danger">{errors.usuario}</p>}
                            </div>

                            <div className="field">
                                <label className="label">Contraseña</label>
                                <div className="control">
                                    <input
                                        name="password"
                                        value={formData.contrasena}
                                        onChange={handleInputChange}
                                        className={`input ${errors.contrasena ? 'is-danger' : 'is-success'}`}
                                        type="text"
                                        placeholder="Tu nombre de usuario"
                                    />
                                </div>
                                {errors.contrasena && <p className="help is-danger">{errors.contrasena}</p>}
                            </div>

                            <div className="field">
                                <label className="label">Nombre</label>
                                <div className="control">
                                    <input
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        className={`input ${errors.nombre ? 'is-danger' : 'is-success'}`}
                                        type="text"
                                        placeholder="Tu nombre de usuario"
                                    />
                                </div>
                                {errors.nombre && <p className="help is-danger">{errors.nombre}</p>}
                            </div>

                            <div className="field">
                                <label className="label">Apellido</label>
                                <div className="control">
                                    <input
                                        name="apellido"
                                        value={formData.apellido}
                                        onChange={handleInputChange}
                                        className={`input ${errors.apellido ? 'is-danger' : 'is-success'}`}
                                        type="text"
                                        placeholder="Tu nombre de usuario"
                                    />
                                </div>
                                {errors.apellido && <p className="help is-danger">{errors.apellido}</p>}
                            </div>

                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input
                                        name="email"
                                        value={formData.emaiol}
                                        onChange={handleInputChange}
                                        className={`input ${errors.email ? 'is-danger' : 'is-success'}`}
                                        type="text"
                                        placeholder="Tu nombre de usuario"
                                    />
                                </div>
                                {errors.email && <p className="help is-danger">{errors.email}</p>}
                            </div>

                        </form>
                    </section>
                    <footer className="modal-card-foot">
                        <button type="submit" className="button is-success">Registrarse</button>
                        <button className='button is-danger' onClick={cleanForm}>Limpiar</button>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Registro;