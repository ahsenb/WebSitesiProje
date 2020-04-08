<template>
  <div class="ToteBagUrun">
      <div id="content" class="template_1 amway_today">
        <!--Home>Shopping cart kısmı-->
        <div class="titlebox_container full_bg">
            <!--Home>Shopping cart kısmı-->
            <div class="breadcrumb" style="height:70px;">
                <ul>
                    <li>
                        <a href="./HelloWorld" class="home" style=" font-size:12px;" >
                            <i class="fa fa-home"></i>&nbsp;Home
                        </a>
                        <a href="#buyuktur" class="buyuktur" style=" font-size:12px;">
                            >
                        </a>
                        <a href="#home" class="home" style=" font-size:12px;">
                            Home
                        </a>
                        <a href="#buyuktur" class="buyuktur" style=" font-size:12px;" >
                            >
                        </a>
                        <a href="#accessories" class="accessories" style=" font-size:12px;">
                            Accessories
                        </a>
                        <a href="#buyuktur" class="buyuktur" style=" font-size:12px;" >
                            >
                        </a>
                        
                        <a href="#accessories" class="accessories" style=" font-size:12px;">
                           Tote Bag AMWAY HOME™ 
                        </a>
                    </li>
                </ul>
               
            </div>
          
        </div>
       
        <!--ürün-->
        <div class="sticky">
          <img src="@/assets/240.jpg" style="margin-left:-750px;height: 300px; width: 300px;"> 
          <h1 itemprop="name" style="margin-top:-250px; margin-left:110px; font-size:31px;">Tote Bag AMWAY HOME™</h1>
          <a style="font-size:15px; margin-left:-80px;">SKU: 251480 Size: 600 ml</a>
          <table style="background-color: #f5f6f8; border: 1px solid #ccc; width:690px; margin-top:20px;  margin-left: 502px;">
            <tbody >
              <tr>
                <h6 style="margin-top:30px; margin-left:-500px;">Retail Price</h6>
                <h5  style="margin-left:-500px; color: #002f5f;"><strong>27.60 TL</strong></h5>
                <p style="margin-top: -60px; margin-left:-60px;">Quantity:</p>
                <div style="margin-top:-45px;">
                  <span>
                    <button class="azaltma"  v-on:click="decreaseCounter(0)" style=" font-size:15px; color: #069;width: 25px; height: 25px; margin-left:200px; margin-top: -10px;" >-</button>
                    <a style="background: #fff;border: 1px solid #ccc;  font-size: 15px; padding-left: 90px; margin-left:10px; height:10px; "> {{ counter }}&nbsp; </a>&nbsp;
                    <button class="arttırma" v-on:click="increaseCounter(20)" style= " font-size:15px; color: #069;width: 25px; height: 25px; margin-left:10px; ">+</button>
                  </span>
                </div>
                <b-button v-on:click="resim" style="background-color:black; border:none; height:50px; width:250px; margin-top:15px; margin-left:180px;">
                  <img src="@/assets/button.jpg" alt="" style=" height:52px; width:252px; margin-top:-8px; margin-left:-12px; border:none;">
                </b-button>
              </tr> 
            </tbody>
          </table>
        </div>
        
        <div style="width:820px; margin-left:160px; margin-top:90px; ">
          <b-card no-body>
            <b-tabs card>
              <b-tab title="Overview" active style="color: #18335e; border:none;">
                <b-card-text style="margin-left:-210px; margin-top:0px; font-size:12px; ">Tote bag with AMWAY HOME logo can be used to carry recently bought your favorite AMWAY HOME products.</b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
       
        </div>
        <div class="view_all_products" style="margin-right:110px; text-align:right;font-size: 12px; margin-top:-100px;">View all products by 
          <a href="/en/home?brand=Amway+Home" title="AMWAY HOME™">AMWAY HOME™</a>
          <h4 style="margin-right:160px; font-size:13px; color:black; "> <br><strong>Photos</strong></h4>
          <img alt="Tote Bag AMWAY HOME™" src="@/assets/240.jpg" title="Tote Bag AMWAY HOME™">
          </div>
          <table style="background-color: #f5f6f8; border: 1px solid #ccc; width:1050px; margin-top:20px;  margin-left: 160px;">
          <tbody >
              <tr>
                <div class="box_header"><div class="box_header_inner"><p class="panel_title" style="margin-left:-900px; margin-top:10px; border-radius:1;">You may also like</p><div class="clearFix"></div></div></div>
              </tr> 
          </tbody>
        </table>
              <table style="background-color: #f5f6f8; border: 1px solid #ccc; width:1050px; margin-top:0px; height:200px; margin-left: 160px;">
          <tbody >
              <tr>
                
                <div class="product_box_item" style="margin-top:20px; margin-left:-700px; background-color:white;">
                  <div class="product_image_container" style="height: 163px;  ">
                    <img class="image_preview" height="160" width="160" alt="Towelettes AMWAY HOME™  L.O.C.™" src="@/assets/208.jpg" title="Towelettes AMWAY HOME™  L.O.C.™">
                    <div class="" id="product_details-add-product-12654" style="display: block;">
                      <div class="product_box_12654_20004-v12686-cat_product_details_slot_2 catalog_cart_widget">
                        <div class="drop_down_layer" id="add_catalog_product_to_cart_confirmation_div_12654_20004-v12686-cat_product_details_slot_2">
                          <div class="drop_down_layer_content"></div></div>
                          <a class="button__add_to_cart" href=""><span class="">&nbsp;</span></a></div></div></div><div class="product_info"><div class="product_info_inner" style="height: 36px;"><a class="product_name" href="/en/product/110485,towelettes-amway-home-l-o-c" title="Towelettes AMWAY HOME™  L.O.C.™"><span>Towelettes AMWAY HOME™  L.O.C.™</span></a></div><div class="price" ><span >Retail Price<span class="colon">: </span></span><strong><span class="money">91.10 TL</span></strong></div></div></div>
              </tr> 
          </tbody>
        </table>
        
      <div class="header" style="width:80px; font-size:15px; margin-left:20px; margin-top:50px;" ><h2 style="width:80px; font-size:15px; margin-left:150px; margin-top:40px;">You have recently viewed</h2></div> 
      <div class="body"><div class="owl-carousel  owl-theme" style="opacity: 1; display: block; margin-left:250px; margin-top:-100px; font-size:15px;"><div class="owl-wrapper-outer"><div class="owl-wrapper" style="width: 526px; left: 0px; display: block;"><div class="owl-item" style="width: 263px;"><div class="product_box_item horizontal" data-rec_productid="112784"><div class="product_image_container" style="height: 83px;"><img height="80" width="80" alt="Tote Bag AMWAY HOME™" src="@/assets/240.jpg"><div class="" id="product_details-add-product-12686" style="display: block;"><div class="product_box_12686_20001-v-footer_slot catalog_cart_widget"><div class="drop_down_layer" id="add_catalog_product_to_cart_confirmation_div_12686_20001-v-footer_slot"><div class="drop_down_layer_content"></div></div><a class="button__add_to_cart" href="javascript:CartCatalogWidget.addProductToCartFromRecommender(12686,'single_product_add_to_cart_button_12686_20001-v-footer_slot','add_catalog_product_to_cart_confirmation_div_12686_20001-v-footer_slot','product_box_12686_20001-v-footer_slot','?action=flow.reload&amp;flow.reloadFlow=cart_top_panel&amp;flow.reloadFlow=cart_grand_total');" id="single_product_add_to_cart_button_12686_20001-v-footer_slot"><span class="">&nbsp;</span></a></div></div></div><div class="product_info"><div class="product_info_inner" style="height: 36px;"><a class="product_name" href="/en/product/112784,tote-bag-amway-home" title="Tote Bag AMWAY HOME™"><span>Tote Bag AMWAY HOME™</span></a></div><div class="price"><span>Retail Price<span class="colon">: </span></span><strong><span class="money">27.60 TL</span></strong></div></div></div></div></div></div><div class="owl-controls clickable" style="display: none;"><div class="owl-buttons"><div class="owl-prev">prev</div><div class="owl-next">next</div></div></div></div></div>
           
    
  </div>
  </div>
