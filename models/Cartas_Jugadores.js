const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Partida = require('./Partida');
const Jugador = require('./Jugador');
const Carta = require('./Carta');

const Cartas_Jugadores = sequelize.define('Cartas_Jugadores', {
    id_partida: {
        type: DataTypes.INTEGER,
        references: {
            model: Partida,
            key: 'id_partida'
        }
    },
    id_jugador: {
        type: DataTypes.INTEGER,
        references: {
            model: Jugador,
            key: 'id_jugador'
        }
    },
    id_carta: {
        type: DataTypes.INTEGER,
        references: {
            model: Carta,
            key: 'id_carta'
        }
    }
}, {
    tableName: 'Cartas_Jugadores',
    timestamps: false,
    primaryKey: ['id_partida', 'id_jugador', 'id_carta']
});

module.exports = Cartas_Jugadores;
