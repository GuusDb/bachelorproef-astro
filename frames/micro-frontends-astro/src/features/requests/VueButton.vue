<template>
    <div>
      <p>{{ clickCount }}</p>
      <button @click="handleClick">click</button>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  import { getAll } from '../../api/getproducts';
  import { fillProducts } from '../../stores/productstore';
  import type { product } from '../../types/api-types';
  
  export default {
    setup() {
      const clickCount = ref(0);
  
      const callAsync = async () => {
        let res: product[] = await getAll();
        fillProducts(res);
      };
  
      const handleClick = async () => {
        clickCount.value++;
        await callAsync();
      };
  
      return {
        clickCount,
        handleClick
      };
    }
  };
  </script>
  