<template>
  <div>
    <!--<section id="carousel" style="margin-top: 27px;">
      <div class="carousel slide" data-ride="carousel" id="carousel-1">
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <div class="jumbotron pulse animated hero-nature carousel-hero" style="background-image: url(@/assets/1.jpeg&quot;);">
              <p><br><br><br><br><br><br><br><br></p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="jumbotron pulse animated hero-photography carousel-hero" style="background-image: url(@/assets/2.jpeg&quot;);">
              <p><br><br><br><br><br><br><br><br></p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="jumbotron pulse animated hero-technology carousel-hero" style="background-image: url(@/assets/3.jpeg&quot;);">
              <p><br><br><br><br><br><br><br><br></p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="jumbotron pulse animated hero-technology carousel-hero" style="background-image: url(@/assets/4.jpeg&quot;);">
              <p><br><br><br><br><br><br><br><br></p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="jumbotron pulse animated hero-technology carousel-hero" style="background-image: url(@/assets/5.jpeg&quot;);">
              <p><br><br><br><br><br><br><br><br></p>
            </div>
          </div>
        </div>
        <div>
          <a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><i class="fa fa-chevron-left"></i><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><i class="fa fa-chevron-right"></i><span class="sr-only">Next</span></a></div>
            <ol class="carousel-indicators" style="margin-bottom: -250px; ">
              <li data-target="#carousel-1" data-slide-to="0" class="active" ></li>
              <li data-target="#carousel-1" data-slide-to="1"></li>
              <li data-target="#carousel-1" data-slide-to="2"></li>
              <li data-target="#carousel-1" data-slide-to="3"></li>
              <li data-target="#carousel-1" data-slide-to="4"></li>
            </ol>
        </div>
    </section>-->
     <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
     
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://www.amway.com.tr/_hero_banner_image/10601?20191031082749678"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://www.amway.com.tr/en/_hero_banner_image/10619?20191029105543671">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://www.amway.com.tr/en/_hero_banner_image/10601?20191031082749809"></b-carousel-slide>
      <b-carousel-slide img-src="https://www.amway.com.tr/en/_hero_banner_image/10564?20190103132959879"></b-carousel-slide>

     

    </b-carousel>

    

    <div id="carouselExample" class="carousel slide" data-ride="carousel" data-interval="0" style="margin-top:300px; ">
        <div class="carousel-inner row w-100 mx-auto" role="listbox">
            <div class="carousel-item2 col-md-3 active">
                <img class="img-fluid mx-auto d-block" src="@/assets/slide1.png" alt="slide 1">
            </div>
            <div class="carousel-item2 col-md-3">
                <img class="img-fluid mx-auto d-block" src="@/assets/slide2.png" alt="slide 2">
            </div>
            <div class="carousel-item2 col-md-3">
                <img class="img-fluid mx-auto d-block" src="@/assets/slide3.png" alt="slide 3">
            </div>
            <div class="carousel-item2 col-md-3">
                <img class="img-fluid mx-auto d-block" src="@/assets/slide4.png" alt="slide 4">
            </div>
            <div class="carousel-item2 col-md-3">
                <img class="img-fluid mx-auto d-block" src="@/assets/slide5.png" alt="slide 5">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev"> 
            <i class="fa fa-chevron-left fa-lg text-muted"></i>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next text-faded" href="#carouselExample" role="button" data-slide="next">
            <i class="fa fa-chevron-right fa-lg text-muted"></i>
            <span class="sr-only">Next</span>
        </a>
    </div>

  </div>
</template>

<script>

export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>

div.jumbotron.carousel-hero {
  color: #fff;
  text-align: center;
  background-size: cover;
  background-position: center;
  padding-top: 200px;
  padding-bottom: 100px;
  margin-bottom: 0;
}

div.jumbotron.hero-nature {
  background-image: url('~@/assets/architect-at-the-construction.jpg')
}

div.jumbotron.hero-photography {
  background-image: url('~@/assets/architects-and-worker.jpg');
}

div.jumbotron.hero-technology {
  background-image: url('~@/assets/young-college-students.jpg');
}

h1.hero-title, h2.hero-title, h3.hero-title {
  text-shadow: 0 3px 3px rgba(0,0,0,0.4);
  color: #fff;
}

p.hero-subtitle {
  max-width: 600px;
  margin: 25px auto;
  padding: 10px 15px;
  color: #fff;
}

.plat {
  border-radius: 0px;
}

.btn-primary.focus, .btn-primary:focus {
  box-shadow: 0 0 0 0 #048f83!important;
}

.btn-primary:hover {
  color: #fff;
  background-color: #016090;
  border-color: #016090;
}

.btn.btn-primary {
  background-color: #048f83!important;
  border-color: #048f83!important;
}

.btn-primary.focus, .btn-primary:focus {
  box-shadow: 0 0 0 .2rem rgba(0,123,255,.5);
}


span {
  font-style: inherit;
  font-weight: inherit;
}
@media (min-width: 768px) {
  .carousel-inner .active, .carousel-inner .active + .carousel-item2, .carousel-inner .active + .carousel-item2 + .carousel-item2, .carousel-inner .active + .carousel-item2 + .carousel-item2 + .carousel-item2 {
    display: block;
  }
}

