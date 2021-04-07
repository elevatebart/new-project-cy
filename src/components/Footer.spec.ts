import { mount } from '@cypress/vue'
import Footer from './Footer.vue'

describe('<Footer />', () => {
  it('should look like a Footer', () => {
    mount(Footer)
  })
})
