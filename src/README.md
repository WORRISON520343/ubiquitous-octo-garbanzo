---
home: true
icon: home
title: 首页
heroImage: /logo.svg
bgImageStyle:
  background-attachment: fixed
heroText: 技术指北
tagline: 我于杀戮之中盛放,亦如黎明中的花朵。
actions:
  - text: 使用指南 💡
    link: ./guide/
    type: primary

  - text: 必修课
    link: ./technology/
	
  - text: 开发工具
    link: ./devtools/



copyright: false
footer: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题 | MIT 协议, 版权所有 © 2023-Spring
---

<div class="image-preview">
	<img src="/images/hero.png" />
	<img src="/images/hero.png" />
	<img src="/images/hero.png" />
</div>

## 安装
```bash
# clone 项目
git clone https://github.com/choushunn/intelligent-perception-doc
# 进入项目目录
cd intelligent-perception-doc
# 安装项目依赖
npm install
```

## 使用

```
# 运行项目
npm run docs:dev
```



<style>
  .image-preview {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  .image-preview > img {
     box-sizing: border-box;
     width: 33.3% !important;
     padding: 9px;
     border-radius: 16px;
  }

  @media (max-width: 719px){
    .image-preview > img {
      width: 50% !important;
    }
  }

  @media (max-width: 419px){
    .image-preview > img {
      width: 100% !important;
    }
  }
</style>