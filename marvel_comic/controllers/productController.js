const Product = require('../models/productModel');

// Crear un producto
const createProduct = async (req, res) => {
    const { name, description, price, stock } = req.body;

    try {
        // Validar que el producto no se repita
        const existingProduct = await Product.findOne({ where: { name } });
        if (existingProduct) {
            return res.status(400).json({ message: 'El producto ya existe.' });
        }

        // Crear el producto
        const newProduct = await Product.create({ name, description, price, stock });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el producto.', error });
    }
};

// Obtener todos los productos
const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos.', error });
    }
};

// Obtener un producto por ID
const getProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado.' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto.', error });
    }
};

// Actualizar un producto
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock } = req.body;

    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado.' });
        }

        // Actualizar el producto
        product.name = name;
        product.description = description;
        product.price = price;
        product.stock = stock;
        await product.save();

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto.', error });
    }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado.' });
        }

        // Eliminar el producto
        await product.destroy();
        res.status(200).json({ message: 'Producto eliminado correctamente.' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto.', error });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
};
