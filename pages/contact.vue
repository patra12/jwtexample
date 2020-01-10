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
              <input
                class="form-control"
                type="text"
                name="name"
                v-model="name"
                id="name"
                @change="checkName()"
              />
              <section class="pt-3 black-gra text-danger">{{nameRule}}</section>
            </div>
            <div class="form-group">
              <label for="email">
                email
                <span class="text-danger">*</span>
              </label>
              <input class="form-control" type="email" name="email" v-model="email" id="emial" />
              <section class="pt-3 black-gra text-danger">{{nameRule}}</section>
            </div>
            <div class="form-group"></div>
            <div class="form-group">
              <label for="phone">
                Phone
                <span class="text-danger">*</span>
              </label>
              <input class="form-control" type="number" name="number" v-model="phone" id="number" />
              <section class="pt-3 black-gra text-danger">{{nameRule}}</section>
            </div>

            <div class="form-group">
              <label>
                Message
                <span class="text-danger">*</span>
              </label>
              <textarea class="form-control" rows="5" v-model="message"></textarea>
              <section class="pt-3 black-gra text-danger">{{nameRule}}</section>
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
  </div>
</template>

<script>
// import axios from "axios";
import "~/assets/css/style.css";
export default {
  data: function() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      mail_delevery: "",
      error: 0,
      static_contact_data: [],
      nameRule: "",
      emailRule: "",
      phoneRule: "",
      message: ""
    };
  },
  created() {
    this.$axios({
      method: "get",
      url: "/settingsData"
    })
      .then(res => {
        this.static_contact_data = res.data;
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  },
  methods: {
    //for validation
    checkName() {
      if (this.name == "") {
        this.nameRule = "Name is required.";
      } else if (this.name < 5) {
        this.nameRule = "Name must be more thean 5 chracters.";
      }
    },
    checkEmail() {},
    checkPhone() {
      if (this.phone == "") {
        this.phoneRule = "Phone is required.";
      } else if (this.name < 5) {
        this.phoneRule = "This is not a phone number.please correct one";
      }
    },
    checkMessage() {
      if (this.message == "") {
        this.messageRule = "message is required.";
      } else if (this.message < 100) {
        this.messageRule = "message must be more than 100 cheracter.";
      }
    },

    //for sending mail
    sendmail() {
      this.checkName();
      this.checkEmail();
      this.checkPhone();
      this.checkMessage();
      if (error == 0) {
        var mailData = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        };
        this.$axios({
          method: "post",
          url: "/sendMail",
          data: mailData
        })
          .then(res => {
            (this.name = ""),
              (this.email = ""),
              (this.phone = ""),
              (this.message = ""),
              (this.mail_delevery = res.data);
          })
          .catch(error => {
            // handle error
            console.log(error);
          });
      }
    }
  }
};
</script>

