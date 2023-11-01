import React, { useState } from 'react';

const Registro = () => {

    const [isOpen, setIsOpen] = useState(false);

    // Abrir el modal
    const openModal = () => {
        setIsOpen(true);
    };

    // Cerrar el modal
    const closeModal = () => {
        setIsOpen(false);
    };

    // Limpiar el formulario
    const cleanForm = () => {

    }

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

                        <form action='' method='POST'>

                            <div className="field">
                                <label className="label">Usuario</label>
                                <div className="control">
                                    <input className="input is-success" type="text" placeholder="Tu nombre de usuario" />
                                </div>
                            </div>

                            <div className="field">
                                <label className='label'>Constraseña</label>
                                <div className="control">
                                    <input className="input is-success" type="password" placeholder="Contraseña" />
                                </div>
                                {
                                    //    <p className="help is-danger">This password is invalid</p>
                                }
                            </div>

                            <div className="field">
                                <label className="label">Nombre</label>
                                <div className="control">
                                    <input className="input is-success" type="text" placeholder="Tu nombre" />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Apellido</label>
                                <div className="control">
                                    <input className="input is-success" type="text" placeholder="Tu apellido" />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input className="input is-success" type="email" placeholder="ejemplo@email.com" />
                                </div>
                                {
                                    //    <p className="help is-danger">This email is invalid</p>
                                }
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
