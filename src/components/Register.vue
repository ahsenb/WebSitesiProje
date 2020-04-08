<template>
    <div class="register">
        <div id="content" class="template_1 amway_today">
        <!--Home>Shopping cart kısmı-->
        <div class="titlebox_container full_bg">
            <div class="breadcrumb" style="width:950px; margin-left:190px;">
                <ul>
                    <li>
                        <a href="./homepage" class="home" >
                            <i class="fa fa-home"></i>&nbsp;Home
                        </a>
                        <a href="#" class="buyuktur" >
                            >
                        </a>
                        <a href="../" class="register">
                            Register
                        </a>
                    </li>
                </ul>
                <div class="title">
                    <h1> <br>Register</h1>
                </div>
            </div>
        </div>
        <!--Başlık ve içerik-->
        <div class="box_space" >
            <div class="content_area" data-code="registration_what_you_are_searching_for"  style="margin-left:190px;" >
                <p style="margin-left:-620px;">
                    <span class="headline">
                        What are 
                    <span class="headline_big">YOU</span>
                        searching for?
                    </span>
                </p>
                <p class="lead_head" style="margin-left:-140px;">
                    For a chance to change your future and open the door to personal growth, take the Amway business path and register as an 
                    <b>Amway Business Owner.</b>
                </p>
                <p class="lead_head" style="margin-left:-380px;">
                    For great products and personal service delivered to you by an Amway Business Owner and register a<b>s customer.</b>
                </p>
            </div>
        </div> 

        <!--Compare Paths butonu-->
        <div class="content_area" style="margin-left:-740px; border:none;" >
            <button class="button" >
                <b>Compare paths</b>
            </button>
        </div> 

        <div id="tabs" class="container">
            <div class="tabs tabs_list">
                <a v-on:click="activetab=1" v-bind:class="{ active:activetab ==1}">&nbsp;&nbsp;&nbsp;&nbsp;<img class="img1" src="@/assets/ico_briefcase_a.png">&nbsp;&nbsp;<strong>Register as Member Plus</strong></a>
                <a v-on:click="activetab=2" v-bind:class="{ active:activetab == 2}">&nbsp;&nbsp;&nbsp;&nbsp;<img class="img1" src="@/assets/araba.png">&nbsp;&nbsp;<strong>Register as Member Customer</strong></a>
            </div>
            <div class="content2">
                <div v-if="activetab === 1" class="tabcontent">
                    <h2>Own your business, own your future </h2>
                    <ul class="message-body1">
                        <li>
                            Earn additional income and real rewards for your hard work
                        </li>
                        <li>
                            Enjoy greater flexibility: decide when, how and with whom you work
                        </li>
                        <li>
                            Sell exclusive, high quality products to customers
                            <b>*</b>
                        </li>
                        <img class="img3" src="@/assets/528763.jpg">
                        <img class="img4" src="@/assets/youtube-icon.png">
                    </ul>
                    &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;                 
                    <h2>Why Amway?</h2>
                    <ul class="message-body1">
                        <li>
                            Amway has paid out over $61,3bn in bonuses and incentives to 
                            <p>Amway Business Owners since 1959</p>       
                        </li>
                        <li>
                            A 100% satisfaction guarantee on almost all products,
                            <p>Amway returns your money no questions asked*</p> 
                        </li>
                    </ul>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <small class="small">* to learn more </small>
                    <a href="/en/disclaimers" class="baglantı" style="font-size:11px;"><u>click here</u></a>
                    <div id="register">
                        <button v-on:click="null" style="color: #fff; background-color: #0bb41c;width:170px; height:40px;margin-top: 20px; font-size: 15px;">Register now!</button>
                    </div>
                </div>
                <div v-if="activetab === 2" class="tabcontent2">
                    <h2>Enjoy high performance products </h2>
                    <ul class="message-body2">
                        <li>
                            We care about the details - quality ingredients and manufacturing
                        </li>
                        <li>
                            We invest in innovations - excellent product performance
                        </li>
                        <li>
                            We maintain a strong philosophy of giving back to the community 
                            <p>and contributing to a sustainable environment</p>
                        </li>
                        <img class="img5" src="@/assets/460610.png">
                    </ul>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h2>Did you know?</h2>
                    <ul class="message-body2">
                        <li>
                            NUTRIWAY™ is the world''s No. 1 selling vitamins and dietary 
                            <p>supplements brand*</p>
                        </li>
                        <li>
                            ARTISTRY™ is among the top five, largest selling,premium
                            <p>skincare brands*</p>
                        </li>
                        <li>
                            More than 900 scientists, engineers and technical professionals
                            <p> in 75 research labs worldwide are working on Amway products</p>
                            <p>development</p>
                        </li>
                        <li>
                            Amway R&D proffessionals have been awarded more than 900 
                            <p>patents</p>
                        </li>
                        <li>
                            A 100% satisfaction guarantee on almost all products, Amway
                            <p>returns your money no questions asked *</p>
                        </li>
                    </ul>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <small class="small">* to learn more </small>
                    <a href="/en/disclaimers" class="baglantı" style="font-size:11px;"><u>click here</u></a>
                    <div id="register">
                        <button v-on:click="null" style="color: #fff; background-color: #0bb41c;width:170px; height:40px;margin-top: 20px; font-size: 15px;">Register now!</button>
                    </div>
                </div>
            </div>
        </div>


        <!--tablo-->
       <table class="tablo table striped" style="width:999px; margin-left:160px; margin-top:90px;">
            <tbody>
                <tr class="row_1">
                    <th class="cell_1">
                        <div class="content_area" style="margin-left:-390px; font-size: 25px; color: #002f5f;">
                            <h2 style="font-size: 25px;">Compare opportunities</h2>
                        </div>
                    </th>
                    <th class="cell_2"  style="margin-left:-90px; width:100; background: #eceef2;color: #494949;">Member Plus</th>
                    <th class="cell_1 header_cell"  style="text-align:left; background: #eceef2; color: #494949;">Customer</th>
                </tr>
            </tbody>
            <tbody style="border: 1px solid #eff0f0;">
                <tr class="row_2" style="font-size: 12px;font-family: Arial,Helvetica,Garuda,sans-serif;color: #494949;">
                    <td class="cell_1" style="text-align:left; ">Buy products at retail price from your
                    Amway Business Owner</td>
                    
                    <td class="cell_2 first_row text_c"></td>
                    <td class="cell_1 text_c"><img class="img1" src="@/assets/yes.png" style="margin-left:-65px;" ></td>
                </tr>
                <tr class="row_1" style="border: 1px solid #eff0f0; font-size: 12px;font-family: Arial,Helvetica,Garuda,sans-serif;">
                    <td class="cell_1"  style="text-align:left;">Receive personal product help and advice from your Amway Business Owner</td>
                    <td class="cell_2 first_row text_c"></td>
                    <td class="cell_1 text_c"><img class="img1" src="@/assets/yes.png" style="margin-left:-65px;" ></td>
                </tr>
                <tr class="row_2" style="border: 1px solid #eff0f0;font-size: 12px;font-family: Arial,Helvetica,Garuda,sans-serif;">
                    <td class="cell_1"  style="text-align:left;">Access to high performance products in the online catalogue</td>
                    <td class="cell_2 first_row text_c"><img class="img1" src="@/assets/yes.png"  style="margin-left:-20px;"></td>
                    <td class="cell_1 text_c"><img class="img1" src="@/assets/yes.png" style="margin-left:-65px;" ></td>
                </tr>
                <tr class="row_1"  style="text-align:left; font-size: 12px;font-family: Arial,Helvetica,Garuda,sans-serif;">
                    <td class="cell_1">Save time using online shopping lists</td>
                    <td class="cell_2 first_row text_c"><img class="img1" src="@/assets/yes.png" style="margin-left:45px;" ></td>
                    <td class="cell_1 text_c"><img class="img1" src="@/assets/yes.png" style="margin-left:18px;"></td>
                </tr>
                <tr class="row_2"  style="text-align:left;font-size: 12px;font-family: Arial,Helvetica,Garuda,sans-serif;">
                    <td class="cell_1">Store your shopping cart content between visits</td>
                    <td class="cell_2 first_row text_c"><img class="img1" src="@/assets/yes.png" style="margin-left:45px;" ></td>
                    <td class="cell_1 text_c"><img class="img1" src="@/assets/yes.png" style="margin-left:18px;"></td>
                </tr>
                <tr class="row_1"  style="text-align:left;font-size: 12px;font-family: Arial,Helvetica,Garuda,sans-serif;">
                    <td class="cell_1">Buy products at wholesale price directly from Amway</td>
                    <td class="cell_2 first_row text_c"><img class="img1" src="@/assets/yes.png" style="margin-left:45px;"></td>
                    <td class="cell_1 text_c"><img class="img1" src="@/assets/yes.png" style="margin-left:18px;"></td>
                </tr>
                <tr class="row_2"  style="text-align:left;font-size: 12px;font-family: Arial,Helvetica,Garuda,sans-serif;">
                    <td class="cell_1">Earn additional income selling products at retail price*</td>
                    <td class="cell_2 first_row text_c"><img class="img1" src="@/assets/yes.png" style="margin-left:45px;"></td>
                    <td class="cell_1 text_c"></td>
                </tr>
                <tr class="row_1"  style="text-align:left;font-size: 12px;font-family: Arial,Helvetica,Garuda,sans-serif;">
                    <td class="cell_1">Grow your business by introducing others to become Amway Business Owners</td>
                    <td class="cell_2 first_row text_c"><img class="img1" src="@/assets/yes.png" style="margin-left:45px;"></td>
                    <td class="cell_1 text_c"></td>
                </tr>
                <tr class="row_2"  style="text-align:left;font-size: 12px;font-family: Arial,Helvetica,Garuda,sans-serif;">
                    <td class="cell_1">Earn additional bonuses and incentives from your sales and the sales of those you introduce to Amway</td>
                    <td class="cell_2 first_row text_c"><img class="img1" src="@/assets/yes.png" style="margin-left:45px;"></td>
                    <td class="cell_1 text_c"></td>
                </tr>
                <tr class="row_1" style="text-align:left;font-size: 12px;font-family: Arial,Helvetica,Garuda,sans-serif;">
                    <td class="cell_1">Receive free training from the Amway Academy</td>
                    <td class="cell_2 first_row text_c"><img class="img1" src="@/assets/yes.png" style="margin-left:45px;"></td>
                    <td class="cell_1 text_c"></td>
                </tr>
                <tr class="row_2"  style="text-align:left;font-size: 12px;font-family: Arial,Helvetica,Garuda,sans-serif;">
                    <td class="cell_1">Free business tools help you always stay on track</td>
                    <td class="cell_2 first_row text_c"><img class="img1" src="@/assets/yes.png" style="margin-left:45px;"></td>
                    <td class="cell_1 text_c"></td>
                </tr>
                <tr class="row_1"  style="text-align:left; font-size: 12px;font-family: Arial,Helvetica,Garuda,sans-serif;">
                    <td class="cell_1">Create your personal Amway business webpage</td>
                    <td class="cell_2 first_row text_c"><img class="img1" src="@/assets/yes.png" style="margin-left:45px;"></td>
                    <td class="cell_1 text_c"></td>
                </tr>
                <tr class="row_2"  style="text-align:left; font-size: 12px;font-family: Arial,Helvetica,Garuda,sans-serif;">
                    <td class="cell_1">Access Amagram Online Magazine</td>
                    <td class="cell_2 first_row text_c"><img class="img1" src="@/assets/yes.png" style="margin-left:45px;"></td>
                    <td class="cell_1 text_c"></td>
                </tr>
                <tr class="row_1"  style="text-align:left;font-size: 12px;font-family: Arial,Helvetica,Garuda,sans-serif;">
                    <td class="cell_1">
                        <p>
                            <small>
                                * to learn more 
                                <a href="#">click here</a>
                            </small>
                            
                        </p>
                    </td>
                    <td class="cell_2 first_row text_c">
                        <div>
                            <b-button  style="border:none; margin-left:-30px;">Register now!</b-button>
                        </div>
                    </td>
                    <td class="cell_1 text_c">                   
                        <div>
                            <b-button  style="border:none; margin-left:-30px;">Register now!</b-button>
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
 
    el: '#tabs',
    return: { activetab: 1 },

}
</script>

