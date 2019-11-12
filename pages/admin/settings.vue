<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-col outlined class="head">
            <h4 class="font-weight-light text-light">Settings</h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="bg-content">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="title" :rules="titleRules" label="Title" required></v-text-field>
              <v-text-field v-model="email" :rules="aliasRules" label="Email" required></v-text-field>
              <v-text-field v-model="phone" :rules="aliasRules" label="Phone" required></v-text-field>
              <v-text-field v-model="metatitle" :rules="aliasRules" label="Meta Title" required></v-text-field>
              <v-text-field
                v-model="metakeywords"
                :rules="aliasRules"
                label="Meta Keywords"
                required
              ></v-text-field>
              <v-text-field
                v-model="meatadescription"
                :rules="aliasRules"
                label="Meta Description"
                required
              ></v-text-field>
              <v-text-field v-model="copyrights" :rules="aliasRules" label="Copyrights" required></v-text-field>

              <v-btn class="my-5 float-right" large color="primary">Update</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import defaultAdminVue from "../../layouts/admin/defaultAdmin.vue";
export default {
  layout: "admin/defaultAdmin"
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