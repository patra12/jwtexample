<template>
  <div class="row py-5 my-5">
    <div class="col-sm-4" v-for="(product,index) in products" :key="index">
      <div class="m-2 card text-center">
        <div class="card-body pb-0">
          <img :src="getImg(product.img)" class="card-img-top" alt />
          <h3 class="card-title">{{product.title}}</h3>
          <p
            class="card-text text-left"
          >The AC/GC is our signature Asphalt Blade designed to perform in the most demanding aggregates while delivering the fastest cut on all types of abrasive materials.</p>
        </div>
        <nuxt-link :to="product.readMore" class="avona-btn">Read More</nuxt-link>
        <!--End of card-body-->
      </div>
      <!-- End of card-->
    </div>
    <!--End of col-->
  </div>
  <!--End of row-->
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          img: "ag-ac.png",
          title: "AC / GC",
          description:
            "The AC/GC is our signature Asphalt Blade designed to perform in the most demanding aggregates while delivering the fastest cut on all types of abrasive materials.",
          readMore: "/front/ac-gc"
        },
        {
          img: "blue-shark.png",
          title: "Blue Shark",
          description:
            "Our most popular General Purpose Blade for the contractor who is looking for exceptional value and maximum performance on Hand Held Saws or Low Horsepower Walk Behind Saws.",
          readMore: "/front/blue-shark"
        },
        {
          img: "dracuta-iron.png",
          title: "DUCTILE IRON",
          description:
            "The AVONA Ductile Iron Blade is the most cost effective solution to cutting ductile iron pipe versus a traditional abrasive blade.",
          readMore: "/front/ductile-iron"
        },
        {
          img: "i-cut.png",
          title: "I - CUT",
          description:
            "The I-Cut Supreme Combination Blade guarantees to outperform any other blade for cutting Concrete, Asphalt or Ductile Pipe. This blade is the only blade you need on your truck, no matter what you are cutting.",
          readMore: "/front/i-cut"
        },
        {
          img: "vane.png",
          title: "VanE",
          description:
            "The Vane is our signature blade designed for the most demanding contractor who is looking for a blade that will deliver the lowest cost per cut on Cured Concrete and other General Purpose Materials. Revolutionary superabrasive technology makes this blade truly unique.",
          readMore: "/front/vane"
        },
        {
          img: "xlerator.png",
          title: "XleratoR",
          description:
            "The Xlerator is our most popular blade designed for maximum performance on a variety of materials.",
          readMore: "/front/xlerator"
        }
      ]
    };
  },
  methods: {
    //use methods to show images dynamically
    getImg: function(pic) {
      return require("../../assets/images/" + pic);
    }
  }
};
</script>

<style scoped>
.card-body {
  position: relative;
}

.card {
  -webkit-box-shadow: 0px 0px 33px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 33px -12px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 33px -12px rgba(0, 0, 0, 0.75);
  position: relative;
  overflow: hidden;
  height: 100%;
}
.btn {
  background-color: coral;
  border: none;
}
.card:hover .card-img-top {
  size: 50%;
}
.avona-btn {
  background: #f05a25;
  color: #fff;
  padding: 7px;
  font-size: 17px;
  font-weight: 500;
}
.card-body img {
  transition: transform 0.5s ease;
}
.card-body:hover img {
  transform: scale(1.1) rotate(50deg);
}
.card-body h3 {
  text-transform: uppercase;
}
</style>