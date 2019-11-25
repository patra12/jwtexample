<template>
  <footer>
    <nav>
      <section class="top-nav caearfix">
        <div class="container border-btm">
          <div class="row py-3">
            <!--Start Top nav bar -->
            <div class="col-3 text-light p-0">
              <section class="top-nav">
                <nuxt-link to="/">
                  <img
                    class="img-fluid"
                    src="@/assets/images/avona-footer-logo.png"
                    alt=" Image of site logo "
                    width="100"
                  />
                </nuxt-link>
              </section>
            </div>
            <div class="col side-nav p-0">
              <nav class="nav flex-row justify-content-end bottom-links">
                <nuxt-link v-for="(item,index) in products" :key="index" :to="'/'+item.id" class="avona-btn nav-link">{{item.product_name}}</nuxt-link>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section class="copyrights">
        <div class="container">
          <div class="row py-2">
            <p class="my-1 text-center mx-auto">{{settings}}</p>
          </div>
        </div>
      </section>
      <!--End Top nav bar -->
    </nav>
  </footer>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      settings:'',
    };
  },
  mounted() {
    axios({
      url: "/productlist",
      methods: "get"
    }).then(res => {
      this.products = res.data;
      console.log(res.data);
    });

    axios({
      url: "/settingsData",
      methods: "get"
    }).then(res => {
      this.settings = res.data[0].copyrights;
      console.log(res.data);
    });
  }
}
</script>
<style scoped>
.top-nav {
  background: #000;
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
.ico-text .fa-phone,
.ico-text .fa-envelope {
  padding: 5px;
  border-width: 5px;
  border-style: double;
  border-radius: 50%;
  color: #f05a25;
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
</style>