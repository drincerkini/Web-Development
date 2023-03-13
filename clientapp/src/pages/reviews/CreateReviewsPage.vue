<template>
    <br />
    <br />
    <br />

    <!-- <form @submit.prevent="handleAddNews">
      <label for="name">Client:</label>
      <input id="name" v-model="this.client" type="text" />
  
      <label for="description">Description:</label>
      <input id="description" v-model="this.description" type="text" />
  
      <label for="image">Image:</label>
      <input id="image" ref="imageInput" type="file" @change="handleImageChange" />
  
      <button type="submit">Submit</button>
</form> -->
<div>
    <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">
    <div class="container bootstrap snippets bootdey">
        <section id="contact" class="gray-bg padding-top-bottom">
            <div class="container bootstrap snippets bootdey">
                <div class="row">
                    <form  class="col-sm-6 col-sm-offset-3"  @submit.prevent="handleAddNews">
                        <div class="form-group">
                            <label class="control-label" for="client">Name</label>
                            <div class="controls">
                                <input name="client" placeholder="Your name" class="form-control requiredField Highlighted-label" type="text"  id="client" v-model="this.client">
                            </div>
                        </div><!-- End name input -->
                        <div class="form-group">
                            <label class="control-label" for="contact-message">Message</label>
                            <div class="controls">
                                <textarea placeholder="Your message" class="form-control requiredField Highlighted-label" rows="6" id="description" v-model="this.description">...</textarea>
                            </div>
                        </div><!-- End textarea -->
                        <div class="form-group">
                            <label class="control-label" for="contact-message">Image</label>
                            <div class="controls">
                                <input id="image" ref="imageInput" type="file" @change="handleImageChange" /> 
                            </div>
                        </div>
                        <br />
                        <br />
                        
                        <button type="submit" class="btn btn-info btn-block">Send Message</button>
                    </form><!-- End Highlighted-form -->
                </div>	
            </div>	
        </section>
    </div>                
</div>
</template>

<script>

export default {
    data() {
        return {
            client: '',
            description: '',
            image: null
        }
    },

    methods: {
        handleImageChange() {
            this.image = this.$refs.imageInput.files[0];
        },
        async handleAddNews(){
            try{
                await this.$store.dispatch('reviewsModule/addReviews', this.formData);
                this.$router.push('/')
            }catch(err){
                console.log('error ---- ', err.message);
            }
            
        }
    },
    computed: {
        formData(){
            const data = new FormData();
            data.append('client', this.client);
            data.append('description', this.description);
            data.append('image', this.image);
            return data;
        }
    }
}



</script>