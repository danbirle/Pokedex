<script setup lang="ts">
import PokemonCard from './components/PokemonCard.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />

  <main>
    <PokemonCard
      name="Pikachu"
      :height="5"
      :weight="10"
      :abilities="['Shock', 'Bash']"
      sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    />
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
