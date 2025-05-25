import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Icon from '../Icon.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

describe('Icon.vue', () => {
  test('渲染基础类名', () => {
    const wrapper = mount(Icon)
    expect(wrapper.classes()).toContain('mr-icon')
  })

  test('颜色样式绑定', async () => {
    const wrapper = mount(Icon, {
      props: {
        icon: ['fas', 'user'],
        color: '#ff0000',
      },
    })
    expect(wrapper.element.style.color).toBe('rgb(255, 0, 0)')
  })

  test('透传属性给FontAwesomeIcon', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: ['fas', 'user'],
      },
    })
    const faComponent = wrapper.findComponent(FontAwesomeIcon)
    expect(faComponent.props('icon')).toEqual(['fas', 'user'])
  })
})
