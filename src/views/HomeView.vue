<template>
  <main>
    <div class="a">
      <h1 class="animate-charcter">Mladen<br />Full<br />Responsive</h1>
    </div>
  </main>
</template>

<style scoped>
.a {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8%;
}
.animate-charcter {
  text-transform: uppercase;
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
  display: inline-block;
  font-size: 7rem;
  text-align: center;
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
  .animate-charcter {
    font-size: 6rem;
  }
}

@media (max-width: 991px) {
  .a {
    margin-top: 25%;
  }
  .animate-charcter {
    font-size: 5rem;
  }
}

@media (max-width: 767px) {
  .a {
    margin-top: 30%;
  }
  .animate-charcter {
    font-size: 2.5rem;
  }
}
</style>
