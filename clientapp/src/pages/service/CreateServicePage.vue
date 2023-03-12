<template>
    <h3>Create Service</h3>

    <form @submit.prevent="handleAddService">
      <label for="name">Title:</label>
      <input id="name" v-model="this.title" type="text" />
  
      <label for="description">Description:</label>
      <input id="description" v-model="this.description" type="text" />

      <label for="price">Description:</label>
      <input id="price" v-model="this.price" type="number" />

      <label for="category">Description:</label>
      <input id="category" v-model="this.category" type="text" />
  
      <label for="image">Image:</label>
      <input id="image" ref="imageInput" type="file" @change="handleImageChange" />
  
      <button type="submit">Submit</button>
</form>

</template>

<script>

export default {
    data() {
        return {
            title: '',
            description: '',
            price: null,
            category: '',
            image: null
        }
    },

    methods: {
        handleImageChange() {
            this.image = this.$refs.imageInput.files[0];
        },
        async handleAddService(){
            try{
                await this.$store.dispatch('serviceModule/addService', this.formData);
                this.$router.push('/services')
            }catch(err){
                console.log('error ---- ', err.message);
            }
            
        }
    },
    computed: {
        formData(){
            const data = new FormData();
            data.append('title', this.title);
            data.append('description', this.description);
            data.append('price', this.price);
            data.append('category', this.category);
            data.append('image', this.image);
            return data;
        }
    }
}



</script>