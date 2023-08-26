import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '指南',
      children: [
        '/zh/guide/README.md',
        '/zh/guide/getting-started.md',
        '/zh/guide/markdown.md',
      ],
    },
  ],
  '/zh/ai/': [
    {
      text: '人工智能',
      children: [
        '/zh/ai/architecture.md',
        '/zh/ai/plugin.md',
      ],
    }
  ],
  '/zh/devtools/': [
    {
      text: '开发工具',
      children: [
        '/zh/devtools/architecture.md',
        '/zh/devtools/plugin.md',
      ],
    }
  ],  
  '/zh/embedded/': [
    {
      text: '嵌入式',
      children: [
        '/zh/embedded/architecture.md',
        '/zh/embedded/plugin.md',
      ],
    }
  ],  
  '/zh/deployment/': [
    {
      text: '部署运维',
      children: [
        '/zh/deployment/architecture.md',
        '/zh/deployment/plugin.md',
      ],
    }
  ],
  '/zh/development/': [
    {
      text: '参考',
      collapsible: false,
      children: [
        '/zh/development/cli.md',
        '/zh/development/config.md',
      ],
    },
    {
      text: '官方插件参考',
      collapsible: false,
      children: [     
        {
          text: 'Pycharm',
          children: [
            '/zh/development/plugin/pwa.md',
            '/zh/development/plugin/pwa-popup.md',
          ],
        },
       
      ],
    },
  ],
}