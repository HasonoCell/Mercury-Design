import { describe, expect, test } from 'vitest'
import Collapse from '../Collapse.vue'
import { mount } from '@vue/test-utils'
import { h } from 'vue'
import CollapseItem from '../CollapseItem.vue'

describe('Collapse.vue', () => {
  // 基础渲染测试
  test('basic collapse', () => {
    const wrapper = mount(Collapse, {
      props: {
        modelValue: ['a'],
      },
      slots: {
        default: h(CollapseItem, { name: 'a', title: 'Title A' }, 'content a'),
      },
      global: {
        stubs: ['Icon'],
      },
    })
    expect(wrapper.html()).toContain('content a')
    expect(wrapper.find('.mr-collapse-item__content').exists()).toBe(true)
  })

  // 手风琴模式测试
  test('accordion mode works correctly', async () => {
    const wrapper = mount(Collapse, {
      props: {
        modelValue: ['a'],
        accordion: true,
      },
      slots: {
        default: [
          h(CollapseItem, { name: 'a', title: 'Title A' }, 'content a'),
          h(CollapseItem, { name: 'b', title: 'Title B' }, 'content b'),
        ],
      },
      global: {
        stubs: ['Icon'],
      },
    })

    await wrapper.findAll('.mr-collapse-item__header')[1].trigger('click')
    const emits = wrapper.emitted('update:modelValue')
    expect(emits?.[0]).toEqual([['b']])
    expect(wrapper.findAll('.mr-collapse-item__wrapper')[0].isVisible()).toBe(false)
  })

  // 禁用状态测试
  test('disabled item cannot be toggled', async () => {
    const wrapper = mount(Collapse, {
      props: {
        modelValue: ['a'],
      },
      slots: {
        default: h(CollapseItem, { name: 'a', title: 'Title A', disabled: true }, 'content a'),
      },
      global: {
        stubs: ['Icon'],
      },
    })

    await wrapper.find('.mr-collapse-item__header').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })

  // 动态更新测试
  test('modelValue updates correctly', async () => {
    const wrapper = mount(Collapse, {
      props: {
        modelValue: [],
      },
      slots: {
        default: h(CollapseItem, { name: 'a', title: 'Title A' }, 'content a'),
      },
      global: {
        stubs: ['Icon'],
      },
    })

    await wrapper.setProps({ modelValue: ['a'] })
    expect(wrapper.find('.mr-collapse-item__wrapper').isVisible()).toBe(true)
  })
})
