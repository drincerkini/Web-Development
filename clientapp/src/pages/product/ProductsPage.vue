<template>
    <div class="home">
      <main>
        <h2>Currently looking at Products page!</h2>
      </main>
      <section>
        <h3>Category</h3>
        <div class="wraper">
            <div v-for="product in this.products" :key="product._id" class="card">
            
                <h3>{{ product.title }}</h3>

                <p>{{ product.description }}</p>

                <p>{{ product.price }}</p>

                <p>{{ product.category }}</p>

                <p>{{ product.image }}</p>

                <!-- <router-link :to="{ name: 'edit-product', params: { id: '755' } }">Edit</router-link> -->
                <!-- <router-link :to="{name: 'edit-product', params: { id: product._id }}">Edit </router-link> -->

              <button @click="handleDelete(`${product._id}`)">Delete</button>
            </div>
        </div>
      </section>
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

<style scoped>
.wraper{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.card{
  display: flex;
  flex-direction:  column;
  justify-content: center;
  align-items: center;
  background-color: rgb(167, 161, 154);
  border: 1px solid black;
  border-radius: 50xp;
  margin-right: 50px;
  padding: 50px;
}
</style>