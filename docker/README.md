# docker

## 打包

在代码根目录执行

```bash
docker build -f  "docker/Dockerfile" -t mytypescriptadmin:latest .
```

## 运行

在代码根目录执行

```bash
docker run -d -p 8080:80 mytypescriptadmin:latest
```
