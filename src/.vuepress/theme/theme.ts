import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
	// 主题基本选项
	hostname: "https://127.0.0.1",
	// author: {
	//   name: "Mr.Spring",
	//   url: "https://github.com/choushunn",
	//   email:"",
	// },
	// favicon:"",
	// navbar
	navbar,

	// sidebar
	sidebar,

	// 主题布局选项	
	logo: "/logo.svg",
	// navTitle: "智能光学感知研究项目组",
	repo: "choushunn/intelligent-perception-doc",

	docsDir: "src",

	// footer: "智能光学感知研究",
	copyright: "MIT Licensed | <a href='https://beian.miit.gov.cn/'; target=_blank>蜀ICP备17031678号-1</a> | Copyright © 2023-Spring",
	displayFooter: true,

	encrypt: {
		// 加密文档
		config: {
			"/about": ["123456"],
		},
	},

	// page meta
	metaLocales: {
		editLink: "在 GitHub 上编辑此页",
	},
	// 主题外观选项	
	iconAssets: "fontawesome-with-brands",
	fullscreen: true,

	plugins: {
		autoCatalog:true,
		components: {
			components: [
				"ArtPlayer",
				"AudioPlayer",
				"Badge",
				"BiliBili",
				"CodePen",
				"PDF",
				"Replit",
				"Share",
				"SiteInfo",
				"StackBlitz",
				// "VidStack",
				"VideoPlayer",
				"YouTube",
			],
			componentOptions: {
				pdf: {
					pdfjs: "/assets/lib/pdfjs/",
				},
			},
		},
		git: true,
		// You should generate and use your own comment service
		// comment: {
		//   provider: "Giscus",
		//   repo: "vuepress-theme-hope/giscus-discussions",
		//   repoId: "R_kgDOG_Pt2A",
		//   category: "Announcements",
		//   categoryId: "DIC_kwDOG_Pt2M4COD69",
		// },
		
		readingTime:{
			
		},
		// All features are enabled for demo, only preserve features you need here
		mdEnhance: {
			align: true,
			attrs: true,
			chart: true,
			codetabs: true,
			demo: true,
			echarts: true,
			figure: true,
			flowchart: true,
			gfm: true,
			imgLazyload: true,
			imgSize: true,
			include: true,
			katex: true,
			mark: true,
			mermaid: true,
			footnote: true,
			playground: {
				presets: ["ts", "vue"],
			},
			presentation: ["highlight", "math", "search", "notes", "zoom"],
			stylize: [
				{
					matcher: "Recommended",
					replacer: ({ tag }) => {
						if (tag === "em")
							return {
								tag: "Badge",
								attrs: { type: "tip" },
								content: "Recommended",
							};
					},
				},
			],
			sub: true,
			sup: true,
			tabs: true,
			vPre: true,
			vuePlayground: true,
		},

		// uncomment these if you want a pwa
		// pwa: {
		//   favicon: "/favicon.ico",
		//   cacheHTML: true,
		//   cachePic: true,
		//   appendBase: true,
		//   apple: {
		//     icon: "/assets/icon/apple-icon-152.png",
		//     statusBarColor: "black",
		//   },
		//   msTile: {
		//     image: "/assets/icon/ms-icon-144.png",
		//     color: "#ffffff",
		//   },
		//   manifest: {
		//     icons: [
		//       {
		//         src: "/assets/icon/chrome-mask-512.png",
		//         sizes: "512x512",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-mask-192.png",
		//         sizes: "192x192",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-512.png",
		//         sizes: "512x512",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-192.png",
		//         sizes: "192x192",
		//         type: "image/png",
		//       },
		//     ],
		//     shortcuts: [
		//       {
		//         name: "Demo",
		//         short_name: "Demo",
		//         url: "/demo/",
		//         icons: [
		//           {
		//             src: "/assets/icon/guide-maskable.png",
		//             sizes: "192x192",
		//             purpose: "maskable",
		//             type: "image/png",
		//           },
		//         ],
		//       },
		//     ],
		//   },
		// },
	},
});