<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="text-center py-5 my-3">Contact Us</h1>
      </div>
    </div>
    <div class="row pb-5 mb-5">
      <div class="form col-sm col-md-6 mx-auto px-5">
        <div class="frmOutside">
          <form action method="POST" @submit="checkForm()">
            <div class="form-group">
              <label class="form-label" for="name">
                Name
                <span class="text-danger">*</span>
              </label>
              <input class="form-control" type="text" name="name" v-model="name" id="name" />
            </div>
            <div class="form-group">
              <label for="email">
                email
                <span class="text-danger">*</span>
              </label>
              <input class="form-control" type="email" name="email" v-model="email" id="emial" />
            </div>
            <div class="form-group"></div>
            <div class="form-group">
              <label for="phone">
                Phone
                <span class="text-danger">*</span>
              </label>
              <input class="form-control" type="number" name="number" v-model="phone" id="number" />
            </div>

            <div class="form-group">
              <label>
                Message
                <span class="text-danger">*</span>
              </label>
              <textarea class="form-control" rows="5" v-model="message"></textarea>
            </div>
            <div class="form-group text-center">
              <button class="btn btn-primary px-5">
                <span class="sm-txt">submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        class="col-6 rightsideBLOCK py-2"
        v-for="(item,index) in static_contact_data"
        :key="index"
      >
        <p class="sub-header">Questions? Contact</p>
        <p>{{item.name}}</p>
        <p>{{item.position}}</p>
        <p>{{item.company}}</p>
        <p>
          Phone:
          <span>{{item.ph1}}</span>
        </p>
        <p>
          Phone:
          <span>{{item.ph2}}</span>
        </p>
        <p>
          Email:
          <span>
            <a href="mailto:sales@avonasupply.com">{{item.email}}</a>
          </span>
        </p>
      </div>
    </div>
    <div class="row pb-5">
      <div class="col">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.076773613451!2d88.35486071504307!3d22.53879663989042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02772216872631%3A0x33fb5d46974dfeec!2sJD%20Birla%20Institute!5e0!3m2!1sen!2sin!4v1569495421193!5m2!1sen!2sin"
          frameborder="0"
          class="w-100"
          height="500px"
          style="border:0;"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "content",
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