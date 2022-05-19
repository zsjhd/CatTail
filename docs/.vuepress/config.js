const { defaultTheme } = require('@vuepress/theme-default')


module.exports = {
    base: '/',
    lang: 'zh-CN',
    title: 'Cattail',
    description: '记录我的学习',
    theme: defaultTheme({
        logo: '/images/shasha.png',
        navbar: [
            { text: '首页', link: '/' },
            {
                text: '前端',
                children: [
                    {
                        text: '框架', children: [
                            {
                                text: 'Vue',
                                link: '/frontend/Vue'
                            },
                            {
                                text: 'React',
                                link: '/frontend/React'
                            }
                        ]
                    }

                ],
            },
            { text: '算法', link: '/algorithm' },
            { text: '面试', link: '/interview' },
            { text: '生活', link: '/life' },
            { text: 'GitHub', link: 'https://github.com/zsjhd' },

        ],
        // sidebar: sidebarConf
    }),

}