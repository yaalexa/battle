const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Configuracion = sequelize.define('Configuracion', {
    id_configuracion: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    clave: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    valor: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'Configuraciones',
    timestamps: false
});

module.exports = Configuracion;
