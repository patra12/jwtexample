<template>
  <v-container>
    <h2 class="text-center" color="primary">{{title}}</h2>
    <p class="text-center">{{description}}</p>
  </v-container>
</template>
<script>
export default {
  layout: "admin/defaultAdmin",
  data() {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    getData() {
      this.$axios({
        method: "GET",
        url: "/settingsData"
      })
        .then(row => {
          this.title = row.data[0].dashboard_title;
          this.description = row.data[0].dashboard_description;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>