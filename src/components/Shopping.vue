<template>
    <div class="shopping_cart">
        <div id="content" class="template_1 amway_today">
            <!--Home>Shopping cart kısmı-->
            <div class="titlebox_container full_bg">
                <div class="breadcrumb" style="width:950px; margin-left:190px;">
                    <ul>
                        <li>
                            <a href="#" class="home" >
                                <i class="fa fa-home"></i>&nbsp;Home
                            </a>
                            <a href="#" class="buyuktur" >
                                >
                            </a>
                            <a href=" " class="register" >
                                Shopping cart
                            </a>
                        </li>
                    </ul>
                    <div class="title" style="margin-top:-50px; color: #002F5F;" >
                        <h1 style="margin-left:-80px; font-size: 31px; margin-top:25px; padding-right:-10px;"> <br>Shopping </h1>
                        <h2 style="margin-left:150px; margin-top:-82px; font-size: 31px; padding-left:10px;">  <br>cart </h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="owncart">
            <div class="column column_1_2 buttons_area">
                <router-link to="/shopping_cart"><a class="button__back" href="#">
                    <button class="" style=" background-color: #e9ecef;  color: #566678; font-size:12px;"> <strong>  Continue shopping </strong></button>
                </a></router-link>
                    <div class="sort_by">
                        <p clas="baslik" style="font-size: 12px;font-family: Arial,Helvetica,Garuda,sans-serif; margin-top:-25px; margin-left:720px; width: 400px; color: #494949;">Sort by:</p>
                        <!--https://vuejs.org/v2/guide/forms.html-->
                        <select v-model="selected"  style="margin-right:-460px; margin-top: -35px; float: right; font-size: 14px;" >
                            <option :value="null">Recently added first</option>
                            <option>Recently added last</option>
                            <option>Name-ascending</option>
                            <option>Name-descending</option>
                            <option>Ordering-ascending</option>
                            <option>Ordering No-descending</option>
                            <option>Price-ascending</option>
                            <option>Price-descending</option>
                        </select>
                    </div>
                    <div class="selected_cart">
                    <div class="cart_panel" style="width:950px; margin-left:190px; height:45px;">
                        <img src="@/assets/araba.png" style="margin-left:-890px; margin-top:-5px;">&nbsp;&nbsp;<p class="own_cart"><strong>Own cart</strong></p>
                        <p class="write">There are no items in the cart.</p>
                    </div>
                    <div class="shopping_options">
                        <!--https://vuejs.org/v2/guide/forms.html#Checkbox js=checkbox.js-->
                        <div id='checkbox' >
                            <input type="checkbox" id="remove_selected" value="remove_selected" v-model="checkedNames" style="margin-left: -340px;">
                            <label for="remove_selected" style=" font-size: 13px;">&nbsp; | Remove selected</label>
                            <a class="new_item" style="margin-left: 250px;"><strong>New item: </strong></a>
                            <!--text input
                            https://codepen.io/IamManchanda/pen/GMJxXN js=add_button-->
                            <input v-model="message" placeholder="" style="background: #fff;border: 1px solid #ccc;height: 20px;font-size: 13px; width: 110px;">
                            <div id="vueCount0" style="width: 90px; margin-top: -30px; margin-left: 600px;">
                                <span>
                                <button class="azaltma"  v-on:click="decreaseCounter(0)" style=" font-size:15px; color: #069;width: 25px; height: 25px;" >-</button>
                                <a style="background: #fff;border: 1px solid #ccc; height: 25px; font-size: 15px; width: 10; padding-left: 14px;"> {{ counter }}&nbsp; </a>&nbsp;
                                <button class="arttırma" v-on:click="increaseCounter(20)" >+</button></span>
                            </div>
                            <div class="add_button">
                                <b-button style="width:100px; height:22px; font-size:12px; margin-left:660px; margin-top:-95px;">Add to chart</b-button>
                            </div>
                        </div>
                        
                    </div>
            </div>
            <div class="empty_cart" style="margin-left:190px; width:950px;">
                <a style="margin-left:-700px;">There are no items in the cart.</a>
            </div>
            <div class="box_content" >
                <table>
                    <tbody>
                        <td class="sutun_1">
                            <p></p>
                            <a style="margin-left:-185px;"><strong> &nbsp;&nbsp; &nbsp; &nbsp;CART SUMMARY</strong></a>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>&nbsp;&nbsp; &nbsp; &nbsp;Items:</td>
                                        <td>
                                        <span class="items" style="color: #566678;"> 
                                            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</strong></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;Retail Price:</td>
                                        <td>
                                            <span class="money" style="color: #566678;"><strong>0.00 TL</strong></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="cart_grand_total" style="margin-top:355px; width:955px; margin-left:188px;" >
        <div class="cart_panel" >
            <br>
            <p style="margin-left:505px;"><strong> CART GRAND TOTAL </strong> &nbsp;&nbsp; <a style="margin-left:135px;">0 items</a> </p><hr>
        </div>
        <div class="box_content" style="margin-left:555px;">
            <div class="cart" >
                <br>
                <p class="retail_price" style="margin-top:-10px;"> &nbsp;&nbsp; &nbsp;&nbsp;Retail Price:
                <a class="money2"><strong> 0.00 TL</strong></a></p>
                <p class="row_1"> Find out how to buy Amway products online <a style="color: #b2e123">here</a>.</p>
                <p class="row_2">To send your order:</p>
                <!--https://vuejs.org/v2/guide/events.html-->
                <button class="continue">Continue</button>
            
            </div>
            
        </div>
        
    </div>
    
