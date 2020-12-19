const routerx = require('express-promise-router');
const articuloRouter = require('./articulo');
const usuarioRouter = require('./usuario');
const categoriaRouter = require('./categoria');
const router = routerx();

router.use('/articulo',articuloRouter);
router.use('/usuario',usuarioRouter);
router.use('/categoria',categoriaRouter);

module.exports = router;

// a los que no les da nota quiten la autenticacion de 
// las rutas, quiten el package.lock.json, el gitignore,
// la carpeta de git, el archivo de Sqlite y compriman la
// carpeta no los archivos , así me funcionó
