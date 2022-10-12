import { axiosInstance } from './config'

export function getPokemonDetails(name: string): Promise<PokemonDetails> {
  return axiosInstance
    .get(`/pokemon/${name}`)
    .then(response => response.data)
    .catch(error => error)
}
