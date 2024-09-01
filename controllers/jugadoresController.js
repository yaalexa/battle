const Jugador = require('../models/Jugador');

// Obtener todos los jugadores
exports.getAllJugadores = async (req, res) => {
    try {
        const jugadores = await Jugador.findAll();
        res.json(jugadores);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los jugadores' });
    }
};

// Obtener un jugador por ID
exports.getJugadorById = async (req, res) => {
    try {
        const jugador = await Jugador.findByPk(req.params.id);
        if (jugador) {
            res.json(jugador);
        } else {
            res.status(404).json({ error: 'Jugador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el jugador' });
    }
};

// Crear un nuevo jugador
exports.createJugador = async (req, res) => {
    try {
        const jugador = await Jugador.create(req.body);
        res.status(201).json(jugador);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el jugador' });
    }
};

// Actualizar un jugador
exports.updateJugador = async (req, res) => {
    try {
        const jugador = await Jugador.findByPk(req.params.id);
        if (jugador) {
            await jugador.update(req.body);
            res.json(jugador);
        } else {
            res.status(404).json({ error: 'Jugador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el jugador' });
    }
};

// Eliminar un jugador
exports.deleteJugador = async (req, res) => {
    try {
        const jugador = await Jugador.findByPk(req.params.id);
        if (jugador) {
            await jugador.destroy();
            res.json({ message: 'Jugador eliminado' });
        } else {
            res.status(404).json({ error: 'Jugador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el jugador' });
    }
};
