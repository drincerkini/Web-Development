<template>

	<CaruselComponent />
	


<main>
		
    <br />
    <br />
    
    <div class="container">
    <div class="row no-gutters">
      <div class="col-xl-6 col-12 mb-5 mb-xl-0" v-for="info in this.news" :key="info._id">
        <div class="media media-news">
          <div class="media-img">
            <img :src="`/uploads/${info.image.filename}`" alt="Generic placeholder image">
          </div>
          <div class="media-body">
            <span class="media-date">25 july 2017</span>
            <h5 class="mt-0 sep">Finibus Bonorum Malor.</h5>
            <p>Lorem ipsum dolor amet consectetur adip sicing elit sed eiusm tempor incididunt ut labore dolore.</p>
            <a href="blog-post-right-sidebar.html" class="btn btn-transparent">View More</a>
          </div>
        </div>
        <br />
      <br />
      <br />
      </div>

      
    </div>
</div>

    <!-- <h2 class="page-header">Custom content</h2>
		<div class="row">
			<div class="col-sm-6 col-md-4">
				<div class="thumbnail material_thumbnail">
					<img src="" alt="Thumbnail label" />
					<div class="caption material_caption">
						<h3>Thumbnail label</h3>
						<p>Nulla consequat massa quis enim. Donec pede justo</p>
						<p><a href="#" class="btn btn-default material_btn" role="button">Link</a></p>
					</div>
				</div>
			</div>
    </div> -->

	<!-- <section id="content" class="content">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit ex. Etiam elementum lectus et tempor molestie. Pellentesque vestibulum dui sit amet dui volutpat sollicitudin. Etiam non erat finibus, iaculis nunc vel, convallis eros. Etiam efficitur tempor dui, vitae fringilla ipsum tristique quis. Aliquam erat volutpat. Cras ullamcorper ex et viverra vulputate. Nam lectus ligula, pretium nec risus nec, ultricies fringilla mauris. Proin quis venenatis neque, iaculis porta nulla. </p>
				</div>
				<div class="col-md-4">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit ex. Etiam elementum lectus et tempor molestie. Pellentesque vestibulum dui sit amet dui volutpat sollicitudin. Etiam non erat finibus, iaculis nunc vel, convallis eros. Etiam efficitur tempor dui, vitae fringilla ipsum tristique quis. Aliquam erat volutpat. Cras ullamcorper ex et viverra vulputate. Nam lectus ligula, pretium nec risus nec, ultricies fringilla mauris. Proin quis venenatis neque, iaculis porta nulla. </p>
				</div>
				<div class="col-md-4">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit ex. Etiam elementum lectus et tempor molestie. Pellentesque vestibulum dui sit amet dui volutpat sollicitudin. Etiam non erat finibus, iaculis nunc vel, convallis eros. Etiam efficitur tempor dui, vitae fringilla ipsum tristique quis. Aliquam erat volutpat. Cras ullamcorper ex et viverra vulputate. Nam lectus ligula, pretium nec risus nec, ultricies fringilla mauris. Proin quis venenatis neque, iaculis porta nulla. </p>
				</div>
			</div>
		</div>
	</section> -->
</main>
</template>

<script>
import CaruselComponent from '@/components/CaruselComponent.vue';
import { mapState } from 'vuex';

export default {
    components: {
      CaruselComponent,
    },

    computed : {
            //   ...mapState(['products']),
              ...mapState('newsModule', ['news'])
            },
            created() {
              this.$store.dispatch('newsModule/getNews');
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

body{
    background-color: #eee;
    margin-top:20px;
}
.media.media-news {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    padding-bottom: 210px;
}
@media (min-width: 768px) {
    .media.media-news {
        padding-bottom: 0;
        margin-bottom: 0;
    }
}
@media (min-width: 1200px) {
    .media.media-news {
        padding-bottom: 25px;
        margin-bottom: 0;
    }
}
.media.media-news .media-body {
    padding: 20px;
    box-shadow: 0 22px 28px 0 rgba(0, 0, 0, 0.06);
    background: #fff;
    position: absolute;
    width: 85%;
    right: 0;
    bottom: 0;
}
@media (min-width: 768px) {
    .media.media-news .media-body {
        position: relative;
        padding: 46.5px 35px;
        right: 0;
    }
}
@media (min-width: 992px) {
    .media.media-news .media-body {
        right: 40px;
        bottom: 0;
    }
}
@media (min-width: 1200px) {
    .media.media-news .media-body {
        position: absolute;
        right: 35px;
        width: 60%;
        padding: 20px;
    }
}
.media.media-news .media-body .media-date {
    font-family: "Open Sans", sans-serif;
    color: #848484;
    margin-bottom: 10px;
}
.media.media-news .media-body h5 {
    font-size: 22px;
    padding-bottom: 15px;
    margin-bottom: 20px;
}
.media.media-news .media-body h5.small {
    font-size: 16px;
}
.media.media-news .media-body p {
    font-family: "Open Sans", sans-serif;
    color: #848484;
}
.media.media-news .media-body .common-btn {
    margin-top: 10px;
}

</style>