const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./config/db');
require('dotenv').config();

const app = express();

// Middlewares
app.use(helmet()); // Seguridad adicional
app.use(cors()); // Permitir solicitudes de origen cruzado
app.use(express.json()); // Parsear cuerpos JSON
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Rutas
app.use('/products', productRoutes);

// Manejo de rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({ message: 'Recurso no encontrado.' });
});

// Conectar y sincronizar la base de datos
sequelize.sync()
    .then(() => {
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));
    })
    .catch(err => console.error('Error al sincronizar la base de datos:', err));

// Manejo global de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Algo salió mal en el servidor.' });
});
