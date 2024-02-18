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

body {
  background: var(--black);
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
</style>
