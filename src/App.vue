<script setup lang="ts">
import { onMounted } from 'vue'
import PokemonCard from './components/PokemonCard.vue'
import NavBar from './components/NavBar.vue'
import { usePokemon } from './logic/use-pokemon'

const {
  loading,
  pokemonData,
  getPokemon,
} = usePokemon()

onMounted(() => {
  getPokemon()
})

</script>

<template>
  <NavBar />

  <main>
    <PokemonCard
      :name="pokemon.name"
      :height="5"
      :weight="10"
      :abilities="['Shock', 'Bash']"
      v-for="pokemon in pokemonData"
      v-bind:key="`pokemon_${pokemon.name}`"
      sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    />
    <div class="empty" v-if="loading">Loading data</div>
  </main>
</template>

<style scoped>
.empty {
  padding: 4rem;
  text-align: center;
  width: 100%;
}

main {
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem .75rem 1rem;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
