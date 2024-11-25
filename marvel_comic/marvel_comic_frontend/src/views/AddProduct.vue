<template>
  <div>
    <h1>Agregar Producto</h1>
    <form @submit.prevent="submitForm">
      <label for="name">Nombre</label>
      <input type="text" v-model="name" required />
      
      <label for="description">Descripción</label>
      <textarea v-model="description" required></textarea>
      
      <label for="price">Precio</label>
      <input type="number" v-model="price" required />
      
      <label for="stock">Stock</label>
      <input type="number" v-model="stock" required />
      
      <button type="submit">Agregar Producto</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'; // Asegúrate de importar ref correctamente
import { useProductStore } from '../stores/productStore';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const productStore = useProductStore();

    const name = ref(''); // Usa ref para variables reactivas
    const description = ref('');
    const price = ref(0);
    const stock = ref(0);

    const submitForm = async () => {
      const product = {
        name: name.value,
        description: description.value,
        price: parseFloat(price.value),
        stock: parseInt(stock.value),
      };
      await productStore.createProduct(product);
      router.push('/'); // Redirige a la página principal después de agregar el producto
    };

    return {
      name,
      description,
      price,
      stock,
      submitForm,
    };
  },
};
</script>

<style>
/* Estilos básicos para formulario */
form {
  display: flex;
  flex-direction: column;
}
input, textarea {
  margin-bottom: 10px;
  padding: 8px;
}
button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
