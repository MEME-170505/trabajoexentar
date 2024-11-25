import { defineStore } from 'pinia';

const API_URL = 'http://localhost:3000/products'; // URL local de tu API

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await fetch(API_URL); // Usa la constante API_URL
        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async createProduct(product) {
      try {
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product),
        });
        this.fetchProducts(); // Actualiza la lista después de agregar
      } catch (error) {
        console.error('Error creating product:', error);
      }
    },
  },
});
