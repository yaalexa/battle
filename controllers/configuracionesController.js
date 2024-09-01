const Configuracion = require('../models/Configuracion');

// Obtener todas las configuraciones
exports.getAllConfiguraciones = async (req, res) => {
    try {
        const configuraciones = await Configuracion.findAll();
        res.json(configuraciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las configuraciones' });
    }
};

// Obtener una configuración por clave
exports.getConfiguracionByClave = async (req, res) => {
    try {
        const configuracion = await Configuracion.findOne({ where: { clave: req.params.clave } });
        if (configuracion) {
            res.json(configuracion);
        } else {
            res.status(404).json({ error: 'Configuración no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la configuración' });
    }
};

// Crear una nueva configuración
exports.createConfiguracion = async (req, res) => {
    try {
        const configuracion = await Configuracion.create(req.body);
        res.status(201).json(configuracion);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la configuración' });
    }
};

// Actualizar una configuración
exports.updateConfiguracion = async (req, res) => {
    try {
        const configuracion = await Configuracion.findOne({ where: { clave: req.params.clave } });
        if (configuracion) {
            await configuracion.update(req.body);
            res.json(configuracion);
        } else {
            res.status(404).json({ error: 'Configuración no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la configuración' });
    }
};

// Eliminar una configuración
exports.deleteConfiguracion = async (req, res) => {
    try {
        const configuracion = await Configuracion.findOne({ where: { clave: req.params.clave } });
        if (configuracion) {
            await configuracion.destroy();
            res.json({ message: 'Configuración eliminada' });
        } else {
            res.status(404).json({ error: 'Configuración no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la configuración' });
    }
};
