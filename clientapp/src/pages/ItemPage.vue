<template>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input id="name" v-model="name" type="text" />
  
      <label for="description">Description:</label>
      <input id="description" v-model="description" type="text" />
  
      <label for="image">Image:</label>
      <input id="image" ref="imageInput" type="file" @change="handleImageChange" />
  
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      description: '',
      image: null,
    };
  },
  methods: {
    handleImageChange() {
      this.image = this.$refs.imageInput.files[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('description', this.description);
      formData.append('image', this.image);

      const response = await axios.post('http://localhost:3000/items', formData);
      console.log(response.data);
    },
  },
};
</script>

  