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
          { text: '在Markdown使用Vue', link: '/using-vue' },
          { text: 'Github Actions食用', link: '/github-actions' },
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
      },
      {
        text: '汽车',
        items: [
          { text: '雅阁 2022', link: '/cars/accord-2022' },
          { text: '雷克萨斯ES 2025', link: '/cars/lexus-ES-2025' },
          { text: '沃尔沃S90 2026', link: '/cars/volvo-S90-2026' },
          { text: '奔驰E级 2025', link: '/cars/benz-E-2025' },
          { text: '宝马5系 2025', link: '/cars/bmw-5-2025' },
          { text: '奥迪A6L 2026', link: '/cars/audi-A6L-2026' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    image: {
      lazyLoading: true
    }
  }
})
