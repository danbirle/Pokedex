<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getPokemonDetails } from '@/data/get-pokemon-details'

const pokemon = ref()

onMounted(async () => {
  const pokemonName = window.location.search.slice('?pokemon='.length)
  pokemon.value = await getPokemonDetails(pokemonName)
})
</script>

<template>
  <header v-if="pokemon">
    <a href="/">Back to the gallery</a>
    <img
      v-if="pokemon.sprites.other['official-artwork'].front_default"
      :src="pokemon.sprites.other['official-artwork'].front_default"
      :alt="pokemon.name" />
    <h1>{{ pokemon.name }}</h1>
  </header>
  <main v-if="pokemon">
    <div>
      <h2>Id</h2>
      {{ pokemon.id }}
    </div>
    <div>
      <h2>Species</h2>
      {{ pokemon.species.name }}
    </div>
    <div>
      <h2>Height</h2>
      {{ pokemon.height }}dm
    </div>
    <div>
      <h2>Weight</h2>
      {{ pokemon.weight }}hg
    </div>
    <div>
      <h2>Abilities</h2>
      <div v-if="pokemon.abilities.length === 0">No abilities</div>
      <div v-for="ability in pokemon.abilities" v-bind:key="`ability_${ability.ability.name}`">
        {{ ability.ability.name }}
      </div>
    </div>
    <div>
      <h2>Held items</h2>
      <div v-if="pokemon.held_items.length === 0">No held items</div>
      <div v-for="item in pokemon.held_items" v-bind:key="`item_${item.item.name}`">
        {{ item.item.name }}
      </div>
    </div>
    <div>
      <h2>Types</h2>
      <div v-if="pokemon.types.length === 0">No type recorded</div>
      <div v-for="pokemonType in pokemon.types" v-bind:key="`type_${pokemonType.type.name}`">
        {{ pokemonType.type.name }}
      </div>
    </div>
    <div>
      <h2>Moves</h2>
      <div v-if="pokemon.moves.length === 0">No moves recorded</div>
      <div v-for="move in pokemon.moves" v-bind:key="`move_${move.move.name}`">
        {{ move.move.name }}
      </div>
    </div>
  </main>
</template>
