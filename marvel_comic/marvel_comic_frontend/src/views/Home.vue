<template>
    <div>
      <h1>Lista de Productos</h1>
      <button @click="goToAddPage">Agregar Producto</button>
      <ul>
        <li v-for="product in products" :key="product.id">
          <strong>{{ product.name }}</strong><br />
          {{ product.description }}<br />
          Precio: ${{ product.price }}<br />
          Stock: {{ product.stock }}<br />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useProductStore } from '../stores/productStore';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const productStore = useProductStore();
      const router = useRouter();
      
      // Fetch products when the component mounts
      productStore.fetchProducts();
  
      const goToAddPage = () => {
        router.push('/add');
      };
  
      return {
        products: productStore.products,
        goToAddPage,
      };
    },
  };
  </script>
  
  <style>
    /* Estilos básicos */
    h1 {
      font-size: 2em;
      margin-bottom: 20px;
    }
    button {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #45a049;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 10px;
      background: #f4f4f4;
      margin: 10px 0;
    }
  </style>
  