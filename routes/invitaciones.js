const express = require('express');
const router = express.Router();
const invitacionesController = require('../controllers/invitacionesController');

router.get('/', invitacionesController.getAllInvitaciones);
router.get('/:id', invitacionesController.getInvitacionById);
router.post('/', invitacionesController.createInvitacion);
router.put('/:id', invitacionesController.updateInvitacion);
router.delete('/:id', invitacionesController.deleteInvitacion);

module.exports = router;
