<template >


    <!-- <div class="container text-center">
        <h1>Thank you.</h1>
        <p class="lead w-lg-50 mx-auto">Your order has been placed successfully.</p>
        <p class="w-lg-50 mx-auto">Your order number is <a href="#">9237427634826</a>. We will immediatelly process your and it will be delivered in 2 - 5 business days.</p>
    </div> -->
        <div class="row">
            <div class="col-lg-3">
                <div class="card text-center mb-3">
                    <div class="py-5 px-4">
                        <img :src="`/uploads/${image}`" alt="" class="img-fluid mb-4" />
                        <h3 class="fs-6 text-truncate"><a href="#" class="stretched-link text-reset">{{title}}</a></h3>
                        <span class="text-success">${{price}}</span> <del class="text-muted">$650.83</del>
                    </div>
                    <div class="bg-danger text-white small position-absolute end-0 top-0 px-2 py-2 lh-1 text-center">
                        <span class="d-block">{{category}}</span>
                        <span class="d-block">OFF</span>
                    </div>
                </div>
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