'use strict'

// Se importan las dependencias necesarias
const jwt = require('jwt-simple');  // Librería para JWT
const moment = require('moment');  // Librería para manipular fechas
const config = require('../midlewares/config');  // Configuración del token

// Función para crear un token JWT a partir de un usuario
function createToken(user) {
    const payload = {
        sub: user.usu_id,  // Identificador único del usuario
        iat: moment().unix(),  // Fecha actual en formato UNIX (timestamp)
        exp: moment().add(14, 'days').unix()  // Fecha de expiración del token (14 días desde la fecha actual)
    }
    // Se codifica el payload del token utilizando la clave secreta definida en la configuración
    return jwt.encode(payload, config.SECRET_TOKEN);
}

// Función para decodificar un token JWT y obtener el identificador del usuario
function decodeToken(token) {
    const decoded = new Promise((resolve, reject) => {
        try {
            // Se decodifica el token utilizando la clave secreta definida en la configuración
            const payload = jwt.decode(token, config.SECRET_TOKEN);
            // Se verifica si el token ha expirado comparando la fecha actual con la fecha de expiración del token
            if (payload.exp < moment().unix()) {
                reject({ status: 401, message: 'El token ha expirado' });
            }
            // Se resuelve con el identificador del usuario extraído del token
            resolve(payload.sub);
        } catch (err) {
            // Si ocurre algún error al decodificar el token, se rechaza la promesa con un mensaje de error
            reject({ status: 500, message: 'Invalid Token' });
        }
    });
    return decoded;
}

// Se exportan las funciones createToken y decodeToken para ser utilizadas desde otros módulos
module.exports = {
    createToken: createToken,
    decodeToken: decodeToken
};
