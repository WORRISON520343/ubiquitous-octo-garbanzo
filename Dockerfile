# 使用Node.js官方映像作为基础映像
FROM node:12

# 设置工作目录
WORKDIR /usr/src/app

# 复制项目文件到容器中
COPY . .

# 安装项目依赖
RUN npm install

# 暴露容器的端口
EXPOSE 3000

# 启动应用程序
CMD ["npm", "run", "docs:dev"]