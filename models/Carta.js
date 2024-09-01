const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Carta = sequelize.define('Carta', {
    id_carta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    modelo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cilindraje: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cilindros: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    potencia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imagen_url: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    codigo_carta: {
        type: DataTypes.STRING(10),
        unique: true,
        allowNull: false
    }
}, {
    tableName: 'Cartas',
    timestamps: false
});

module.exports = Carta;
