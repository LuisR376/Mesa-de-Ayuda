const express = require ('express');
const bodyParser = require('body-parser'); //ayuda con post get
const api = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

api.use(cors());
api.options('*',cors())
api.use(bodyParser.urlencoded({extended:true}));
api.use(bodyParser.json());

console.log("api")
const usuario = require ('./Server/routes/usuario.js');
api.use('/usuario',usuario)

api.get('/', (req, res) => {
    res.send('Bienvenido a mi API');
    
  });

const activo = require ('./Server/routes/activosInventario');
api.use('/activos',activo)

const ticket = require ('./Server/routes/ticket');
api.use('/ticket',ticket)

const servicios = require ('./Server/routes/servicios');
api.use('/servicios',servicios)

const lugar = require ('./Server/routes/lugar');
api.use('/lugar',lugar)

const area = require ('./Server/routes/area');
api.use('/area',area)

const licencias = require ('./Server/routes/licencias');
api.use('/licencias',licencias)

const rol = require ('./Server/routes/rol');
api.use('/rol',rol)

const tipoActivo = require ('./Server/routes/tipoActivo');
api.use('/tipoActivo',tipoActivo)

const usuario_rel_servicio = require ('./Server/routes/usuario_rel_servicio');
api.use('/usuario_rel_servicio',usuario_rel_servicio)

const tipodeServicio = require ('./Server/routes/tipodeServicio');
api.use('/tipodeServicio',tipodeServicio)

const iniciarSesion = require ('./Server/routes/iniciarSesion');
api.use('/iniciarSesion',iniciarSesion)

module.exports = api;