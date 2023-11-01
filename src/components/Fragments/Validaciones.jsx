/**
 * Valida el campo 'usuario' para asegurarse de que cumple con las condiciones de registro.
 * @param {string} usuario - El valor del campo 'usuario' a validar.
 * @returns {boolean} - True si el usuario cumple con las condiciones, de lo contrario, false.
 */
export const validateUsuario = (usuario) => {
    // Expresión regular que verifica si el usuario contiene solo letras mayúsculas, minúsculas y números,
    // y tiene al menos 7 caracteres.
    const usuarioRegex = /^[A-Za-z0-9]{7,}$/;

    if (usuarioRegex.test(usuario)) {
        console.log("El usuario cumple con las condiciones para el registro");
        return true;
    } else {
        console.log("El usuario no cumple con las condiciones para el registro");
        return false;
    }
};

/**
 * Valida el campo 'contrasena' para asegurarse de que cumple con las condiciones de registro.
 * @param {string} contrasena - El valor del campo 'contrasena' a validar.
 * @returns {boolean} - True si la contraseña cumple con las condiciones, de lo contrario, false.
 */
export const validateContrasena = (contrasena) => {
    // Expresión regular que verifica si la contraseña tiene al menos 7 caracteres,
    // incluyendo al menos una letra minúscula y una letra mayúscula.
    const contrasenaRegex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9]{7,}$/;

    if (contrasenaRegex.test(contrasena)) {
        console.log("La contraseña cumple con las condiciones para el registro");
        return true;
    } else {
        console.log("La contraseña no cumple con las condiciones para el registro");
        return false;
    }
};

/**
 * Valida los campos 'nombre' y 'apellido' para asegurarse de que cumplen con las condiciones de registro.
 * @param {string} nombre - El valor del campo 'nombre' a validar.
 * @param {string} apellido - El valor del campo 'apellido' a validar.
 * @returns {boolean} - True si ambos campos cumplen con las condiciones, de lo contrario, false.
 */
export const validateNombreApellido = (nombre, apellido) => {
    // Expresión regular que verifica si tanto el nombre como el apellido contienen solo letras.
    const nombreApellidoRegex = /^[A-Za-z]+$/;

    if (nombreApellidoRegex.test(nombre) && nombreApellidoRegex.test(apellido)) {
        console.log("El nombre y el apellido cumplen las condiciones para el registro");
        return true;
    } else {
        console.log("El nombre o el apellido no cumplen con las condiciones para el registro");
        return false;
    }
}

/**
 * Valida el campo 'email' para asegurarse de que cumple con las condiciones de registro.
 * @param {string} email - El valor del campo 'email' a validar.
 * @returns {boolean} - True si el email cumple con las condiciones, de lo contrario, false.
 */
export const validateEmail = (email) => {
    // Expresión regular que verifica si el email tiene un formato básico de dirección de correo electrónico.
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (emailRegex.test(email)) {
        console.log("El email cumple las condiciones para el registro");
        return true;
    } else {
        console.log("El email no cumple las condiciones para el registro");
        return false;
    }
}