@media (min-width: 768px) {
  .carousel-inner .carousel-item2.active:not(.carousel-item2-right):not(.carousel-item2-left), .carousel-inner .carousel-item2.active:not(.carousel-item2-right):not(.carousel-item2-left) + .carousel-item2, .carousel-inner .carousel-item2.active:not(.carousel-item2-right):not(.carousel-item2-left) + .carousel-item2 + .carousel-item2, .carousel-inner .carousel-item2.active:not(.carousel-item2-right):not(.carousel-item2-left) + .carousel-item2 + .carousel-item2 + .carousel-item2 {
    transition: none;
  }
}

@media (min-width: 768px) {
  .carousel-inner .carousel-item2-next, .carousel-inner .carousel-item2-prev {
    position: relative;
    transform: translate3d(0, 0, 0);
  }
}

@media (min-width: 768px) {
  .carousel-inner .active.carousel-item2 + .carousel-item2 + .carousel-item2 + .carousel-item2 + .carousel-item2 {
    position: absolute;
    top: 0;
    right: -25%;
    z-index: -1;
    display: block;
    visibility: visible;
  }
}

@media (min-width: 768px) {
  .active.carousel-item2-left + .carousel-item2-next.carousel-item2-left, .carousel-item2-next.carousel-item2-left + .carousel-item2, .carousel-item2-next.carousel-item2-left + .carousel-item2 + .carousel-item2, .carousel-item2-next.carousel-item2-left + .carousel-item2 + .carousel-item2 + .carousel-item2, .carousel-item2-next.carousel-item2-left + .carousel-item2 + .carousel-item2 + .carousel-item2 + .carousel-item2 {
    position: relative;
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
}

@media (min-width: 768px) {
  .carousel-inner .carousel-item2-prev.carousel-item2-right {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: block;
    visibility: visible;
  }
}

@media (min-width: 768px) {
  .active.carousel-item2-right + .carousel-item2-prev.carousel-item2-right, .carousel-item2-prev.carousel-item2-right + .carousel-item2, .carousel-item2-prev.carousel-item2-right + .carousel-item2 + .carousel-item2, .carousel-item2-prev.carousel-item2-right + .carousel-item2 + .carousel-item2 + .carousel-item2, .carousel-item2-prev.carousel-item2-right + .carousel-item2 + .carousel-item2 + .carousel-item2 + .carousel-item2 {
    position: relative;
    transform: translate3d(100%, 0, 0);
    visibility: visible;
    display: block;
    visibility: visible;
  }
}

.carousel {
  margin-bottom: 0;
  padding: 0 40px 30px 40px;
  height:130px; 
  width:1020px; 
  margin-left:150px;
}



@media (min-width: 768px) {
  .carousel-inner .active, .carousel-inner .active + .carousel-item2, .carousel-inner .active + .carousel-item2 + .carousel-item2, .carousel-inner .active + .carousel-item2 + .carousel-item2 + .carousel-item2 {
    display: block;
  }
}

@media (min-width: 768px) {
  .carousel-inner .carousel-item2.active:not(.carousel-item2-right):not(.carousel-item2-left), .carousel-inner .carousel-item2.active:not(.carousel-item2-right):not(.carousel-item2-left) + .carousel-item2, .carousel-inner .carousel-item2.active:not(.carousel-item2-right):not(.carousel-item2-left) + .carousel-item2 + .carousel-item2, .carousel-inner .carousel-item2.active:not(.carousel-item2-right):not(.carousel-item2-left) + .carousel-item2 + .carousel-item2 + .carousel-item2 {
    transition: none;
  }
}

@media (min-width: 768px) {
  .carousel-inner .active.carousel-item2 + .carousel-item2 + .carousel-item2 + .carousel-item2 + .carousel-item2 {
    position: absolute;
    top: 0;
    right: -25%;
    z-index: -1;
    display: block;
    visibility: visible;
  }
}


.input-group > .input-group-append > .btn, .input-group > .input-group-append > .input-group-text, .input-group > .input-group-prepend:first-child > .btn:not(:first-child), .input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child), .input-group > .input-group-prepend:not(:first-child) > .btn, .input-group > .input-group-prepend:not(:first-child) > .input-group-text {
  border-color: rgb(12,129,247);
  border-radius: 2px;
}

.input-group > .custom-select:not(:first-child), .input-group > .form-control:not(:first-child) {
  border-radius: 2px;
  border-color: #fff;
}
.footer-clean {
  padding: 50px 0;
  background-color: #fff;
  color: #4b4c4d;
}

.footer-clean h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-clean ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-clean ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.8;
}

.footer-clean ul a:hover {
  opacity: 1;
}

.footer-clean .item.social {
  text-align: right;
}

