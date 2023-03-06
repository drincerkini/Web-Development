<template>
    hello
    <div>
      <div v-for="item in items" :key="item._id">
        <h1>{{ item.name }}</h1>
        
        <img :src="'/uploads/' + item.image.filename" class="photo">
        <!-- <img :src="item.image.url" alt="">
        <img :src="item.image.filename" alt="">
        <img :src="`../../../api/uploads/${item.image.filename}`"  alt="">
        
        <img :src="'../../public/uploads/' + item.image.filename" />
        <img :src="imgPath" />
        
         <img :src="'../../public/uploads/' + item.image.filename" >  -->
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
        imgPath: "../../public/uploads/image-1678117020645.jpeg"
      };
    },
    async created() {
      const response = await axios.get('http://localhost:3000/api/items');
      this.items = response.data;
      console.log('error', this.items)
    },
  };
  </script>
  
<style>
.photo{
  width: 400px;
  height: 500;
}
</style>