
<template>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
    <div class="container mt-5 mb-5">
        <div class="contact__wrapper shadow-lg mt-n9">
            <div class="row no-gutters">
                <h3 class="text-center mt-4">Add a new team member</h3>
                <div class="contact-form__wrapper p-5 order-lg-1">
                    <form  @submit.prevent="handleAddTeam">

                        <div class="row">
                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="firstName">First Name</label>
                                    <input id="name" v-model="this.name" type="text" class="form-control"
                                        placeholder="First Name" />
                                </div>
                            </div>

                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="firstName">Last Name</label>
                                    <input id="surname" v-model="this.surname" type="text" class="form-control"
                                        placeholder="Last Name" />
                                </div>
                            </div>
                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label class="required-field" for="position">Position</label>
                                    <input id="position" v-model="this.position" type="text" class="form-control"
                                        placeholder="Position" />
                                </div>
                            </div>
                            <div class="col-sm-6 mb-3">
                                <div class="form-group">
                                    <label for="phone">Select Image</label>
                                    <input class="form-control" id="image" ref="imageInput" type="file"
                                        @change="handleImageChange">
                                </div>
                            </div>

                        </div>
                        <div class="d-grid gap-2 col-6 mx-auto ">
                        <button type="submit" name="submit" class="btn btn-success">ADD MEMBER</button>
                    </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<!-- <template>
    <h3>Create Service</h3>

                        <div class="col-sm-6 mb-3">
                            <div class="form-group">
                                <label for="phone">Select Image</label>
                                <input class="form-control" id="image" ref="imageInput" type="file" @change="handleImageChange" >
                            </div>
                        </div>
    
                        
    
                        <div class="d-grid gap-2 col-6 mx-auto ">
                            <button type="submit" name="submit" class="btn btn-success">ADD TEAM</button>
                        </div>
    
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

</template> -->






<script>

export default {
    data() {
        return {
            name: '',
            surname: '',
            position: '',
            image: null
        }
    },

    methods: {
        handleImageChange() {
            this.image = this.$refs.imageInput.files[0];
        },
        async handleAddTeam(){
            try{
                await this.$store.dispatch('teamModule/addTeam', this.formData);
                this.$router.push('/about')
            }catch(err){
                console.log('error ---- ', err.message);
            }
            
        }
    },
    computed: {
        formData(){
            const data = new FormData();
            data.append('name', this.name);
            data.append('surname', this.surname);
            data.append('position', this.position);
            data.append('image', this.image);
            return data;
        }
    }
}



</script>