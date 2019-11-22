<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md6>
        <v-form class="bg p-5 rounded">
          <h4 class="pb-5">Login</h4>
          <v-text-field
            label="Email address"
            prepend-icon="mdi-account-circle"
            class="purple-input"
          />

          <v-text-field
            type="password"
            label="Password"
            prepend-icon="mdi-lock"
            class="purple-input"
          />

          <nuxt-link to="./admin/dashboard" class="clearfix">
            <v-btn class="float-right my-4" large color="success">Login</v-btn>
          </nuxt-link>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  layout: "admin/none"
};
</script>
<style scoped>
.bg {
  background: white;
}
</style>
