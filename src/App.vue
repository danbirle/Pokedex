<script setup lang="ts">
import { ref, computed} from 'vue'

import PokedexGrid from '@/components/PokedexGrid.vue'
import PokemonDetails from '@/components/PokemonDetails.vue'
import NotFound from '@/components/NotFound.vue'

const routes = {
  "/": PokedexGrid,
  "/details": PokemonDetails,
}

const currentPath = ref(window.location.pathname)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.pathname
})

const currentView = computed(
  () => routes[(currentPath.value as keyof typeof routes) || '/'] || NotFound
)
</script>

<template>
  <component :is="currentView" />
</template>
