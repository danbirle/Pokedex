<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
