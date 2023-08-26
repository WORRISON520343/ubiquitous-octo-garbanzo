import type { NavbarConfig } from '@vuepress/theme-default'


export const navbarZh: NavbarConfig = [
  {
    text: '指南',
    link: '/zh/guide/',
  },
  {
    text: '必修课',
    children: [
      {
        text: '软件开发',
        children: [
          '/zh/reference/cli.md',
          '/zh/reference/config.md',
        ],
      },
      {
        text: 'AI',
        children: [
          '/zh/reference/bundler/vite.md',
          '/zh/reference/bundler/webpack.md',
        ],
      },
      {
        text: '嵌入式',
        children: [
          '/zh/reference/default-theme/config.md',
          '/zh/reference/default-theme/frontmatter.md',
        ],
      }, 
	  {
        text: '部署运维',
        children: [
          '/zh/reference/default-theme/config.md',
          '/zh/reference/default-theme/frontmatter.md',
        ],
      },
    ],
  },
  {
    text: '开发工具',
    children: [
      {
        text: '常用功能',
        children: [
          '/zh/reference/plugin/back-to-top.md',
          '/zh/reference/plugin/container.md',
          '/zh/reference/plugin/external-link-icon.md',
          '/zh/reference/plugin/google-analytics.md',
          '/zh/reference/plugin/medium-zoom.md',
          '/zh/reference/plugin/nprogress.md',
          '/zh/reference/plugin/register-components.md',
        ],
      },
      {
        text: '内容搜索',
        children: [
          '/zh/reference/plugin/docsearch.md',
          '/zh/reference/plugin/search.md',
        ],
      },
      {
        text: 'PWA',
        children: [
          '/zh/reference/plugin/pwa.md',
          '/zh/reference/plugin/pwa-popup.md',
        ],
      },
      {
        text: '语法高亮',
        children: [
          '/zh/reference/plugin/prismjs.md',
          '/zh/reference/plugin/shiki.md',
        ],
      },
      {
        text: '主题开发',
        children: [
          '/zh/reference/plugin/active-header-links.md',
          '/zh/reference/plugin/git.md',
          '/zh/reference/plugin/palette.md',
          '/zh/reference/plugin/theme-data.md',
          '/zh/reference/plugin/toc.md',
        ],
      },
    ],
  },
  {
    text: '了解更多',
    children: [
      {
        text: '深入',
        children: [
          '/zh/advanced/architecture.md',
          {
            text: 'Cookbook',
            link: '/zh/advanced/cookbook/',
          },
		  '/zh/about.md',
        ],
      },
    ],
  }
]