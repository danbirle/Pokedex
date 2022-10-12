declare interface Pokemon {
  name: string
  url: string
}

declare interface PokemonDetails {
  name: string
  height: number
  weight: number
  id: number
  sprites: {
    front_default: string
    other: {
      ['official-artwork']: {
        front_default: string
      }
    }
  }
  abilities: {
    is_hidden: boolean
    slot: number
    ability: {
      name: string
      url: string
    }
  }[]
}
