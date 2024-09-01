const Invitacion = require('../models/Invitacion');

// Obtener todas las invitaciones
exports.getAllInvitaciones = async (req, res) => {
    try {
        const invitaciones = await Invitacion.findAll();
        res.json(invitaciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las invitaciones' });
    }
};

// Obtener una invitación por ID
exports.getInvitacionById = async (req, res) => {
    try {
        const invitacion = await Invitacion.findByPk(req.params.id);
        if (invitacion) {
            res.json(invitacion);
        } else {
            res.status(404).json({ error: 'Invitación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la invitación' });
    }
};

// Crear una nueva invitación
exports.createInvitacion = async (req, res) => {
    try {
        const invitacion = await Invitacion.create(req.body);
        res.status(201).json(invitacion);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la invitación' });
    }
};

// Actualizar una invitación
exports.updateInvitacion = async (req, res) => {
    try {
        const invitacion = await Invitacion.findByPk(req.params.id);
        if (invitacion) {
            await invitacion.update(req.body);
            res.json(invitacion);
        } else {
            res.status(404).json({ error: 'Invitación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la invitación' });
    }
};

// Eliminar una invitación
exports.deleteInvitacion = async (req, res) => {
    try {
        const invitacion = await Invitacion.findByPk(req.params.id);
        if (invitacion) {
            await invitacion.destroy();
            res.json({ message: 'Invitación eliminada' });
        } else {
            res.status(404).json({ error: 'Invitación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la invitación' });
    }
};
