const Carta = require('../models/Carta');

// Obtener todas las cartas
exports.getAllCartas = async (req, res) => {
    try {
        const cartas = await Carta.findAll();
        res.json(cartas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las cartas' });
    }
};

// Obtener una carta por ID
exports.getCartaById = async (req, res) => {
    try {
        const carta = await Carta.findByPk(req.params.id);
        if (carta) {
            res.json(carta);
        } else {
            res.status(404).json({ error: 'Carta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la carta' });
    }
};

// Crear una nueva carta
exports.createCarta = async (req, res) => {
    try {
        const carta = await Carta.create(req.body);
        res.status(201).json(carta);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la carta' });
    }
};

// Actualizar una carta
exports.updateCarta = async (req, res) => {
    try {
        const carta = await Carta.findByPk(req.params.id);
        if (carta) {
            await carta.update(req.body);
            res.json(carta);
        } else {
            res.status(404).json({ error: 'Carta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la carta' });
    }
};

// Eliminar una carta
exports.deleteCarta = async (req, res) => {
    try {
        const carta = await Carta.findByPk(req.params.id);
        if (carta) {
            await carta.destroy();
            res.json({ message: 'Carta eliminada' });
        } else {
            res.status(404).json({ error: 'Carta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la carta' });
    }
};
