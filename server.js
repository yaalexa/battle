const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const sequelize = require('./config/config');
const jugadoresRoutes = require('./routes/jugadores');
const partidasRoutes = require('./routes/partidas');
const invitacionesRoutes = require('./routes/invitaciones');
const cartasRoutes = require('./routes/cartas');
const rondasRoutes = require('./routes/rondas');
const configuracionesRoutes = require('./routes/configuraciones');

app.use(express.json());

// Conexión a la base de datos
sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });

// Rutas
app.use('/api/jugadores', jugadoresRoutes);
app.use('/api/partidas', partidasRoutes);
app.use('/api/invitaciones', invitacionesRoutes);
app.use('/api/cartas', cartasRoutes);
app.use('/api/rondas', rondasRoutes);
app.use('/api/configuraciones', configuracionesRoutes);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
