<template>
  <main>
    <div class="container">
      <div class="title">
        <h1>
          Contact Me
          <hr />
        </h1>
      </div>

      <div v-if="!formSent">
        <form class="form" ref="form" @submit.prevent="sendEmail">
          <label for="name">Name</label>
          <input
            class="form-input"
            type="text"
            v-model="name"
            name="name"
            placeholder="Your Name"
            id="name"
          />
          <label for="email">Email</label>
          <input
            class="form-input"
            type="email"
            v-model="email"
            name="email"
            placeholder="Your Email"
            id="email"
          />
          <label for="message">Message</label>
          <textarea
            class="form-textarea"
            name="message"
            v-model="message"
            cols="30"
            rows="5"
            placeholder="Message"
            id="message"
          >
          </textarea>

          <input type="submit" value="Send" />
        </form>
      </div>

      <div v-else>
        <h2>Email sent successfully!</h2>
      </div>
    </div>
  </main>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactView",

  data() {
    return {
      name: "",
      email: "",
      message: "",
      formSent: false,
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs
          .sendForm(
            "service_veysv5r",
            "template_69el6bn",
            e.target,
            "cjNCChjwSXUbo8iL3",
            {
              name: this.name,
              email: this.email,
              message: this.message,
            }
          )
          .then(() => {
            // Reset form field
            this.name = "";
            this.email = "";
            this.message = "";
            this.formSent = true; // Set the flag to true to hide the form
          });
      } catch (error) {
        console.log({ error });
      }
    },
  },
};
</script>

<style scoped>
h2 {
  color: var(--light-blue);
  text-align: left;
  padding-left: 0;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
label {
  font-family: "Open Sans" sans-serif;
  color: var(--light-blue);
  margin: 0;
}
.container {
  display: block;
  border-radius: 10px;
  margin: 0 auto;
  padding: 0 0 10px 10px;
  max-width: 330px;
  background-color: var(--light-dark);
}
.title {
  display: inline-block;
}
.title h1 {
  color: var(--light-blue);
}
form {
  padding: 10px 10px 0 0;
}
hr {
  width: 100%;
  display: block;
  margin: 5px 0;
  height: 5px;
  border: 0;
  background-color: var(--light-blue);
}
input,
textarea {
  width: 100%;
  border: 2px solid #fff;
  border-radius: 3px;
  resize: none;
  padding: 0 5px;
  box-sizing: border-box;
  font-family: "Open Sans" sans-serif;
  font-size: 16px;
  color: #000000;
}
input[type="text"],
input[type="email"] {
  padding: 0 1px;
  height: 40px;
  width: 100%;
}
input:focus,
textarea:focus {
  outline: none;
}
.form-input {
  margin: 5px 0 10px 0;
}
.form-textarea {
  margin: 5px 0;
  width: 100%;
  height: 100px;
}
input[type="submit"] {
  width: 100%;
  height: 50px;
  background-color: var(--dark-alt);
  border: 0;
  color: #fff;
  border: 2px solid var(--light);
  border-radius: 8px;
  margin: 10px 0 0 0;
  font-family: "Fira sans" sans-serif;
  font-size: 22px;
  cursor: pointer;
}

input:hover[type="submit"] {
  color: var(--light-blue);
  border: 2px solid var(--light-blue);
}

@media (max-width: 767px) {
  form {
    padding: 10px 10px 0 20px;
  }
  .title h1 {
    padding-left: 1.4rem;
  }
}
</style>
