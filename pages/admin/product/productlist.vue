<template>
  <v-container class="bv-example-row">
    <v-row class="border bg">
      <h4 class="font-weight-light">Product List</h4>
      <nuxt-link to="./addProduct">
        <v-icon class="right" color="white darken-1" title="Add page"
          >mdi-plus-box</v-icon
        >
      </nuxt-link>
    </v-row>
    <v-row class="bg-content text-center">
      <div class="row w-100">
        <v-col class="border">
          <b>#</b>
        </v-col>
        <v-col class="border">
          <b>Name</b>
        </v-col>
        <v-col class="border">
          <b>Alias</b>
        </v-col>
        <v-col class="border">
          <b>Status</b>
        </v-col>
        <v-col class="border">
          <b>Action</b>
        </v-col>
      </div>
      /*<div class="row w-100" v-for="(product, index) in products" :key="index">
        <v-col class="border font-weight-light">{{ index + 1 }}</v-col>
        <v-col class="border font-weight-light">{{ product.name }}</v-col>
        <v-col class="border font-weight-light">{{ product.alias }}</v-col>
        <v-col class="border font-weight-light">{{ product.status }}</v-col>
        <v-col class="border">
          <nuxt-link to="./editProduct">
            <v-icon title="Edit" color="purple darken-1">mdi-pencil</v-icon>
          </nuxt-link>
          <nuxt-link to="#">
            <v-icon color="red darken-2" title="Delete">mdi-close</v-icon>
          </nuxt-link>
        </v-col>
      </div>*/
	      <div class="row w-100">
        <v-col class="border font-weight-light">1.</v-col>
        <v-col class="border font-weight-light">Alexa</v-col>
        <v-col class="border font-weight-light">alexa</v-col>
        <v-col class="border font-weight-light">active</v-col>
        <v-col class="border">
          <nuxt-link to="./editProduct">
            <v-icon title="Edit" color="purple darken-1">mdi-pencil</v-icon>
          </nuxt-link>
          <nuxt-link to="#">
            <v-icon color="red darken-2" title="Delete">mdi-close</v-icon>
          </nuxt-link>
        </v-col>
      </div>

      <div class="row w-100">
        <v-col class="border font-weight-light">2.</v-col>
        <v-col class="border font-weight-light">Ibrahim</v-col>
        <v-col class="border font-weight-light">ibrahim</v-col>
        <v-col class="border font-weight-light">active</v-col>
        <v-col class="border">
          <nuxt-link to="./editProduct">
            <v-icon title="Edit" color="purple darken-1">mdi-pencil</v-icon>
          </nuxt-link>
          <nuxt-link to="#">
            <v-icon color="red darken-2" title="Delete">mdi-close</v-icon>
          </nuxt-link>
        </v-col>
      </div>

      <div class="row w-100">
        <v-col class="border font-weight-light">3.</v-col>
        <v-col class="border font-weight-light">Maksud</v-col>
        <v-col class="border font-weight-light">maksud</v-col>
        <v-col class="border font-weight-light">active</v-col>
        <v-col class="border">
          <nuxt-link to="./editProduct">
            <v-icon title="Edit" color="purple darken-1">mdi-pencil</v-icon>
          </nuxt-link>
          <nuxt-link to="#">
            <v-icon color="red darken-2" title="Delete">mdi-close</v-icon>
          </nuxt-link>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  layout: "admin/defaultAdmin",

  data() {
    return {
      products: []
    };
  },
  created() {
    /*axios({
      method: "get",
      url: "http://localhost:3000/pages"
    })
      .then(res => {
        this.products = res.data;
      })
      .catch(function(error) {
        console.log(error);
      });*/
    axios;
  }
};
</script>

<style scoped>
/* repeat */
h4 {
  padding: 12px 35px;
  margin-bottom: 0px;
}
.bg {
  background-color: #60bb23;
  position: relative;
  border-top-left-radius: 5px;
  color: white;
  border-top-right-radius: 5px;
}
.bg-content {
  background: white;
}

.right {
  position: absolute;
  right: 35px;
  top: 10px;
  font-size: 33px;
}
/* non */
.border.font-weight-light {
  font-size: 13px;
  font-weight: bold;
}
</style>
