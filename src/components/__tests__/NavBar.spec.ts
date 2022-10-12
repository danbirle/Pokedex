import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import NavBarVue from '../NavBar.vue'

describe('NavBar', () => {
  const wrapper = mount(NavBarVue)

  it('renders a navigation bar', () => {
    expect(wrapper.find('.navbar')).toBeTruthy()
    expect(wrapper.find('button:first-child').text()).toContain('<')
    expect(wrapper.find('button:last-child').text()).toContain('>')
  })

  it('renders a page size dropdown as the first dropdown', () => {
    expect(wrapper.findAll('select')[0].text()).toContain('10')
    expect(wrapper.findAll('select')[0].text()).toContain('20')
    expect(wrapper.findAll('select')[0].text()).toContain('50')
  })

  it('renders a sort criteria dropdown as the 2nd dropdown', () => {
    expect(wrapper.findAll('select')[1].text()).toContain('id')
    expect(wrapper.findAll('select')[1].text()).toContain('name')
    expect(wrapper.findAll('select')[1].text()).toContain('height')
    expect(wrapper.findAll('select')[1].text()).toContain('weight')
  })

  it('renders a sort order dropdown as the 3rd dropdown', () => {
    expect(wrapper.findAll('select')[2].text()).toContain('ascending')
    expect(wrapper.findAll('select')[2].text()).toContain('descending')
  })

  it('renders an input field', () => {
    expect(wrapper.find('#filter_input')).toBeTruthy()
  })
})