部署成功后, 默认端口为 8094, 访问地址为 http://localhost:8094 > Config 配置项 (~/config/config.yaml) 可以使用环境变量进行覆盖, 如 MYSQL_HOST 环境变量可覆盖 mysql.host 配置项

git clone https://github.com/Deeptrain-Community/chatnio.git
cd chatnio

cd app
npm install -g pnpm
pnpm install
pnpm build

cd ..
go build -o chatnio

nohup ./chatnio > output.log & # using nohup to run in background



docker run -d --name chatnio \
  --network host \
  -p 80:8094 \
  -v ~/config:/config \
  -v ~/logs:/logs \
  -v ~/storage:/storage \
  -e MYSQL_HOST=localhost \
  -e MYSQL_PORT=3306 \
  -e MYSQL_DB=chatnio \
  -e MYSQL_USER=root \
  -e MYSQL_PASSWORD=chatnio123456 \
  -e REDIS_HOST=localhost \
  -e REDIS_PORT=6379 \
  -e SECRET=wqsjjdisaoxosdjak \
  -e SERVE_STATIC=true \
  programzmh/chatnio:latest

  --network host 指使用宿主机网络, 使 Docker 容器使用宿主机的网络, 可自行修改
  -p 8000:8094 指映射宿主机端口为 8000, 可自行修改冒号前的端口号
  SECRET: JWT 密钥, 自行生成随机字符串修改
  SERVE_STATIC: 是否启用静态文件服务 (正常情况下不需要更改此项, 详见下方常见问题解答)
  -v ~/config:/config 挂载配置文件, -v ~/logs:/logs 挂载日志文件的宿主机目录, -v ~/storage:/storage 挂载附加功能的生成文件
  需配置 MySQL 和 Redis 服务, 请自行参考上方信息修改环境变量