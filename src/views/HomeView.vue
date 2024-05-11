<template>
  <main>
    <basic-carousel />
    <div class="a">
      <h1 class="home-title">MJ Music<br />Coming Soon</h1>
    </div>
  </main>
</template>

<script setup>
import BasicCarousel from "../components/BasicCarousel.vue";
</script>

<style scoped>
.a {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
}
.home-title {
  text-transform: uppercase;
  font-size: 11rem;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

@media (max-width: 1600px) {
  .home-title {
    font-size: 7.5rem;
  }
}

@media (max-width: 767px) {
  .home-title {
    font-size: 4rem;
  }
}
</style>
