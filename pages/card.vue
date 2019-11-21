<template>
  <div class="row py-5 my-5">
    <div class="col-sm-4" v-for="(item,index) in products" :key="index">
      <div class="m-2 card text-center">
        <div class="card-body pb-0">
          <img :src="getImg(item.image)" class="card-img-top" alt />
          <h3 class="card-title">{{item.product_name }}</h3>
          <p class="card-text text-left">{{smllstr(item.meta_title)}}</p>
        </div>
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
import axios from "axios";
export default {
  data() {
    return {
      products: []
    };
  },
  methods: {
    //use methods to show images dynamically
    getImg: function(pic) {
      return require("../uploads/product/" + pic);
    },
    smllstr(str) {
      var raw = str.substr(0, 100);
      return raw + " ...";
    }
  },
  mounted() {
    axios({
      url: "http://localhost:3000/productlist",
      methods: "get"
    }).then(res => {
      this.products = res.data;
      console.log(res.data);
    });
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
  height: 100%;
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
}
</style>