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
          '/zh/development/uml.md',
		  '/zh/development/designpatterns.md',
        ],
      },
      {
        text: 'AI',
        children: [
          '/zh/ai/',
        ],
      },
      {
        text: '嵌入式',
        children: [
          '/zh/embedded/rk3588.md',
        ],
      }, 
	  {
        text: '部署运维',
        children: [
          '/zh/deployment/docker.md',
		  '/zh/deployment/linux.md',
        ],
      },
    ],
  },
  {
    text: '开发工具',
    children: [
      {
        text: '常用工具',
        children: [
          '/zh/devtools/README.md',
        ],
      }     
    ],
  },
  {
    text: '了解更多',
    children: [
      {
        text: '深入',
        children: [
		  '/zh/about.md',
        ],
      },
    ],
  }
]