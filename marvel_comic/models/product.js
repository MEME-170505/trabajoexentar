'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Aquí podrías definir asociaciones en el futuro, por ejemplo:
      // Product.belongsTo(models.Category, { foreignKey: 'categoryId' });
    }
  }

  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,  // Asegura que el nombre no sea nulo
      validate: {
        notEmpty: {  // Valida que el nombre no esté vacío
          msg: 'El nombre del producto no puede estar vacío.'
        },
        len: [3, 100]  // Nombre debe tener entre 3 y 100 caracteres
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,  // Asegura que la descripción no sea nula
      validate: {
        notEmpty: {
          msg: 'La descripción del producto no puede estar vacía.'
        }
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,  // Asegura que el precio no sea nulo
      validate: {
        isFloat: {  // Asegura que el precio sea un número flotante
          msg: 'El precio debe ser un número válido.'
        },
        min: 0.01  // El precio debe ser mayor a 0
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,  // Asegura que el stock no sea nulo
      validate: {
        isInt: {
          msg: 'El stock debe ser un número entero.'
        },
        min: 0  // El stock no puede ser negativo
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: true,  // Asegura que Sequelize maneje los timestamps de creación/actualización
  });

  return Product;
};
