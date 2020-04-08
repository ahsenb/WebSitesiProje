<template>
  <div class="header">
    <header class="header" style="padding-bottom: 40px; padding-top:-130px;height:130px; width:1020px; margin-left:150px;">
      <router-link to="/"><img src="@/assets/amway.png" style="margin-bottom: -15px; margin-left:-290px; margin-top:-60px; width:270px;height:94px; "></router-link>
      <nav class="navbar navbar-light navbar-expand-md d-inline-block float-right" style="margin-right: 20px;">
        <div class="container-fluid"><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1">
          <span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1" style="margin-top:-85px;">
              <ul class="nav navbar-nav" >
                <li class="nav-item" role="presentation" style="list-style-type:none;"></li>
                 <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')" style=" background-color:white; color: #007bff; margin-left:10px; margin-top:-7px; border:none;font-size: 12px; font-family: Arial,Helvetica,Garuda,sans-serif;">Login</b-button>
                  <b-modal id="bv-modal-example" hide-footer  style="width: 200px; height:56px;" >
                  <h2 style="font-size:25px; font-family: Arial,Helvetica,Garuda,sans-serif; color: #002f5f;">
                    Sign in to Amway Online
                  </h2>
                  <div class="d-block text-center" style=" margin-bottom: 20px; width: 500px; height:290px; padding: 30px 24px 0;">
                  <strong style="color: #494949; margin-left:-455px; font-size:12px;">Login:<span style="color: red">*</span> </strong><br>
                    <input type="text"  id="create-post" v-model="text" placeholder="Create a post" style="background: #fff;border: 1px solid #ccc; height: 20px;font-size: 12px; width: 200px; margin-left:-250px; margin-bottom: 20px">
                      <i class="icon help_2 tooltip_trigger theme_sponsoring" title="" alt="" style="position: relative;"><div class="tooltip theme_sponsoring" style="display: none;">Your login details are the ones you set up for logging into Amway Online during your online registration or creating the Amway Online account.</div></i>
                      <select class="select_field" id="login_country_code" name="country_code" tabindex="32" style="height:22px;">
                        <option id="login_country_code_bg" value="bg">BG</option>
                        <option id="login_country_code_cz" value="cz">CZ</option>
                        <option id="login_country_code_ee" value="ee">EE</option>
                        <option id="login_country_code_hr" value="hr">HR</option>
                        <option id="login_country_code_hu" value="hu">HU</option>
                        <option id="login_country_code_lt" value="lt">LT</option>
                        <option id="login_country_code_lv" value="lv">LV</option>
                        <option id="login_country_code_pl" value="pl">PL</option>
                        <option id="login_country_code_ro" value="ro">RO</option>
                        <option id="login_country_code_si" value="si">SI</option>
                        <option id="login_country_code_sk" value="sk">SK</option>
                        <option id="login_country_code_tr" selected="" value="tr">TR</option>
                        <option id="login_country_code_ua" value="ua">UA</option></select><br>
                  <strong style="color: #494949; margin-left:-425px; font-size:12px;">Password:<span style="color: red">*</span> </strong><br>
                  <input v-model="pass" placeholder="Login password..." style="background: #fff;border: 1px solid #ccc;height: 20px;font-size: 12px; margin-left:-285px; width: 200px;"><br>
                  <button @click="login" type="button" style="margin-top: 20px; margin-bottom:20px; margin-left:-420px; border-radius:2px; height:30px; width:60px; font-size:12px; background-color: #8cb11b;color: #fff; border-color: #9dc71e #7a9b18 #7a9b18 #9dc71e;" class="btn btn-success" >Log in</button><br>
                  <a href="" style="font-size:12px; color: #069; margin-left:-165px;">Forgotten your Login, Password or PIN? Click here for help.</a><br><br>
                  <span style="margin-top:-20px; margin-left:-35px; font-size:12px; ">If you do not yet have login details for Amway Online, please Click <a href="register"> here </a> to continue.</span>   
                </div>
                <div style="background: #e2edf4; font-size:14px; padding-top: 20px; margin-top: 20px; margin-left:-16px; padding-bottom: 20px; width:495px;"><h5 style="margin-top: 20px; margin-left: 20px;">Want to start your journey with Amway?</h5><br>
                <span><a style="margin-left: 20px; margin-bottom: 20px; font-size:15px; color:#069;" href="../register/index.html">Click here </a> to register.</span>
              </div>
              <p class="error" v-if="error">{{error}}</p>
              <div class="posts-container">
                <div class="post"
                v-for="(post, index) in posts"
                v-bind:item="posts"
                v-bind:index="index"
                v-bind:key="post._id"
                >
                {{ `${posts.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
                </div>
              </div>
              </b-modal>
                <a style="color: #9a9a9a; margin-left:10px; margin-top:5px; height:5px;">|</a>
                <li class="nav-item" role="presentation" style="list-style-type:none;"><router-link to="/register" ><a class="nav-link text-primary"  href="../register/index.html" style="font-size: 12px;font-family: Arial,Helvetica,Garuda,sans-serif;" >Register
                <a style="color: #9a9a9a; margin-left:10px;">|</a></a></router-link></li>
                <select v-model="selected" class="dropdown" style="border:none; font-size:12px; width:70px; height:20px; margin-top:9px; color: #069;">
                  <option style="background-color: #e9ecef;  width:100px;" :value="null">EN</option>
                  <option style="background-color: #e9ecef;  width:100px; ">English</option>
                  <option style="background-color: #e9ecef; width:100px;">Türkçe</option>
                </select>
                <li class="nav-item dropdown d-lg-flex" ><router-link to="/shopping_cart"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#" style="background-color: #566678;color: rgba(255,255,255,0.9);"><i class="fa fa-shopping-cart" ></i>&nbsp;Cart (0) | 0.00 TL&nbsp;</a></router-link >
                <div class="dropdown-menu dropdown-menu-right text-left" role="menu" style="margin-right: 0px;background-color: #566678;padding-bottom: 1px;margin-top: -1px;"><a class="dropdown-item disabled" role="presentation" href="#" style="color: rgb(255,255,255);">CART GRAND TOTAL&nbsp; 0 items</a><a class="dropdown-item" role="presentation" href="#" style="background-color: #445365;padding-bottom: 7px;color: rgb(255,255,255);padding-top: 8px;">Retail Price:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0.00 TL</a>
                  <div style="background-color: #445365;margin-top: 0px;padding-top: 10px;padding-bottom: 18px;"><a class="btn btn-success btn-sm text-center shadow d-flex mx-auto justify-content-lg-center" type="submit" href="../cart/index.html" style="width: 85px;height: 31px;font-size: 14px;margin-top: 0px;margin-bottom: 0px;padding-bottom: 8px;">View Cart</a></div>
                </div>
                </li>
              </ul>
            </div>
          </div>
           <div class="searchBox" style="margin-top:-30px;">
            <input class="searchInput" type="text" name="" placeholder="Search">
            <button class="searchButton" href="#">
            <i class="material-icons">
              search
            </i>
            </button>
          </div>
      </nav>
      <!--Dropdown menü-->
      <div class="d-lg-flex justify-content-lg-end" style="margin-top: 5px; margin-left: -180px; width: 1216px;     ">
        <div class="row">
          <div class="col d-flex justify-content-end align-content-end align-self-end justify-content-lg-end align-items-lg-end" style="width: 1000px; margin-left:10px;  ">
            <div  >
              <b-dropdown text="Nutrition" variant="nutrition" class="m-2" style=" border:none;  color: #566678; position: static;  left: 50%; top: 20%;transform: translateX(105%);z-index: 999; " >
              <b-dropdown-item style="background-color: #fff; width:1000px; margin-left:-400px;"  >
                <div class="row" style="width:970px; height:300px;">
                  <div class="col-md-4">
                  <h1 class="text-success" style="font-size:14px; color: #3B8A2E; font-family: Arial,Helvetica,Garuda,sans-serif;">Shop by Category</h1>
                  <hr style="background-color: #fff; background-color: #3B8A2E ;font-size:14px; width:200px; margin-left:-10px;">
                  <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;">Accessories(3)<br></a>
                  <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;">Active Lifestyle(8)<br></a>
                  <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;"> Targeted Food Supplements(20)<br></a>
                  <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;">Weight Management(16)</a> 
                  <hr style="background-color: #3B8A2E ; width:950px; margin-left:-10px; margin-top:60px;">
                  <div style="background-color:#ccc; width:985px; height:103px; margin-top:-15px; margin-left:-10px; ">
                    <router-link to="/Nutrition"><b-button style="margin-top:30px; background-color:  #3B8A2E;">View Nutrition Homepage</b-button></router-link >
                  </div>
                </div>
                <div class="col-md-4">
                  <h1 class="text-success" style="font-size:14px; font-family: Arial,Helvetica,Garuda,sans-serif; margin-left:-50px;">Shop by Brand</h1>
                  <hr style="background-color: #fff; background-color: #3B8A2E ;font-size:14px; width:200px; margin-left:-50px;">
                  <a href="#" style="margin-left:-50px; font-size:14px;">bodykey by NUTRIWAY™<br></a>
                  <a href="#" style="margin-left:-50px; font-size:14px;">NUTRIWAY™<br></a>
                  <a href="#" style="margin-left:-50px; font-size:14px;">XS™<br></a>
                </div>
                  <div class="col-md-4">
                    <h1 class="text-success" style="font-size:14px; font-family: Arial,Helvetica,Garuda,sans-serif; margin-left:-80px;">Featured</h1>
                    <hr style="background-color: #fff; background-color: #3B8A2E ;font-size:14px; width:200px; margin-left:-80px;">
                    <a href="#" style="margin-left:-80px; font-size:14px;">Top 30<br></a>
                    <a href="#" style="margin-left:-80px; font-size:14px;">Temporarily not available<br></a>
                  </div>
                </div>
              </b-dropdown-item>
              </b-dropdown>
            <b-dropdown text="Beauty and Grooming" variant="Beauty and Grooming" class="m-3" style="position: static; left: 50%; top: 20%;transform: translateX(40%);z-index: 999; ">
            <b-dropdown-item style="background-color: #fff; width:1000px;  margin-left:-500px;" >
              <div class="row" style="width:785px; height:350px;">
                <div class="col-md-4">
                  <h1 class="text-danger" style="font-size:14px; color:  #C31919; font-family: Arial,Helvetica,Garuda,sans-serif;">Shop by Category</h1>
                  <hr style="background-color: #fff; background-color:  #C31919; font-size:14px; width:200px; margin-left:-10px;">
                  <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;">Skincare(57)<br></a>
                  <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;">Make-up(52)<br></a>
                  <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;">Accessories(7)<br></a>
                  <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;">Hair Care(15)<br></a>
                  <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;">Bath and Body(16)<br></a>
                  <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;">Fragnances(7)<br></a>
                  <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;">Man's Grooming(9)</a><br>
                  <hr style="background-color:  #C31919; width:950px; margin-left:-10px; margin-top:60px;">
                  <div style="background-color:#ccc; width:985px; height:103px; margin-top:-15px; margin-left:-10px; ">
                    <router-link to="/Beauty"><b-button style="margin-top:30px; background-color:  #C31919;">View Beauty and Grooming Homepage</b-button></router-link>
                  </div>
                </div>
                  <div class="col-md-4">
                    <h1 class="text-danger" style="font-size:14px; font-family: Arial,Helvetica,Garuda,sans-serif; margin-left:-50px;">Shop by Brand</h1>
                    <hr style="background-color: #fff; background-color: #C31919; font-size:14px; width:200px; margin-left:-50px;">
                    <a href="#" style="margin-left:-50px; font-size:14px;">ARTISTRY Hydra-V™(10)<br></a>
                    <a href="#" style="margin-left:-50px; font-size:14px;">ARTISTRY Ideal Radiance™(1)<br></a>
                  </div>
                    <div class="col-md-4" style="margin-left:0px;">
                      <h1 class="text-danger" style="font-size:14px; font-family: Arial,Helvetica,Garuda,sans-serif; margin-left:-80px;">Featured</h1>
                      <hr style="background-color: #fff; background-color: #C31919; font-size:14px; width:200px; margin-left:-80px;">
                      <a href="#" style="margin-left:-80px; font-size:14px;">Top 30(8)<br></a>
                      <a href="#" style="margin-left:-80px; font-size:14px;">Temporarily not available(10)<br></a>
                </div>
              </div>
            </b-dropdown-item>
            </b-dropdown>
            <b-dropdown text="Home" variant="home" class="m-4" style="position: static; left: 50%; top: 20%;transform: translateX(50%);z-index: 999; " >
              <b-dropdown-item style="background-color: #fff; width:1000px;  margin-left:-700px;" >
              <div class="row" style="width:1000px; height:350px; ">
                <div class="col-md-4 margin-left:40px;">
                  <h1 class="text-info" style="font-size:14px; color:  #1E317E; font-family: Arial,Helvetica,Garuda,sans-serif;">Shop by Category</h1>
                  <hr style="background-color: #fff; background-color:  #1E317E; font-size:14px; width:200px; margin-left:-10px;">
                  <router-link to="/acc">
                  <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;">Accessories<br></a>
                  </router-link><a href="#" style="margin-left:0px;">Active Lifestyle<br></a>
                  <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;">Targeted Food Supplements<br></a>
                  <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;">Weight Management</a><br> 
                  <router-link to="/Home">
                  <hr style="background-color:  #1E317E; width:950px; margin-left:-10px; margin-top:60px;">
                  <div style="background-color:#ccc; width:985px; height:103px; margin-top:-15px; margin-left:-10px; ">
                  <b-button style="margin-top:30px; background-color: #1E317E;">View Home Homepage</b-button>
                  </div>
                  </router-link>
                </div>
                  <div class="col-md-4">
                    <h1 class="text-info" style="font-size:14px; color:  #1E317E; font-family: Arial,Helvetica,Garuda,sans-serif; margin-left:-60px;">Shop by Brand</h1>
                    <hr  style="background-color: #fff; background-color:  #1E317E;font-size:14px; width:200px; margin-left:-60px;">
                    <a href="#"  style="background-color: #fff;font-size:14px; width:200px; margin-left:-60px;">bodykey by NUTRIWAY™<br></a>
                    <a href="#"  style="background-color: #fff;font-size:14px; width:200px; margin-left:-60px;">NUTRIWAY™<br></a>
                    <a href="#"  style="background-color: #fff;font-size:14px; width:200px; margin-left:-60px;">XS™<br></a>
                  </div>
                    <div class="col-md-4">
                      <h1 class="text-info" style="font-size:14px; color:  #1E317E; font-family: Arial,Helvetica,Garuda,sans-serif; margin-left:-120px;">Featured</h1>
                      <hr style="background-color: #fff; background-color:  #1E317E;font-size:14px; width:200px; margin-left:-120px;">
                      <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:-120px;">Top 30<br></a>
                      <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:-120px;">Temporarily not available<br></a>
                  </div>
                </div>
              </b-dropdown-item>
            </b-dropdown>
            <b-dropdown text="More Products" variant="more_prdoucts" class="m-5" style=" position: static; left: 50%; top: 20%;transform: translateX(-24%);z-index: 999; " >
            <b-dropdown-item style="background-color: #fff; width:1000px;  margin-left:-800px;" >
              <div class="row" style="width:1000px; height:350px;">
                <div class="col-md-4">
                  <h1 class="text-secondary" style="font-size:14px; color:#749494; font-family: Arial,Helvetica,Garuda,sans-serif;">Shop by Category</h1>
                    <hr style="background-color: #fff; background-color:  #749494; font-size:14px; width:200px; margin-left:0px;">
                    <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;">Accessories<br></a>
                    <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;">Active Lifestyle<br></a>
                    <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;">Targeted Food Supplements<br></a>
                    <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:0px;">Weight Management</a><br>
                    <router-link to="/moreproducts">
                    <hr style="background-color:   #749494; width:950px; margin-left:-10px; margin-top:60px;">
                    <div style="background-color:#ccc; width:985px; height:103px; margin-top:-15px; margin-left:-10px; ">
                    <b-button style="margin-top:35px; background-color:  #749494; ">View More Product Homepage</b-button>
                    </div>
                    </router-link>
                  </div>
                    <div class="col-md-4">
                      <h1 class="text-secondary" style="font-size:14px; color:#749494; font-family: Arial,Helvetica,Garuda,sans-serif; margin-left:-60px;">Shop by Brand</h1>
                      <hr style="background-color: #fff; background-color:  #749494; font-size:14px; width:200px; margin-left:-60px;">
                      <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:-60px;">bodykey by NUTRIWAY™<br></a>
                      <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:-60px;">NUTRIWAY™<br></a>
                      <a href="#" style="background-color: #fff;font-size:14px; width:200px; margin-left:-60px;">XS™<br></a>
                </div>
              </div>
            </b-dropdown-item>
            </b-dropdown>
        </div>
          </div>
        </div>
              
            
          
      </div>
           
        </header>
        <div>
  


</div>
  </div>
        
         
         
        
</template>

<script>

import HeaderServer from '../HeaderServer';
import Uye from '../Uye'

export default {
  name: '.dropdown',
  data() {
    return {
      selected: null,
      posts: [],
      error:'',
      text: '',
      pass: '',
      uyeler: [],
      check: 0
      
    }
  },
   async created() {
      try{
        this.posts = await HeaderServer.getPosts();
        this.uyeler = await Uye.getPosts();
      }catch(err){
        this.error = err.message;
      }
    },
    methods:{
      async createPost(){
        await HeaderServer.insertPost(this.text);
        this.posts = await HeaderServer.getPosts();
      },

      async login (){
        for(let i = 0 ; i < this.uyeler.length ; i++){
          if(this.text == this.uyeler[i].kullanici_adi){
            if (this.pass == this.uyeler[i].sifre){
              alert("giris yapildi")
              this.check = 1
            }
          }
          
        }
        if(this.check != 1) {
          alert("Hatalı giriş")
        }
        this.check = 0
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m-2:hover{
      background-color: #3B8A2E ;
}
.m-3:hover{
   background-color: #C31919;
}
.m-4:hover{
    background-color: #1E317E;
}
.m-5:hover{
  background-color:#749494;
}
body {
    background-image: linear-gradient(to right , #cb2d3e , #ef473a);
}

.searchBox {
    position: absolute;
    margin-top: 15px;
    top: 50%;
    left: 50%;
    transform:  translate(-50%,50%);
    background: #2f3640;
    height: 40px;
    border-radius: 40px;
    padding: 10px;

}

.searchBox:hover > .searchInput {
    width: 240px;
    padding: 0 6px;
}

.searchBox:hover > .searchButton {
  background: white;
  color : #2f3640;
}

.searchButton {
    color: white;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #2f3640;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
}

.searchInput {
    border:none;
    background: none;
    outline:none;
    float:left;
    padding: 0;
    color: white;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;

}

@media screen and (max-width: 620px) {
.searchBox:hover > .searchInput {
    width: 150px;
    padding: 0 6px;
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


body {
  padding-top: 20px;
}


.nav-justified > li > a {
  border-radius: 0px;
}





.nav-justified > li > a {
  border-radius: 0px;
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

</style>
