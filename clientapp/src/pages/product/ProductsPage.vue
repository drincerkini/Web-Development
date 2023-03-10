<template>
<div class="container ">
      <div class="">
        <main>
          <h2>Currently looking at Products page!</h2>
        </main>
        <section>
          <h3>Category</h3>
        <div class="d-flex">
          <div class="card" style="width: 18rem;" v-for="product in this.products" :key="product._id">
            <img :src="'/uploads/' + product.image.filename" class="photo">
            <div class="card-body"> 
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <a href="#" class="btn btn-primary">{{ product.price }}</a>
            </div>
          </div>
          </div>
          
        </section>
      </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    computed : {
      ...mapState(['products'])
    },
    mounted() {
      this.$store.dispatch('getProducts');
    },
    methods: {
      async handleDelete(productId){
        if (window.confirm("Do you really want to delete?")) {
          try {
            this.$store.dispatch('deleteProduct', productId);
          }catch(err) {
            console.log("erro", err.message);
          }
        }
      }
    }
}

</script>

