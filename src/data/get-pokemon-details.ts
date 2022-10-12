import { axiosInstance } from './config'

export function getPokemonDetails(name: string) {
  return axiosInstance
    .get(`/pokemon/${name}`)
    .then(response => response.data)
    .catch(error => error)
}
