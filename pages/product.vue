<template>
  <div class="container mb-5 pb-5">
    <div class="row">
      <div class="col">
        <h1 class="text-center pt-5 mt-3">Products</h1>
      </div>
    </div>
    <Card />
  </div>
</template>

<script>
import Card from "./card";
export default {
  name: "product",
  components: { Card }
};
</script>

<style scoped>
.h1 {
  text-align: center;
  padding-bottom: 10px;
}
.sub-header {
  color: #f05a25;
  font-weight: bold;
  line-height: 1.286em;
}
.rightsideBLOCK {
  font-size: 20px;
  padding-left: 25px;
}
.frmOutside {
  padding: 20px;
  -webkit-box-shadow: 0px 0px 33px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 33px -12px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 33px -12px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
}
</style>