@media (max-width:767px) {
  .footer-clean .item {
    text-align: center;
    padding-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .footer-clean .item.social {
    text-align: center;
  }
}

.footer-clean .item.social > a {
  font-size: 24px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-left: 10px;
  margin-top: 22px;
  color: inherit;
  opacity: 0.75;
}

.footer-clean .item.social > a:hover {
  opacity: 0.9;
}

@media (max-width:991px) {
  .footer-clean .item.social > a {
    margin-top: 40px;
  }
}

@media (max-width:767px) {
  .footer-clean .item.social > a {
    margin-top: 10px;
  }
}

.footer-clean .copyright {
  margin-top: 14px;
  margin-bottom: 0;
  font-size: 13px;
  opacity: 0.6;
}

#top-login-overlay, 
#top-login-modal {
    display: none;
    position: fixed;
}
#top-login-modal .exit {
    cursor: pointer;
    display: block;
    float: right;
    font-size: 30px;
}
#top-login-overlay {
    background-color: rgba(0, 0, 0, 0.8);
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 998;
}
#top-login-modal {
    background-color: #fff;
    left: 50%;
    max-width: 400px;
    top: 20%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 999;
}
.megamenu {
  position: static;
}

.megamenu .dropdown-menu {
  background: none;
  border: none;
  width: 100%;
  border-radius: 0;
}

@media (min-width: 992px) {
  .animate {
    animation-duration: 0.3s;
    -webkit-animation-duration: 0.3s;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
  }
}

@keyframes slideIn {
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
}

.slideIn {
  -webkit-animation-name: slideIn;
  animation-name: slideIn;
}

body {
  font-family: 'Open Sans', 'sans-serif';
}

.mega-dropdown {
  position: static !important;
}

.mega-dropdown-menu {
  padding: 20px 0px;
  width: 100%;
  box-shadow: none;
  -webkit-box-shadow: none;
}

.mega-dropdown-menu > li > ul {
  padding: 0;
  margin: 0;
}

.mega-dropdown-menu > li > ul > li {
  list-style: none;
}

.mega-dropdown-menu > li > ul > li > a {
  display: block;
  color: #222;
  padding: 3px 5px;
}

.mega-dropdown-menu > li ul > li > a:hover, .mega-dropdown-menu > li ul > li > a:focus {
  text-decoration: none;
}

.mega-dropdown-menu .dropdown-header {
  font-size: 18px;
  color: #ff3546;
  padding: 5px 60px 5px 5px;
  line-height: 30px;
}

.carousel-control {
  width: 30px;
  height: 30px;
  top: -35px;
}

.left.carousel-control {
  right: 30px;
  left: inherit;
}

.carousel-control .glyphicon-chevron-left, .carousel-control .glyphicon-chevron-right {
  font-size: 15px;
  background-color: #fff;
  line-height: 30px;
  text-shadow: none;
  color: #333;
  border: 1px solid #ddd;
}

.mega-dropdown {
  position: static !important;
}

.mega-dropdown-menu {
  padding: 20px 0px;
  width: 100%;
  box-shadow: none;
  -webkit-box-shadow: none;
}

.mega-dropdown-menu > li > ul {
  padding: 0;
  margin: 0;
}

.mega-dropdown-menu > li > ul > li {
  list-style: none;
}

.mega-dropdown-menu > li > ul > li > a {
  display: block;
  color: #222;
  padding: 3px 5px;
}

.mega-dropdown-menu > li ul > li > a:hover, .mega-dropdown-menu > li ul > li > a:focus {
  text-decoration: none;
}

.mega-dropdown-menu .dropdown-header {
  font-size: 18px;
  color: #ff3546;
  padding: 5px 60px 5px 5px;
  line-height: 30px;
}

.carousel-control {
  width: 30px;
  height: 30px;
  top: -35px;
}

.left.carousel-control {
  right: 30px;
  left: inherit;
}

.carousel-control .glyphicon-chevron-left, .carousel-control .glyphicon-chevron-right {
  font-size: 12px;
  background-color: #fff;
  line-height: 30px;
  text-shadow: none;
  color: #333;
  border: 1px solid #ddd;
}

body {
  padding-top: 20px;
}

#myCarousel .nav a small {
  display: block;
}

#myCarousel .nav {
  background: #eee;
}

.nav-justified > li > a {
  border-radius: 0px;
}

.nav-pills > li[data-slide-to="0"].active a {
  background-color: #16a085;
}

.nav-pills > li[data-slide-to="1"].active a {
  background-color: #e67e22;
}

.nav-pills > li[data-slide-to="2"].active a {
  background-color: #2980b9;
}

.nav-pills > li[data-slide-to="3"].active a {
  background-color: #8e44ad;
}

#myCarousel .nav a small {
  display: block;
}

#myCarousel .nav {
  background: #eee;
}

.nav-justified > li > a {
  border-radius: 0px;
}

.nav-pills > li[data-slide-to="0"].active a {
  background-color: #16a085;
}

.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: white;
   color: white;
   text-align: center;
}
#myCarousel .nav a small {
  display: block;
}

#myCarousel .nav {
  background: #eee;
}

.nav-justified > li > a {
  border-radius: 0px;
}

.nav-pills > li[data-slide-to="0"].active a {
  background-color: #16a085;
}




</style>