<template>
  <div class="MPUrun">
    <div id="content" class="template_1 amway_today">
        <!--Home>Shopping cart kısmı-->
        <div class="titlebox_container full_bg">
        <!--Home>Shopping cart kısmı-->
            <div class="breadcrumb" style="width:950px; margin-left:150px;">
                    <ul style="margin-left:-10px;">
                        <li>
                            <a href="../HelloWorld" class="home"  >
                                <i class="fa fa-home"></i>&nbsp;Home
                            </a>
                            <a href="#buyuktur" class="buyuktur" >
                                >
                            </a>
                            <a href="#shopping_cart" class="shopping_cart">
                                More Products
                            </a>
                        </li>
                    </ul>
                    <div class="title" style="font-size:25px; margin-left:8px;">
                        <br>
                        <p style="margin-left:-175px; color: #1E317E; font-family: Arial,Helvetica,Garuda,sans-serif;"><strong>More Products</strong></p>
                    </div>
                </div>
        


        <!--sol taraftaki kategori tablosu-->
        <div id="slot" >
          <div class="menu_left" style="width:250px; margin-top:-10px; margin-left:130px;">
            <h6><a href="/en/home" style="color: #1E317E; margin-left:-110px; margin-top:5px;"><strong>Hot Buys</strong></a></h6>
              <table border="1" style=" margin-left:35px; font-size:12px; border-left:white; border-right:white; margin-top:0px;">
              <tr>
                <a href="" style="margin-left:-94px;text-decoration: none;font-family: Arial,Helvetica,Garuda,sans-serif;" >Hot Buys</a>
                <a style="margin-top:-37px; margin-left:127px; color:#494949; font-family: Arial,Helvetica,Garuda,sans-serif;">(2)</a>
                <hr style="margin-top:-5px;">
              </tr>
              
              </table><br><br><br>
          </div>
        </div>

    </div>

            <div class="filter_section">
          <div class="header">
            <div class="name">
              
              <h3 style="margin-left:-945px; margin-top:-10px">Narrow by</h3>
            </div>
            <div class="clear_link">
              <a href="" class="clear"  style="margin-left:-750px; font-size:14px; margin-top:-20px;">Clear all</a>
            </div>
          </div>
        </div>
        <!--accordion-->
        <div role="tablist">
          <b-card no-body class="mb-1" style="width:180px; margin-left:155px;">
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
                        <span class="checkbox_text" style="font-size:11px; margin-top:20px; color: #069;">NUTRIWAY™</span>
                      </span>
                      <span class="count" style="font-size:11px; color: #069;">(2)</span>
                    </label>
                  </li>
                  <hr style="margin-top:8px; margin-left:-20px; width:150px;">
                </ul>
              </b-card-body>
            </b-collapse>
          </b-card>
          <!--Price Kısmı-->
          <b-card no-body class="mb-1" style="width:180px; margin-left:155px;">
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
    <table class="table_data" style="margin-top:160px; margin-left:30px;">
        <tbody class="table_body">
            <tr class="is_first">
                <td class="is_first nil">
                    <div id="button-2" style="margin-left:320px; margin-top:-570px; margin-bottom:0px; border-color:white; width:60;" >
                      <button v-on:click="resim" style="border:white; margin"><img src="@/assets/10093.jpeg" style="width:50;"></button>
                      <p><router-link to="/HotBuys"><a href="" style="margin-left:-150px; margin-top:-670px; color: #566678; font-size: 16px;"><strong>Hot Buys</strong></a></router-link></p>
                      <p><a  href ="" style="color: #069; margin-top:-675px; font-size: 11px; margin-left:-170px;" >Show products > </a></p>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
                  
</div>
           
  </div>
  
</template>

<script>
export default {
  name: 'MPUrun',
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

</style>
