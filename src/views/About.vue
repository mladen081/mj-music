<template>
  <main>
    <div class="info">
      <h1 class="title">About Me</h1>
      <div class="a"></div>
      <div class="b"></div>
      <div class="c"></div>
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
  color: var(--light-blue);
}

.a,
.b,
.c {
  height: 5rem;
  width: 90%;
  margin: 5rem auto;
}

.a {
  background-color: #f778ba;
}

.b {
  background-color: #33b3ae;
}

.c {
  background-color: #37a047;
}

@media (max-width: 1024px) {
  .info {
    width: 100%;
  }
}

@media (max-width: 767px) {
}
</style>
