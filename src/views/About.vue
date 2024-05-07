<template>
  <main>
    <div class="info">
      <h1 class="title">About Me</h1>
      <div class="a"></div>
      <div class="b">
        <img src="../assets/tata.jpg" />
      </div>
      <div class="a"></div>
    </div>
  </main>
</template>

<style scoped>
.info {
  height: 100vh;
  background-color: var(--lost-light);
  text-align: center;
}

.info h1 {
  color: var(--turquoise-light);
}

.a {
  height: 2rem;
  width: 90%;
  margin: 2rem auto;
}

.a {
  background-color: var(--turquoise-dark);
}

.b img {
  display: block;
  margin: 2rem auto;
  width: 60%;
}

@media (max-width: 1024px) {
}

@media (max-width: 767px) {
}
</style>