<style  scoped>
/* Import Google Font */
@import url(https://fonts.googleapis.com/css?family=Nunito+Sans);

/* STYLING */
.container {  
    max-width: 1300px; 
    min-width: 420px;
    margin: 40px auto;
    font-family: "Nunito Sans", Arial, Helvetica, sans-serif;
    color: #888;
}

/* Style the tabs */
.tabs {
    overflow: hidden;
    margin-left: 20px;
    margin-bottom: -2px;
    color: #069;
    font-size:25px;
    
}

.tabs ul {
    list-style-type: none;
    margin-left: 20px;
}

.tabs a{
    float: left;
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 0.2s;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #f1f1f1;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
    width: 520px;
    height: 80px;
    margin-top: 10px;
   
    
}
.tabs a:last-child { 
    border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tabs a:hover {
    background-color:  #92cae0;
    color: #fff;
    padding: 10px;
}

/* Styling for active tab */
.tabs a.active {
    background-color: #fff;
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default;
    
}

/* Style the tab content */
.tabcontent {
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 3px 3px 6px #e1e1e1;
    height: 500px;
    color: #002f5f;
}
.message-body1{
    font-family: Arial,Helvetica,Garuda,sans-serif;
    color: #494949;
    font-size: 15px;
}

.content2 h2{
    font-size: 25px;
}
.small{
    margin-left: -30px;
    font-size: 11px;
}

.img3{
    margin-right: 100px;
    float: right;
    margin-top: -80px;
}

.img4{
    margin-right: -250px;
    float: right;
    margin-top: 60px;
    width: 50px;
}

.message-body2{
    font-family: Arial,Helvetica,Garuda,sans-serif;
    color: #494949;
    font-size: 15px;
}

.tabcontent2 {
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 3px 3px 6px #e1e1e1;
    height: 700px;
    color: #002f5f;
}
.img5{
    margin-right: 100px;
    float: right;
    margin-top: -40px;
}

/*home>register kısmı*/
.breadcrumb ul{
    list-style-type: none;
    margin: 0;
    padding-top: 0;
    color: #9a9a9a;
    font-size: 11px;
    text-decoration: none;/*altını çizme engellendi*/
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
    font-size: 30px;
}

.box_space{
    padding: 0 10px;
}

.box_space .content_area{
    line-height: 17px;
}

.box_space p{
    padding-bottom: 10px;
    line-height: 18px;
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

/*Compare Butonu*/
.content_area .button{
    font-size:13px; 
    background-color: #e9ecef; 
    display: inline-block; 
    line-height: 30px; 
 
   
    margin-top: 10px;  
    margin-left:-100px;
    font-family: Arial,Helvetica,Garuda,sans-serif; 
    color: #566678;
}


</style>