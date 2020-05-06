import { shallowMount } from '@vue/test-utils'
import VVSLogo from '@/components/VVSLogo.vue'

describe('VVSLogo.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(VVSLogo)
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
