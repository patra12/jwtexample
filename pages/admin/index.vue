<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md6>
        <v-form class="bg p-5 rounded clearfix">
          <h4 class="pb-5">Login</h4>
          <v-alert v-if="alert" :type="alert.type">{{alert.message}}</v-alert>
          <v-text-field
            v-model="email"
            label="Email address"
            prepend-icon="mdi-account-circle"
            class="purple-input"
          />

          <v-text-field
            v-model="password"
            type="password"
            label="Password"
            prepend-icon="mdi-lock"
            class="purple-input"
          />
          <v-btn class="my-4 mb-0 float-right" large color="primary" @click="checkLogin()">Login</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
//import { VueEditor } from "vue2-editor";
import axios from "axios";
export default {
  layout: "admin/none",
  data: () => ({
    valid: true,
    email: "",
    password: "",
    alert: null
  }),
  methods: {
    checkLogin() {
      this.alert = null;
      var form = new FormData();
      var staticEmail = "admin@admin.com";
      var staticPassword = "admin123#";
      if (this.email == staticEmail && this.password == staticPassword) {
        this.$router.push("/admin/dashboard");
      } else {
        this.alert = { value: true, type: "error", message: "Invalid Login." };
      }
    }
  }
};
</script>

<style scoped>
.bg {
  background: white;
}
</style>






