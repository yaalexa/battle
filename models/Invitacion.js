const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Jugador = require('./Jugador');
const Partida = require('./Partida');

const Invitacion = sequelize.define('Invitacion', {
    id_invitacion: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_partida: {
        type: DataTypes.INTEGER,
        references: {
            model: Partida,
            key: 'id_partida'
        }
    },
    id_jugador_invita: {
        type: DataTypes.INTEGER,
        references: {
            model: Jugador,
            key: 'id_jugador'
        }
    },
    id_jugador_invitado: {
        type: DataTypes.INTEGER,
        references: {
            model: Jugador,
            key: 'id_jugador'
        }
    },
    estado: {
        type: DataTypes.ENUM('pendiente', 'aceptada', 'rechazada'),
        defaultValue: 'pendiente'
    },
    fecha_invitacion: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'Invitaciones',
    timestamps: false
});

module.exports = Invitacion;
