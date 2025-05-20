import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  title: 'Mercury-Design',
  description: 'A simple UI component library for Vue3',
  base: '/Mercury-Design/',
  // vite 配置项是为了让文档中可以书写自定义组件（支持JSX/TSX语法）
  vite: {
    plugins: [vueJsx()],
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
    ],
    sidebar: {
      '/': [
        { text: 'Home', link: '/' },
        {
          text: 'Components',
          collapsed: true,
          items: [
            { text: 'Button', link: '/components/button' },
            {
              text: 'Switch',
              link: '/components/switch',
            },
            {
              text: 'Message',
              link: '/components/message',
            },
          ],
        },
      ],
    },
  },
})
