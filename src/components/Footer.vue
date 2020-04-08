<template>
  <div class="icon-bar" >
       <div class="mb-auto footer-clean" style="margin-top: 30px;">
        <div>
          <b-button v-b-toggle.collapse-1 variant="primary" style="background-color:#e9ecef; color:black;">Footer</b-button>
            <b-collapse id="collapse-1" class="mt-2" style="background-color:#e9ecef; height:100; width:1500px;">
              <b-card style="background-color:#e9ecef; "> 
                <div class="col-sm-4 col-md-3 item" >
                  <h3 style="background-color:#e9ecef; margin-top:-10px;">Secure Shopping</h3>
                    <ul>
                      <router-link to="/privacypolicy"><b-button v-b-toggle.collapse-1-inner size="sm" style=" background-color:#e9ecef; color: #2c3e50; border:none; margin-left:77px;">Privacy Policy</b-button></router-link>
                      <br>
                      <router-link to="/TermsofUse"><b-button v-b-toggle.collapse-1-inner size="sm" style="background-color:#e9ecef; color: #2c3e50; border:none; margin-top:-90px; margin-left:77px;">Terms of use</b-button></router-link>
                    </ul>
                </div>
                <div class="col-sm-4 col-md-3 item" style="background-color:#e9ecef; margin-left: 380px; margin-top:-180px;">
                  <h3>Corporate Info</h3>
                  <ul>
                    <router-link to="/contactus"><b-button v-b-toggle.collapse-1-inner size="sm" style="background-color:#e9ecef; color: #2c3e50; border:none; margin-top:-25px;margin-left:90px;">Contact Us</b-button></router-link>
                    <br>
                    <b-button v-b-toggle.collapse-1-inner size="sm" style="background-color:#e9ecef; color: #2c3e50; border:none; margin-top:-50px; margin-left:30px;">Amway NEWSROOM</b-button>
                    <br>
                    <b-button v-b-toggle.collapse-1-inner size="sm" style="background-color:#e9ecef; color: #2c3e50; border:none; margin-top:0px; margin-left:95px; ">Find an Amway Business Owner</b-button>
                  </ul>
                </div>
                <div class="col-sm-4 col-md-3 item" style="background-color:#e9ecef; margin-left: 600px; margin-top:-155px;">
                  <h3></h3>
                    <ul>
                      <b-button v-b-toggle.collapse-1-inner size="sm" style="background-color:#e9ecef; color: #2c3e50; border:none;"></b-button>
                      <br>
                      <b-button v-b-toggle.collapse-1-inner size="sm" style="background-color:#e9ecef; color: #2c3e50; border:none;"></b-button>
                      <br>
                      <b-button v-b-toggle.collapse-1-inner size="sm" style="background-color:#e9ecef; color: #2c3e50; border:none;"></b-button>
                    </ul>
                </div>
                <div class="col-sm-4 col-md-3 item" style="background-color:#e9ecef; margin-left: 900px; margin-top:-90px;">
                  <h3>Follow us on</h3><a class="text-center justify-content-center align-items-lg-center" href="#">
                    <img src="@/assets/faceicon.png" style=" border-radius: 50%; border: 1px solid #ccc;font-size: 24px;width: 30px; margin-left:-90px;height: 30px;line-height: 40px;"></a><a href="#">
                    <img src="@/assets/youtube-icon.png" style=" border-radius: 50%; border: 1px solid #ccc;font-size: 24px;width: 30px;height: 30px; margin-top:-125px; line-height: 40px; margin-left:135px;"></a><a href="#">
                    <img src="@/assets/insta-icon.jpeg" style=" border-radius: 50%; border: 1px solid #ccc;font-size: 24px;width: 30px;height: 30px;line-height: 40px; margin-left:185px; margin-top:-245px;"></a>
                    <p class="copyright"><img src="@/assets/amway_footer.png" style="margin-top:-250px;"></p>   
                </div>
              </b-card>
            </b-collapse>
        </div>
      </div>
        
  </div>
        
         
         
        
</template>

<script>
export default {
  name: 'Footer',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon-bar {
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.icon-bar a {
  display: block;
  text-align: left;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 20px;
}

.footer-clean {
  padding: 50px 0;

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
</style>
