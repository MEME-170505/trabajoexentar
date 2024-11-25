const express = require('express');
const { createProduct, getProducts, getProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const router = express.Router();

// Ruta para obtener todos los productos
router.get('/', getProducts);

// Ruta para obtener un solo producto por ID
router.get('/:id', getProduct);

// Otras rutas para crear, actualizar y eliminar productos
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
