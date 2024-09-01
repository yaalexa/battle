const Partida = require('../models/Partida');

// Obtener todas las partidas
exports.getAllPartidas = async (req, res) => {
    try {
        const partidas = await Partida.findAll();
        res.json(partidas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las partidas' });
    }
};

// Obtener una partida por ID
exports.getPartidaById = async (req, res) => {
    try {
        const partida = await Partida.findByPk(req.params.id);
        if (partida) {
            res.json(partida);
        } else {
            res.status(404).json({ error: 'Partida no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la partida' });
    }
};

// Crear una nueva partida
exports.createPartida = async (req, res) => {
    try {
        const partida = await Partida.create(req.body);
        res.status(201).json(partida);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la partida' });
    }
};

// Actualizar una partida
exports.updatePartida = async (req, res) => {
    try {
        const partida = await Partida.findByPk(req.params.id);
        if (partida) {
            await partida.update(req.body);
            res.json(partida);
        } else {
            res.status(404).json({ error: 'Partida no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la partida' });
    }
};

// Eliminar una partida
exports.deletePartida = async (req, res) => {
    try {
        const partida = await Partida.findByPk(req.params.id);
        if (partida) {
            await partida.destroy();
            res.json({ message: 'Partida eliminada' });
        } else {
            res.status(404).json({ error: 'Partida no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la partida' });
    }
};
