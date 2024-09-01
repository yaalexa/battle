const express = require('express');
const router = express.Router();
const rondasController = require('../controllers/rondasController');

router.get('/', rondasController.getAllRondas);
router.get('/:id', rondasController.getRondaById);
router.post('/', rondasController.createRonda);
router.put('/:id', rondasController.updateRonda);
router.delete('/:id', rondasController.deleteRonda);

module.exports = router;