</template>

<script>
export default {
  name: 'ToteBagUrun',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: white;
  padding: 50px;
  font-size: 20px;
}
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation */
.modal-content, #caption {  
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {-webkit-transform:scale(0)} 
  to {-webkit-transform:scale(1)}
}

@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}

/*home>register kısmı*/
.breadcrumb ul{
    list-style-type: none;
    margin: 0;
    padding-top: 0;
    color: #9a9a9a;
    font-size: 16px;
    text-decoration: none;/*altını çizme engellendi*/
    display: inline;
    margin-left: 20px;
    

}
.breadcrumb a{
    color: #9a9a9a;
}

/*Register başlığı*/
#button_continue{
    background-color: #e9ecef;
    color: #53657a;
    font-size: 18px;
    border: none;
    width: 180px;
    height: 30px;
    border-radius: 0;
    
}

.box_space{
    padding: 0 10px;
}

.box_space .content_area{
    line-height: 17px;
}

.box_space p{
    padding-bottom: 20px;
    line-height: 18px;
    text-align: left
}

.box_space .headline{
    font-size: 40px; 
    line-height: 49px; 
    color: #002f5f;
}

.box_space .headline_big{
    font-family: Arial Black,Arial;
    font-weight: 900; 
    text-transform: uppercase;/*bütün kelimeler büyük harf*/
}

.content_area p.lead_head{
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 10px;
}

.content_area p{
    padding-bottom: 10px;
    color: #494949;
}

b{
    font-weight: 700;
    color: #566678;
}


/*sol kısım*/
.slot {
    margin-bottom: 15px;
} 
#slot_a {
    width: 190px;
    float: left;
}

.menu_left {
    width: 190px;
    margin-bottom: 15px;
    overflow: hidden;
}
.menu_ul {
    background: #fbfbfb;
}
.menu_left .menu_ul {
    margin-bottom: 30px;
    background: url(/_img_common/menu/menu_lv_0.gif?1571178003859) repeat-x scroll 0 100%;
}
.category ul {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
}

.menu_left ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
ul {
    list-style: disc;
    padding-left: 15px;
}

.filter_section .header {
    overflow: hidden;
}

.filter_section>.header {
    padding: 10px 0;
    display: table;
    width: 100%;
}
.filter_section .header h3 {
    font-size: 12px;
    color: #494949;
    font-weight: 700;
    padding: 0 15px 0 0;
}
h3 {
    font-size: 14px;
    color: #000;
    font-weight: 400;
    padding-bottom: 10px;
}

.filter_section .clear_all_link {
    
    padding: 0;
    display: inline-block;
}
.menu_left a {
    display: block;
    padding: 10px;
    text-decoration: none;
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
  font-size: 12px;
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
#dropdown-1{
    color: black;
    background-color: #fff;
    border-color: #fff;
}
</style>
