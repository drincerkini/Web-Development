<template>
    <br />
    <br />
    <br />

<section class="section home-5-bg" id="home">
    <div id="particles-js"></div>
    <div class="bg-overlay"></div>
    <div class="home-center">
        <div class="home-desc-center">
            <div class="container">
                <div class="justify-content-center row">
                    <div class="col-lg-7">
                        <div class="mt-40 text-center home-5-content">
                            <div class="home-icon mb-4"><i class="mdi mdi-pinwheel mdi-spin text-white h1"></i></div>
                            <h1 class="text-white font-weight-normal home-5-title mb-0">A Clean &amp; Minimal Landing Template</h1>
                            <p class="text-white-70 mt-4 f-15 mb-0">Ut enim ad minima veniam quis nostrum exercitationem ullam corporis at suscipit laboriosam nisi ut aliquid a commodi consequatur Quis autem.</p>
                            <div class="mt-5">
                                <input class="btn btn-default" type="button" value="Get started">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>


<style scoped>



body{
    margin-top:20px;
    backgroundColor:#eee;
}
.home-5-bg {
    background: #1E90FF;
    position: relative;
    background-size: cover;
    height: 50vh;
    background-position: center center;
}

.section {
    position: relative;
}

.home-5-content {
  z-index: 1;
  position: relative;
}

.bg-overlay {
    background-color: #000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.home-center {
    display: table;
    width: 100%;
    height: 100%;
}

.home-desc-center {
    display: table-cell;
    vertical-align: middle;
}

.home-5-content {
    z-index: 1;
    position: relative;
}

.text-white-70 {
    color: rgba(255, 255, 255, 0.8);
}

.f-15 {
    font-size: 15px;
}

.home-5-bg #particles-js {
    z-index: 1!important;
position: absolute;
    width: 100%;
    height: 100%;
}
</style>