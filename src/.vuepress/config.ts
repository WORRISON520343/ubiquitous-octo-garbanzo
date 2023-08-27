import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
	base: "/",
	lang: "zh-CN",
	title: "",
	description: "技术文档",
	theme,
	// 智能光学感知研究项目组
	// Enable it with pwa
	// shouldPrefetch: false,
});