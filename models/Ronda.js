const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Partida = require('./Partida');
const Jugador = require('./Jugador');

const Ronda = sequelize.define('Ronda', {
    id_ronda: {
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
    id_jugador_ganador: {
        type: DataTypes.INTEGER,
        references: {
            model: Jugador,
            key: 'id_jugador'
        }
    },
    caracteristica_jugada: {
        type: DataTypes.ENUM('cilindraje', 'cilindros', 'potencia')
    },
    tiempo_ronda: {
        type: DataTypes.INTEGER
    },
    fecha_ronda: {
        type: DataTypes.TIMESTAMP,
        defaultValue,
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'Rondas',
    timestamps: false
});

module.exports = Ronda;