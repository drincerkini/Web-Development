<template>
    <br />
    <br />
    <br />
    
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <div class="container">
    

        <h2 class="page-header">Custom content</h2>
		<div class="row">
			<div class="col-sm-6 col-md-4" v-for="service in this.services" :key="service._id">
                <div class="thumbnail material_thumbnail">
                    <div class="item-img-wrap ">
                        <img :src="'/uploads/' + service.image.filename"
                        class="img-responsive"
                        alt="Thumbnail label" />
                    </div>
                    <div class="caption material_caption">
                        <h3>{{ service.title }}</h3>
                        <p>Nulla consequat massa quis enim. Donec pede justo</p>
                        <p><a href="#" class="btn btn-default material_btn" role="button">Link</a></p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                </div>

        </div>
    </div> 
     



    </template>
    
    <script>
    // import ServiceCardComponent from '../../components/reusables/ServiceCardComponent.vue';
    import { mapState } from 'vuex';
    
    export default {
        components: {
            // ServiceCardComponent
        },

        computed : {
        //   ...mapState(['products']),
          ...mapState('serviceModule', ['services'])
        },
        created() {
          this.$store.dispatch('serviceModule/getServices');
        },
        methods: {
          async handleDelete(serviceId){
            if (window.confirm("Do you really want to delete?")) {
              try {
                this.$store.dispatch('deleteService', serviceId);
              }catch(err) {
                console.log("erro", err.message);
              }
            }
          }
        }
    }
    
    </script>
    
    
<style scoped>



.item-img-wrap {
    position: relative;
    text-align: center;
    overflow: hidden;
}

.item-img-wrap img {
    -moz-transition: all 200ms linear;
    -o-transition: all 200ms linear;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    width: 100%;
}

/***********************Custom content***********************/
.material_thumbnail {
  border-radius: 0;
  padding: 0;
  box-shadow: 0 6px 13px rgba(0, 0, 0, 0.12);
  -webkit-transition: box-shadow 0.3s ease-in 0s;
  transition: box-shadow 0.3s ease-in 0s;
}
.material_thumbnail .material_caption {
  padding: 10px 20px;
}
.material_thumbnail .material_btn {
  font-size: 16px;
  color: #ffab40;
  text-decoration: none;
  padding: 10px 0;
  border: none;
  -webkit-transition: color 0.4s ease-out 0s;
  transition: color 0.4s ease-out 0s;
}
.material_thumbnail .material_btn:hover,
.material_thumbnail .material_btn:active,
.material_thumbnail .material_btn:focus {
  background: none;
  box-shadow: none;
}
.material_thumbnail:hover {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.42);
}

    

</style>
