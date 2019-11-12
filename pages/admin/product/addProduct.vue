<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-col outlined class="head">
            <h4 class="font-weight-light text-light">Add Product</h4>
            <nuxt-link to="./productlist">
              <v-icon title="back" class="right" color="white darken-1"
                >mdi-arrow-left-bold</v-icon
              >
            </nuxt-link>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="bg-content">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="title"
                :rules="titleRules"
                label="Title"
                required
              ></v-text-field>
              <v-text-field
                v-model="alias"
                :rules="aliasRules"
                label="Alias"
                required
              ></v-text-field>
              <vue-editor v-model="full_description" class="py-5"></vue-editor>
              <v-file-input label="Select an Image"></v-file-input>
              <v-text-field
                v-model="meta_title"
                :rules="metaTitleRules"
                label="Meta Title"
                required
              ></v-text-field>
              <v-text-field
                v-model="meta_keywords"
                :rules="metaKeywordsRules"
                label="Meta Keywords"
                required
              ></v-text-field>
              <v-text-field
                v-model="meta_description"
                :rules="metaDescriptionRules"
                title="Meta Description"
                required
              ></v-text-field>
              <v-btn class="my-5 float-right" large color="primary">Save</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
  layout: "admin/defaultAdmin",
  components: {
    VueEditor
  },
  data: () => ({
    valid: true,
    title: "",
    titleRules: [v => !!v || "Title is required"],
    alias: "",
    aliasRules: [v => !!v || "Alias is required"],
    full_description: "",
    fulldescRules: [v => !!v || "Full Description is required"],
    meta_title: "",
    metaTitleRules: [v => !!v || "Meta Title is required"],
    meta_keywords: "",
    metaKeywordsRules: [v => !!v || "Meta Keywords is required"],
    meta_description: "",
    metaDescriptionRules: [v => !!v || "Meta Description is required"]
  }),

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
