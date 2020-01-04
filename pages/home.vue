<template>
  <main>
    <section class="banner-sec">
      <div class="container">
        <h2 class="display-3 mb-4">{{title}}</h2>
        <p class="lead mb-2">{{subTitle}}</p>
        <nuxt-link class="btn btnx btn-lg text-dark" to="/product" role="button">Know more</nuxt-link>
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
      title: "WELCOME",
      subTitle:
        "Avona Supply has been providing contractors with the highest quality products for the most demanding applications. Our product line was developed under the direction of seasoned concrete cutting professionals who were looking for higher quality products at manufacture direct pricing. Our facility located in suburban Atlanta has one of the largest inventories in the Southeast and with distribution partners throughout the US, we are committed to providing the best customer service in the industry."
    };
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