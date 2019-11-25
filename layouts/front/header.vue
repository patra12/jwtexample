<template>
  <header>
    <section class="top-nav caearfix">
      <div class="container p-0">
        <div class="row">
          <div class="col-md-6 p-0">
            <!--Start Top nav bar -->
            <div class="col text-light p-0">
              <section class="top-nav p-0">
                <nuxt-link to="/">
                  <img
                    class="img-fluid main-logo"
                    src="@/assets/images/avona-logo-tpo.png"
                    alt=" Image of site logo "
                  />
                </nuxt-link>
              </section>
            </div>
            <!--Logo end -->
          </div>
          <div class="col-md-6 p-0">
            <div class="row top-block" v-for="(item,index) in static_contact_data" :key="index">
              <p class="ico-text">
                &nbsp;
                <v-icon class="text-light">mdi-phone</v-icon>

                <a href="tel:3177594940">&nbsp;{{item.phone}}</a>
              </p>
              <p class="ico-text">
                &nbsp;
                <v-icon class="text-light">mdi-phone</v-icon>&nbsp; Tel:
                <a href="#">&nbsp;{{item.contact_telephone}}</a>
              </p>
              <p class="ico-text">
                &nbsp;
                <v-icon class="text-light">mdi-email</v-icon>&nbsp;
                <a href="mailto:info@mail.com">&nbsp;{{item.contact_email}}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Top nav bar -->

    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <div class="container p-0">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          @click="showMenu()"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link class="nav-link mr-3" to="/">HOME</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link mr-3" to="/product">PRODUCTS</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link mr-3" to="/contact">CONTACT US</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      static_contact_data: [],
      display:0
    };
  },
  methods: {
    showMenu() {
      if(this.display == 0)
      {
        document.getElementById("collapsibleNavbar").style.display ="block";
        this.display = 1;
      }
      else{
         document.getElementById("collapsibleNavbar").style.display ="none";
         this.display = 0
      }
    }
  },
  created() {
    axios({
      method: "get",
      url: " /settingsData"
    }).then(res => {
      console.log(res.data);
      this.static_contact_data = res.data;
    });
  }
};
</script>
<style scoped>
section.top-nav {
  background: black;
}
.side-nav img {
  width: 12%;
  margin-right: 10px;
}
.side-nav h5 {
  color: white;
  display: inline-block;
}
.d {
  display: inline;
  width: 50%;
}
.btm-nav {
  background: #f05a25;
  padding: 0.4% 0%;
}
.btm-nav a {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: bold;
  padding: 0px;
}
.main-logo {
  padding: 20px 0;
  max-width: 250px;
}
.navbar-dark .navbar-nav .nav-link {
  color: rgb(240, 90, 37);
  font-size: 17px;
  font-weight: 600;
}
.ico-text {
  color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  padding: 0 10px;
}
.ico-text:last-child {
  padding-right: 0;
}
.ico-text:first-child {
  padding-left: 0;
}
.ico-text a {
  color: #fff;
  transition: 0.5s;
}
.ico-text a:hover {
  color: #f05a25;
  text-decoration: none;
}
.v-icon {
  padding: 5px;
  border-width: 5px;
  border-style: double;
  border-radius: 50%;
  color: #f05a25 !important;
  font-size: 15px;
}

.top-block {
  padding-top: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
}
.top-nav {
  background: #343a40;
}
.copyrights {
  background: #343a40;
}
.copyrights p {
  color: #fff;
}
.bottom-links a {
  color: #fff;
}
.bottom-links a:hover {
  color: #f05a25;
}
.border-btm {
  border-bottom: 1px solid #666666;
}
.nav-link:hover,
.nav-link:focus {
  color: white !important;
}
</style>