import { axiosInstance } from './config'

export function getPokemons(page: number, pageSize: number) {
  return axiosInstance
    .get(`/pokemon?limit=${pageSize}&offset=${page * pageSize}`)
    .then(response => response.data)
    .catch(error => error)
}
