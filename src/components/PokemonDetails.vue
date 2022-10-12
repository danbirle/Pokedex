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
    <div class="linebreak">
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
    <h2 class="large">Moves</h2>
    <div class="scrollable">
      <div v-if="pokemon.moves.length === 0">No moves recorded</div>
      <div v-for="move in pokemon.moves" v-bind:key="`move_${move.move.name}`">
        {{ move.move.name }}
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  background: linear-gradient(
    150deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  height: 20rem;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  justify-content: space-between;

  & > img {
    grid-row: span 2;
    max-height: 500px;
  }

  & > a {
    margin-left: 1rem;
    margin-top: 1rem;
    text-decoration: underline;

    &:hover {
      background: none;
    }
  }
}

h1 {
  text-transform: capitalize;
  margin-left: 1rem;
  grid-row: 2;
  margin-bottom: 1rem;
}

main {
  margin-left: 1rem;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 1rem;

  .large {
    grid-column: 1 / span 7;
    grid-row: 4;
    padding-left: 1rem;
    margin-left: -1rem;
    background: linear-gradient(
      150deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
  }

  div {
    text-transform: capitalize;
  }
}

.linebreak {
  grid-column: span 4
}

.scrollable {
  max-height: 20rem;
  overflow-x: auto;
  column-width: 10rem;
  grid-column: 1 / span 7;
  grid-row: 5
}

@media screen and (max-width: 675px) {
  main {
    grid-template-columns: repeat(4, 1fr);

    .large, .scrollable {
      grid-column: span 4;
    } 
  }

  .linebreak {
    grid-column: span 1
  }
  
  img {
    height: 300px
  }
}
</style>
