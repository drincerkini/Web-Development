 <template>
 
    <div class="thumbnail material_thumbnail">
        <div class="item-img-wrap ">
            <img :src="'/uploads/' + image"
            class="img-responsive"
            alt="Thumbnail label" />
        </div>
        <div class="caption material_caption">
            <h3>{{ title }}</h3>
            <p>Nulla consequat massa quis enim. Donec pede justo</p>
            <p><a href="#" class="btn btn-default material_btn" role="button">Link</a></p>
        </div>
    </div>


</template>


<script>

export default {
    
    props: {
        title: String,
        description: String,
        price: Number,
        category: String,
        image: String
    }

}
</script>


