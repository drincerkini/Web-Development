<template>
<link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">
<div class="container bootstrap snippets bootdey">
    <section id="contact" class="gray-bg padding-top-bottom">
    	<div class="container bootstrap snippets bootdey">
            <div class="row">
                <form id="Highlighted-form" class="col-sm-6 col-sm-offset-3" @submit.prevent="handleAddProduct">
                    <div class="form-group">
                        <label class="control-label" for="contact-name">Name</label>
                        <div class="controls">
                            <input id="title" v-model="this.title" type="text" />
                        </div>
                    </div><!-- End name input -->
                    <div class="form-group">
                        <label class="control-label" for="contact-name">Description</label>
                        <div class="controls">
                            <input id="title" v-model="this.description" type="text" />
                        </div>
                    </div><!-- End name input -->
                    <div class="form-group">
                        <label class="control-label" for="contact-mail">Price</label>
                        <div class=" controls">
                            <input id="description" v-model="this.price" type="text" />
                        </div>
                    </div><!-- End email input -->
                    <div class="form-group">
                        <label class="control-label" for="contact-mail">Cat</label>
                        <div class=" controls">
                            <input id="description" v-model="this.category" type="text" />
                        </div>
                    </div><!-- End email input -->
                    <div class="form-group">
                        <label class="control-label" for="contact-mail">Cat</label>
                        <div class=" controls">
                            <input id="image" ref="imageInput" type="file" @change="handleImageChange" />
                        </div>
                    </div><!-- End email input -->
                    <div class="form-group">
                        <label class="control-label" for="contact-message">Message</label>
                        <div class="controls">
                            <textarea id="contact-message" name="comments" placeholder="Your message" class="form-control requiredField Highlighted-label" rows="6" ></textarea>
                        </div>
                    </div><!-- End textarea -->
                        <button name="submit" type="submit" class="btn btn-info btn-block" >Send Message</button>
                </form><!-- End Highlighted-form -->
			</div>	
		</div>	
	</section>
</div>                    

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
        async handleAddProduct(){
            try{
                await this.$store.dispatch('productModule/addProduct', this.formData);
                this.$router.push('/products')
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