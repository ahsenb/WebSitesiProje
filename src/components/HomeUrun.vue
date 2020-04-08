<template>
  <div class="HomeUrun">
      <div id="content" class="template_1 amway_today">
        <!--Home>Shopping cart kısmı-->
        <div class="titlebox_container full_bg">
            <!--Home>Shopping cart kısmı-->
            <div class="breadcrumb" style="width:950px; margin-left:190px;">
                <ul>
                    <li>
                        <a href="../HelloWorld" class="home">
                            <i class="fa fa-home"></i>&nbsp;Home
                        </a>
                        <a href="#buyuktur" class="buyuktur" >
                            >
                        </a>
                        <a href="#shopping_cart" class="shopping_cart">
                            Home
                        </a>
                    </li>
                </ul>
                <div class="title" style="font-size:25px; margin-left:8px;">
                <br>
                    <p style="margin-left:-100px; color: #1E317E; font-family: Arial,Helvetica,Garuda,sans-serif;"><strong>Home</strong></p>
                </div>
            </div>
            
        </div>
        
        <!--sol taraftaki kategori tablosu-->
        <div id="slot" >
          <div class="menu_left" style="width:250px; margin-top:-10px; margin-left:130px;">
            <h6><a href="/en/home" style="color: #1E317E; margin-left:-80px; margin-top:5px;"><strong>Home</strong></a></h6>
              <table border="1" style=" margin-left:65px; font-size:12px; border-left:white; border-right:white; margin-top:0px;">
              <tr>
                <a href="" style="margin-left:-94px;text-decoration: none;font-family: Arial,Helvetica,Garuda,sans-serif;" >Accessories</a>
                <a style="margin-top:-37px; margin-left:127px; color:#494949; font-family: Arial,Helvetica,Garuda,sans-serif;">(2)</a>
                <hr style="margin-top:-5px;">
              </tr>
              <br>
              <tr>
                <a href="" style="margin-left:-107px; margin-top:-30px; text-decoration: none;font-family: Arial,Helvetica,Garuda,sans-serif;">Dish Care</a>
                <a style="margin-top:-37px; margin-left:127px;font-family: Arial,Helvetica,Garuda,sans-serif;">(3)</a>
                <hr style="margin-top:-5px;">
              </tr>
              <br>
              <tr>
                <a href="" style="margin-left:-90px; margin-top:-30px; text-decoration: none;font-family: Arial,Helvetica,Garuda,sans-serif;">Laundry Care</a>
                <a style="margin-top:-37px; margin-left:127px;font-family: Arial,Helvetica,Garuda,sans-serif;">(13)</a>
                <hr style="margin-top:-5px;">
              </tr>
              <br>
              <tr>
                <a href="" style="margin-left:-73px; margin-top:-30px; text-decoration: none;font-family: Arial,Helvetica,Garuda,sans-serif;">Auxiliary cleaning</a>
                <a style="margin-top:-39px; margin-left:127px;font-family: Arial,Helvetica,Garuda,sans-serif;">(3)</a>
                <hr style="margin-top:-5px;">
              </tr>
              <br>
              <tr>
                <a href="" style="margin-left:-40px; margin-top:-30px; text-decoration: none; font-family: Arial,Helvetica,Garuda,sans-serif;">Water Treatment System</a>
                <a style="margin-top:-39px; margin-left:127px;font-family: Arial,Helvetica,Garuda,sans-serif;">(13)</a>
                <hr style="margin-top:-5px;">
              </tr>
              <br>
              <tr>
                <a href="" style="margin-left:-55px; margin-top: -30px; text-decoration: none;font-family: Arial,Helvetica,Garuda,sans-serif;">Cookare and cutlery</a>
                <a style="margin-top:-39px; margin-left:127px;font-family: Arial,Helvetica,Garuda,sans-serif;">(25)</a>
                <hr style="margin-top:-5px;">
              </tr>
              <br>
              <tr>
                <a href="" style="margin-left:-40px; margin-top:-30px; text-decoration: none;font-family: Arial,Helvetica,Garuda,sans-serif;">Dispensers and Applicator</a>
                <a style="margin-top:-37px; margin-left:127px;font-family: Arial,Helvetica,Garuda,sans-serif;">(8)</a>
                <hr style="margin-top:-5px;">
              </tr>
              <br>
              <tr>
                <a href="" style="margin-left:-118px; margin-top:-30px; text-decoration: none;font-family: Arial,Helvetica,Garuda,sans-serif;">Cleaners</a>
                <a style="margin-top:-37px; margin-left:127px;font-family: Arial,Helvetica,Garuda,sans-serif;">(7)</a>
              </tr>
              </table><br><br><br>
          </div>
        </div>

        <div class="filter_section">
          <div class="header">
            <div class="name">
              
              <h3 style="margin-left:-890px; margin-top:-10px">Narrow by</h3>
            </div>
            <div class="clear_link">
              <a href="" class="clear"  style="margin-left:-670px; font-size:14px; margin-top:-20px;">Clear all</a>
            </div>
          </div>
        </div>
        <!--accordion-->
        <div role="tablist">
          <b-card no-body class="mb-1" style="width:180px; margin-left:185px;">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <!--Featured Kısmı-->
              <b-button block href="#" v-b-toggle.accordion-1 variant="info" style="background-color:#fff; font-family: Arial,Helvetica,Garuda,sans-serif;color: #494949; border:none; font-size:12px;"><strong >Featued</strong></b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <ul style=" list-style-type: none;">
                  <li>
                    <label>
                      <span class="label_text">
                        <input class="checkbox_field" type="checkbox" value="featured=Top+30" style="font-size:11px; margin-left:-110px; text-align:left;">
                        <span class="checkbox_text" style="font-size:11px; margin-top:20px; color: #069;">Top 30</span>
                      </span>
                      <span class="count" style="font-size:11px; color: #069;">(14)</span>
                    </label>
                  </li>
                  <hr style="margin-top:8px; margin-left:-20px; width:150px;">
                  <li>
                    <label>
                      <span class="label_text">
                        <input class="checkbox_field" type="checkbox" value="featured=Temporarily+not+available" style="font-size:11x; margin-left:-27px; text-align:left;"> 
                        <span class="checkbox_text" style="font-size:11px; color: #069; ">Temporarily not available</span>
                      </span>
                      <span class="count" style="font-size:12px; color: #069; " >(2)</span>
                    </label>
                  </li>
                </ul>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1" style="width:180px; margin-left:185px;">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <!--Brand Kısmı-->
              <b-button block href="#" v-b-toggle.accordion-1 variant="info" style="background-color:#fff; font-family: Arial,Helvetica,Garuda,sans-serif;color: #494949; border:none; font-size:12px;"><strong >Brand</strong></b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <ul style=" list-style-type: none;">
                  <li>
                    <label>
                      <span class="label_text">
                        <input class="checkbox_field" type="checkbox" value="featured=Top+30" style="font-size:11px; margin-left:-50px; text-align:left;">
                        <span class="checkbox_text" style="font-size:11px; margin-top:20px; color: #069;">AMWAY HOME™</span>
                      </span>
                      <span class="count" style="font-size:11px; color: #069;">(35)</span>
                    </label>
                  </li>
                  <hr style="margin-top:8px; margin-left:-20px; width:150px;">
                  <li>
                    <label>
                      <span class="label_text">
                        <input class="checkbox_field" type="checkbox" value="featured=Top+30" style="font-size:11px; margin-left:-95px; text-align:left;">
                        <span class="checkbox_text" style="font-size:11px; margin-top:20px; color: #069;">iCook™</span>
                      </span>
                      <span class="count" style="font-size:11px; color: #069;">(24)</span>
                    </label>
                  </li>
                  <hr style="margin-top:8px; margin-left:-20px; width:150px;">
                  <li>
                    <label>
                      <span class="label_text">
                        <input class="checkbox_field" type="checkbox" value="featured=Temporarily+not+available" style="font-size:11x; margin-left:-87px; text-align:left;"> 
                        <span class="checkbox_text" style="font-size:11px; color: #069; ">eSpring™</span>
                      </span>
                      <span class="count" style="font-size:12px; color: #069; " >(13)</span>
                    </label>
                  </li>
                </ul>
              </b-card-body>
            </b-collapse>
          </b-card>
          <!--Price Kısmı-->
          <b-card no-body class="mb-1" style="width:180px; margin-left:185px;">
          <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-2 variant="info" style="background-color:#fff; font-family: Arial,Helvetica,Garuda,sans-serif;color: #494949; border:none; font-size:12px;"><strong >Price</strong></b-button>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <ul style=" list-style-type: none; margin-top:0px; margin-left:-35px;">
                  <li>
                    <input class="text_field" name="priceMin" type="text" style=" margin-left:10px; box-sizing: border-box;width: 62px;height: 25px;font-size: 12px;line-height: 25px;padding: 0 5px;">
                    <span class="separator"> - </span>
                    <input class="text_field" name="priceMax" type="text" style=" margin-left:-2px; box-sizing: border-box;width: 62px;height: 25px;font-size: 12px;line-height: 25px;padding: 0 5px;">
                    <span class="range_label" style="margin-left:5px; font-family: Arial,Helvetica,Garuda,sans-serif; color: #494949;">TL</span></li>
                    <li class="apply_button_wrapper">
                    <label>
                      <button style="margin-left:115px; margin-top:20px; background-color: #2c3e50;9; border:none; color: #fff;" > Applay</button>
                    </label>
                  </li>
                </ul>
              </b-card-text>
            </b-card-body>
          </b-collapse>
          </b-card>
        </div>

        <!--Products-->
        <table class="table_data" style="margin-top:-200px;">
           <tbody class="table_body">
              <tr class="is_first">
                <td class="is_first nil">
                  <div id="button-2" style="margin-left:400px; margin-top:-732px; margin-bottom:0px; border-color:none;" >
                    <button v-on:click="resim" style="border:none; margin ; width:100px;"><img src="@/assets/10085.jpg" style="width:100; margin-left:-10px;"></button>
                    <p><router-link to="/acc"><a href="" style="margin-left:-20px; margin-top:-670px; color: #566678; font-size: 16px;"><strong>Accessories</strong></a></router-link></p>
                    <p><a  href ="" style="color: #069; margin-top:-675px; font-size: 11px; margin-left:-40px;" >Show products > </a></p>
                  </div>
                </td>
                <td class="cell nil">
                  <div class="button-3" style="height: 182px; margin-top:-732px; margin-left:140px; border-color:white;">
                    <button v-on:click="resim" style="border:white; width:100px;"><img src="@/assets/22.jpg" style="width:100; margin-left:-30px;" ></button>
                    <p><a  style="margin-left:-20px; color: #566678; font-size: 16px;"><strong>Dish Care</strong></a></p>
                    <p><a  style="color: #069; font-size: 11px; margin-left:-15px;" >Show products > </a></p>
                  </div>
                </td>
                <td class="cell nil">
                    <div id="button-4" style="margin-left: 180px; margin-top:-732px; ">
                    <button v-on:click="resim" style="border:white; width:100px; "><img src="@/assets/33.jpg" style="width:100; margin-left:-30px;" ></button>
                      <br>
                      <p><a  style="margin-left:-20px; color: #566678; font-size: 16px;"><strong>Laundry Care</strong></a></p>
                      <p><a  style="color: #069; font-size: 11px; margin-left:-45px;" >Show products > </a></p>
                    </div>
                  </td>
              </tr>
           </tbody>
        </table>
        <table>
          <tbody>
             <tr class="is_two nil">
                <td class="cell nill2">
                  <div id="button-5" style=" margin-top:-450px; ">
                      <button v-on:click="resim" style="border:white; width:100px; margin-left: 400px; "><img src="@/assets/33.jpg" style="width:100; margin-left:-10px;"></button>
                      <br>
                      <p><a href="" style="margin-left:400px; color: #566678; font-size: 16px;"><strong>Auxiliary cleaning</strong></a></p>
                      <p><a href="" style="color: #069; margin-top:-675px; font-size: 11px; margin-left:340px;" >Show products > </a></p>
                    </div>
                </td>
                <td class="cell nill2">
                  <div id="button-6" style="margin-left: -350px; margin-top:-450px; ">
                    <button v-on:click="resim" style="border:white; width:100px; margin-left: 400px;"><img src="@/assets/44.jpg" style="width:100; margin-left:-50px;"></button>
                    <br>
                    <p><a href="" style="margin-left:450px; color: #566678; font-size: 16px;"><strong>Water Treatment System</strong></a></p>
                    <p><a href="" style="color: #069; font-size: 11px; margin-left:350px;" >Show products > </a></p>
                  </div>
                </td>
                <td class="cell nill2">
                  <div id="button-7" style="margin-left: 60px; margin-top:-450px; ">
                    <button v-on:click="resim" style="border:white "><img src="@/assets/55.png"></button>
                    <br>
                    <p><a href="" style="margin-left:-90px; color: #566678; font-size: 16px;"><strong>Cookware and cutlery</strong></a></p>
                    <p><a href="" style="color: #069; font-size: 11px; margin-left:-170px;" >Show products > </a></p>
                  </div>
                </td>
             </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr class="is_three nil">
              <td class="cell nill3">
                <div id="button-6" style="margin-left: 400px; margin-top:-155px; ">
                  <button v-on:click="resim" style="border:white; width:100px; margin-left:-30px; "><img src="@/assets/77.png" style="width:100; margin-left:-10px;"></button>
                  <br>
                  <p><a href="" style="margin-left:-10px; color: #566678; font-size: 16px;"><strong>Dispensers and Applicators</strong></a></p>
                  <p><a href="" style="color: #069; font-size: 11px; margin-left:-140px;" >Show products > </a></p>
                </div>
              </td>
              <td class="cell nill3">
                <div id="button-6" style="margin-left: 120px; margin-top:-155px; ">
                  <button v-on:click="resim" style="border:white;  margin-left:-10px; "><img src="@/assets/66.jpg" style="width:100; margin-left:-10px;"></button>
                  <br>
                  <p><a href="" style="margin-left:-185px; color: #566678; font-size: 16px;"><strong>Cleaners</strong></a></p>
                  <p><a href="" style="color: #069; font-size: 11px; margin-left:-170px;" >Show products > </a></p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <!--bilgi kısmı-->
        <table border="1" style=" font-size:12px;  line-height: 17px;font-family: Arial,Helvetica,Garuda,sans-serif; color: #494949; margin-top: 90px;  margin-left:380px;  background: #fafafa;    border: 1px solid #e5e5e5;    border-radius: 5px; ">
          <tr>
            <p></p><p></p>
            <p style="margin-left:20px; margin-left:20px;">AMWAY HOME™ household cleaning products are powerful, safe and environmentally friendly. The AMWAY HOME range of home care</p>
            <p style="text-align:left; margin-left:20px;"> products includes our fabulous iCook™ cookware and knives and the eSpring™ Water Treatment System.</p>
            <p></p>
          </tr>
          <br>
          <tr>
            <h3 style="font-size:14px;margin-left:-620px;"><strong>Laundry care </strong></h3>
            <br>
            <p style="text-align:left; margin-left:20px;">&nbsp;&nbsp;Our Laundry care products include powder and liquid detergents, powerful stain removers and pre-wash treatments that vanish away greasy</p> 
            <p style="text-align:left;margin-left:20px;">stains. All our laundry care products contain natural cleaning ingredients sourced from plants and minerals.</p>
            <p></p>
            <p></p>
          </tr>
          <tr>
            <h3  style="font-size:14px; margin-left:-570px;"><strong> Household cleaners </strong></h3>
            <br>
            <p style="text-align:left; margin-left:20px;">&nbsp;We have cleaning products for every task in the home, including multi-purpose cleaners, bathroom cleaners that remove limescale and hard </p>
            <p style="text-align:left; margin-left:20px;">water deposits – and tough kitchen cleaners that cut through grease and grime, effortlessly. </p>
            <p></p>
            <p style="text-align:left; margin-left:20px;">Our task-specific cleaning products include car cleaning products, carpet and upholstery cleaners, wax furniture polishes and glass and </p>
            <p style="text-align:left; margin-left:20px;">metal cleaners.</p>
            <p></p>
          </tr>
          <br>
          <tr>
            <h3  style="margin-left:-540px; font-size:14px;"><strong>Cookware designed to last </strong>  </h3>
            <br>
            <p style="text-align:left; margin-left:20px;">&nbsp;iCook stainless steel saucepans and non-stick frying pans are tough, long-lasting and versatile. They are easy to clean and use less fat for </p>
            <p style="text-align:left; margin-left:20px;">superbly nutritious cooking.</p>
            <p></p>
            <p style="text-align:left; margin-left:20px;">&nbsp;ICook knives are designed for comfort, ease of use and performance and are a great addition to any kitchen.</p>
            <p></p>
          </tr>
          <tr>
            <h3  style="margin-left:-475px; font-size:14px;"><strong> The eSpring Water Treatment System</strong></h3>
            <br>
            <p style="text-align:left; margin-left:20px;">&nbsp;Giving you clearer, cleaner, better tasting water, directly from the tap, the eSpring Water Treatment System improves the quality of the water</p>
            <p style="text-align:left; margin-left:20px;"> you drink, reducing contaminants and eliminating waterborne bacteria and viruses.</p>
            <p></p>
          </tr>
        </table>
             
        
      </div>    
    </div>
</template>

<script>

export default {
  name: 'HomeUrun',
  props: {
    
  },
  data(){
    return {
      
    }
  },

  
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
    width: 250px;
    height: 30px;
    border-radius: 0;
    
}
li a{
  margin-left:-60px;
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

</style>
