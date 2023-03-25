<template>
    <table>
      <tr>
        <th scope="col">id</th>
        <th scope="col">title</th>
        <th scope="col">price</th>
        <th scope="col">category</th>
        <th scope="col">description</th>
        <th scope="col">image</th>
      </tr>
      <tr v-for="product in $products" :key="product.id">
        <td scope="row">{{ product.id }}</td>
        <td scope="row">{{ product.title }}</td>
        <td scope="row">{{ product.price }}</td>
        <td scope="row">{{ product.category }}</td>
        <td scope="row">{{ product.description }}</td>
        <td scope="row"><img :src="product.image" style="width: 8vw;" /></td>
      </tr>
    </table>
  </template>
  
  <script>
  import { useStore } from '@nanostores/vue';
  import { products } from '../../stores/productstore';
  
  export default {
    setup() {
      const $products = useStore(products);
  
      return {
        $products
      };
    }
  };
  </script>
  