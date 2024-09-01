const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Ronda = require('./Ronda');
const Jugador = require('./Jugador');
const Carta = require('./Carta');

const Cartas_Rondas = sequelize.define('Cartas_Rondas', {
    id_ronda: {
        type: DataTypes.INTEGER,
        references: {
            model: Ronda,
            key: 'id_ronda'
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
    tableName: 'Cartas_Rondas',
    timestamps: false,
    primaryKey: ['id_ronda', 'id_jugador', 'id_carta']
});

module.exports = Cartas_Rondas;
