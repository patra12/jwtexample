<template>
  <div class="row py-5 my-5">
    <div class="col-sm-4" v-for="(item,index) in products" :key="index">
      <div class="m-2 card text-center">
        <nuxt-link class="card-body nutrlize-style" :to="'/'+item.id">
          <div class="pb-0">
            <img :src="getImg(item.image)" class="card-img-top" alt />
            <h3 class="card-title">{{item.product_name }}</h3>
            <p class="card-text text-left">{{smllstr(item.meta_title)}}</p>
          </div>
        </nuxt-link>
        <nuxt-link :to="'/'+item.id" class="avona-btn">Read More</nuxt-link>
        <!--End of card-body-->
      </div>

      <!-- End of card-->
    </div>
    <!--End of col-->
  </div>
  <!--End of row-->
</template>

<script>
import "~/assets/css/style.css";
export default {
  data() {
    return {
      products: []
    };
  },
  methods: {
    //use methods to show images dynamically
    getImg: function(pic) {
      let img_path = require("../uploads/product/" + pic);
      return img_path;
    },
    smllstr(str) {
      var raw = str.substr(0, 100);
      return raw + " ...";
    }
  },
  mounted() {
    this.$axios({
      url: "/productlist",
      methods: "get"
    })
      .then(res => {
        this.products = res.data;
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }
};
</script>

<style scoped>
.avona-btn {
  background: #f05a25;
  color: #fff !important;
  padding: 7px;
  font-size: 17px;
  font-weight: 500;
}
.nutrlize-style {
  color: black;
  text-decoration: none;
}
</style>