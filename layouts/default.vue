<template>
  <v-app>
    <Header />

    <div>
      <nuxt />
    </div>

    <Footer />
  </v-app>
</template>

<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Header from "./front/header";
import Footer from "./front/footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

