<template>
  <div class="HotBuysProduct"><div id="content" class="template_1 amway_today">
        <!--Home>Shopping cart kısmı-->
        <div class="titlebox_container full_bg">
            <!--Home>Shopping cart kısmı-->
            <div class="breadcrumb">
                <ul>
                    <li>
                        <a href="./HelloWorld" class="home" >
                            <i class="fa fa-home"></i>&nbsp;Home
                        </a>
                        <a href="#buyuktur" class="buyuktur" >
                            >
                        </a>
                        <a href="#home" class="home">
                            More Product
                        </a>
                        <a href="#buyuktur" class="buyuktur" >
                            >
                        </a>
                        <a href="#accessories" class="accessories">
                            Hot Buy
                        </a>
                    </li>
                </ul>
                <div class="title" style="font-size:25px; margin-left:8px;">
                <br>
                    <p style="margin-left:-290px;"><strong>Hot Buys</strong></p>
                </div>
            </div>
        </div>


        <!--başlık-->
        <!--https://bootstrap-vue.js.org/docs/components/form-select/-->
        <div class="page_no" id="table_catalog_category_products_table_pull_pager" style="margin-left:-700px; font-size:15px;">
            2 of 2 items</div>
            <div class="page_no" id="table_catalog_category_products_table_pull_pager" style="margin-left:-230px; margin-top:-22px; font-size:15px;">
              Sort by:
              <select v-model="selected" style="width:160px; height:25px; margin-top:-70px; margin-left:15px; border-radius:0; font-size:12px; strong">
                <option>Date - ascending</option>
                <option>Date - descending</option>
                <option>Name - ascending</option>
                <option>Name - descending</option>
                <option>Ordering no. - ascending</option>
                <option>Ordering no. - descending</option>
                <option>Price - ascending</option>
                <option>Price - descending</option>
              </select>
              <div class="page_no" id="table_catalog_category_products_table_pull_pager" style="margin-left:630px; margin-top:-25px; font-size:15px;">
                View: 
                <b-button v-on:click="resim" style="border:none; background-color:white; width:8px; height:22px; margin-left:9px; margin-top:-10px;">
                    <img src="@/assets/1.jpg" style="width:8; height:22px; margin-left:-11px; margin-top:-14px; border:none;">
                  </b-button> 
                  <b-button v-on:click="resim" style="border:none; background-color:white; width:8px; height:22px; margin-left:15px; margin-top:-10px;">
                    <img src="@/assets/2 .jpg" style="width:8; height:22px; margin-left:0px; margin-top:-12px; border:none;">
                  </b-button>
                
              </div>
              
            </div>
            </div>
        <!--sol taraftaki kategori tablosu-->
        <div id="slot" >
             <div class="menu_left" style="width:250px;">
                <table border="1" style=" margin-left:65px; font-size:12px; border-left:white; border-right:white; margin-top:0px;">
                    <tr>
                        <a href="" style="margin-left:-105px;text-decoration: none; " >Hot Buys</a>
                        <a style="margin-top:-37px; margin-left:127px;">(5)</a>
                        <hr style="margin-top:-5px;">
                    </tr>
                    <br>
                    
                </table>
                <br><br><br>
                <div class="filter_section">
                    <div class="header">
                        <div class="name">
                            <h3 style="margin-left:-50px;">Narrow by</h3>
                        </div>
                        <div class="clear_link">
                            <a href="" class="clear"  style="margin-left:140px; font-size:14px; margin-top:-20px;">Clear all</a>
                        </div>
                    </div>
                    </div>
                  <div class="header"><h3 style="font-size:13px; margin-left:60px; text-align:left;">Featured</h3></div>
                  <ul>
                    <li>
                      <label>
                        <span class="label_text">
                          <input class="checkbox_field" type="checkbox" value="featured=Top+30" style="font-size:11px; margin-left:-50px; text-align:left;">
                          <span class="checkbox_text" style="font-size:11px; margin-top:20px;">NUTRIWAY™</span>
                          </span><span class="count" style="font-size:11px;">(3)</span>
                          </label></li>
                          <li>
                            <label>
                            <span class="label_text">
                              <input class="checkbox_field" type="checkbox" value="featured=Temporarily+not+available" style="font-size:11x; margin-left:25px; text-align:left;"> 
                              <span class="checkbox_text" style="font-size:11px; ">ARTISTRY STUDIO™
                              </span>
                            </span>
                            <span class="count" style="font-size:12px;" >(4)</span>
                            </label>
                      </li>
                    </ul>
                    
                      <div class="header">
                      <h3 style="font-size:13px; margin-left:60px; text-align:left;">Price</h3></div>
                       <ul>
                         <li>
                           <input class="text_field" name="priceMin" type="text" style=" margin-left:10px; box-sizing: border-box;width: 62px;height: 25px;font-size: 12px;line-height: 25px;padding: 0 5px;">
                           <span class="separator"> - </span>
                           <input class="text_field" name="priceMax" type="text" style=" margin-left:-2px; box-sizing: border-box;width: 62px;height: 25px;font-size: 12px;line-height: 25px;padding: 0 5px;">
                           <span class="range_label" style="margin-left:5px;">TL</span></li>
                           <li class="apply_button_wrapper"><label>
                          <button style="margin-left:170px; margin-top:20px; background-image: url(@/_img_common/buttons/buttons.png?1571178003859); border:none; color:white;" > Applay</button>
                          </label></li></ul>
                       
                  
                   
               
                </div>
        </div>

          
  


        
      
  </div>
    
  
</template>

<script>
export default {
  name: 'HotBuysProduct',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*home>register kısmı*/
.breadcrumb ul{
    list-style-type: none;
    margin: 0;
    padding-top: 0;
    color: #9a9a9a;
    font-size: 16px;
    text-decoration: none;/*altını çizme engellendi*/
    display: inline;
    margin-left: 50px;
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
