import { getPokemons } from '@/data/get-pokemon'
import { reactive, computed } from 'vue'

const state = reactive({
  pokemonData: [],
  loading: false,
})

export function usePokemon() {
  async function getPokemon() {
    try {
      state.loading = true

      const response = await getPokemons(1, 20)
      state.pokemonData = response.results
    } catch(e) {
      console.error('Error loading pokemon data: ', e)
    } finally {
      state.loading = false
    }
  }

  return {
    pokemonData: computed(() => state.pokemonData),
    loading: computed(() => state.loading),
    // getters
    getPokemon,
  }
}
