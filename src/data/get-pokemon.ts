import { axiosInstance } from './config'

export function getPokemons(page: number, pageSize: number): Promise<PokemonPerPage> {
  return axiosInstance
    .get(`/pokemon?limit=${pageSize}&offset=${page * pageSize}`)
    .then(response => response.data)
    .catch(error => error)
}

interface PokemonPerPage {
  results: Array<Pokemon>
  next?: string
  previous?: string
  count: number
}
