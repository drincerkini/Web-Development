<template>


<section id="about-section" class="pt-5 pb-5">
  <div class="container wrapabout">

        <div class="container-fluid">
          <div class="text-center mb-2-3 mb-lg-6">
            <h2 class="h1 mb-5 text-secondary">Our Products</h2>
          </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3" v-for="product in this.products" :key="product._id">
                        <div class="card text-center mb-3">
                            <div class="py-5 px-4">
                                <img :src="`/uploads/${product.image.filename}`" alt="" class="img-fluid mb-4" />
                                <h3 class="fs-6 text-truncate"><a href="#" class="stretched-link text-reset">{{product.title}}</a></h3>
                                <span class="text-success">${{product.price}}</span>
                                <p>{{ product.description }}</p>
                            </div>
                            <div class="bg-danger text-white small position-absolute end-0 top-0 px-2 py-2 lh-1 text-center">
                                <span class="d-block">10%</span>
                                <span class="d-block">OFF</span>
                            </div>
                        </div>
                        <button class="btn btn-danger" v-on:click="handleDelete(product._id)">Delete</button>
                    </div>   
                    
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    components: {
    },

    computed : {
    //   ...mapState(['products']),
      ...mapState('productModule', ['products']),
      ...mapGetters('productModule', ['numberOfProducts'])
    },
    created() {
      this.$store.dispatch('productModule/getProducts');
    },
    methods: {
      async handleDelete(productId){
        if (window.confirm("Do you really want to delete?")) {
          try {
            this.$store.dispatch('productModule/deleteProduct', productId);
          }catch(err) {
            console.log("erro", err.message);
          }
        }
      }
    }
}

</script>


<style scoped>

body {
    margin-top: 20px;
}
.text-center {
    text-align: center !important;
}
.mb-5 {
    margin-bottom: 3rem !important;
}
.mx-auto {
    margin-right: auto !important;
    margin-left: auto !important;
}
.text-reset {
    --bs-text-opacity: 1;
    color: inherit !important;
}
a {
    color: #5465ff;
    text-decoration: none;
}
body {
    background: #eee;
}
.card {
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: 1rem;
}
.card-body {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.5rem 1.5rem;
}

</style>

