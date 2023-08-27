import { navbar } from "vuepress-theme-hope";

export default navbar([
	{
		text: '首页',
		link: '/',
	},
	{
		text: '指北',
		link: '/guide/',
	},
	{
		text: '必修课',
		prefix:'/technology/',
		children: [
			{
				text: '软件开发',
				link: 'development/',
			},
			{
				text: '人工智能',
				link: 'ai/',
			}, {
				text: '嵌入式',
				link: 'embedded/',
			}, {
				text: '服务部署',
				link: 'deployment/',
			},

		],
	},
	{
		text: '开发工具',
		link: '/devtools/',
	},
	{
		text: '了解更多',
		children: [
			'/about.md',
		],
	}
]);