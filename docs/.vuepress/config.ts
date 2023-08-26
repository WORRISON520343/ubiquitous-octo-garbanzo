import {
	head,
	navbarZh,
	sidebarZh,
} from './configs/index.js'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from '@vuepress/cli'

export default defineUserConfig({
	title: "项目组", //文档标题
	description: "技术文档", //文档描述
	lang: 'zh-CN',
	head,
	theme: defaultTheme({
		logo: 'https://vuejs.org/images/logo.png',
		repo: 'vuepress/vuepress-next',
		locales: {
			'/': {
				navbar: navbarZh,
				sidebar: sidebarZh,
				editLinkText: '在 GitHub 上编辑此页',
				lastUpdatedText: '上次更新',
				contributorsText: '贡献者',
				// custom containers
				tip: '提示',
				warning: '注意',
				danger: '警告',
				// 404 page
				notFound: [
					'这里什么都没有',
					'我们怎么到这来了？',
					'这是一个 404 页面',
					'看起来我们进入了错误的链接',
				],
				backToHome: '返回首页',
				// a11y
				openInNewWindow: '在新窗口打开',
				toggleColorMode: '切换颜色模式',
				toggleSidebar: '切换侧边栏',
			}
		}
	}),
})