</div>

</template>
<script>
 export default {
    el: '#vueCount0',
    data() {
      return {
        selected: null,
        counter: 0/*new item kısmı*/ 
      }
      
    },
    /*new item kısmındaki + ve - butonu */
    methods:{
      increaseCounter(increaseLimit) { // Increase
        if (this.counter < increaseLimit) this.counter++;
      },
      decreaseCounter(decreaseLimit) { // Decrease
        if (this.counter > decreaseLimit) this.counter--;
      }, 
    }
    
   
 }

</script>

<style  scoped>
@import url(https://fonts.googleapis.com/css?family=Nunito+Sans);

.continue{
    width:350px;
    height: 35px;
    margin-left:-10px;
    margin-top:20px;
    background-color: #8cb11b;
    color: #fff;
    border-color: #9dc71e #7a9b18 #7a9b18 #9dc71e;
}
.arttırma{
    font-size:15px; 
    color: #069;
    width: 25px; 
    height: 25px;
    margin-left:75px; 
    margin-top:-25px;
}
/*home>register kısmı*/
.breadcrumb ul{
    list-style-type: none;
    margin: 0;
    padding-top: 0;
    color: #9a9a9a;
    font-size: 11px;

    display: inline;
    margin-left: -50px
}

.breadcrumb a{
    color: #9a9a9a;
}

/*Register başlığı*/
.breadcrumb .title{
    color: #002F5F; 
    margin-top: 20px;
    margin-left:-10px; 
    margin-right: 1030px; 
    margin-top:-40px; 
   font-size: 15px;
}
.column.column_1_2 {
    width: 50%;
}
.column {
    float: left;
    padding: 0 5px;
    box-sizing: border-box;
}
.buttons_area {
    padding-top: 20px;
}
.buttons_area A.button__back {
    margin-bottom: 2px;
}
.buttons_area A, .s_box_header_inner A {
    margin-right: 18px;
}
.button__back {
    background-position: 100% -164px;
}
.button__back, .button__v3 {
    color: #566678;
    text-decoration: none!important;
    font-size: 12px;
    background-image: url(/_img_common/buttons/buttons.png?1571178003859);
    background-position: 100% 0;
    background-repeat: no-repeat;
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    margin-left:-125px;
    margin-top:-5px;
}
a {
    color: #069;
}
a, del, ins {
    text-decoration: none;
}
.button__back SPAN {
    background-position: 0 -164px;
    padding-left: 30px;
}
.button__back SPAN, .button__v3 SPAN {
    display: inline-block;
    line-height: 30px;
    padding: 0 10px 0 13px;
    margin-right: 3px;
    background-image: url(/_img_common/buttons/buttons.png?1571178003859);
    background-position: 0 0;
}
.button__back, .button__v3 {
    color: #566678;
    background-color: #e9ecef;
    text-decoration: none!important;
    font-size: 12px;
    background-image: url(/_img_common/buttons/buttons.png?1571178003859);
    background-position: 100% 0;
    background-repeat: no-repeat;
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
}

/*Own cart kısmı*/
.selected_cart .cart_panel {
    background: #566678;
    border-radius: 3px 3px 0 0;
    background-clip: padding-box;
    padding: 10px;
    font-size: 15px;
    color: #fff;
    width:950px; margin-left:190px;
}

.cart_panel {
    padding-left: 27px;
    font-size: 14px;
    color: #566678;
}

.cart_panel2 {
    background: #566678;
    margin-top: -10px;
    background-clip: padding-box;
    padding: 3px;
    padding-left: 3px;
    padding-top: 3px;
    font-size: 12px;
    color: #fff;
}

.cart_panel .own_cart{
    margin-left: -760px;
    margin-top: -25px;

}
.cart_panel .write{
    margin-left: 750px;
    margin-top: -40px;
    font-size: 12px;
}
.shopping_options{
    background-color: #e9ecef;
    width:950px; margin-left:190px;
}

#checkbox #remove_selected{
    width: 15px;
    height: 15px;
    margin-top: 15px; 
  
   
}
#checkbox .new_item{
    width: 15px;
    height: 15px;
    margin-top: 10px; 
    
    font-size: 13px;
    font-family: Arial,Helvetica,Garuda,sans-serif;
    color: #494949;
}

