<template>
    hello
    <div>
      <div v-for="item in items" :key="item._id">
        <h1>{{ item.name }}</h1>
        <img :src="'/' + item.image.url" alt="">
        <!-- <img :src="`../../../api/${item.image.url}`"  alt=""> -->
        <p>{{ item.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        items: [],
      };
    },
    async created() {
      const response = await axios.get('http://localhost:3000/api/items');
      this.items = response.data;
      console.log('eroor', this.items)
    },
  };
  </script>
  