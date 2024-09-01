const express = require('express');
const router = express.Router();
const cartasController = require('../controllers/cartasController');

router.get('/', cartasController.getAllCartas);
router.get('/:id', cartasController.getCartaById);
router.post('/', cartasController.createCarta);
router.put('/:id', cartasController.updateCarta);
router.delete('/:id', cartasController.deleteCarta);

module.exports = router;
