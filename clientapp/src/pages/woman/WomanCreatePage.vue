<template>
<h3>Create Woman Product</h3>
    <form @submit.prevent="handleAddProduct">
      <label for="name">Name:</label>
      <input id="name" v-model="this.product.name" type="text" />
  
      <label for="description">Description:</label>
      <input id="description" v-model="this.product.description" type="text" />

      <label for="price">Description:</label>
      <input id="price" v-model="this.product.price" type="number" />

      <label for="category">Description:</label>
      <input id="category" v-model="this.product.category" type="text" />
  
      <label for="image">Image:</label>
      <input id="image" ref="imageInput" type="file" @change="handleImageChange" />
  
      <button type="submit">Submit</button>
</form>

</template>
<script>
export default {
    data() {
        return {
            product: {
                title: '',
                description: '',
                price: null,
                category: '',
                image: ''
            }
        }
    },
    methods: {
        handleImageChange() {
        this.image = this.$refs.imageInput.files[0];
        },
        async handleAddProduct(){
            try{
                await this.$store.dispatch('addWomanProduct', this.product);
                this.$router.push('/products');
            }catch(err){
                console.log('error ---- ', err.message);
            }
            
        }
    }
}

</script>
