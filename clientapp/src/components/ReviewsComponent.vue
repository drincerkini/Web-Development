<template>
    <br />
    <br />
    <br />
    
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <div class="container">

       <h2 class="page-header">Media alignment</h2>
		<div class="media material_media"  v-for="info in this.reviews" :key="info._id">
			<div class="media-left">
				<a href="#">
					<img class="media-object material_media_object" data-src="holder.js/64x64" alt="64x64" :src="`/uploads/${info.image.filename}`" data-holder-rendered="true" style="width: 64px; height: 64px;">
				</a>
			</div>
			<div class="media-body material_media_body">
				<h4 class="media-heading material_media_heading">{{ info.client }}</h4>
				<p>{{ info.description }}</p>
       </div>
		</div> 
    

        <!-- <h2 class="page-header">Custom content</h2>
		<div class="row">
			<div class="col-sm-6 col-md-4" v-for="info in this.reviews" :key="info._id">
          <div class="thumbnail material_thumbnail">
              <div class="item-img-wrap ">
                  <img :src="'/uploads/' + info.image.filename"
                  class="img-responsive"
                  alt="Thumbnail label" />
              </div>
              <div class="caption material_caption">
                  <h3>{{ info.client }}</h3>
                  <p>{{info.description}}</p>
                  <p><a href="#" class="btn btn-default material_btn" role="button">Link</a></p>
              </div>
          </div>
          <br />
          <br />
          <br />
        </div>

      </div> -->
  </div> 
     



    </template>
    
    
    
    <script>
        // import CardComponent from '../../components/reusables/CardComponent.vue';
        import { mapState } from 'vuex';
        
        export default {
            // components: {
            //     CardComponent
            // },
    
            computed : {
            //   ...mapState(['products']),
              ...mapState('reviewsModule', ['reviews'])
            },
            created() {
              this.$store.dispatch('reviewsModule/getReviews');
            },
            methods: {
              async handleDelete(teamId){
                if (window.confirm("Do you really want to delete?")) {
                  try {
                    this.$store.dispatch('deleteNews', teamId);
                  }catch(err) {
                    console.log("erro", err.message);
                  }
                }
              }
            }
        }
        
        </script>
    
    
    <style scoped >
    
    /***********************Media alignment***********************/
.material_media .material_media_object {
  border-radius: 50%;
  box-shadow: 0 0 1px 0px #ccc;
  margin: 0 10px;
  -webkit-transition: box-shadow 0.3s ease-in 0s;
  transition: box-shadow 0.3s ease-in 0s;
}
.material_media .material_media_object:hover {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.42);
}
.material_media .material_media_heading {
  font-weight: 400;
}
.material_media .material_media_body {
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
}
    </style>