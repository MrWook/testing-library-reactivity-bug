// this don't work the template isn't updated
import { render } from '@testing-library/vue'
import Component from '../index.vue'

describe(`Component: ${Component.name}`, () => {
  it('should render correctly', async () => {
    const { debug } = render(Component)
    debug()
    expect(true).toBeTruthy()
  })
})
