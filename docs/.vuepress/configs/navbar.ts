import type { NavbarConfig } from '@vuepress/theme-default'


export const navbarZh : NavbarConfig = [
	{
		text: '指南',
		link: '/zh/guide/',
	},
	{
		text: '必修课',
		children: [
			{
				text: '软件开发',
				link: '/zh/development/',
			},
			{
				text: '人工智能',
				link: '/zh/ai/',
			}, {
				text: '嵌入式',
				link: '/zh/embedded/',
			}, {
				text: '服务部署',
				link: '/zh/deployment/',
			},

		],
	},
	{
		text: '开发工具',
		link: '/zh/devtools/',
	},
	{
		text: '了解更多',
		children: [
			'/zh/about.md',
		],
	}
]