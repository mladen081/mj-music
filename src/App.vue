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
  --light-blue: #add8e6;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --dark-blue: #0d1117;
  --black: #000000;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

// *,
// *::after,
// *::before {
//   margin: 0;
//   padding: 0;
//   box-sizing: inherit;
// }

// html {
//   /* This defines what 1rem is (1rem = 10px) */
//   font-size: 62.5%;
// }

body {
  font-family: "Fira sans", sans-serif;
  background: var(--black);
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
  font-size: 3rem;
  font-weight: 700;
  padding-top: 1rem;
  padding-bottom: 3rem;
  text-align: center;
}

h2 {
  color: var(--light-blue);
  text-align: center;
  margin-bottom: 2rem;
}

h3 {
  font-weight: 400;
  margin-bottom: 1px;
  text-align: center;
  color: var(--light-blue);
  padding: 10px;
}

p {
  color: var(--black);
}

.app {
  display: flex;

  main {
    flex: 1 1 0;

    @media (max-width: 1024px) {
      padding-left: 4rem;
    }

    @media (max-width: 767px) {
      padding-left: 3.5rem;
    }
  }
}

@media (max-width: 1400px) {
  h1 {
    font-size: 2.7rem;
  }
}

@media (max-width: 1200px) {
  h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 1024px) {
  h1 {
    font-size: 2.3rem;
  }
}

@media (max-width: 991px) {
  h1 {
    font-size: 2rem;
  }
}

@media (max-width: 767px) {
  h1 {
    font-size: 1.7rem;
  }
}
</style>