/*own chart altı*/
.empty_cart {
    border: 1px solid #efefef;
    border-top: none;
    padding: 10px 15px;
    margin-bottom: -1px;
    font-family: Arial,Helvetica,Garuda,sans-serif;
    color: #494949;
    font-size: 13px;
    
    
}

/*cart summary kısmı*/
.box_content{
    background-color: #e9ecef;
    height: 90px;
    width: 400px;
    margin-left: 740px;
}
.box_content .sutun_1{
    margin-top: 30px; 
    color: #566678;
    font-size: 15px; 
    margin-left: 20px; 
 
}
.sutun_1 span{
    margin-left: 230px;
    color: #566678;
}
/*CART GRAND TOTAL kısmı*/
.cart_grand_total{
    background: #566678;
    margin-top: 65px;
    height: 60px;
}
.cart_grand_total .cart_panel p{
    margin-left: 848px;
    color: #fff;
    font-size: 15px;

}
.cart_grand_total .cart_panel a{
    margin-left: 0px;
    color: #fff;
    font-size: 14px;
}
.cart_grand_total .box_content{
    background-color: #566678;
    height: 200px;
    width: 400px;
    margin-left: 850px;
    margin-top: -18px;
}

/*Retail price kısmı*/
.retail_price{
    color: #fff;
    font-family: Arial,Helvetica,Garuda,sans-serif;
    font-size: 15px;
    margin-top: 20px;
}

.retail_price .money2{
    color: #fff;
    font-family: Arial,Helvetica,Garuda,sans-serif;
    font-size: 15px;
    margin-left: 230px;
}

.cart .row_1{
    color: #fff;
    font-family: Arial,Helvetica,Garuda,sans-serif;
    font-size: 15px;
    margin-left:-34px;
}
.cart .row_2{
    color: #fff;
    font-family: Arial,Helvetica,Garuda,sans-serif;
    font-size: 15px;
    margin-left:-227px;
}

</style>