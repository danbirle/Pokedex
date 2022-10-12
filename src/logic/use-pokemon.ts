import { getPokemons } from '@/data/get-pokemon'
import { getPokemonDetails } from '@/data/get-pokemon-details'
import { reactive, computed } from 'vue'

const state = reactive<PokemonState>({
  pokemonData: [],
  filteredPokemonData: [],
  loading: false,
  currentPage: 0,
  pageSize: 20,
  isLastPage: false,
  sortOrder: 'ascending',
  sortByCriteria: 'id',
  filterText: '',
})

export function usePokemon() {
  function clearData() {
    state.pokemonData = []
    state.filteredPokemonData = []
  }

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
    clearData()

    try {
      state.loading = true

      const response = await getPokemons(state.currentPage, state.pageSize)
      state.isLastPage = !response.next
      response.results.map(async (pokemon: Pokemon) => {
        const recResponse = await getPokemonDetails(pokemon.name)
        state.pokemonData.push(recResponse)
        // check if all pokemons have been loaded
        if (state.pokemonData.length === state.pageSize) {
          state.loading = false
          filter()
        }
      })
    } catch(e) {
      console.error('Error loading pokemon data: ', e)
    }
  }

  function sort() {
    state.filteredPokemonData.sort((a, b) =>
      state.sortOrder === "ascending"
        ? a[state.sortByCriteria] < b[state.sortByCriteria]
          ? -1
          : 1
        : a[state.sortByCriteria] > b[state.sortByCriteria]
          ? -1
          : 1
    )
  }

  function filter() {
    if (state.filterText === '') {
      state.filteredPokemonData = state.pokemonData
    } else {
      state.filteredPokemonData = state.pokemonData.filter(
        pokemon => pokemon.name.includes(state.filterText) ||
          pokemon.abilities.find(ability => ability.ability.name.includes(state.filterText))
      )
    }
    sort()
  }

  return {
    pokemonData: computed(() => state.pokemonData),
    filteredPokemonData: computed(() => state.filteredPokemonData),
    loading: computed(() => state.loading),
    currentPage: computed(() => state.currentPage),
    pageSize: computed(() => state.pageSize),
    isLastPage: computed(() => state.isLastPage),
    sortByCriteria: computed(() => state.sortByCriteria),
    sortOrder: computed(() => state.sortOrder),
    filterText: computed(() => state.filterText),
    // getters
    getPokemon,
    // setters
    setPageSize: (value: number) => { state.pageSize = value },
    setSortCriteria: (value: SortByCriteria) => { state.sortByCriteria = value },
    setSortOrder: (value: SortOrder) => { state.sortOrder = value },
    setFilterText: (value: string) => { state.filterText = value },
    // methods
    nextPage,
    previousPage,
    sort,
    filter,
  }
}

interface PokemonState {
  pokemonData: Array<PokemonDetails>
  filteredPokemonData: Array<PokemonDetails>
  loading: boolean
  currentPage: number
  pageSize: number
  isLastPage: boolean
  sortOrder: SortOrder
  sortByCriteria: SortByCriteria
  filterText: string
}

type SortByCriteria = 'id' | 'name' | 'height' | 'weight'
type SortOrder = 'ascending' | 'descending'
