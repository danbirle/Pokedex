import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import PokemonCardVue from '../PokemonCard.vue'

describe('PokemonCard', () => {
  const wrapper = mount(PokemonCardVue, {
    props: {
      name: 'Pikachu',
      weight: 23,
      height: 40,
      abilities: [
        { ability: { name: 'TailSlap'} },
        { ability: { name: 'Shock' } },
      ],
      sprite: 'image-placeholder'
    }
  })

  it('renders properly', () => {
    expect(wrapper.text()).toContain('Pikachu')
    expect(wrapper.text()).toContain('TailSlap')
    expect(wrapper.text()).toContain('Shock')
    expect(wrapper.text()).toContain('Weight')
    expect(wrapper.text()).toContain('23')
    expect(wrapper.text()).toContain('Height')
    expect(wrapper.text()).toContain('40')
  })

  it('links to the details page', () => {
    expect(wrapper.attributes('href')).toBe('/details?pokemon=Pikachu')
  })

  it('renders a background for the card', () => {
    expect(wrapper.find('.card').attributes('style')).toBe(
      'background-image: url(image-placeholder);'
    )
  })
})