<template>
    <h3>Create Product</h3>

    <form v-on:submit.prevent='handleAddProduct'>
        <input type="text" v-model="this.product.title" placeholder="Title">
        <input type="text" v-model="this.product.description" placeholder="desc">
        <input type="number" v-model="this.product.price" placeholder="price">
        <input type="text" v-model="this.product.category" placeholder="category">
        <input type="text" v-model="this.product.image" placeholder="image">
        <button type="submit">Create Post</button>
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
        

        async handleAddProduct(){
            try{
                await this.$store.dispatch('addProduct', this.product);
                this.$router.push('/products')
            }catch(err){
                console.log('error ---- ', err.message);
            }
            
        }
    }
}



</script>