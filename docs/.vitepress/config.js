export default {
    // 站点级选项
    title: '测试',
    description: '测试小demo.',

    // 仓库名
    base: '/vitepress-demo/',

    themeConfig: {
        // 本地搜索
        search:{
            provider: 'local'
        },
        // 导航栏
        nav: [
            { text: '首页', link: '/' },
            { text: '样例', link: '/exampled.html' },
        ],

        // 侧边栏
        sidebar: [
            {
                text: '基础',
                items: [
                    { text: '基础', link: '/basic.html' },
                    { text: '基础2', link: '/basic2.html' },
                ]
            },
            {
                text: '进阶',
                items: [
                    { text: '进阶', link: '/advanced.html' },
                    { text: '进阶2', link: '/advanced2.html' },
                ]
            },
        ],

        // 社交链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Alfxue/vitepress-demo' }
        ]
    }
}