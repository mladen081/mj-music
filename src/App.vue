<template>
  <div class="app">
    <side-bar-custom />

    <router-view />
  </div>
</template>

<script setup>
import SideBarCustom from "./components/SideBarCustom.vue";
</script>

<style lang="scss">
:root {
  --light-blue: #33b3ae;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --dark-blue: #0d1117;
  --black: #000000;
  --lost-light: #161b22;
  --sidebar-width: 30rem;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  /* This defines what 1rem is (1rem = 10px) */
  font-size: 62.5%;
}

body {
  font-family: "Fira sans", sans-serif;
  background: var(--lost-light);
  //   box-sizing: border-box;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

h1 {
  font-size: 4.8rem;
  font-weight: 700;
  padding-top: 1.6rem;
  padding-bottom: 4.8rem;
  text-align: center;

  background-image: linear-gradient(
    -125deg,
    var(--dark-alt) 0%,
    var(--light-blue) 33%,
    var(--dark-alt) 67%,
    var(--light-blue) 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: var(--light-blue);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 10s linear infinite;
}

h2 {
  color: #f778ba;
  text-align: center;
  margin-bottom: 4rem;
  font-size: 2.3rem;
}

h3 {
  font-weight: 400;
  margin-bottom: 0.1rem;
  text-align: center;
  color: var(--light-blue);
  padding: 1rem;
  font-size: 2rem;
}

p {
  color: var(--black);
  font-size: 1.6rem;
}

span {
  font-size: 1.5rem;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

.app {
  display: flex;

  main {
    flex: 1 1 0;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }

    @media (max-width: 767px) {
      padding-left: 6rem;
    }
  }
}

@media (max-width: 1400px) {
  h1 {
    font-size: 4.3rem;
  }
}

@media (max-width: 1200px) {
  h1 {
    font-size: 4rem;
  }
}

@media (max-width: 1024px) {
  h1 {
    font-size: 3.7rem;
  }
}

@media (max-width: 991px) {
  h1 {
    font-size: 3.2rem;
  }
}

@media (max-width: 767px) {
  h1 {
    font-size: 2.7rem;
  }
}
</style>
