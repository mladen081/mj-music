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
  font-size: 1.6rem;
}
.container {
  display: block;
  border-radius: 1rem;
  margin: 0 auto;
  padding: 0 0 1rem 1rem;
  max-width: 33rem;
  background-color: var(--light-dark);
}
.title {
  display: inline-block;
}
.title h1 {
  color: var(--light-blue);
}
form {
  padding: 1rem 1rem 0 0;
}
hr {
  width: 100%;
  display: block;
  margin: 0.5rem 0;
  height: 0.5rem;
  border: 0;
  background-color: var(--light-blue);
}
input,
textarea {
  width: 90%;
  border: 0.2rem solid #fff;
  border-radius: 0.3rem;
  resize: none;
  padding: 0 0.5rem;
  box-sizing: border-box;
  font-family: "Open Sans" sans-serif;
  font-size: 1.6rem;
  color: #000000;
}
input[type="text"],
input[type="email"] {
  padding: 0 0.1rem;
  height: 4rem;
  width: 90%;
}
input:focus,
textarea:focus {
  outline: none;
}
.form-input {
  margin: 0.5rem 0 1rem 0;
}
.form-textarea {
  margin: 0.5rem 0 1.5rem 0;
  width: 90%;
  height: 10rem;
}
input[type="submit"] {
  width: 90%;
  height: 5rem;
  background-color: var(--dark-alt);
  border: 0;
  color: #fff;
  border: 0.2rem solid var(--light);
  border-radius: 0.8rem;
  margin: 0.1rem 0 0 0;
  font-family: "Fira sans" sans-serif;
  font-size: 2.2rem;
  cursor: pointer;
}

input:hover[type="submit"] {
  color: var(--light-blue);
  border: 0.2rem solid var(--light-blue);
}

@media (max-width: 767px) {
  form {
    padding: 0.1rem 0.1rem 0 2rem;
  }
  .title h1 {
    padding-left: 2.2rem;
  }
}
</style>
