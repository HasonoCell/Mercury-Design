import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    vnode: {
      type: [String, Object],
      required: true,
    },
  },
  setup({ vnode }) {
    // 返回该组件的渲染函数
    // 如果传入一个非 VNode 的参数，则该渲染函数生成一个此参数的 VNode 节点
    // 如果传入一个 VNode 的参数，则直接返回该 VNode
    return () => vnode
  },
})
