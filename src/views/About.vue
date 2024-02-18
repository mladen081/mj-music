<template>
  <main>
    <div class="info">
      <h1 class="title">About Me</h1>
      <p>Hello, my name is MJ</p>
      <p>This is my music</p>
      <p>So sit down and relax</p>
    </div>
  </main>
</template>

<style scoped>
.info {
  height: 100vh;
  background-color: var(--light-blue);
  text-align: center;
}

@media (max-width: 1024px) {
  .info {
    width: 100%;
  }
}

@media (max-width: 767px) {
}
</style>
