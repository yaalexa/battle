const Ronda = require('../models/Ronda');

// Obtener todas las rondas
exports.getAllRondas = async (req, res) => {
    try {
        const rondas = await Ronda.findAll();
        res.json(rondas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las rondas' });
    }
};

// Obtener una ronda por ID
exports.getRondaById = async (req, res) => {
    try {
        const ronda = await Ronda.findByPk(req.params.id);
        if (ronda) {
            res.json(ronda);
        } else {
            res.status(404).json({ error: 'Ronda no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la ronda' });
    }
};

// Crear una nueva ronda
exports.createRonda = async (req, res) => {
    try {
        const ronda = await Ronda.create(req.body);
        res.status(201).json(ronda);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la ronda' });
    }
};

// Actualizar una ronda
exports.updateRonda = async (req, res) => {
    try {
        const ronda = await Ronda.findByPk(req.params.id);
        if (ronda) {
            await ronda.update(req.body);
            res.json(ronda);
        } else {
            res.status(404).json({ error: 'Ronda no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la ronda' });
    }
};

// Eliminar una ronda
exports.deleteRonda = async (req, res) => {
    try {
        const ronda = await Ronda.findByPk(req.params.id);
        if (ronda) {
            await ronda.destroy();
            res.json({ message: 'Ronda eliminada' });
        } else {
            res.status(404).json({ error: 'Ronda no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la ronda' });
    }
};
