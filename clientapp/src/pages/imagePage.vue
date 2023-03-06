<template>
    <div>
      <input type="file" ref="fileInput" @change="onFileChange" />
      <button @click="uploadImage">Upload</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        image: null,
      };
    },
    methods: {
      onFileChange(event) {
        this.image = event.target.files[0];
      },
      async uploadImage() {
        const formData = new FormData();
        formData.append('image', this.image);
  
        try {
          await axios.post('http://localhost:3000/upload', formData);
          console.log('Image uploaded!');
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  