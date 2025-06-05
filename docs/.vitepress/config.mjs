import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "H",
  base: "/H/",
  description: "人生若只如初见",
  themeConfig: {
    // logo: '/favicon.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Markdown', link: '/markdown' }
    ],

    sidebar: [
      {
        text: '写作',
        items: [
          { text: 'Markdown扩展', link: '/markdown' },
          { text: '资源处理', link: '/asset-handling' },
          { text: '在Markdown使用Vue', link: '/using-vue' }
        ]
      },
      {
        text: '发现精彩',
        items: [
          { text: '股市大盘', link: '/stock' },
          { text: '基金行情', link: '/fund' },
          { text: '黄金卡片', link: '/gold' },
          { text: '加密货币', link: '/coin' },
          { text: '日历卡片', link: '/calendar' },
          { text: '油价卡片', link: '/oil' },
          { text: '天气卡片', link: '/weather' },
          { text: '汽车销量', link: '/car-sale' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
