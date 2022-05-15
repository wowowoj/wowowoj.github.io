const { defaultTheme } = require('vuepress')

module.exports = {
  // 站点的基础路径
  base: "/",
  //站点的语言
  lang: 'zh-CN',
  //站点的标题
  title: 'wowowoj',
  //站点的描述
  description: 'wowowoj的个人文档博客',
  //在head里面添加额外的标签
  head: [['link', { rel: 'icon', href: 'docs\.vuepress\public\logo.png' }]],
  //多语言支持
  locales: {
    '/': {
      lang: 'en-US',
    },
    '/zh/': {
      lang: 'zh-CN',
    },
  },

  lastUpdated:true,


  theme: defaultTheme({


    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },

    // 默认主题配置
    navbar: [
      { text: '首页', link: '/', },
      {
        text: '算法',
        children: [
          { text: '基础算法', link: '/algo/基础算法.md', },
          { text: '数据结构', link: '/algo/数据结构.md', }
        ],
      },
    ],

    sidebar: [
      { text: '首页', link: '/', },
      {
        text: '算法',
        children: [
          { text: '基础算法', link: '/algo/基础算法.md', },
          { text: '数据结构', link: '/algo/数据结构.md', }
        ],
      },
    ],


    // sidebar: {
    //   '/': [
    //     {
    //       text: '首页',
    //       link: '/'
    //     }
    //   ],
    //   '/algo/': [{
    //     text: '算法',
    //     collapsible: true,
    //     children: [text='基础算法',, text='数据结构',]
    //     },
    //   ], 
    // }



  }),

  // 目录配置 默认
  // dest: '',
  //open: true,


  markdown: {
    code: {
      lineNumbers: false,
    },
  },

}