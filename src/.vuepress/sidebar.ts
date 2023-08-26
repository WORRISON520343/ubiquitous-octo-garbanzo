import { sidebar } from "vuepress-theme-hope";

export default sidebar({
	'/guide/': [{
			text: '快速入门',
			link: "/guide/",
			children: "structure",
		},
	],
	'/technology/': [{
			text: "必修技术",
			children: [
				"",
				{
					text:"软件开发",
					prefix:"development/",
					children:"structure"
				},
				{
					text:"人工智能",
					prefix:"ai/",
					children:"structure"
				},
				{
					text:"嵌入式",
					prefix:"embedded/",
					children:"structure"
				},
				{
					text:"服务部署",
					prefix:"deployment/",
					children:"structure"
				}
			],
			
		},
	],
	'/devtools/': [	{
			text: "开发工具",
			link: "/devtools/",
			children: "structure",
		},
	],
});