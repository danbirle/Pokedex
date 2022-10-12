import { getPokemons } from '@/data/get-pokemon'
import { reactive, computed } from 'vue'

const state = reactive({
  pokemonData: [],
  loading: false,
  currentPage: 0,
  pageSize: 20,
  isLastPage: false,
})

export function usePokemon() {
  function nextPage() {
    if (state.isLastPage) {
      return false
    }

    state.currentPage = state.currentPage + 1
    getPokemon()
  }

  function previousPage() {
    if (state.currentPage === 0) {
      return false
    }

    state.currentPage = state.currentPage - 1
    getPokemon()
  }

  async function getPokemon() {
    try {
      state.loading = true

      const response = await getPokemons(state.currentPage, state.pageSize)
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
    currentPage: computed(() => state.currentPage),
    pageSize: computed(() => state.pageSize),
    isLastPage: computed(() => state.isLastPage),
    // getters
    getPokemon,
    // setters
    setPageSize: (value: number) => { state.pageSize = value },
    // methods
    nextPage,
    previousPage,
  }
}
