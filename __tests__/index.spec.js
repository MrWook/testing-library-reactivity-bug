// this works and the template is updated correctly
import { mount } from '@vue/test-utils'
import Component from '../index.vue'

describe(`${Component.name}`, () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Component)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('should render correct contents', () => {
    console.log(wrapper.html())
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
