import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
	base: "/",
	lang: "zh-CN",
	title: "智能光学感知研究项目组",
	description: "技术文档",
	theme,

	// Enable it with pwa
	// shouldPrefetch: false,
});