const express = require('express');
const router = express.Router();
const configuracionesController = require('../controllers/configuracionesController');

router.get('/', configuracionesController.getAllConfiguraciones);
router.get('/:clave', configuracionesController.getConfiguracionByClave);
router.post('/', configuracionesController.createConfiguracion);
router.put('/:clave', configuracionesController.updateConfiguracion);
router.delete('/:clave', configuracionesController.deleteConfiguracion);

module.exports = router;
