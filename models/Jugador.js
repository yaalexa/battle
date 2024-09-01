const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Jugador = sequelize.define('Jugador', {
    id_jugador: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_usuario: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
    contrasena: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    avatar_url: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    fecha_registro: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'Jugadores',
    timestamps: false
});

module.exports = Jugador;
