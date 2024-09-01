const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Jugador = require('./Jugador');

const Partida = sequelize.define('Partida', {
    id_partida: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha_partida: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW
    },
    estado: {
        type: DataTypes.ENUM('pendiente', 'en progreso', 'finalizada'),
        defaultValue: 'pendiente'
    },
    tipo_partida: {
        type: DataTypes.ENUM('amigos', 'online'),
        allowNull: false
    },
    jugadores_maximos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    jugador_inicial: {
        type: DataTypes.INTEGER,
        references: {
            model: Jugador,
            key: 'id_jugador'
        }
    }
}, {
    tableName: 'Partidas',
    timestamps: false
});

module.exports = Partida;
