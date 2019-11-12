<template>
  <div>
    <Body />
  </div>
</template>

<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import Logo from "~/components/Logo.vue";
// import VuetifyLogo from "~/components/VuetifyLogo.vue";
import Body from "./front/index";

export default {
  components: {
    // Logo,
    // VuetifyLogo
    Body
  }
};
</script>
<style scoped>
.card-body {
  position: relative;
}

.card {
  -webkit-box-shadow: 0px 0px 33px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 33px -12px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 33px -12px rgba(0, 0, 0, 0.75);
  position: relative;
  overflow: hidden;
}
.btn {
  background-color: coral;
  border: none;
}
.card:hover .card-img-top {
  size: 50%;
}
.avona-btn {
  background: #f05a25;
  color: #fff;
  padding: 7px;
  font-size: 17px;
  font-weight: 500;
}
.card-body img {
  transition: transform 0.5s ease;
}
.card-body:hover img {
  transform: scale(1.1) rotate(50deg);
}
.card-body h3 {
  text-transform: uppercase;
  color: #000;
}
.card-body p {
  color: rgb(131, 122, 122);
}
.v-content {
  background-color: #fff !important;
}
.theme--dark.v-application {
  background: #e60000;
}

fw h3,
h4 {
  font-weight: bold;
}
.btnx {
  background-color: coral;
}
.banner-sec {
  background: url(../assets/images/top-banner.jpg);
  background-size: 100%;
  padding: 50px 0;
}
.banner-sec h2 {
  color: #fff;
}
.banner-sec p {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}
</style>
