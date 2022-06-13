<template>
  <!-- ======= Contact Section ======= -->
  <section id="contact" class="contact bg-light section-contact">
    <div class="container">
      <div class="section-title">
        <p class="text-center">Contact Us</p>
      </div>

      <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-8">
          <form role="form" @submit="submit" class="validate-form needs-validation php-email-form contact-from"
            name="contact-us-form" id="contact-us-form" method="POST" autocomplete="off" validate>
            <div class="row">
              <div class="col-lg-6 form-group">
                <input type="text" class="form-control" v-model="name" name="Name" id="Name" aria-describedby="Name"
                  placeholder="Your Name" required />
                <div class="invalid-feedback">
                  Please enter your name.
                </div>
                <input type="text" class="form-control mt-4" v-model="email" name="Email" id="Email"
                  aria-describedby="email" placeholder="Your Email" pattern="[a-zA-Z0-9._]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                  required />
                <div class="invalid-feedback">
                  Please enter a valid email address.
                </div>
              </div>
              <div class="col-lg-6 form-group">
                <div class="form-group">
                  <textarea class="form-control" id="Message" v-model="message" rows="4" name="Message"
                    required></textarea>
                  <div class="invalid-feedback">
                    Write us your message.
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-3 row justify-content-center">
              <div class="col-lg-4 text-center">
                <button class="btn-style" type="submit" id="btn-send" value="Send Message">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  </section>
  <!-- End Contact Section -->
</template>
<script>
// @ is an alias to /src

import axios from 'axios';
export default {
  name: 'Contact',

  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    submit() {
      const formURL = "https://script.google.com/macros/s/AKfycbwpzDN5ngA2BM-yN2Cx_NbAPGAgy2BNeTtnk8vxLWXqGr7qBWs/exec"
      const formData = new FormData();
      formData.append("Name", this.name)
      formData.append("Email", this.email)
      formData.append("Message", this.message)

      axios.post(formURL, formData)
        .then((response) => {
          this.onReset()
          alert("Thank you for submitting the form ")
          return response
        })
        .catch((e) => {
          console.error(e);
        })
    },
    onReset() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
}
</script>