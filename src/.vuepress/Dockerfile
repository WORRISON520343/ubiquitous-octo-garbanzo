# 使用一个轻量级的Nginx映像作为基础
FROM nginx:alpine

# 将构建好的静态文件复制到Nginx的默认静态文件目录
COPY ./dist /usr/share/nginx/html

# 暴露Nginx的默认HTTP端口
EXPOSE 8081

# 启动Nginx服务
CMD ["nginx", "-g", "daemon off;"]