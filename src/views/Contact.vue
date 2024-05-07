<template>
  <main>
    <div class="container">
      <div class="title">
        <h1>Contact Me</h1>
      </div>

      <div v-if="!formSent">
        <div class="form-wrapper">
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
      // Prevent form submission if name or email is not provided
      if (!this.name.trim() || !this.email.trim()) {
        alert("Please provide both name and email");
        return;
      }

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
  color: var(--turquoise-light);
  text-align: center;
  padding-left: 0;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
label {
  font-family: "Open Sans" sans-serif;
  color: var(--turquoise-light);
  margin: 0;
  font-size: 1.6rem;
}
.container {
  background-color: var(--light-dark);
}
.title h1 {
  color: var(--turquoise-light);
}
.form-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  width: 400px;
}
input,
textarea {
  width: 100%;
  border: 0.2rem solid var(--white);
  border-radius: 0.3rem;
  resize: none;
  padding: 0 0.5rem;
  box-sizing: border-box;
  font-family: "Open Sans" sans-serif;
  font-size: 1.6rem;
  color: var(--black);
}
input[type="text"],
input[type="email"] {
  padding: 0 0.1rem;
  height: 4rem;
  width: 100%;
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
  width: 100%;
  height: 10rem;
}
input[type="submit"] {
  width: 100%;
  height: 5rem;
  background-color: transparent;
  border: 0;
  color: var(--turquoise-light);
  border: 0.2rem solid var(--turquoise-light);
  border-radius: 0.8rem;
  margin: 0.1rem 0 0 0;
  font-family: "Fira sans" sans-serif;
  font-size: 2.2rem;
  cursor: pointer;
}

input:hover[type="submit"] {
  color: var(--black);
  border: 0.2rem solid var(--turquoise-light);
  background-color: var(--turquoise-light);
}

@media (max-width: 767px) {
  form {
    width: 280px;
  }
  .title h1 {
    padding-left: 2.2rem;
  }
}
</style>
