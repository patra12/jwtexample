<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-col outlined class="head">
            <h4 class="font-weight-light text-light">Add Product</h4>
            <nuxt-link to="./productlist">
              <v-icon title="back" class="right" color="white darken-1">mdi-arrow-left-bold</v-icon>
            </nuxt-link>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="bg-content">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="product_name" label="Product name" required></v-text-field>

              <v-text-field v-model="product_alias" label="Product alias" required></v-text-field>
              <p class="grey--text text--darken-1 pt-3 mb-0">Product Description</p>
              <v-textarea type="text" v-model="product_description"></v-textarea>
              <!-- <vue-editor v-model="product_description" class="py-5"></vue-editor> -->

              <v-text-field v-model="feature_benefitas" label="Feature benefitas" required></v-text-field>
              <p class="grey--text text--darken-1 pt-3 mb-0">Feature Description</p>

              <!-- <vue-editor v-model="feature_description" class="py-5"></vue-editor> -->

              <v-textarea type="text" v-model="feature_description"></v-textarea>

              <v-text-field v-model="price" label="Price" required></v-text-field>

              <input type="file" name="filename" ref="image" @change="onFileChange" />

              <v-text-field v-model="meta_title" label="Meta title" required></v-text-field>

              <v-text-field v-model="meta_description" label="Meta description" required></v-text-field>

              <v-text-field v-model="meta_keywords" label="Meta keywords" required></v-text-field>

              <!-- <input type="file" name="pdf_name" ref="pdf_name" @change="onFileChange"> -->
              <v-text-field v-model="pdf_name" label="PDF" required></v-text-field>

              <v-btn class="my-5 float-right" large color="primary" @click="addData()">Save</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
//import { VueEditor } from "vue2-editor";
import axios from "axios";
export default {
  layout: "admin/defaultAdmin",
  components: {
    //VueEditor
  },
  data: () => ({
    valid: true,
    product_name: "",
    product_alias: "",
    product_description: "",
    feature_benefitas: "",
    feature_description: "",
    price: "",
    image: "",
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
    pdf_name: ""
  }),
  methods: {
    onFileChange() {
      var file = this.$refs.image.files[0];
      this.image = file;
    },
    addData() {
      var form = new FormData();
      form.append("product_name", this.product_name);
      form.append("product_alias", this.product_alias);
      form.append("product_description", this.product_description);
      form.append("feature_benefitas", this.feature_benefitas);
      form.append("feature_description", this.feature_description);
      form.append("price", this.price);
      form.append("image", this.image);
      form.append("meta_title", this.meta_title);
      form.append("meta_description", this.meta_description);
      form.append("meta_keywords", this.meta_keywords);
      form.append("pdf_name", this.pdf_name);
      axios({
        url: " /addproduct",
        method: "POST",
        headers: {
          header: { "Content-Type": "multipart/form-data" }
        },
        data: form
      })
        .then(res => {
          this.$router.push({
            path: "/admin/product/productlist"
          });
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
/* repeat */
.head {
  background-color: #60bb23;
  position: relative;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.bg-content {
  background: white;
}
h4 {
  padding: 0px 14px;
  margin-bottom: 0px;
}
.right {
  position: absolute;
  right: 35px;
  top: 10px;
  font-size: 33px;
}
/* non */
</style>