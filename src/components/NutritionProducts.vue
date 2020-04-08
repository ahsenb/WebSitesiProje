<template>
  <div class="NutritionProducts">
      <div id="content" class="template_1 amway_today">
        <!--Home>Shopping cart kısmı-->
        <div class="titlebox_container full_bg">
            <!--Home>Shopping cart kısmı-->
            <div class="breadcrumb" style="width:950px; margin-left:190px;">
                <ul>
                    <li>
                        <a href="../HelloWorld" class="home" >
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
                    <p style="margin-left:-150px; color: #1E317E; font-family: Arial,Helvetica,Garuda,sans-serif;"><strong>Home</strong></p>
                </div>
            </div>
            
        </div>
        
        <!--sol taraftaki kategori tablosu-->
        <div id="slot" >
            <div class="menu_left" style="width:250px; margin-top:-10px; margin-left:130px;">
                <table border="1" style=" margin-left:65px; font-size:12px; border-left:white; border-right:white; margin-top:0px;">
                    <tr>
                        <router-link to="/NutritionAcc"><a href="" style="margin-left:-105px;text-decoration: none; " >Accessories</a></router-link>
                        <a style="margin-top:-37px; margin-left:127px;">(3)</a>
                        <hr style="margin-top:-5px;">
                    </tr>
                    <br>
                    <tr>
                        <a href="" style="margin-left:-107px; margin-top:-30px; text-decoration: none;">Active Lifestyle</a>
                        <a style="margin-top:-37px; margin-left:127px;">(8)</a>
                        <hr style="margin-top:-5px;">
                    </tr>
                    <br>
                    <tr>
                        <a href="" style="margin-left:-90px; margin-top:-30px; text-decoration: none;">Targeted Food Supplements</a>
                        <a style="margin-top:-37px; margin-left:127px;">(20)</a>
                        <hr style="margin-top:-5px;">
                    </tr>
                    <br>
                    <tr>
                        <a href="" style="margin-left:-73px; margin-top:-30px; text-decoration: none;">Weight Management</a>
                        <a style="margin-top:-39px; margin-left:127px;">(16)</a>
                        <hr style="margin-top:-5px;">
                    </tr>
                    <br>
                    <tr>
                        <a href="" style="margin-left:-40px; margin-top:-30px; text-decoration: none;">Foundational Food Supplements</a>
                        <a style="margin-top:-39px; margin-left:127px;">(5)</a>
                        <hr style="margin-top:-5px;">
                    </tr>
                    <br>
                    <tr>
                        <a href="" style="margin-left:-55px; margin-top: -30px; text-decoration: none;">Food and Beverages</a>
                        <a style="margin-top:-39px; margin-left:127px;">(7)</a>
                        <hr style="margin-top:-5px;">
                    </tr>
                    <br>
                    <tr>
                        <a href="" style="margin-left:-40px; margin-top:-30px; text-decoration: none;">Personalised Solutions For You</a>
                        <a style="margin-top:-37px; margin-left:127px;">(6)</a>
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
                          <span class="checkbox_text" style="font-size:11px; margin-top:20px;">Top 30</span>
                          </span><span class="count" style="font-size:11px;">(4)</span>
                          </label></li>
                          <li>
                            <label>
                            <span class="label_text">
                              <input class="checkbox_field" type="checkbox" value="featured=Temporarily+not+available" style="font-size:11x; margin-left:25px; text-align:left;"> 
                              <span class="checkbox_text" style="font-size:11px; ">Temporarily not available
                              </span>
                            </span>
                            <span class="count" style="font-size:12px;" >(9)</span>
                            </label>
                      </li>
                    </ul>
                    <div class="header">
                      <h3 style="font-size:13px; margin-left:60px; text-align:left;">Brand</h3></div>
                  <ul>
                    <li>
                      <label>
                        <span class="label_text">
                          <input class="checkbox_field" type="checkbox" value="featured=Top+30" style="font-size:11px; margin-left:0px; text-align:left;">
                          <span class="checkbox_text" style="font-size:11px; margin-top:20px;">AMWAY HOME™</span>
                          </span><span class="count" style="font-size:11px;">(35)</span>
                          </label></li>
                          <li>
                            <label>
                            <span class="label_text">
                              <input class="checkbox_field" type="checkbox" value="featured=Temporarily+not+available" style="font-size:11x; margin-left:-68px; text-align:left;"> 
                              <span class="checkbox_text" style="font-size:11px; ">iCook™
                              </span>
                            </span>
                            <span class="count" style="font-size:12px; margin-left:-10px;" >(24)</span>
                            </label>
                          </li>
                          
                          <li>
                            <label>
                            <span class="label_text">
                              <input class="checkbox_field" type="checkbox" value="featured=Temporarily+not+available" style="font-size:11x; margin-left:-34px; text-align:left;"> 
                              <span class="checkbox_text" style="font-size:11px; ">eSpring™
                              </span>
                            </span>
                            <span class="count" style="font-size:12px;" >(13)</span>
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
            <!--Products-->
              <table class="table_data" style="margin-top:-40px;">
           <tbody class="table_body">
              <tr class="is_first">
                <td class="is_first nil">
                  <div id="button-2" style="margin-left:400px; margin-top:-732px; margin-bottom:0px; border-color:none;" >
                    <button v-on:click="resim" style="border:none; margin ; width:100px;"><img src="@/assets/Nutrition1.jpeg" style="width:100; margin-left:-10px;"></button>
                    <p><router-link to="/acc"><a href="" style="margin-left:-20px; margin-top:-670px; color: #566678; font-size: 16px;"><strong>Accessories</strong></a></router-link></p>
                    <p><a  href ="" style="color: #069; margin-top:-675px; font-size: 11px; margin-left:-40px;" >Show products > </a></p>
                  </div>
                </td>
                <td class="cell nil">
                  <div class="button-3" style="height: 182px; margin-top:-732px; margin-left:140px; border-color:white;">
                    <button v-on:click="resim" style="border:white; width:100px;"><img src="@/assets/Nutrition3.jpeg" style="width:100; margin-left:-30px;" ></button>
                    <p><a  style="margin-left:-20px; color: #566678; font-size: 16px;"><strong>Dish Care</strong></a></p>
                    <p><a  style="color: #069; font-size: 11px; margin-left:-15px;" >Show products > </a></p>
                  </div>
                </td>
                <td class="cell nil">
                    <div id="button-4" style="margin-left: 180px; margin-top:-732px; ">
                    <button v-on:click="resim" style="border:white; width:100px; "><img src="@/assets/Nutrition3.jpeg" style="width:100; margin-left:-30px;" ></button>
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
                      <button v-on:click="resim" style="border:white; width:100px; margin-left: 400px; "><img src="@/assets/Nutrition4.jpeg" style="width:100; margin-left:-10px;"></button>
                      <br>
                      <p><a href="" style="margin-left:400px; color: #566678; font-size: 16px;"><strong>Auxiliary cleaning</strong></a></p>
                      <p><a href="" style="color: #069; margin-top:-675px; font-size: 11px; margin-left:340px;" >Show products > </a></p>
                    </div>
                </td>
                <td class="cell nill2">
                  <div id="button-6" style="margin-left: -350px; margin-top:-450px; ">
                    <button v-on:click="resim" style="border:white; width:100px; margin-left: 400px;"><img src="@/assets/Nutrition5.jpeg" style="width:100; margin-left:-50px;"></button>
                    <br>
                    <p><a href="" style="margin-left:450px; color: #566678; font-size: 16px;"><strong>Water Treatment System</strong></a></p>
                    <p><a href="" style="color: #069; font-size: 11px; margin-left:350px;" >Show products > </a></p>
                  </div>
                </td>
                <td class="cell nill2">
                  <div id="button-7" style="margin-left: 60px; margin-top:-450px; ">
                    <button v-on:click="resim" style="border:white "><img src="@/assets/Nutrition6.png"></button>
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
                  <button v-on:click="resim" style="border:white; width:100px; margin-left:-30px; "><img src="@/assets/Nutrition1.jpeg" style="width:100; margin-left:-10px;"></button>
                  <br>
                  <p><a href="" style="margin-left:-10px; color: #566678; font-size: 16px;"><strong>Dispensers and Applicators</strong></a></p>
                  <p><a href="" style="color: #069; font-size: 11px; margin-left:-140px;" >Show products > </a></p>
                </div>
              </td>
              <td class="cell nill3">
                <div id="button-6" style="margin-left: 120px; margin-top:-155px; ">
                  <button v-on:click="resim" style="border:white;  margin-left:-10px; "><img src="@/assets/Nutrition2.jpeg" style="width:100; margin-left:-10px;"></button>
                  <br>
                  <p><a href="" style="margin-left:-185px; color: #566678; font-size: 16px;"><strong>Cleaners</strong></a></p>
                  <p><a href="" style="color: #069; font-size: 11px; margin-left:-170px;" >Show products > </a></p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
            <div>
               
               
            </div> 
             
        </div>
           <div id="app">
  </div>
  </div>
</template>

<script>
export default {
  name: 'NutritionProducts',
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
    margin-left: -10px;
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
