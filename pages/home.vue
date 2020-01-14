<template>
  <main>
    <section class="banner-sec">
      <div class="container">
        <h2 class="display-3 mb-4">{{title}}</h2>
        <p class="lead mb-2">{{subTitle}}</p>
      </div>
    </section>

    <!--blade section-->
    <div class="container">
      <Card />
    </div>
  </main>
</template>

<script>
import "~/assets/css/style.css";
import Card from "./card";
export default {
  components: {
    Card
  },
  data() {
    return {
      title: "",
      subTitle:"",
        
    };
  },
  methods:{
    getdata(){
      this.$axios({
      method: "get",
      url: "/settingsData"
    })
      .then(row=>{
        this.title = row.data[0].homepage_title;
        this.subTitle = row.data[0].homepage_description;
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
  mounted(){
    this.getdata();
  }
};
</script>
<style>
.banner-sec {
  background: url("~assets/images/top-banner.jpg");
  background-size: 100%;
  padding: 90px 0;
  background-size: cover;
}
</style>