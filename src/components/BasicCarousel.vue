<template>
  <Carousel>
    <Slide v-for="slide in 3" :key="slide">
      <div class="carousel__item"></div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "BasicCarousel",
  // data() {
  //   return {
  //     photo_1: "p1.jpg",
  //     photo_2: "p2.jpg",
  //     photo_3: "p3.jpg",
  //   };
  // },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>

<style>
.carousel__item {
  min-height: 75rem;
  width: 100%;
  background-color: #000;
  background-image: url("../assets/p1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 1px solid #fff;
}

.carousel__pagination-button::after {
  background-color: rgb(255, 255, 255, 0.7);
  width: 2rem;
  height: 1rem;
}

.carousel__pagination-button:hover::after {
  background-color: rgb(255, 255, 255, 0.6);
}

.carousel__pagination-button--active::after {
  background-color: #fff;
  width: 2rem;
  height: 1rem;
}

.carousel__icon {
  fill: #fff;
}

.carousel__liveregion {
  font-size: 2rem;
  color: #fff !important;
}

@media (max-width: 1600px) {
  .carousel__item {
    min-height: 40rem;
  }
}

@media (max-width: 1024px) {
  .carousel__item {
    min-height: 45rem;
  }
}
</style>
