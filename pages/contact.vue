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
          <section>
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
                <span class="sm-txt" @click="sendmail()">submit</span>
              </button>
              <section class="pt-3 black-gra">{{mail_delevery}}</section>
            </div>
          </section>
        </div>
      </div>
      <div
        class="col-6 rightsideBLOCK py-2"
        v-for="(item,index) in static_contact_data"
        :key="index"
      >
        <p class="sub-header">Questions? Contact</p>
        <p>{{item.email}}</p>
        <p>
          Phone:
          <span>{{item.phone}}</span>
        </p>
        <p>
          Phone:
          <span>{{item.contact_telephone}}</span>
        </p>
        <p>
          Email:
          <span>
            <a href="mailto:sales@avonasupply.com">{{item.contact_email}}</a>
          </span>
        </p>
      </div>
    </div>
    <div class="row pb-5">
      <div class="col" v-for="(item,index) in static_contact_data"
        :key="index">
        <div v-html="item.map_location"></div>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      mail_delevery: "",
      errors: [],
      static_contact_data: []
    };
  },
  created() {
    axios({
      method: "get",
      url: " /settingsData"
    }).then(res => {
      console.log(res.data);
      this.static_contact_data = res.data;
    });
  },
  methods: {  
    sendmail() {
      var mailData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      };
      console.log(mailData);
      axios({
        method: "post",
        url: " /sendMail",
        data: mailData
      }).then(res => {
        (this.name = ""),
          (this.email = ""),
          (this.phone = ""),
          (this.message = ""),
          (this.mail_delevery = res.data),
          console.log(res.data);
      });
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
[type=number] {
    width: 100%;
}
</style>