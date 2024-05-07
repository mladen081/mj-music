<template>
  <main>
    <div class="a">
      <h1 class="home-title">MJ Music<br />Coming Soon</h1>
    </div>
    <basic-carousel />
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
  margin-top: 8%;
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

@media (max-width: 1200px) {
  .a {
    margin-top: 12%;
  }
  .home-title {
    font-size: 9.5rem;
  }
}

@media (max-width: 991px) {
  .a {
    margin-top: 25%;
  }
  .home-title {
    font-size: 8rem;
  }
}

@media (max-width: 767px) {
  .a {
    margin-top: 30%;
  }
  .home-title {
    font-size: 4rem;
  }
}
</style>
