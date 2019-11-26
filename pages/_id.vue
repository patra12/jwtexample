<template>
  <section class="productDetails">
    <div class="container pt-5 pb-0">
      <div class="card">
        <div class="row">
          <aside class="col-sm-6 border-right">
            <article class="gallery-wrap">
              <div class="img-big-wrap">
                <img :src="getImg(image)" alt />
              </div>
              <!-- slider-product.// -->
            </article>
            <!-- gallery-wrap .end// -->
          </aside>
          <aside class="col-sm-6">
            <article class="card-body p-5">
              <h1 class="price h1 text-themeColor text-center">{{product_name}}</h1>

              <p class="price-detail-wrap" v-html="product_description"></p>
              <h3 class="price h3 text-themeColor text-center">{{feature_benefitas}}</h3>
              <!-- price-detail-wrap .// -->
              <div v-html="feature_description"></div>
              <!-- item-property-hor .// -->
            </article>
            <!-- card-body.// -->
          </aside>
          <!-- col.// -->
        </div>
        <!-- row.// -->
      </div>
      <div class="d-flex w-25 mx-auto"></div>
    </div>

    <div class="footer-pdf">
      <nuxt-link :to="'/pdf/'+pid" target="_blank">
        Click
        <u>Here</u> to download flyer
      </nuxt-link>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      pid: "",
      product_name: "",
      product_alias: "",
      product_description: "",
      feature_benefitas: "",
      feature_description: "",
      price: "",
      image: "",
      meta_title: "",
      meta_keywords: "",
      meta_description: "",
      pdf_name: ""
    };
  },
  methods: {
    getImg: function(img) {
      let img_path = require("../uploads/product/" + img);
      return img_path;
    }
  },
  created() {
    axios({
      url: " /editproduct/" + this.$route.params.id,
      method: "get"
    })
      .then(res => {
        this.pid = res.data[0].id;
        this.product_name = res.data[0].product_name;
        this.product_alias = res.data[0].product_alias;
        this.product_description = res.data[0].product_description;
        this.feature_benefitas = res.data[0].feature_benefitas;
        this.feature_description = res.data[0].feature_description;
        this.price = res.data[0].price;
        this.image = res.data[0].image;
        this.meta_title = res.data[0].meta_title;
        this.meta_keywords = res.data[0].meta_keywords;
        this.meta_description = res.data[0].meta_description;
        this.pdf_name = res.data[0].pdf_name;
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }
};
</script>

<style scoped>
.img-big-wrap img {
  width: 100%;
}
.text-themeColor {
  color: #f05a25;
}
.card {
  -webkit-box-shadow: 0px 0px 33px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 33px -12px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 33px -12px rgba(0, 0, 0, 0.75);
}
.product-more-desc {
  background-color: #d9d9d9;
  background-size: 100%;
  padding: 50px 0;
}
.footer-pdf {
  text-align: center;
  margin-bottom: 35px;
  margin-top: 20px;
}
.footer-pdf a {
  background: #f05a25;
  padding: 5px 15px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  -webkit-box-shadow: 0px 2px 19px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 19px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 19px -8px rgba(0, 0, 0, 0.75);
}
.footer-pdf a:hover {
  text-decoration: none;
}
</style>