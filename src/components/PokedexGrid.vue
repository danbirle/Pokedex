<script setup lang="ts">
import { onMounted } from 'vue'

import PokemonCard from '@/components/PokemonCard.vue'
import NavBar from '@/components/NavBar.vue'
import BottomNavBar from '@/components/BottomNavBar.vue'

import { usePokemon } from '@/logic/use-pokemon'

const {
  loading,
  filteredPokemonData,
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
      :height="pokemon.height"
      :weight="pokemon.weight"
      :abilities="pokemon.abilities"
      v-for="pokemon in filteredPokemonData"
      v-bind:key="`pokemon_${pokemon.name}`"
      :sprite="pokemon.sprites.front_default || pokemon.sprites.other['official-artwork'].front_default || ''"
    />
    <div class="empty" v-if="loading">Loading data</div>
    <div class="empty" v-if="filteredPokemonData.length === 0 && !loading">
      No Pokemon found. Try adjusting your filters
    </div>
  </main>

  <BottomNavBar />
</template>

<style scoped>
.empty {
  padding: 4rem;
  text-align: center;
  width: 100%;
  grid-column: span 4;
}

main {
  width: 100%;
  grid-gap: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem .75rem 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

@media screen and (min-width: 580px) {
  main {
    display: grid;
    grid-template-columns: repeat(2, auto);
    padding-top: 1rem;
  }
}

@media screen and (min-width: 1024px) {
  main {
    display: grid;
    grid-template-columns: repeat(4, auto);
  }
}
</style>
