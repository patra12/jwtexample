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
  name: "content",
  components: { Card },
  data: function() {
    return {
      name: "",
      email: "",
      phone: "",
      gender: "",
      message: "",
      errors: [],
      static_contact_data: [
        {
          company: "AvonaSupply.com",
          ph1: "(877) 77-AVONA",
          ph2: "(877) 772-8662",
          email: "sales@avonasupply.com"
        }
      ]
    };
  },
  methods: {
    checkForm: function(e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("name is required");
      } else {
        if (this.name < 5) {
          this.errors.push("name must be more than 5 charectures.");
        }
      }

      if (!this.email) {
        this.errors.push("email cannot be empty");
      }

      if (!this.phone) {
        this.errors.push("phone is required");
      }

      if (!this.gender) {
        this.errors.push("Gender must requir");
      }
      if (!this.message) {
        this.errors.push("message is rewuir");
      } else {
        if (this.message.split(" ").length < 10) {
          this.errors.push("message should be more than 10 Words");
        }
      }
      e.preventDefault();
    }
  }
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