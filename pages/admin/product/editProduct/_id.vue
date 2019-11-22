<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-col outlined class="head">
            <h4 class="font-weight-light text-light">Edit Product</h4>
            <nuxt-link to="/admin/product/productlist">
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
              <!-- <vue-editor v-model="product_description" class="py-5"></vue-editor> -->
              <v-textarea type="text" v-model="product_description" ></v-textarea>
             
             <v-text-field v-model="feature_benefitas" label="Feature benefitas" required></v-text-field>

            <p class="grey--text text--darken-1 pt-3 mb-0">Feature Description</p>
             <!-- <vue-editor v-model="feature_description" class="py-5"></vue-editor> -->

             <v-textarea type="text" v-model="feature_description" ></v-textarea>

             <v-text-field v-model="price" label="Price" required></v-text-field>
             <v-text-field v-model="image" label="Image" required></v-text-field>

             <v-text-field v-model="meta_title" label="Meta title" required></v-text-field>

             <v-text-field v-model="meta_description" label="Meta description" required></v-text-field>

             <v-text-field v-model="meta_keywords" label="Meta keywords" required></v-text-field>

             <v-text-field v-model="pdf_name" label="PDF" required></v-text-field>

             <v-btn @click="edit()" class="my-5 float-right" large color="primary">Edit</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { VueEditor } from "vue2-editor";
import axios from "axios";
export default {
  layout: "admin/defaultAdmin",
  components: {
    VueEditor
  },
  data: () => ({
    valid: true,
    product_name: "",
    product_alias: "",
    product_description: "",
    feature_benefitas:"",
    feature_description:"",
    price:"",
    image: "",
    meta_title: "",
    meta_keywords: "",
    meta_description: "",
    pdf_name: ""
    
    /*titleRules: [v => !!v || "Title is required"],
    aliasRules: [v => !!v || "Alias is required"],
    fulldescRules: [v => !!v || "Full Description is required"],
    metaTitleRules: [v => !!v || "Meta Title is required"],
    metaKeywordsRules: [v => !!v || "Meta Keywords is required"],    
    metaDescriptionRules: [v => !!v || "Meta Description is required"]*/
  }),
  created(){
  	axios({
  		url:"http://localhost:3000/editproduct/"+this.$route.params.id,
  		method:"get",
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
  	     });
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    edit(){
    	var edit_data = {
    	    product_name: this.product_name,
            product_alias: this.product_alias,
            product_description: this.product_description,
            feature_benefitas: this.feature_benefitas,
            feature_description: this.feature_description,
            price: this.price,
            image: this.image,
            meta_title: this.meta_title,
            meta_description: this.meta_description,
            meta_keywords: this.meta_keywords,
            pdf_name: this.pdf_name
    	}
    	axios({
    	   url:"http://localhost:3000/editpostproduct/"+this.$route.params.id,
    	   method:"put",
    	   headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
           },  
    	   data:edit_data
    	})
    	.then(res=>{
        this.$router.push('/admin/product/productlist')
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
